var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/usersInfo', (req, res, next) => {
  fs.appendFileSync('users.txt', req.query.name+ " " +req.query.surname+ ',')

  res.render('index.hbs', {
    addUser: 'Пользователь добавлен'
  })
})

router.get("/users", function (req, res) {
  let userInfo = fs.readFileSync("users.txt", "utf8");
  let userM = userInfo.split(",")
  res.render("usersPage.hbs", {
    textUser: userM
  })
})

module.exports = router;
