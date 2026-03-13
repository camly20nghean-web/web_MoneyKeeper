const express = require('express');
const cors = require('cors');

const app = express();

// Cấp quyền cho Front-end được gọi API
app.use(cors()); 

// Tạo một API nháp để test xem server đã sống chưa
app.get('/api/xin-chao', (req, res) => {
    res.json({ thong_bao: "Chào sếp! Máy chủ Back-end MoneyKeeper đã chính thức lên sóng!" });
});

// Bật máy chủ ở cổng 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy ngon lành tại: http://localhost:${PORT}`);
});