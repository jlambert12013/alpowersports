"use strict";
// document.querySelector("#submitButton")?.addEventListener("click", getAll)
// function getAll(e: Event) {
//   e.preventDefault()
//   const xhr = new XMLHttpRequest()
//   xhr.open("GET", "http://localhost:5000/api/inventory")
//   xhr.onload = () => {
//     if (xhr.status == 200) {
//       const listings = xhr.response
//       const output = document.querySelector("#archive")
//       if (typeof output != "undefined" && output != null) {
//         listings.forEach((listing: Text) => {
//           output.append(listing)
//         })
//       }
//     }
//     xhr.onerror = () => {
//       console.log("REQUEST ERROR... ")
//     }
//   }
//   xhr.send()
// }
