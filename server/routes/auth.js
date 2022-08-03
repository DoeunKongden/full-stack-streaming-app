//creating login and register method
const router = require('express').Router();
const User = require('../model/user');

//Register
router.post("/register", async (res, req) => {
    const newUser = new User({
        //credential
        _username: req.body._username,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        res.json(user)
    } catch (err) {
        console.log(err)
        res.status(500)
    }

})

module.exports = router;    