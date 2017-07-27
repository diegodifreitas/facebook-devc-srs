const students = [
    'Diego',
    'Dulval',
    'João',
    'Edy',
    'Christian',
    'Pedro'
]

console.log('==> Number of students: ' + students.length)

/* for (let i = 0; i < students.length; i++) {
    console.log(`Position ${i}, name:${students[i]}`)
}  */

function regularPrint(name) {
    console.log('Name: ' + name)
}

function fancyPrint(name) {
    console.log('*****> ' + name + ' <*****')
}

function print(printFunction = regularPrint) {
    return function (name) {
        printFunction(name)
    }
}

/* print('Diego Dulval', fancyPrint)
print('Diego Dulval', regularPrint)
print('JP') */

//students.forEach(fancyPrint)
students
    .sort()
    //.reverse()
    //.map( name => name.toUpperCase())
    //.filter( name => name[0].toUpperCase() == 'D' )
    .forEach(print())