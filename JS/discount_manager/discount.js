function calculate_discount() {
    const p = parseInt(document.getElementById("price").value)

    const d = parseInt(document.getElementById("discount").value)

    console.log((p * (100 - d)) / 100)
    return (p * (100 - d)) / 100
}