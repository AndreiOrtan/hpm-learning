const url = require("url");
const users = require("./mockDB");

exports.getUsers = function (req, res) {
  const reqUrl = url.parse(req.url, true);

  let response = [
    {
      message: "Here are the list of users ",
    },
    users,
  ];
  res.statusCode = 200;
  res.setHeader("Content-Type", "Application/json");
  res.end(JSON.stringify(response));
};
