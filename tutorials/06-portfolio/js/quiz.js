const questions = [
    {
        question: "Who was the first American-born president?",
        answers: [
            {text: "George Washington", correct: false},
            {text: "Martin Van Buren", correct: true},
            {text: "Thomas Jefferson", correct: false},
            {text: "John Adams", correct: false},
        ],
        fact: "Martin Van Buren (1782-1862), 8th President. Van Buren was the first president to have been born after the American Revolution, in Kinderhook, New York on December 5, 1782, technically making him the first American-born president. The seven before him were all born in the American colonies."
    },
    {
        question: "Which president made Christmas a national holiday?",
        answers: [
            {text: "Ulysses S. Grant", correct: true},
            {text: "George Washington", correct: false},
            {text: "Abraham Lincoln", correct: false},
            {text: "Theodore Roosevelt", correct: false},
        ],
        fact: "Ulysses S. Grant (1822-1885), 18th President. On June 28,1870, Grant signed legislation making Christmas a federal holiday, as well as New Year's Day, Independence Day, and Thanksgiving Day. Grant hoped Christmas and the other holidays would help bond people in the North and South through shared celebrations."
    },
    {
        question: '“Old Whitey” was the beloved horse of which president?',
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "James Madison", correct: false},
            {text: "Zachary Taylor", correct: true},
            {text: "Andrew Jackson", correct: false},
        ],
        fact: "Zachary Taylor (1784-1850), 12th President. Old Whitey was nearly as popular as Taylor was—several times while the steed was grazing on the White House lawn, visitors would approach him and pluck a hair from his tail for a souvenir."
    },
    {
        question: "Which president was a classically trained pianist and played 4 other instruments?",
        answers: [
            {text: "Franklin D. Roosevelt", correct: false},
            {text: "John F. Kennedy", correct: false},
            {text: "Bill Clinton", correct: false},
            {text: "Richard Nixon", correct: true},
        ],
        fact: "Richard Nixon (1913-1994), 37th President. Nixon's mother encouraged him to play piano at an early age and he went on to learn violin, clarinet, saxophone, and accordion. In 1963, his musical talent became a political asset when he performed a song he wrote on “The Jack Paar Program,” which helped to repair his image after losing the California gubernatorial election the year prior."
    },
    {
        question: "Who was the first and only U.S. president to serve non-consecutive terms?",
        answers: [
            {text: "Grover Cleveland", correct: true},
            {text: "Woodrow Wilson", correct: false},
            {text: "James Madison", correct: false},
            {text: "George Washington", correct: false},
        ],
        fact: "Grover Cleveland (1837-1908), 22nd and 24th President. Between terms, Cleveland moved back to New York City, worked at a law firm, and his wife gave birth to their famous first daughter, Baby Ruth."
    },
    {
        question: "Which president signed the act creating the United States Marine Band?",
        answers: [
            {text: "John Adams", correct: true},
            {text: "George Washington", correct: false},
            {text: "Thomas Jefferson", correct: false},
            {text: "James Madison", correct: false},
        ],
        fact: "John Adams (1735-1826), 2nd President. Adams signed a congressional act creating the United States Marine Band in 1798, which is now the oldest active professional musical organization in the United States. Known as “The President's Own,” they played the first ever New Year's celebration at the president's house and later at Thomas Jefferson's inauguration."
    },
    {
        question: "Which president and his wife attended Napoleon's coronation at Notre Dame Cathedral?",
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "James Monroe", correct: true},
            {text: "James Madison", correct: false},
            {text: "John Quincy Adams", correct: false},
        ],
        fact: "James Monroe (1758-1831), 5th President. In 1804, Monroe and his wife, Elizabeth, attended Napoleon's coronation while he was serving as the American ambassador to Britain and France."
    },
    {
        question: "Who was the first president to have written a biography of another president?",
        answers: [
            {text: "George Washington", correct: false},
            {text: "Herbert Hoover", correct: true},
            {text: "Thomas Jefferson", correct: false},
            {text: "Abraham Lincoln", correct: false},
        ],
        fact: "Herbert Hoover (1874-1964), 31st President. After he left office, Hoover wrote a number of books, including The Ordeal of Woodrow Wilson, the first biography of a president written by another president.  Woodrow Wilson had published a biography about George Washington in 1897, but that was before Wilson became president in 1913."
    },
    {
        question: "Which president had turned down offers to play professional football?",
        answers: [
            {text: "Ronald Reagan", correct: false},
            {text: "Jimmy Carter", correct: false},
            {text: "Gerald Ford", correct: true},
            {text: "Bill Clinton", correct: false},
        ],
        fact: "Gerald Ford (1913-2006), 38th President. Ford attended the University of Michigan, where he was a star football player. The team won national titles in both 1932 and 1933. After graduation, he turned down offers to play with both the Detroit Lions and Green Bay Packers. Instead, he took a coaching job at Yale University in 1935 because he also wanted to attend law school. He left after six seasons with a law degree in hand."
    },
    {
        question: "Who was the first president to attend baseball's opening day and throw the ceremonial first pitch?",
        answers: [
            {text: "Theodore Roosevelt", correct: false},
            {text: "Woodrow Wilson", correct: false},
            {text: "Warren G. Harding", correct: false},
            {text: "William Howard Taft", correct: true},
        ],
        fact: "William Howard Taft (1857-1930), 27th President. In 1910, Taft became the first president to attend baseball's opening day and throw the ceremonial first pitch, a tradition that has been honored by nearly every president since."
    },
    {
        question: "Which president and his wife received a Siamese cat as a gift from the American consul of Bangkok?",
        answers: [
            {text: "Rutherford B. Hayes", correct: true},
            {text: "James K. Polk", correct: false},
            {text: "Grover Cleveland", correct: false},
            {text: "William McKinley", correct: false},
        ],
        fact: "Rutherford B. Hayes (1822-1893), 19th President. The first Siamese cat to arrive in America was sent as a gift to Hayes and his wife, Lucy, by the American consul in Bangkok. Siam the cat landed at the White House in 1879 after traveling to Hong Kong then San Francisco, and then by train to Washington, DC."
    },
    {
        question: "Which president was often mocked in the press for his unkempt appearance?",
        answers: [
            {text: "Andrew Jackson", correct: false},
            {text: "Ulysses S. Grant", correct: false},
            {text: "Abraham Lincoln", correct: true},
            {text: "Franklin Pierce", correct: false},
        ],
        fact: "Abraham Lincoln (1809-1865), 16th President. Before being known as the Great Emancipator, Lincoln was known for his disheveled appearance. Newspapers often ridiculed him for it; some called him “hatchet-faced” and described him as lean and gangly. One newspaper referred to his “thatch of wild republican hair” with his “irregular flocks of thick hair carelessly brushed” across his face."
    },
    {
        question: "Which president hired Louis C. Tiffany—first design director of Tiffany and Co.—for a massive renovation of the White House and its private chambers?",
        answers: [
            {text: "Chester A. Arthur", correct: true},
            {text: "James A. Garfield", correct: false},
            {text: "Benjamin Harrison", correct: false},
            {text: "Grover Cleveland", correct: false},
        ],
        fact: "Chester A. Arthur (1829-1886), 21st President. Arthur hired Tiffany to do all of the redesign. To help cover some of the cost, Arthur had 24 wagon-loads of old furniture, drapes, and other household items (some of which dated back to the Adams administration) sold at auction."
    },
    {
        question: "Though three presidents (Adams, Jefferson, and Monroe) died on the 4th of July, which president was the only president to have been born on that date?",
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "John Quincy Adams", correct: false},
            {text: "Calvin Coolidge", correct: true},
            {text: "James Monroe", correct: false},
        ],
        fact: "Calvin Coolidge (1872-1933), 30th President. Coolidge was born on July 4, 1872 in Plymouth Notch, Vermont and is the only president to be born on Independence Day."
    },
    {
        question: "Which president and his wife met in the fifth grade, were high school sweethearts, but did not marry until their mid-thirties?",
        answers: [
            {text: "Dwight D. Eisenhower", correct: false},
            {text: "Harry S. Truman", correct: true},
            {text: "Lyndon B. Johnson", correct: false},
            {text: "Gerald Ford", correct: false},
        ],
        fact: "Harry S. Truman (1884-1972), 33rd President. On June 28, 1919, Truman married Elizabeth Virginia Wallace, known as Bess, in Independence, Missouri, the town they both lived much of their lives."
    },
    {
        question: "Which president hated his painted portrait so much that he eventually burned it?",
        answers: [
            {text: "Thomas Jefferson", correct: false},
            {text: "Andrew Jackson", correct: false},
            {text: "Herbert Hoover", correct: false},
            {text: "Theodore Roosevelt", correct: true},
        ],
        fact: "Theodore Roosevelt (1858-1919), 26th President. For his official White House portrait, Theodore Roosevelt chose the famed French portraiture artist Theobald Chartran, who had earlier done portraits of the First Lady Edith Roosevelt and Alice Roosevelt. “It was difficult to get the president to sit still,” newspapers reported Chartran said before the painting was unveiled and displayed in France in 1903. “I never had a more restless or more charming sitter.” Roosevelt, however, hated the painting, and after hiding it in a dark hall of the White House for years, he eventually burned it."
    },
    {
        question: "Which president put up the first Christmas tree in the White House?",
        answers: [
            {text: "Benjamin Harrison", correct: true},
            {text: "John Adams", correct: false},
            {text: "Franklin D. Roosevelt", correct: false},
            {text: "Woodrow Wilson", correct: false},
        ],
        fact: "Benjamin Harrison (1833-1901), 23rd President. Harrison had a tight-knit family and loved to amuse and dote on his grandchildren. He put up the first White House Christmas tree in 1889, and was known to put on the Santa suit for entertainment."
    },
    {
        question: "Which president donated all of his presidential salary (and his congressional salary before that) to charity?",
        answers: [
            {text: "Calvin Coolidge", correct: false},
            {text: "John F. Kennedy", correct: true},
            {text: "Franklin D. Roosevelt", correct: false},
            {text: "Ronald Reagan", correct: false},
        ],
        fact: "John F. Kennedy (1917-1963), 35th President. Born into wealth and prestige, JFK was one of the richest men to take office. He lived off the Kennedy family's considerable trusts, so he donated his congressional salary and later his presidential salary to charities like the United Negro College Fund and Boy Scouts and Girl Scouts of America. President Herbert Hoover had also donated his presidential salary during his term in office (1929-1933)."
    },
    {
        question: "Which president and his wife hold the record for longest married first couple?",
        answers: [
            {text: "Jimmy Carter", correct: true},
            {text: "Harry S. Truman", correct: false},
            {text: "Ronald Reagan", correct: false},
            {text: "Bill Clinton", correct: false},
        ],
        fact: "Jimmy Carter (1924-), 39th President. Jimmy Carter married Rosalynn Smith on July 7, 1946, in their hometown of Plains, Georgia. The Carters 74-year marriage makes them the longest married of any first couple. The record was previously held by George H.W. Bush and his wife Barbara, who were married for 73 years and died within months of each other in 2018. The third-longest presidential marriage was that of John and Abigail Adams at 54 years."
    },
    {
        question: "Who was the first president to ride in a car to his inauguration?",
        answers: [
            {text: "Woodrow Wilson", correct: false},
            {text: "Warren G. Harding", correct: true},
            {text: "Herbert Hoover", correct: false},
            {text: "Franklin D. Roosevelt", correct: false},
        ],
        fact: "Warren G. Harding (1865-1923), 29th President. On March 4, 1921, Harding became the first president to ride to and from his inauguration in an automobile."
    },
];

const questionDisplay = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
const questionFact = document.getElementById("question-fact")
const nameInput = document.getElementById("name");
const startButton = document.getElementById("start-btn");

let userName
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", () => {
    userName = nameInput.value.trim();
    if (userName !== "") {
        document.getElementById("question-container").style.display = "block"; 
        document.getElementById("name-container").style.display = "none"; 
        startQuiz();
    } else {
        alert("Please enter your name to start the quiz.");
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < 5) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questions.sort(() => Math.random() - .5)
    nextButton.textContent = "Next"
    showQuestion();
}


function showQuestion() {
    resetState();    
    let currentQuestion = questions[currentQuestionIndex];
    questionDisplay.textContent = `${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    questionFact.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
    questionFact.textContent = questions[currentQuestionIndex].fact;
    questionFact.style.display = "block";
}

function showScore() {
    resetState();
    questionDisplay.textContent = score >= 4 ? `Great job, ${userName}! You really know your U.S. presidential trivia. You scored ${score} out of 5!`:
    score >= 2 ? `Not bad, ${userName}! You scored ${score} out of 5 on the U.S. presidential trivia quiz!`:
    `Well, ${userName}, it looks like there's still some presidential trivia to brush up on. You scored ${score} out of 5!`
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < 5) {
        showQuestion();
    } else {
        showScore();
    }
}

