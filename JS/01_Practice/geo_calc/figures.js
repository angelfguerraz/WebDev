const PI = Math.PI

function square_perimeter() {
    const input = document.getElementById("inputSquare")
    const value = input.value
    // console.log(4 * value)
    return 4 * value
}

function square_area() {
    const input = document.getElementById("inputSquare")
    const value_len = input.value
    // console.log(value_len * value_len)
    return value_len * value_len
}

function getTriangleParameters() {
    let a = []

    const l1 = document.getElementById("inputTriangle1")
    const v_l1 = parseInt(l1.value)

    const l2 = document.getElementById("inputTriangle2")
    const v_l2 = parseInt(l2.value)

    const l3 = document.getElementById("inputTriangle3")
    const v_l3 = parseInt(l3.value)

    a.push(v_l1, v_l2, v_l3)

    return a
}

function triangle_perimeter() {

    let a = getTriangleParameters()

    const P = a.reduce((a, b) => a + b, 0)
    console.log(P)
    return P
}

function triangle_area() {

    /*Uses Heron's formula*/
    let s = 0.5 * triangle_perimeter()
    let a = getTriangleParameters()

    console.log(Math.sqrt(s * (s - a[0]) * (s - a[1]) * (s - a[2])))

    return Math.sqrt(s * (s - a[0]) * (s - a[1]) * (s - a[2]))
}

function circle_diameter() {

    const value_r = document.getElementById("inputCircle").value

    console.log(2 * PI * value_r)

    return 2 * PI * value_r
}

function circle_area() {
    const value_r = document.getElementById("inputCircle").value
    console.log(PI * Math.pow(value_r, 2))
    return PI * Math.pow(value_r, 2)
}

