"use strict";
fetch("https://reqres.in/api/users")
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); });
