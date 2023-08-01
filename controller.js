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

exports.createUser = function (req, res) {
  body = "";

  req.on("data", function (chunk) {
    body += chunk;
  });

  req.on("end", function () {
    postBody = JSON.parse(body);
    let response = [
      {
        text: "User added successfully",
      },
      postBody,
    ];

    res.statusCode = 201;
    res.setHeader("Content-Type", "Application/json");
    res.end(JSON.stringify(response));
  });
};
