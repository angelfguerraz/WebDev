const str = 'smt'
const a_obj = [
    {
        first: 'a',
        second: 'b'
    },
    {
        third: 'c',
        fourth: 'd'
    }
]


// Printing info:
console.log(str)
console.info(str)
console.warn(str)

// Tabulations
console.table(a_obj)

// indentation among groups
console.group('talk')
console.log('Bla bla bla')
console.log('Bla bla bla')
console.log('Bla bla bla')
console.groupEnd('talk')
console.log('Bla bla bla')

// counter
for (let index = 0; index < 5; index++) {
    console.count('Hi')
}