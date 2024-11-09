// 示例产品数据 - 一个条码对应两个SKU（箱装和散货）
let products = [
    {
        barcode: "123456",
        name: "可口可乐",
        packaging: "250ml x 24罐/箱",
        skus: [
            { type: "box", name: "可口可乐箱装", packaging: "250ml x 24罐/箱" },
            { type: "piece", name: "可口可乐散装", packaging: "250ml/罐" }
        ],
        scanned: false
    },
    {
        barcode: "234567",
        name: "雀巢咖啡",
        packaging: "200g x 30包/箱",
        skus: [
            { type: "box", name: "雀巢咖啡箱装", packaging: "200g x 30包/箱" },
            { type: "piece", name: "雀巢咖啡散装", packaging: "200g/包" }
        ],
        scanned: false
    },
    {
        barcode: "345678",
        name: "维他奶",
        packaging: "250ml x 24盒/箱",
        skus: [
            { type: "box", name: "维他奶箱装", packaging: "250ml x 24盒/箱" },
            { type: "piece", name: "维他奶散装", packaging: "250ml/盒" }
        ],
        scanned: false
    }
];

let currentProduct = null;
let scanRecords = [];
let currentPage = 'scan';

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
    document.getElementById('boxQuantityInput').value = '';
    document.getElementById('pieceQuantityInput').value = '';
    document.getElementById('quantityModal').style.display = 'block';
    document.getElementById('boxQuantityInput').focus();
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
        timestamp: new Date().toLocaleString(),
        product: currentProduct.name,
        barcode: currentProduct.barcode,
        boxQuantity: boxQuantity,
        pieceQuantity: pieceQuantity
    };

    scanRecords.unshift(record); // 添加到记录开头
    renderRecords();

    renderProducts();
    updateProgress();
    closeModal();
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
        div.className = 'record-item';
        div.innerHTML = `
            <h3>${record.product}</h3>
            <p>条码: ${record.barcode}</p>
            <p>箱数: ${record.boxQuantity}</p>
            <p>散货数: ${record.pieceQuantity}</p>
            <p>盘点时间: ${record.timestamp}</p>
        `;
        recordsList.appendChild(div);
    });
}

// 切换页面
function togglePage() {
    if (currentPage === 'scan') {
        document.getElementById('scanPage').classList.remove('active-page');
        document.getElementById('recordsPage').classList.add('active-page');
        currentPage = 'records';
    } else {
        document.getElementById('scanPage').classList.add('active-page');
        document.getElementById('recordsPage').classList.remove('active-page');
        currentPage = 'scan';
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
