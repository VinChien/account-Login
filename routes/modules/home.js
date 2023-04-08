// 載入 Express 與 Express 路由器
const express = require('express');
const router = express.Router();

// index route
router.get('/', (req, res) => {
  res.render('index');
});

// 匯出路由器
module.exports = router;
