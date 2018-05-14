function isOwner(req, res, next) {
    if (req.isAuthenticated() && req.user.isOwner) {
        return next();
    }
    return res.status(403).json(new Error("Not Authorized"));
}

module.exports = isOwner;