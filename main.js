fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => myFunction(data.products))
.catch(err => console.error(err))

let myFunction = (data) => {
    let cards = document.querySelector(".cards")
    for (const key in data) {
        let card = document.createElement("div")
        let texts = document.createElement("div")
        
        let img = document.createElement("img")
        let title = document.createElement("h2")
        let description = document.createElement("p")
        let price = document.createElement("h2")
        
        img.src = data[key].images[0]
        title.innerText = data[key].title
        description.innerText = data[key].description.split(" ").slice(0, 7).join(" ") + "..."
        price.innerText = data[key].price + "$"

        card.className = "card"
        img.className = "card-img"
        texts.className = "card-texts"
        title.className = "card-title"
        description.className = "card-subtitle"
        price.style.fontFamily = "roboto"
        price.style.color = "#121212"

        cards.append(card)
        card.append(img, texts)
        texts.append(title, description, price)
    }
}