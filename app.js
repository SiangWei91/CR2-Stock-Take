// 示例产品数据
const products = [
    {
        barcode: "50272",
        name: "企鹅 PENGUIN STYLE",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "企鹅 PENGUIN STYLE", packaging: "500g x 20pkt", itemCode: "50272" },
            { type: "PKT", name: "企鹅 PENGUIN STYLE", packaging: "500g/pkt", itemCode: "50273" }
        ],
        scanned: false
    },
    {
        barcode: "50284",
        name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "竹蟹棒 CRAB FLAVOURED STICK FISH ROLL", packaging: "500g x 20pkt", itemCode: "50284" },
            { type: "PKT", name: "竹蟹棒  CRAB FLAVOURED STICK FISH ROLL", packaging: "500g/pkt", itemCode: "50285" }
        ],
        scanned: false
    },
    {
        barcode: "50282",
        name: "棒棒卷 KANI MAKI",
        packaging: "500g x 20pkt",
        skus: [
            { type: "CTN", name: "棒棒卷 KANI MAKI", packaging: "500g x 20pkt", itemCode: "50282" },
            { type: "PKT", name: "棒棒卷 KANI MAKI", packaging: "500g/pkt", itemCode: "50283" }
        ],
        scanned: false
    }
];
let currentProduct = null;
let scanRecords = [];

// 初始化
window.onload = function() {
    renderProducts();
    updateProgress();
    document.getElementById('barcodeInput').focus();
}

// 渲染产品列表
function renderProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    const unscannedProducts = products.filter(p => !p.scanned);
    unscannedProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.onclick = () => showQuantityModal(product);
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.packaging}</p>
        `;
        productList.appendChild(div);
    });
}

// 搜索产品
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => p.barcode === barcode);

    if (product && !product.scanned) {
        showQuantityModal(product);
    } else if (product && product.scanned) {
        alert('此产品已经盘点过了！');
    } else {
        alert('未找到产品！');
    }

    document.getElementById('barcodeInput').value = '';
}

// 显示数量输入模态框
function showQuantityModal(product) {
    currentProduct = product;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalPackaging').textContent = product.packaging;
    
    // Check if product has box quantity
    const hasBoxQuantity = product.skus.some(sku => sku.type === "CTN");
    
    const boxQuantityInput = document.getElementById('boxQuantityInput');
    const boxQuantityLabel = boxQuantityInput.previousElementSibling;
    
    if (!hasBoxQuantity) {
        boxQuantityInput.style.display = 'none';
        boxQuantityLabel.style.display = 'none';
    } else {
        boxQuantityInput.style.display = 'block';
        boxQuantityLabel.style.display = 'block';
    }
    
    document.getElementById('boxQuantityInput').value = '';
    document.getElementById('pieceQuantityInput').value = '';
    document.getElementById('quantityModal').style.display = 'block';
    
    // Focus on appropriate input based on product type
    if (hasBoxQuantity) {
        document.getElementById('boxQuantityInput').focus();
    } else {
        document.getElementById('pieceQuantityInput').focus();
    }
}
// 关闭模态框
function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
}

// 提交数量
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        alert('请至少输入一个数量！');
        return;
    }

    currentProduct.scanned = true;

    // Create clean timestamp without comma
    const now = new Date();
    const date = now.toLocaleDateString(); // e.g., "11/11/2024"
    const time = now.toLocaleTimeString(); // e.g., "14:30:45"
    
    const record = {
        timestamp: `${date} ${time}`,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: `${date} ${time}`
        }]
    };

    scanRecords.unshift(record);

    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}

// 检查两个时间戳是否在同一分钟内
function isSameMinute(date1, date2) {
    return Math.abs(date1 - date2) < 60000; // 60000毫秒 = 1分钟
}

// 更新进度条
function updateProgress() {
    const total = products.length;
    const scanned = products.filter(p => p.scanned).length;
    const percentage = (scanned / total) * 100;
    
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `${scanned}/${total} 完成`;
}

// 渲染盘点记录
function renderRecords() {
    const recordsList = document.getElementById('recordsList');
    recordsList.innerHTML = '';

    scanRecords.forEach(record => {
        const div = document.createElement('div');
        div.className = 'record-group';
        
        const formattedTime = new Date(record.timestamp).toLocaleString();
        let recordsHtml = `<div class="record-time">${formattedTime}</div>`;
        
        record.items.forEach(item => {
            recordsHtml += `
                <div class="record-item">
                    <h3>${item.name}</h3>
                    <p>${item.packaging}</p>
                    <p>数量: ${item.boxQuantity}箱 ${item.pieceQuantity}件</p>
                </div>
            `;
        });

        div.innerHTML = recordsHtml;
        recordsList.appendChild(div);
    });
}
// 显示指定页面
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`${pageName}Page`).classList.add('active');
    
    if (pageName === 'scan') {
        document.getElementById('barcodeInput').focus();
    }
}

// 支持回车键搜索
document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// 支持回车键在数量输入框之间切换和提交
document.getElementById('boxQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('pieceQuantityInput').focus();
    }
});

document.getElementById('pieceQuantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity();
    }
});

async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    
    if (!counter) {
        alert('请选择盘点人员！');
        return;
    }
    
    if (scanRecords.length === 0) {
        alert('没有可提交的记录！');
        return;
    }

    // Show loading overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        // Process all records in a single batch
        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                // Find the product from products array
                const product = products.find(p => p.name === item.name);
                // Get CTN and PKT item codes from skus
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                // Format timestamp to remove comma
                const [datePart, timePart] = item.timestamp.split(',');
                const cleanDate = datePart.trim();
                const cleanTime = timePart.trim();
                
                return {
                    date: cleanDate,
                    time: cleanTime,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter
                };
            })
        );

        // Single API call with all data
        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('数据提交成功！');
            // Clear records after successful submission
            scanRecords = [];
            renderRecords();
        } else {
            throw new Error('提交失败');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('提交失败，请重试！');
    } finally {
        // Hide loading overlay
        loadingOverlay.style.display = 'none';
    }
}

// Also update where you create the record to store date and time separately
async function submitToGoogleSheet() {
    const counter = document.getElementById('counterSelect').value;
    
    if (!counter) {
        alert('请选择盘点人员！');
        return;
    }
    
    if (scanRecords.length === 0) {
        alert('没有可提交的记录！');
        return;
    }

    // Show loading overlay
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.style.display = 'block';

    try {
        // Process all records in a single batch
        const data = scanRecords.flatMap(record => 
            record.items.map(item => {
                // Find the product from products array
                const product = products.find(p => p.name === item.name);
                // Get CTN and PKT item codes from skus
                const ctnSku = product.skus.find(sku => sku.type === "CTN");
                const pktSku = product.skus.find(sku => sku.type === "PKT");
                
                // Format timestamp correctly
                const timestamp = new Date(item.timestamp);
                const date = timestamp.toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });
                const time = timestamp.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                
                return {
                    date: date,
                    time: time,
                    name: item.name,
                    packaging: item.packaging,
                    boxQuantity: item.boxQuantity,
                    pieceQuantity: item.pieceQuantity,
                    ctnItemCode: ctnSku ? ctnSku.itemCode : '',
                    pktItemCode: pktSku ? pktSku.itemCode : '',
                    counter: counter
                };
            })
        );

        // Single API call with all data
        const response = await fetch('https://script.google.com/macros/s/AKfycbyJckzalJVidtiiih_aBZc_Ec-KW92eJgke5xRgIGte7hMUzvVKx4MhzSXwxzvS-28/exec', {
            method: 'POST',
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('数据提交成功！');
            // Clear records after successful submission
            scanRecords = [];
            renderRecords();
        } else {
            throw new Error('提交失败');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('提交失败，请重试！');
    } finally {
        // Hide loading overlay
        loadingOverlay.style.display = 'none';
    }
}

// And update the submitQuantity function to store timestamp as a Date object
function submitQuantity() {
    const boxQuantity = parseInt(document.getElementById('boxQuantityInput').value) || 0;
    const pieceQuantity = parseInt(document.getElementById('pieceQuantityInput').value) || 0;

    if (boxQuantity === 0 && pieceQuantity === 0) {
        alert('请至少输入一个数量！');
        return;
    }

    currentProduct.scanned = true;
    
    // Store timestamp as Date object
    const timestamp = new Date();
    
    const record = {
        timestamp: timestamp,
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity,
            timestamp: timestamp
        }]
    };

    scanRecords.unshift(record);

    renderRecords();
    renderProducts();
    updateProgress();
    closeModal();
}
}
