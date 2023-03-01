const body = document.body

// create start btn
const startBtn = document.createElement('div')
startBtn.classList.add('startBtn')
startBtn.innerText = 'start Test'
body.appendChild(startBtn)
// =-=-=-=-=-=-=-==-=-==-=-

// create test page 

// -=-=-=-=-==-=-=-=-=-=-=-

// create question box in testCon

// =-=-=-=-=-=-=-=-=-=-=-=-

// create Answer box in testCon

const testSection = document.createElement('section')
testSection.classList.add('testSection')
body.appendChild(testSection)


for (let i = 30; i >= 1; i--) {

    const testContainer = document.createElement('div')
    testContainer.classList.add('testContainer')
    testContainer.classList.add('container' + [i])

    testSection.appendChild(testContainer)

    let pagesCounter = document.createElement('div')
    pagesCounter.classList.add('pagesCounter')
    testContainer.appendChild(pagesCounter)
    let pageCounterSpan = document.createElement('span')
    pagesCounter.appendChild(pageCounterSpan)
    pageCounterSpan.append(i + '/30')


    // create questionBox
    let questionBox = document.createElement('div')
    questionBox.classList.add('questionBox')
    questionBox.classList.add('test' + [i])
    testContainer.appendChild(questionBox)

    //  adding image to questionBox
    let questionBoxImg = document.createElement('img')
    questionBoxImg.setAttribute('src', 'Images/' + [i] + '/test' + [i] + '.png');
    // src="Images/[i]/test[i].png" 
    questionBox.appendChild(questionBoxImg)
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    // create questionBox

    let AnswerBox = document.createElement('div');
    AnswerBox.classList.add('answerBox')
    AnswerBox.classList.add('answerBox' + [i])
    testContainer.appendChild(AnswerBox)

    if (i <= 12) {

        for (let j = 1; j <= 6; j++) {
            let options = document.createElement('img')
            options.setAttribute('src', 'Images/' + [i] + '/' + [i] + '-' + [j] + '.png')
            // options.setAttribute('id', 'trueAnswer')
            options.setAttribute('id', [j])
            options.classList.add('options')
            // src="Images/1/1-1.png"
            AnswerBox.appendChild(options)


            options.addEventListener('click', next)

            function next() {
                // options.style ='background-color:red'
                AnswerBox.parentElement.style = "display:none"
            }
        }
    } else {
        for (let x = 1; x <= 8; x++) {
            let options = document.createElement('img')
            options.setAttribute('src', 'Images/' + [i] + '/' + [i] + '-' + [x] + '.png')
            //   options.setAttribute('id', 'trueAnswer')
            options.setAttribute('id', [x])
            options.classList.add('options')
            // src="Images/1/1-1.png"
            AnswerBox.appendChild(options)

            options.addEventListener('click', next)

            function next() {
                // options.style ='background-color:red'
                AnswerBox.parentElement.style = "display:none"
            }

        }
    }


}


// find true answers
//  questions

document.querySelector('.answerBox1 img:nth-child(3) ')
    .classList.add('trueAnswer'),

    document.querySelector('.answerBox2 img:nth-child(1) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox3 img:nth-child(5) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox4 img:nth-child(5) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox5 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox6 img:nth-child(1) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox7 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox8 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox9 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox10 img:nth-child(6) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox11 img:nth-child(4) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox12 img:nth-child(1) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox13 img:nth-child(4) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox14 img:nth-child(7) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox15 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox16 img:nth-child(3) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox17 img:nth-child(1) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox18 img:nth-child(6) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox19 img:nth-child(5) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox20 img:nth-child(8) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox21 img:nth-child(4) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox22 img:nth-child(4) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox23 img:nth-child(7) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox24 img:nth-child(6) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox25 img:nth-child(4) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox26 img:nth-child(7) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox27 img:nth-child(7) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox28 img:nth-child(3) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox29 img:nth-child(2) ')
        .classList.add('trueAnswer'),

    document.querySelector('.answerBox30 img:nth-child(8) ')
        .classList.add('trueAnswer');


// add score after click on true options

// select all option img 
let alTrueAnswers = document.querySelectorAll('.options')

alTrueAnswers.forEach(element => { element.addEventListener('click', () => { givingScore(element) }) });


// Counting scores
let score = 0
function givingScore(element) {
    if (element.classList.contains('trueAnswer')) {

        score += 1
        //  console.log(score)
    }


}

// create Results page

let ResultsPage = document.createElement('div')
ResultsPage.classList.add('ResultsPage')
body.append(ResultsPage)

let finalScore = document.createElement('div')
finalScore.classList.add('finalScore')
ResultsPage.appendChild(finalScore)


let finalSentence = document.createElement('div')
finalSentence.classList.add('finalSentence')
ResultsPage.appendChild(finalSentence)



// show  Results page

let lastTestPage = document.querySelector('.answerBox30')

lastTestPage.addEventListener('click', av)

function av() {

    document.querySelector('.ResultsPage').style.display = 'block'

    finalScore.innerText = 'your score is' + ' ' + ' ' + ' ' + score

    if (score < 5) {
        finalSentence.innerText = 'trust me, go kill yourself😃'
    }
    if (score >= 5) {
        finalSentence.innerText = 'trust me, go kill yourself😃'
    }
    if (score >= 10) {

        finalSentence.innerText = 'you fuckdup but its not so bad (pakhme 😆)'
    }
    if (score >= 15) {

        finalSentence.innerText = 'sorry i think you are blind '
    }
    if (score >= 20) {

        finalSentence.innerText = 'Look at the fucking monitor and get a better score (Its not too bad, your head is not empty ) '
    }
    if (score >= 25) {
        finalSentence.innerText = 'okey okey good (Do not be snobbish You are still an idiot with more practice)'

    }
    if (score == 30) {
        finalSentence.innerText = 'Congratulations, you are out of stupid mode'

    }

}












// =-=-=-=-=-=-=-=-=-=-=-=-
// addEventListener to startBtn
// open test page
startBtn.addEventListener('click', openTestPage)
function openTestPage() {

    document.querySelector('.startBtn').style.display = 'none'

    document.querySelector('.testSection').style = 'display:flex; justify-content: center;'

}



