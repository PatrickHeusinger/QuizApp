async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

let questions = [{
        "question": "About how many computer languages are in use?",
        "answer_1": "2000",
        "answer_2": "50",
        "answer_3": "5000",
        "answer_4": "20",
        "right_answer": 1,
        "category": "technology"
    },
    {
        "question": "Where was Steve Jobs born?",
        "answer_1": "Berkley",
        "answer_2": "Oakland",
        "answer_3": "San Francisco",
        "answer_4": "Palo Alto",
        "right_answer": 3,
        "category": "technology"
    },
    {
        "question": "How many citizenships does Elon Musk have?",
        "answer_1": "1",
        "answer_2": "2",
        "answer_3": "3",
        "answer_4": "4",
        "right_answer": 3,
        "category": "technology"


    },
    {
        "question": "When was the internet launched for the first time?",
        "answer_1": "1969",
        "answer_2": "1960",
        "answer_3": "1978",
        "answer_4": "1980",
        "right_answer": 1,
        "category": "technology"
    },
    {
        "question": "When was NASA founded?",
        "answer_1": "1970",
        "answer_2": "1960",
        "answer_3": "1945",
        "answer_4": "1958",
        "right_answer": 4,
        "category": "technology"
    },
    {
        "question": "At what age did Albert Einstein die?",
        "answer_1": "86",
        "answer_2": "99",
        "answer_3": "79",
        "answer_4": "76",
        "right_answer": 4,
        "category": "technology"
    },
    {
        "question": "When was Linux launched?",
        "answer_1": "1989",
        "answer_2": "1991",
        "answer_3": "1995",
        "answer_4": "1888",
        "right_answer": 2,
        "category": "technology"
    },
    {
        "question": "When was Macintosh released?",
        "answer_1": "1986",
        "answer_2": "1984",
        "answer_3": "1982",
        "answer_4": "1987",
        "right_answer": 2,
        "category": "technology"
    },
    {
        "question": "When was Space X founded?",
        "answer_1": "2001",
        "answer_2": "2009",
        "answer_3": "2006",
        "answer_4": "2002",
        "right_answer": 4,
        "category": "technology"
    },
    {
        "question": "Who was the last man on the moon in 1972?",
        "answer_1": "Neil Armstrong",
        "answer_2": "Eugene Cernan",
        "answer_3": "Buzz Aldrin",
        "answer_4": "Charles Duke",
        "right_answer": 2,
        "category": "technology"
    },
    {
        "question": "When did Albert Einstein win Nobel Prize for Physics?",
        "answer_1": "1922",
        "answer_2": "1928",
        "answer_3": "1921",
        "answer_4": "1926",
        "right_answer": 3,
        "category": "science"
    },
    {
        "question": "When was Albert Einstein born?",
        "answer_1": "14.04.1879",
        "answer_2": "04.06.1878",
        "answer_3": "03.09.1877",
        "answer_4": "03.10.1877",
        "right_answer": 1,
        "category": "science"
    },
    {
        "question": "Where was Albert Einstein born?",
        "answer_1": "Hamburg",
        "answer_2": "Ulm",
        "answer_3": "Dresden",
        "answer_4": "Berlin",
        "right_answer": 2,
        "category": "science"


    },
    {
        "question": "When did Albert Einstein formulate his special theory of relativity?",
        "answer_1": "1903",
        "answer_2": "1900",
        "answer_3": "1905",
        "answer_4": "1904",
        "right_answer": 3,
        "category": "science"
    },
    {
        "question": "When did Albert Einstein complete his general theory of relativity?",
        "answer_1": "1923",
        "answer_2": "1915",
        "answer_3": "1918",
        "answer_4": "1924",
        "right_answer": 2,
        "category": "science"
    },
    {
        "question": "Who recommended that Albert Einstein be kept out of USA by Alien Exclusion Act?",
        "answer_1": "Charles Joseph Bonaparte",
        "answer_2": "William Casey",
        "answer_3": "Allen Dulles",
        "answer_4": "John Edgar Hoover",
        "right_answer": 4,
        "category": "science"
    },
    {
        "question": "For what did Albert Einstein win Nobel Prize for Physics?",
        "answer_1": "Discovery of proton",
        "answer_2": "Research on cathode rays",
        "answer_3": "Discovery of electron",
        "answer_4": "Explanation of photoelectric effect",
        "right_answer": 4,
        "category": "science"
    },
    {
        "question": "Who offered the post of president of Israel to Albert Einstein?",
        "answer_1": "David Ben Gurion",
        "answer_2": "Golda Meir",
        "answer_3": "Moshe Dayan",
        "answer_4": "Menachem Begin",
        "right_answer": 1,
        "category": "science"
    },
    {
        "question": "When did Albert Einstein die?",
        "answer_1": "11.01.1961",
        "answer_2": "18.04.1955",
        "answer_3": "18.08.1958",
        "answer_4": "10.11.1962",
        "right_answer": 2,
        "category": "science"
    },
    {
        "question": "Where did Albert Einstein die?",
        "answer_1": "Los Alamos",
        "answer_2": "Zurich",
        "answer_3": "New York",
        "answer_4": "Princeton",
        "right_answer": 4,
        "category": "science"
    },

];

let newIndex = [];
let currentQuestion = 0;
let rightAnswers = 0;
let wrong = new Audio('sound/wrong.mp3');
let right = new Audio('sound/right.mp3');
let over = new Audio('sound/gameover.mp3');


function newGameStart() {
    document.getElementById('hidden').innerHTML = `
    <div id="start" class="start">
            <div class="leftContent">
                <img id="hide" src="img/physics1.webp">
                <button onclick="gameFilter('science')">SCIENCE</button>
                <button onclick="gameFilter('technology')">TECHNOLOGY</button>
            </div>
            <div class="rightContent">
                <h1>Welcome to the QuizApp of science and technology !</h1>
                <img src="img/nuclear.webp">
                <h3>Choose your game !</h3>
               
            </div>
     </div>`;

}

// <button class="btn btn-primary playButton" id="startButton">START</button>


function renderGame() {
    document.getElementById('hidden').innerHTML = '';
    document.getElementById('allQuest').innerHTML = newIndex[0].length;
    initQuestion();


}

function gameFilter(category) {
    if (category == 'science') {
        let filterOne = questions.filter(questions => questions.category == "science");
        newIndex.push(filterOne);
        renderGame(filterOne)
    } else {
        let filterTwo = questions.filter(questions => questions.category == "technology");
        newIndex.push(filterTwo);
        renderGame(filterTwo)
    }

}


function initQuestion() {
    if (whenEndGame()) {
        gameOver();
    } else {
        updateProgress();
        updateGame();
    }
}

function whenEndGame() {
    return currentQuestion >= 10;
}

function answer(choice) {
    let question = newIndex[0][currentQuestion];
    let selectQuestion = choice.slice(-1);

    let showId = `answer_${question['right_answer']}`;

    if (rightAnswer(selectQuestion)) {
        document.getElementById(choice).parentNode.classList.add('bg-success');
        right.play();
        rightAnswers++;
        document.getElementById('shield').classList.add('shield');
    } else {
        document.getElementById(choice).parentNode.classList.add('bg-danger');
        document.getElementById(showId).parentNode.classList.add('bg-success');
        wrong.play();
        document.getElementById('shield').classList.add('shield');
    }

    document.getElementById('next').disabled = false;

}

function rightAnswer(selectQuestion) {
    let question = newIndex[0][currentQuestion];
    return selectQuestion == question['right_answer'];

}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next').disabled = true;
    document.getElementById('shield').classList.remove('shield');
    reset();
    initQuestion();
}


function reset() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function reload() {
    document.getElementById('cardBody').style = '';
    document.getElementById('gameOver').style = 'display: none';
    currentQuestion = 0;
    rightAnswers = 0;
    newIndex = [];

    newGameStart();
}

function gameOver() {
    document.getElementById('gameOver').style = '';
    document.getElementById('cardBody').style = 'display: none';
    document.getElementById('false').innerHTML = newIndex[0].length;
    document.getElementById('true').innerHTML = rightAnswers;
    over.play();
}

function updateGame() {
    let question = newIndex[0][currentQuestion];
    document.getElementById('counter').innerHTML = currentQuestion + 1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function updateProgress() {
    let percent = (currentQuestion + 1) / newIndex[0].length;
    percent = Math.round(percent * 100);
    document.getElementById('calculator').innerHTML = `${percent} %`;
    document.getElementById('calculator').style = `width: ${percent}%`;

}