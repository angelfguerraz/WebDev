function calculate_discount() {
    const p = parseInt(document.getElementById("price").value)

    const d = parseInt(document.getElementById("discount").value)

    let new_price = (p * (100 - d)) / 100

    const result = document.getElementById("newPrice")
    result.innerText = "New price: $" + new_price

    // console.log((p * (100 - d)) / 100)
    return new_price
}