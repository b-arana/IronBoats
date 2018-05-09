const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User

router.post("/new", (req, res, next)=>{
    const {usarname, password, email,role, imgUser,valoration} = req.body;
    const user = new User({
        usarname,
        password,
        email,
        role,
        imgUser,
        valoration
    });
    user.save()
        .then((userSaved)=>res.status(200).json(userSaved))
        .catch((err)=> res.status(500).json(err));
});

// Show User

router.get("/show", (req, res, next)=>{
    User.find()
        .then((user)=> res.status(200).json(user))
        .catch((err)=> res.status(500).json(err));
});

// Update User

router.get("/edit/:id", ( req, res, next)=>{
    const { update} = req.body;

    User.findByIdAndUpdate(req.params.id, {update})
        .then(userEdit=> res.status(200).json(userEdit))
        .catch(err=> res.status(500).json(err));
});


// Delete User

router.get("/delete/:id", (req, res, next)=>{
    User.findById(req.user._id)
        .then(user=>{
             return res.status(200).json(user);
        })
        .catch(err=>{
            return res.status(500).json(err);
        });
});


// Show dueño del barco????