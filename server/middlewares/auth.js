var jwt = require("jsonwebtoken");

module.exports = {
  auth: (req, res, next) => {
    let header = req.headers["authorization"];

    if (typeof decoded !== undefined) {
      const compare = header.split(" ");

      const token = compare[1];
      let decoded = jwt.verify(token, process.env.SECRET_KEY);

      next();
    } else {
      res.sendStatus(403);
    }
  }
};
