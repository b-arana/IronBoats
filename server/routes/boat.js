const express = require("express");
const router = express.Router();
const Boat = require("../models/Boat");
const _ = require("lodash");
const fields = Object.keys(_.omit(Boat.schema.paths, ["__v", "_id"]));
const islogginIn = require('../middlewares/isAuthenticated');
const upload = require('../config/cloudinary');

// Create a boat

router.post('/new',[islogginIn, upload.single("file")], (req, res, next) => {
    const owner = req.user._id;
    const imgBoat = req.file.url;
    const {
        name,
        type,
        year,
        capacity,
        size,
        place,
        description
    } = req.body;
    
    const newBoat = new Boat({
        name,
        owner,
        type,
        year,
        capacity,
        size,
        place,
        imgBoat,
        description
    });
    newBoat.save()
        .then((boat) => {
            res.status(200).json(boat);
        })
        .catch((e) => res.status(500).json(e));

});


// Showing boats
router.get("/show", (req, res, next) => {
    Boat.find()
        .then((boatsFound) => res.status(200).json(boatsFound))
        .catch((e) => res.status(500).json(e));

});

// Update boats - Solo lo puede editar el dueño

router.put("/:id/edit", islogginIn, (req, res, next) => {
    const updates = _.pick(req.body, fields);

    Boat.findById(req.params.id)
        .then(boat => {
            if (req.user.id.toString() == boat.owner.toString()) {
                Boat.findByIdAndUpdate(req.params.id, updates, {
                        new: true
                    })
                    .then(userEdit => res.status(200).json(userEdit))
                    .catch(err => res.status(500).json(err));
            }else {
                return res
                    .status(500)
                    .json({
                        err: "You can not edit the boats"
                    });
            }
        })
        .catch(err => {
            return res.status(500).json(err);
        });

});

// Delete boats

router.get("/delete/:id", islogginIn, (req, res, next) => {

    Boat.findById(req.params.id)
        .then(boat => {
            console.log(req.user.id, boat.owner);
            if (req.user.id.toString() == boat.owner.toString()) {
                Boat.findByIdAndRemove(req.params.id)
                    .then(boatDelete => res.status(200).json(boatDelete))
                    .catch(err => {
                        return res.status(500).json(err);
                    });
            } else {
                return res
                    .status(500)
                    .json({
                        err: "You can not remove the boats"
                    });
            }
        })
        .catch(err => {
            return res.status(500).json(err);
        });

});


module.exports = router;