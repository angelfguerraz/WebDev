function boom() {
    return 1 + a
}

try {
    boom()
} catch (error) {
    console.error('Failure in program')
    console.error(error.message)
}