const path = require("path");
const db = require(`${path.dirname(__filename)}/../db.json`);

module.exports = (req, res, next) => {
  if (/messages/.test(req.url) && req.method === "GET") {
    const conversationId = req.query?.conversationId;
    const result = db?.conversations?.filter(
      (conv) => conv.id == conversationId,
    );

    res.status(200).json(result);
    return;
  }

  next();
};
