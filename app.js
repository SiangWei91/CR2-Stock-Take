// Global Variables
let products = [];
let currentProduct = null;
let scanRecords = [];
let searchTimeout; // For barcode scanning delay

// -------------------- INITIALIZATION & SETUP --------------------
// Main initialization called on window load
window.onload = function() {
    // Initializations that don't depend on products data can be called early
    document.getElementById('barcodeInput').focus(); // Focus input early
    populateUserDropdown(); // Populate user dropdown early

    // Fetch the product data
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data; // Assign fetched data to the global products variable

            // Call functions that depend on products data AFTER it's loaded
            renderProducts();
            updateProgress();
            setupBarcodeInput(); // Setup barcode input listeners now that products are available
        })
        .catch(error => {
            console.error('Error fetching products.json:', error);
            showCustomAlert('Failed to load product data. Please try again later.');
        });
};

function setupBarcodeInput() {
    const barcodeInput = document.getElementById('barcodeInput');
    // Ensure focus, though it might be set in window.onload already
    // Redundant focus calls are generally harmless.
    barcodeInput.focus();

    barcodeInput.addEventListener('input', function(e) {
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        const barcode = e.target.value.trim();
        if (barcode.length >= 3) { // Assuming minimum barcode length is 3
            searchTimeout = setTimeout(() => {
                searchProduct();
            }, 300); // 300ms delay
        }
    });

    // Keep the Enter key functionality as backup
    barcodeInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
            searchProduct();
        }
    });
}

async function populateUserDropdown() {
  const counterSelect = document.getElementById("counterSelect");
  const cachedData = getUsersFromCache();
  if (cachedData) {
    populateDropdownWithData(cachedData);
    return;
  }
  counterSelect.innerHTML = counterSelect.options[0].outerHTML; // Keep placeholder
  const users = await fetchUsersFromFirebase();
  if (users.length === 0) return; // No users fetched, nothing to populate
  users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    option.dataset.id = user.id;
    counterSelect.appendChild(option);
  });
  cacheUsers(users);
}

async function fetchUsersFromFirebase() {
  const url = `${FIREBASE_DB_URL}/pwauser.json`; // FIREBASE_DB_URL is from config.js
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (!data) {
      throw new Error("No data received from server or data is malformed.");
    }
    return Object.entries(data).map(([id, userData]) => ({
      id,
      name: typeof userData === "string" ? userData.replace(/"/g, "") : userData.name || Object.values(userData)[0] || "Unknown Name",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    let userMessage = "获取用户数据失败！(Failed to fetch user data!)";
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      userMessage = "网络错误，无法连接到服务器获取用户数据。(Network error, could not connect to server for user data.)";
    } else if (error.message.includes("HTTP error")) {
      userMessage = `服务器错误 (${error.message})，无法获取用户数据。(Server error (${error.message}), could not fetch user data.)`;
    } else if (error.message.includes("No data received")) {
      userMessage = "从服务器未收到有效数据或数据格式错误。(No valid data received from server or data is malformed.)";
    }
    showCustomAlert(userMessage);
    return []; // Return empty array as fallback
  }
}

function cacheUsers(users) {
  localStorage.setItem("userCache", JSON.stringify({ timestamp: Date.now(), users }));
}

function getUsersFromCache() {
  const cachedData = localStorage.getItem("userCache");
  if (!cachedData) return null;
  const { timestamp, users } = JSON.parse(cachedData);
  // Cache valid for 12 hours (43200000 ms)
  return Date.now() - timestamp < 43200000 ? users : (localStorage.removeItem("userCache"), null);
}

function populateDropdownWithData(users) {
  const counterSelect = document.getElementById("counterSelect");
  counterSelect.innerHTML = counterSelect.options[0].outerHTML; // Keep placeholder
  users.forEach(user => {
    const option = document.createElement("option");
    option.value = user.name;
    option.textContent = user.name;
    option.dataset.id = user.id;
    counterSelect.appendChild(option);
  });
}

// -------------------- UI UTILITIES --------------------
function createCustomAlert() {
    // Create the styles if not already present (idempotency for safety)
    if (document.getElementById('customAlertStyle')) return;
    const style = document.createElement('style');
    style.id = 'customAlertStyle';
    style.textContent = `
        .custom-alert { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 3000; animation: fadeIn 0.3s ease; }
        .custom-alert-content { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 20px; border-radius: 8px; width: 80%; max-width: 300px; text-align: center; animation: slideIn 0.3s ease; }
        .alert-button { margin-top: 15px; padding: 8px 20px; background: #64748b; color: white; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translate(-50%, -60%); } to { opacity: 1; transform: translate(-50%, -50%); } }
    `;
    document.head.appendChild(style);

    // Create the alert elements if not already present
    if (document.getElementById('customAlert')) return;
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.id = 'customAlert';
    alertDiv.innerHTML = `<div class="custom-alert-content"><p id="alertMessage"></p><button onclick="closeCustomAlert()" class="alert-button">确定 Confirm</button></div>`;
    alertDiv.addEventListener('click', function(e) { if (e.target === alertDiv) { closeCustomAlert(); } });
    document.body.appendChild(alertDiv);
}

function showCustomAlert(message) {
    if (!document.getElementById('customAlert')) {
        createCustomAlert(); // Ensure it's created
    }
    const alertEl = document.getElementById('customAlert');
    const messageEl = document.getElementById('alertMessage');
    messageEl.textContent = message;
    alertEl.style.display = 'block';
    const button = alertEl.querySelector('button');
    if (button) button.focus(); // Focus the button for accessibility
}

function closeCustomAlert() {
    const alertEl = document.getElementById('customAlert');
    if (alertEl) {
        alertEl.style.display = 'none';
        // Restore focus to barcode input if on scan page and modal is closed
        if (document.getElementById('scanPage').classList.contains('active')) {
            document.getElementById('barcodeInput').focus();
        }
    }
}

function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    if (pageName === 'scan') {
        document.getElementById('barcodeInput').focus();
    }
}

// -------------------- PRODUCT & SCANNING LOGIC --------------------
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Clear existing items
    const unscannedProducts = products.filter(p => !p.scanned);
    unscannedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.onclick = () => showQuantityModal(product);
        div.innerHTML = `<h3>${product.name}</h3><p>${product.packaging}</p>`;
        productList.appendChild(div);
    });
}

function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;
    const product = products.find(p => p.barcode === barcode);
    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        showCustomAlert('此产品已经盘点过了！This product has already been counted!');
    } else {
        showCustomAlert('未找到产品！No product found!');
    }
    document.getElementById('barcodeInput').value = ''; // Clear input after search
}

function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    const hasCTN = product.skus.some(sku => sku.type === "CTN");
    const hasPKT = product.skus.some(sku => sku.type === "PKT");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    const pieceQuantityInput = document.getElementById('pieceQuantityInput');
    const pieceQuantityLabel = pieceQuantityInput.previousElementSibling;

    // Configure visibility based on SKU types
    boxQuantityInput.style.display = (hasCTN || !hasPKT) ? 'block' : 'none'; // Show if CTN or if ONLY CTN (no PKT)
    boxQuantityLabel.style.display = (hasCTN || !hasPKT) ? 'block' : 'none';
    pieceQuantityInput.style.display = (hasPKT || !hasCTN) ? 'block' : 'none'; // Show if PKT or if ONLY PKT (no CTN)
    pieceQuantityLabel.style.display = (hasPKT || !hasCTN) ? 'block' : 'none';
    
    // If a product specifically only has PKT (e.g.奥奥系列), ensure CTN is hidden.
    if (!hasCTN && hasPKT) {
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
    }
    // If a product specifically only has CTN
    if (hasCTN && !hasPKT) {
        pieceQuantityInput.style.display = 'none';
        pieceQuantityLabel.style.display = 'none';
    }


    boxQuantityInput.value = ''; // Clear previous values
    pieceQuantityInput.value = '';
    document.getElementById('quantityModal').style.display = 'block';
    
    // Focus appropriate input after modal is shown
    setTimeout(() => {
        if (boxQuantityInput.style.display !== 'none') {
            boxQuantityInput.focus();
        } else if (pieceQuantityInput.style.display !== 'none') {
            pieceQuantityInput.focus();
        }
    }, 100);
}

function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus(); // Return focus to barcode input
}

function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        showCustomAlert('请至少输入一个数量！Please enter at least one quantity!');
        return;
    }

    currentProduct.scanned = true;

    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = now.getFullYear();
    const time = now.toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const formattedDate = `${day}/${month}/${year}`;
    const timestamp = `${formattedDate} ${time}`;

    const record = {
        timestamp: timestamp,
        items: [{
            name: currentProduct.name, packaging: currentProduct.packaging,
            boxQuantity: boxQuantity, pieceQuantity: pieceQuantity, timestamp: timestamp // item timestamp
        }]
    };

    scanRecords.unshift(record); // Add to the beginning of the array for chronological display (newest first)
    renderRecords();
    renderProducts(); // Update product list (to remove scanned item)
    updateProgress();
    closeModal();
}

function updateProgress() {
    const total = products.length;
    const scanned = products.filter(p => p.scanned).length;
    const percentage = total > 0 ? (scanned / total) * 100 : 0; // Avoid division by zero
    
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成度 | Progress`;
}

// -------------------- RECORDS MANAGEMENT --------------------
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = ''; // Clear existing records
    scanRecords.forEach((record, recordIndex) => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        const formattedTime = formatDateToDDMMYYYY(record.timestamp);
        let recordsHtml = `<div class="record-time">${formattedTime}</div>`;
        
        record.items.forEach((item, itemIndex) => {
            recordsHtml += `
                <div class="record-item" data-record="${recordIndex}" data-item="${itemIndex}">
                    <h3>${item.name}</h3><p>${item.packaging}</p>
                    <div class="records-quantity-group">
                        <div class="records-quantity-row"><span class="records-quantity-label">箱 | CTN:</span><span class="records-quantity-value box-quantity"><strong>${item.boxQuantity}</strong></span></div>
                        <div class="records-quantity-row"><span class="records-quantity-label">包 | PKT:</span><span class="records-quantity-value piece-quantity"><strong>${item.pieceQuantity}</strong></span></div>
                    </div>
                </div>`;
        });
        div.innerHTML = recordsHtml;
        
        // Store indices for editing
        div.dataset.record = record.items[0] ? recordIndex : '';
        div.dataset.item = record.items[0] ? '0' : ''; // Assuming one item per record group for now for simplicity in edit
        
        div.addEventListener('dblclick', (event) => {
            event.stopPropagation();
            if (div.dataset.record !== '' && div.dataset.item !== '') {
                editRecordGroup(div, parseInt(div.dataset.record), parseInt(div.dataset.item));
            }
        });
        recordsList.appendChild(div);
    });
}

function formatDateToDDMMYYYY(dateString) {
    const [datePart, timePartWithPossibleMs] = dateString.split(' ');
    // Ensure time part doesn't include milliseconds if present from new Date().toISOString() in future
    const timePart = timePartWithPossibleMs ? timePartWithPossibleMs.split('.')[0] : '';

    if (datePart.match(/^\d{2}\/\d{2}\/\d{4}$/)) { // Already in DD/MM/YYYY
        return `${datePart} ${timePart}`;
    }

    const date = new Date(dateString); // Try to parse the original string
    if (isNaN(date.getTime())) {
        console.error('Invalid date in formatDateToDDMMYYYY:', dateString);
        return 'Invalid Date';
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
    const year = date.getFullYear();
    const displayTime = timePart || date.toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return `${day}/${month}/${year} ${displayTime}`;
}

function editRecordGroup(groupElement, recordIndex, itemIndex) {
    if (groupElement.classList.contains('editing')) return; // Already editing
    groupElement.classList.add('editing');
    
    const recordItem = scanRecords[recordIndex].items[itemIndex];
    const boxQuantitySpan = groupElement.querySelector('.box-quantity');
    const pieceQuantitySpan = groupElement.querySelector('.piece-quantity');
    
    const boxInput = document.createElement('input');
    boxInput.type = 'number'; boxInput.className = 'records-quantity-input';
    boxInput.value = recordItem.boxQuantity; boxInput.min = '0';
    
    const pieceInput = document.createElement('input');
    pieceInput.type = 'number'; pieceInput.className = 'records-quantity-input';
    pieceInput.value = recordItem.pieceQuantity; pieceInput.min = '0';
    
    boxQuantitySpan.innerHTML = ''; boxQuantitySpan.appendChild(boxInput);
    pieceQuantitySpan.innerHTML = ''; pieceQuantitySpan.appendChild(pieceInput);
    boxInput.focus();

    function saveChanges() {
        if (!groupElement.classList.contains('editing')) return; // Check moved or already saved
        
        recordItem.boxQuantity = boxInput.value !== '' ? parseInt(boxInput.value) : 0;
        recordItem.pieceQuantity = pieceInput.value !== '' ? parseInt(pieceInput.value) : 0;
        
        boxQuantitySpan.innerHTML = `<strong>${recordItem.boxQuantity}</strong>`;
        pieceQuantitySpan.innerHTML = `<strong>${recordItem.pieceQuantity}</strong>`;
        
        groupElement.classList.remove('editing');
        document.removeEventListener('click', handleClickOutside); // Clean up listener
        showCustomAlert('记录已更新！Record Updated!');
    }

    boxInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') pieceInput.focus(); });
    pieceInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') saveChanges(); });
    // Save on blur, but with a timeout to allow 'Enter' keypress to take precedence if it occurs
    pieceInput.addEventListener('blur', () => { setTimeout(saveChanges, 150); });
    
    function handleClickOutside(e) {
        if (!groupElement.contains(e.target)) { // Clicked outside the editing group
            saveChanges();
        }
    }
    // Add listener after a short delay to prevent immediate trigger from the dblclick
    setTimeout(() => document.addEventListener('click', handleClickOutside), 100);
}

// -------------------- DATA SUBMISSION & OFFLINE HANDLING --------------------
async function submitToGoogleSheet() {
    const counterSelect = document.getElementById('counterSelect');
    const counter = counterSelect.value;
    const LOCATION = 'CR2'; // Location code

    if (!counter) {
        showCustomAlert('请选择盘点人员！Please choose the staff for inventory count!');
        return;
    }
    if (scanRecords.length === 0) {
        showCustomAlert('没有可提交的记录！There are no records to submit!');
        return;
    }

    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    const dataToSubmit = scanRecords.flatMap(record =>
        record.items.map(item => {
            const product = products.find(p => p.name === item.name); // Find product for SKU codes
            const ctnSku = product ? product.skus.find(sku => sku.type === "CTN") : null;
            const pktSku = product ? product.skus.find(sku => sku.type === "PKT") : null;
            const [date, time] = item.timestamp.split(' '); // Timestamp from record item

            return {
                sheetName: LOCATION, date: formatDateForGoogleSheets(item.timestamp), time: time,
                name: item.name, packaging: item.packaging,
                boxQuantity: item.boxQuantity, pieceQuantity: item.pieceQuantity,
                ctnItemCode: ctnSku ? ctnSku.itemCode : '', pktItemCode: pktSku ? pktSku.itemCode : '',
                counter: counter
            };
        })
    );

    try {
        if (!checkInternetConnection()) {
            saveToSessionStorage(dataToSubmit); // Save current submission if offline
            showCustomAlert('无网络连接。数据已保存，将在有网络时自动提交。(No network connection. Data has been saved and will be automatically submitted when the network is available.)');
            return; // Exit early
        }

        // Attempt to send any pending submissions first
        const pendingSubmissionsArrays = getPendingSubmissions(); // This also clears them from storage
        if (pendingSubmissionsArrays.length > 0) {
            for (const submissionArray of pendingSubmissionsArrays) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST', body: JSON.stringify(submissionArray) // submissionArray is a batch of records
                });
                if (!response.ok) throw new Error('提交历史数据失败 (Historical data submission failed)');
            }
        }

        // Send current data
        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST', body: JSON.stringify(dataToSubmit)
        });
        if (!response.ok) throw new Error('提交失败 (Failed to submit)');

        // If all submissions successful
        products.forEach(product => { product.scanned = false; }); // Reset scanned status
        scanRecords = []; // Clear current records
        renderProducts();
        renderRecords();
        updateProgress();
        showCustomAlert('数据提交成功！(Submission completed successfully!)');

    } catch (error) {
        console.error('Error during submission:', error);
        // Save current data if its submission failed or if a pending submission failed before it
        saveToSessionStorage(dataToSubmit);
        showCustomAlert(`提交失败 (${error.message})，数据已保存，将在下次提交时重试！(Submission failed (${error.message}). Data has been saved and will be retried.)`);
    } finally {
        loadingOverlay.style.display = 'none';
    }
}

function checkInternetConnection() {
    return navigator.onLine;
}

function saveToSessionStorage(dataArrayToSave) {
    // dataArrayToSave is an array of records from a single submission attempt
    const existingBatches = JSON.parse(sessionStorage.getItem('pendingSubmissions') || '[]');
    existingBatches.push(dataArrayToSave); // Add the current batch as a new element
    sessionStorage.setItem('pendingSubmissions', JSON.stringify(existingBatches));
}

function getPendingSubmissions() {
    const pending = sessionStorage.getItem('pendingSubmissions');
    sessionStorage.removeItem('pendingSubmissions'); // Clear from storage after retrieval
    return pending ? JSON.parse(pending) : []; // Returns an array of batches (array of arrays of records)
}

function formatDateForGoogleSheets(dateStr) {
    const [datePart] = dateStr.split(' '); // Date is DD/MM/YYYY
    return datePart;
}

// -------------------- SERVICE WORKER & PWA --------------------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/CR2-Stock-Take/service-worker.js').then(reg => {
    reg.update(); // Check for updates on registration
    console.log('Service Worker registered with scope:', reg.scope);
  }).catch(error => {
    console.log('Service Worker registration failed:', error);
  });
}

function checkForUpdates() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) {
        reg.update();
        console.log('Service Worker update check initiated.');
      }
    });
  }
}

// -------------------- GLOBAL EVENT LISTENERS --------------------
// DOMContentLoaded for initial user population (if needed before window.onload, though populateUserDropdown is called in onload)
// document.addEventListener("DOMContentLoaded", populateUserDropdown); // This was in the original, but populateUserDropdown is called by window.onload. If it needs to be earlier, it can be here.

// Online/Offline event listeners for pending submissions
window.addEventListener('online', async () => {
    const pendingSubmissionsArrays = getPendingSubmissions(); // This is an array of batches
    if (pendingSubmissionsArrays.length > 0) {
        showCustomAlert('检测到网络连接，正在提交保存的数据... (Network connection detected, submitting saved data...)');
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.display = 'block';
        let allSucceeded = true;
        try {
            for (const submissionArray of pendingSubmissionsArrays) {
                const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
                    method: 'POST', body: JSON.stringify(submissionArray)
                });
                if (!response.ok) {
                    allSucceeded = false;
                    // Re-save this specific failed batch. This requires more careful handling of what's in pendingSubmissions.
                    // For now, log error and rely on user to retry later or manual check.
                    console.error('Failed to submit a pending batch:', submissionArray);
                    // A simple re-save approach (might lead to duplicate attempts if not careful):
                    // saveToSessionStorage(submissionArray); // This would add it back.
                    // Better: Collect failed batches and save them all at the end.
                }
            }
            if(allSucceeded) {
                showCustomAlert('所有待处理数据已成功提交！(All pending data submitted successfully!)');
            } else {
                showCustomAlert('部分历史数据提交失败，请检查网络并稍后重试。(Failed to submit some pending data. Please check connection and try again.)');
                // If some failed, the ones that did would ideally be re-saved.
                // For now, the getPendingSubmissions clears all. A robust retry would re-add failed ones.
            }
        } catch (error) {
            console.error('Error submitting pending data:', error);
            showCustomAlert('提交历史数据时发生错误。(Error during submission of pending data.)');
            // Potentially re-save all pendingSubmissionsArrays if the entire process was interrupted by a network error here.
            // sessionStorage.setItem('pendingSubmissions', JSON.stringify(pendingSubmissionsArrays)); // Re-save all if connection lost during this process.
        } finally {
            loadingOverlay.style.display = 'none';
        }
    }
});

window.addEventListener('offline', () => {
    showCustomAlert('网络连接已断开。数据将保存在本地。(Network connection has been disconnected. Data will be saved locally.)');
});

// Keyboard navigation for quantity modal inputs (Enter key)
document.getElementById('boxQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('pieceQuantityInput').focus();
    }
});

document.getElementById('pieceQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity(); // Assuming submitQuantity is defined
    }
});
// The barcodeInput event listeners are already defined within setupBarcodeInput.
// document.addEventListener("DOMContentLoaded", populateUserDropdown); // Called in window.onload
