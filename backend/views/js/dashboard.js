"use strict";
var app = document.querySelector("#app");
var inventory = document.querySelector("#inventory");
inventory.addEventListener("click", loadInventory);
function loadInventory() {
    var output = document.createElement("div");
    var ul = document.createElement("ul");
    output.setAttribute("class", "container");
    output.append(ul);
    app.append(output);
    // AJAX GET REQUEST
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:5000/api/inventory", true);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var listings = JSON.parse(xhr.responseText);
            for (var i = 0; i < listings.length; i++) {
                var item = listings[i];
                var list = document.createElement("li");
                list.append(item["user"]);
                ul.append(list);
            }
        }
    };
    xhr.onerror = function () {
        console.log("REQUEST ERROR... ");
    };
    xhr.send();
}
