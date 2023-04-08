// 載入 Express 與 Express 路由器
const express = require('express');
const router = express.Router();
const user = require('../../models/user');

// index route
router.get('/', (req, res) => {
  res.render('index');
});

router.post('/', (req, res) => {
  // const { email, password } = req.body;
  const email = req.body.email;
  const password = req.body.password;

  user
    .findOne({ email, password })
    .then((user) => {
      if (user) {
        res.render('index', { user_name: user.firstName });
      } else {
        const errorMessage = `Wrong email or password, please try again.`;
        res.render('index', { email, password, errorMessage });
      }
    })
    .catch((error) => console.log(error));
});

// 匯出路由器
module.exports = router;
