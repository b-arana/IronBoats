const express = require("express");
const router = express.Router();
const User = require("../models/User");
const _ = require("lodash");
const fields = Object.keys(_.omit(User.schema.paths, ["__v", "_id"]));
const islogginIn = require('../middlewares/isAuthenticated');

// Create User Ok

router.post("/new", (req, res, next) => {
    const {
        username,
        password,
        email,
        role,
        imgUser,
        valoration
    } = req.body;
    const user = new User({
        username,
        password,
        email,
        role,
        imgUser,
        valoration
    });
    user.save()
        .then((userSaved) => res.status(200).json(userSaved))
        .catch((err) => res.status(500).json(err));
});

// Show User OK

router.get("/show", (req, res, next) => {
    User.find()
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json(err));
});

router.get("/:id/show", (req, res, next) => {
    User.findById(req.params.id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json(err));
});

// Update User


router.put("/edit", islogginIn, (req, res, next) => {

    const updates = _.pick(req.body, fields);

    User.findByIdAndUpdate(req.user._id, updates, {
            new: true
        })
        .then(userEdit => res.status(200).json(userEdit))
        .catch(err => res.status(500).json(err));
});

// Delete User OK 

router.get("/delete", islogginIn, (req, res, next) => {
    User.findByIdAndRemove(req.user.id)
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

module.exports = router;