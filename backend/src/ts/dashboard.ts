const app: HTMLElement = document.querySelector("#app")!
const inventory: HTMLElement = document.querySelector("#inventory")!

inventory.addEventListener("click", loadInventory)

function loadInventory() {
  const output: HTMLElement = document.createElement("div")
  const ul: HTMLElement = document.createElement("ul")

  output.setAttribute("class", "container")
  output.append(ul)
  app.append(output)

  // AJAX GET REQUEST
  const xhr = new XMLHttpRequest()

  xhr.open("GET", "http://localhost:5000/api/inventory", true)

  xhr.onload = () => {
    if (xhr.status == 200) {
      const listings = JSON.parse(xhr.responseText)

      for (let i = 0; i < listings.length; i++) {
        const item = listings[i]
        const list: HTMLElement = document.createElement("li")

        list.append(item["user"])
        ul.append(list)
      }
    }
  }
  xhr.onerror = () => {
    console.log("REQUEST ERROR... ")
  }

  xhr.send()
}
