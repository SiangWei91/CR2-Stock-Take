// 示例产品数据
let products = [
    { id: "P001", name: "苹果手机", barcode: "123456", stock: 50, scanned: false },
    { id: "P002", name: "华为平板", barcode: "234567", stock: 30, scanned: false },
    { id: "P003", name: "小米耳机", barcode: "345678", stock: 100, scanned: false },
    { id: "P004", name: "联想笔记本", barcode: "456789", stock: 20, scanned: false },
    { id: "P005", name: "三星手表", barcode: "567890", stock: 40, scanned: false },
    { id: "P006", name: "OPPO充电器", barcode: "678901", stock: 60, scanned: false },
    { id: "P007", name: "VIVO保护壳", barcode: "789012", stock: 80, scanned: false },
    { id: "P008", name: "荣耀手机", barcode: "890123", stock: 25, scanned: false },
    { id: "P009", name: "魅族耳机", barcode: "901234", stock: 70, scanned: false },
    { id: "P010", name: "红米手环", barcode: "012345", stock: 45, scanned: false }
];

let currentProduct = null;

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
            <p>编号: ${product.id}</p>
            <p>条码: ${product.barcode}</p>
            <p>库存: ${product.stock}</p>
        `;
        productList.appendChild(div);
    });
}

// 搜索产品
function searchProduct() {
    const barcode = document.getElementById('barcodeInput').value.trim();
    if (!barcode) return;

    const product = products.find(p => 
        p.barcode === barcode || 
        p.id === barcode
    );

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
    document.getElementById('modalCurrentStock').textContent = product.stock;
    document.getElementById('quantityInput').value = '';
    document.getElementById('quantityModal').style.display = 'block';
    document.getElementById('quantityInput').focus();
}

// 关闭模态框
function closeModal() {
    document.getElementById('quantityModal').style.display = 'none';
    document.getElementById('barcodeInput').focus();
}

// 提交数量
function submitQuantity() {
    const quantity = document.getElementById('quantityInput').value;
    if (!quantity) {
        alert('请输入数量！');
        return;
    }

    currentProduct.scanned = true;
    currentProduct.actualStock = parseInt(quantity);

    // 如果实际库存与系统库存不符，可以在这里添加处理逻辑
    if (currentProduct.actualStock !== currentProduct.stock) {
        console.log(`库存差异: ${currentProduct.name} 系统库存:${currentProduct.stock} 实际库存:${currentProduct.actualStock}`);
    }

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

// 支持回车键搜索
document.getElementById('barcodeInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchProduct();
    }
});

// 支持回车键提交数量
document.getElementById('quantityInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        submitQuantity();
    }
});
