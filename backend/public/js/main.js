"use strict";
fetch("https:localhost:5000/upload", {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify({ name: "Capitain Anonymous" })
})
    .then(function (res) {
    if (res.ok) {
        console.log("HTTP request successful");
    }
    else {
        console.log("HTTP request unsuccessful");
    }
    return res;
})
    .then(function (res) { return res.json(); })
    .then(function (data) { return console.log(data); })["catch"](function (error) { return console.log(error); });
