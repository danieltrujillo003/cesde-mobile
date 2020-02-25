let totalMen = 0
let totalWomen = 0
let totalSystem = 0
let totalSystemNotes = 0
let totalFinance = 0
let totalFinanceNotes = 0

let numOfStudents = prompt('How many students?')
for (let i = 0; i < numOfStudents; i++) {
    let averNotes = 0
    let program = prompt(`Is the student number ${i+1} from system or finance program?`)
    let genre = prompt(`Is the student number ${i+1} male or female?`)

    let lastFiveNotes = prompt('Please input the last notes separated by comma')
    let notesArray = lastFiveNotes.split(',')
    notesArray.forEach(note => averNotes += parseInt(note))
    averNotes /= notesArray.length
    alert(`The average of the student number ${i+1} is ${averNotes}`)

    if (genre === 'male') {
        totalMen += 1
    } else if (genre === 'female') {
        totalWomen += 1
    }

    if (program === 'system') {
        totalSystem += 1
        totalSystemNotes += averNotes
    } else if (program === 'finance') {
        totalFinance += 1
        totalFinanceNotes += averNotes
    }   
}

totalSystemNotes /= totalSystem
totalFinanceNotes /= totalFinance

alert(`
Total men: ${totalMen}
Total women: ${totalWomen}
Total system program students: ${totalSystem}
Average for system program: ${totalSystemNotes}
Total finance program students: ${totalFinance}
Average for finance program: ${totalFinanceNotes}
`)