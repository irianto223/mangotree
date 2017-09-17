var express = require('express');
var router = express.Router();
const firebase = require('firebase')
const MangoTree = require('../controllers/mango')
const cron = require('node-cron')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAIlBRls-ycMYOP9Z3LO8kBQSmUnM5yvcc',
  authDomain: 'websocket-slide-f13a2.firebaseapp.com',
  databaseURL: 'https://websocket-slide-f13a2.firebaseio.com',
  projectId: 'websocket-slide-f13a2',
  storageBucket: 'websocket-slide-f13a2.appspot.com',
  messagingSenderId: '721114250377'
}
firebase.initializeApp(config)
var db = firebase.database().ref('mangotree/')

router.get('/addtree', (req, res) => {
  db.push(new MangoTree())
  res.send({
    msg: 'tree added'
  })
})

router.get('/simulate/:key', (req, res) => {
  let tree = new MangoTree()

  let growCron = cron.schedule('* * * * * *', () => {
    tree.grow()
    tree.produce()
    if (tree.healthy) {
      let obj = {
        age: tree.age,
        height: tree.height,
        fruits: tree.fruits,
        healthy: tree.healthy
      }
      db.child(req.params.key).set(obj)
      console.log(obj.age)
    }
    else {
      db.child(req.params.key).child('healthy').set(false)
      growCron.stop()
      res.send({
        msg: 'simulasi done'
      })
    }
  })
})

module.exports = router;
