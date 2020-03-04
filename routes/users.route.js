const router = require("express").Router();
const users = require("../db/users.json");

router.get('/users', (req, res) => {
    res.json(users);
})

router.get('/users/:email', (req, res) => {
    console.log(req.params);
    let user = users.find(o => o.email == req.params.email);
    if(user){
        res.send(user);
    } else {
        res.status(400).send({error: 'does not exist'});
    }
})


//falta
// router.post('/users', (req, res) => {
    
// })

module.exports = router;