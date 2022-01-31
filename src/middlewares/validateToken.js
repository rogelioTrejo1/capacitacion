const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    try {
        const header = req.headers.authorization;

        if (!header.startsWith("Bearer")) {
            res.status(401)
                .json({
                    status: 401,
                    message: "Unauthorization"
                });
        }

        const token = header.slice(7);

        const payload = jwt.verify(token, "secretWord");

        req.user = { userid: payload.userid }

        next();
    } catch (e) {
        res.status(401)
            .json({
                status: 401,
                message: "Unauthorization"
            });
    }
};

module.exports = validateToken;