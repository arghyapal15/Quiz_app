const quizData = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        a: "largest railway station",
        b: "highest railway station",
        c: "longest railway station",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Entomology is the science that studies",
        a: "Behavior of human beings",
        b: "Insects",
        c: "The origin and history of technical and scientific terms",
        d: "The formation of rocks",
        correct: "b",
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        a: "Asia",
        b: "Africa",
        c: "Europe",
        d: "Australia",
        correct: "b",
    },
    {
        question: "Garampani sanctuary is located at",
        a: "Junagarh, Gujarat",
        b: "Diphu, Assam",
        c: "Kohima, Nagaland",
        d: "Gangtok, Sikkim",
        correct: "b",
    }
];

// let my;
// fetch('./question.json')
//     .then((response) => response.json())
//     .then((json) => {
//         my = json;
//     });

// import d from './data.json';
// console.log(json.quizD+"hi");
let index = 0;
let correct = 0, incorrect = 0, total = quizData.length;
let questionBox = document.getElementById("questionbox");
let allInputs = document.querySelectorAll("input[type='radio']");

const loadQuestion = () => {
    if (total == index) {
        return endQuiz()
    }
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText=data.a
    allInputs[1].nextElementSibling.innerText=data.b
    allInputs[2].nextElementSibling.innerText=data.c
    allInputs[3].nextElementSibling.innerText=data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function () {
        const data = quizData[index]
        const ans = getAnswers()
        if (ans == undefined) {
            alert("Please Select an option!!")
            return;
        }
        else if (ans == data.correct) {
            correct++;
        }
        else {
            incorrect++;
        }
        index ++;
        loadQuestion();
    }
)
document.querySelector("#prev").addEventListener(
    "click",
    function () {
        if (index <= 0) {
            alert("You are on 1st question");
            return;
        }
        
        index --;
        loadQuestion();
    }
)



const endQuiz = () => {
    document.getElementsByClassName("main")[0].innerHTML = `
        <div class="score">
            Your score is: ${correct}/${total}
        </div>
    `
            // <button id="sc">Retry</button>
}

const reset = () => {
    allInputs.forEach(
        (inputE1) => {
            inputE1.checked = false;
        }
    )
}

const getAnswers = () => {
    let ans;
    allInputs.forEach(
        (inputE1) => {
            if (inputE1.checked) {
                ans = inputE1.value;
            }
        }
    )
    return ans;
}





//initial call
loadQuestion(index);