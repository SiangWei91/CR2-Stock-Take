// 示例产品数据
let products = [
    {
        barcode: "123456",
        name: "可口可乐",
        packaging: "250ml x 24罐/箱",
        skus: [
            { type: "box", name: "可口可乐箱装", packaging: "250ml x 24罐/箱", itemCode: "40600" },
            { type: "piece", name: "可口可乐散装", packaging: "250ml/罐", itemCode: "40601" }
        ],
        scanned: false
    },
    {
        barcode: "234567",
        name: "雀巢咖啡",
        packaging: "200g x 30包/箱",
        skus: [
            { type: "box", name: "雀巢咖啡箱装", packaging: "200g x 30包/箱", itemCode: "40602" },
            { type: "piece", name: "雀巢咖啡散装", packaging: "200g/包", itemCode: "40603" }
        ],
        scanned: false
    },
    {
        barcode: "345678",
        name: "维他奶",
        packaging: "250ml x 24盒/箱",
        skus: [
            { type: "box", name: "维他奶箱装", packaging: "250ml x 24盒/箱", itemCode: "40604" },
            { type: "piece", name: "维他奶散装", packaging: "250ml/盒", itemCode: "40605" }
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

    // 记录盘点数据
    const record = {
        timestamp: new Date(),
        items: [{
            name: currentProduct.name,
            packaging: currentProduct.packaging,
            boxQuantity: boxQuantity,
            pieceQuantity: pieceQuantity
        }]
    };

    // 检查是否有相同时间戳的记录组（同一分钟内）
    const lastRecord = scanRecords[0];
    if (lastRecord && isSameMinute(lastRecord.timestamp, record.timestamp)) {
        lastRecord.items.push(record.items[0]);
    } else {
        scanRecords.unshift(record);
    }

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
        
        let recordsHtml = `<div class="record-time">${record.timestamp.toLocaleString()}</div>`;
        
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
        const data = scanRecords.flatMap(record => 
            record.items.map(item => ({
                timestamp: item.timestamp.toLocaleString(),
                name: item.name,
                packaging: item.packaging,
                boxQuantity: item.boxQuantity,
                pieceQuantity: item.pieceQuantity,
                counter: counter
            }))
        );

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
