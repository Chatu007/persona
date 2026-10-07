/* =========================================================
   PERSONA - PERSONALITY QUIZ
   CORRECTED JAVASCRIPT
========================================================= */


/* =========================================================
   PERSONALITY DATA
========================================================= */

const personalities = {

    leader: {
        name: "THE LEADER",
        icon: "🦁",
        quote: "Confidence creates possibilities.",
        description:
            "You are confident, decisive and motivated by achievement. You enjoy taking responsibility and helping others move toward a goal.",
        strengths: [
            "Confidence",
            "Decision Making",
            "Leadership"
        ],
        weaknesses: [
            "Impatience",
            "Being Competitive",
            "Taking Too Much Control"
        ],
        communication:
            "Direct, confident and goal-oriented.",
        work:
            "You perform well when you can take responsibility and make decisions.",
        scores: {
            leadership: 95,
            creativity: 65,
            adventure: 75,
            logic: 75,
            empathy: 55
        }
    },

    explorer: {
        name: "THE EXPLORER",
        icon: "🧭",
        quote: "Curious minds are never bored.",
        description:
            "You are curious, adventurous and open-minded. You enjoy discovering new ideas, experiences and places.",
        strengths: [
            "Curiosity",
            "Adaptability",
            "Adventure"
        ],
        weaknesses: [
            "Restlessness",
            "Impatience",
            "Taking Risks"
        ],
        communication:
            "Open, energetic and enthusiastic.",
        work:
            "You enjoy flexible environments where you can experiment and discover new possibilities.",
        scores: {
            leadership: 65,
            creativity: 85,
            adventure: 100,
            logic: 60,
            empathy: 65
        }
    },

    thinker: {
        name: "THE THINKER",
        icon: "💡",
        quote: "Great questions lead to great discoveries.",
        description:
            "You enjoy analyzing situations, solving problems and understanding how things work.",
        strengths: [
            "Logic",
            "Analysis",
            "Problem Solving"
        ],
        weaknesses: [
            "Overthinking",
            "Perfectionism",
            "Being Too Analytical"
        ],
        communication:
            "Precise, thoughtful and information-focused.",
        work:
            "You prefer independent work that gives you time to analyze and solve problems.",
        scores: {
            leadership: 65,
            creativity: 75,
            adventure: 40,
            logic: 100,
            empathy: 55
        }
    },

    caregiver: {
        name: "THE CAREGIVER",
        icon: "❤️",
        quote: "Kindness is a strength.",
        description:
            "You are empathetic, supportive and deeply concerned about the well-being of people around you.",
        strengths: [
            "Empathy",
            "Kindness",
            "Support"
        ],
        weaknesses: [
            "People Pleasing",
            "Difficulty Saying No",
            "Taking Things Personally"
        ],
        communication:
            "Warm, patient and understanding.",
        work:
            "You thrive in collaborative environments where you can support others.",
        scores: {
            leadership: 50,
            creativity: 65,
            adventure: 45,
            logic: 60,
            empathy: 100
        }
    },

    creative: {
        name: "THE CREATIVE",
        icon: "🎨",
        quote: "Imagine what does not exist yet.",
        description:
            "You are imaginative, expressive and original. You enjoy turning ideas into something unique.",
        strengths: [
            "Imagination",
            "Originality",
            "Expression"
        ],
        weaknesses: [
            "Disorganization",
            "Changing Interests",
            "Overthinking Ideas"
        ],
        communication:
            "Expressive, imaginative and enthusiastic.",
        work:
            "You perform best when you have freedom to experiment and express your ideas.",
        scores: {
            leadership: 55,
            creativity: 100,
            adventure: 80,
            logic: 60,
            empathy: 70
        }
    },

    peacemaker: {
        name: "THE PEACEMAKER",
        icon: "🌿",
        quote: "Balance creates harmony.",
        description:
            "You are calm, patient and cooperative. You naturally look for peaceful solutions and value harmony.",
        strengths: [
            "Patience",
            "Balance",
            "Cooperation"
        ],
        weaknesses: [
            "Avoiding Conflict",
            "Indecision",
            "Keeping Feelings Inside"
        ],
        communication:
            "Calm, respectful and diplomatic.",
        work:
            "You prefer supportive environments where people cooperate and communicate respectfully.",
        scores: {
            leadership: 45,
            creativity: 65,
            adventure: 45,
            logic: 65,
            empathy: 90
        }
    }
};


/* =========================================================
   QUIZ QUESTIONS
========================================================= */

const questions = [

    {
        icon: "🌎",
        text: "What do you usually do when you enter a new environment?",
        answers: [
            ["Start talking to people immediately", "leader"],
            ["Observe before getting involved", "thinker"],
            ["Look for something interesting to explore", "explorer"],
            ["Stay with someone I already know", "caregiver"]
        ]
    },

    {
        icon: "🤔",
        text: "How do you handle difficult decisions?",
        answers: [
            ["Trust my instincts", "leader"],
            ["Analyze every option", "thinker"],
            ["Take a risk and see what happens", "explorer"],
            ["Ask someone I trust", "caregiver"]
        ]
    },

    {
        icon: "🏆",
        text: "Which role do you naturally take in a group?",
        answers: [
            ["The person who leads", "leader"],
            ["The person who analyzes", "thinker"],
            ["The person who brings new ideas", "creative"],
            ["The person who keeps everyone together", "peacemaker"]
        ]
    },

    {
        icon: "🎨",
        text: "What sounds most enjoyable to you?",
        answers: [
            ["Creating something original", "creative"],
            ["Exploring somewhere new", "explorer"],
            ["Solving a challenging problem", "thinker"],
            ["Spending time with people I care about", "caregiver"]
        ]
    },

    {
        icon: "⚡",
        text: "What motivates you the most?",
        answers: [
            ["Achieving a difficult goal", "leader"],
            ["Discovering something new", "explorer"],
            ["Understanding how something works", "thinker"],
            ["Helping someone succeed", "caregiver"]
        ]
    },

    {
        icon: "🧩",
        text: "When facing a problem, what is your first reaction?",
        answers: [
            ["Take control and act", "leader"],
            ["Break it into smaller pieces", "thinker"],
            ["Try a completely different approach", "creative"],
            ["Discuss it with others", "peacemaker"]
        ]
    },

    {
        icon: "🚀",
        text: "Which statement sounds most like you?",
        answers: [
            ["I like being in charge", "leader"],
            ["I want freedom to explore", "explorer"],
            ["I love creating new things", "creative"],
            ["I want everyone to get along", "peacemaker"]
        ]
    },

    {
        icon: "💬",
        text: "How do you usually communicate?",
        answers: [
            ["Directly and confidently", "leader"],
            ["With facts and logic", "thinker"],
            ["With excitement and stories", "creative"],
            ["Calmly and empathetically", "caregiver"]
        ]
    },

    {
        icon: "🧠",
        text: "What do you enjoy most during free time?",
        answers: [
            ["Learning something new", "thinker"],
            ["Going somewhere adventurous", "explorer"],
            ["Making art or creating", "creative"],
            ["Relaxing with friends or family", "caregiver"]
        ]
    },

    {
        icon: "🤝",
        text: "What is most important in teamwork?",
        answers: [
            ["Having a clear leader", "leader"],
            ["Having creative ideas", "creative"],
            ["Understanding everyone's perspective", "caregiver"],
            ["Maintaining harmony", "peacemaker"]
        ]
    },

    {
        icon: "🔥",
        text: "How do you react when someone challenges your opinion?",
        answers: [
            ["Defend my position confidently", "leader"],
            ["Ask for evidence", "thinker"],
            ["Become curious about their perspective", "explorer"],
            ["Try to find common ground", "peacemaker"]
        ]
    },

    {
        icon: "🌟",
        text: "Which quality would you most like to develop?",
        answers: [
            ["Confidence", "leader"],
            ["Creativity", "creative"],
            ["Knowledge", "thinker"],
            ["Empathy", "caregiver"]
        ]
    },

    {
        icon: "🗺️",
        text: "If you could choose a weekend activity, what would you choose?",
        answers: [
            ["Lead a group activity", "leader"],
            ["Go somewhere I have never visited", "explorer"],
            ["Work on a creative project", "creative"],
            ["Have a peaceful day with loved ones", "peacemaker"]
        ]
    },

    {
        icon: "❤️",
        text: "What do friends usually come to you for?",
        answers: [
            ["Advice and direction", "leader"],
            ["Creative ideas", "creative"],
            ["Logical solutions", "thinker"],
            ["Emotional support", "caregiver"]
        ]
    },

    {
        icon: "🌱",
        text: "Which sentence best describes your personality?",
        answers: [
            ["I like making things happen", "leader"],
            ["I like discovering what is possible", "explorer"],
            ["I like understanding the world", "thinker"],
            ["I like creating harmony around me", "peacemaker"]
        ]
    }

];


/* =========================================================
   QUIZ VARIABLES
========================================================= */

let currentQuestion = 0;

let selectedAnswers = new Array(
    questions.length
).fill(null);

let scores = {
    leader: 0,
    explorer: 0,
    thinker: 0,
    caregiver: 0,
    creative: 0,
    peacemaker: 0
};


/* =========================================================
   GET ELEMENTS
========================================================= */

const questionText = document.getElementById("questionText");
const questionIcon = document.getElementById("questionIcon");
const answersContainer = document.getElementById("answers");
const questionNumber = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");
const progressPercent = document.getElementById("progressPercent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 800);

});


/* =========================================================
   DISPLAY QUESTION
========================================================= */

function displayQuestion() {

    const question = questions[currentQuestion];

    if (!question) {
        return;
    }

    const percentage = Math.round(
        ((currentQuestion + 1) / questions.length) * 100
    );

    questionIcon.textContent = question.icon;

    questionText.textContent = question.text;

    questionNumber.textContent =
        `QUESTION ${currentQuestion + 1} OF ${questions.length}`;

    progressPercent.textContent =
        `${percentage}%`;

    progressBar.style.width =
        `${percentage}%`;

    answersContainer.innerHTML = "";

    const letters = ["A", "B", "C", "D"];

    question.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer-btn";

        button.innerHTML = `
            <span>${letters[index]}</span>
            ${answer[0]}
        `;

        if (
            selectedAnswers[currentQuestion] === answer[1]
        ) {
            button.classList.add("selected");
        }

        button.addEventListener("click", function () {

            selectAnswer(button, answer[1]);

        });

        answersContainer.appendChild(button);

    });

    updateControls();
}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(button, personality) {

    const allButtons =
        answersContainer.querySelectorAll(".answer-btn");

    allButtons.forEach(function (btn) {

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

    selectedAnswers[currentQuestion] = personality;

    nextBtn.disabled = false;
}


/* =========================================================
   UPDATE QUIZ BUTTONS
========================================================= */

function updateControls() {

    prevBtn.disabled = currentQuestion === 0;

    nextBtn.disabled =
        selectedAnswers[currentQuestion] === null;

    if (
        currentQuestion === questions.length - 1
    ) {

        nextBtn.innerHTML = "SEE RESULT →";

    } else {

        nextBtn.innerHTML = "NEXT →";

    }
}


/* =========================================================
   NEXT BUTTON
========================================================= */

nextBtn.addEventListener("click", function () {

    if (
        selectedAnswers[currentQuestion] === null
    ) {
        return;
    }

    if (
        currentQuestion < questions.length - 1
    ) {

        currentQuestion++;

        displayQuestion();

    } else {

        calculateResult();

    }

});


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

prevBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        displayQuestion();

    }

});


/* =========================================================
   CALCULATE RESULT
========================================================= */

function calculateResult() {

    scores = {
        leader: 0,
        explorer: 0,
        thinker: 0,
        caregiver: 0,
        creative: 0,
        peacemaker: 0
    };

    selectedAnswers.forEach(function (answer) {

        if (
            answer &&
            Object.prototype.hasOwnProperty.call(scores, answer)
        ) {

            scores[answer]++;

        }

    });

    let highestScore = 0;
    let winner = "explorer";

    Object.keys(scores).forEach(function (type) {

        if (scores[type] > highestScore) {

            highestScore = scores[type];

            winner = type;

        }

    });

    showCalculatingScreen();

    setTimeout(function () {

        displayResult(winner);

        const resultSection =
            document.getElementById("result");

        if (resultSection) {

            resultSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    }, 1500);

}


/* =========================================================
   CALCULATING SCREEN
========================================================= */

function showCalculatingScreen() {

    questionText.textContent =
        "CALCULATING YOUR PERSONALITY...";

    questionIcon.textContent = "🔮";

    answersContainer.innerHTML = `
        <div style="
            grid-column: 1 / -1;
            text-align: center;
            padding: 40px;
        ">
            <div style="
                width: 55px;
                height: 55px;
                margin: 0 auto 20px;
                border: 4px solid rgba(255,255,255,0.15);
                border-top-color: #22d3ee;
                border-radius: 50%;
                animation: personaSpin 1s linear infinite;
            "></div>

            <p style="color:#a8a8c0;">
                Analyzing your answers...
            </p>
        </div>
    `;

    nextBtn.disabled = true;
    prevBtn.disabled = true;

}


/* =========================================================
   DISPLAY RESULT
========================================================= */

function displayResult(type) {

    const data = personalities[type];

    if (!data) {
        return;
    }

    const resultIcon =
        document.getElementById("resultIcon");

    const resultName =
        document.getElementById("resultName");

    const resultQuote =
        document.getElementById("resultQuote");

    const resultDescription =
        document.getElementById("resultDescription");

    const communicationText =
        document.getElementById("communicationText");

    const workText =
        document.getElementById("workText");


    if (resultIcon) {
        resultIcon.textContent = data.icon;
    }

    if (resultName) {
        resultName.textContent = data.name;
    }

    if (resultQuote) {
        resultQuote.textContent =
            `"${data.quote}"`;
    }

    if (resultDescription) {
        resultDescription.textContent =
            data.description;
    }

    if (communicationText) {
        communicationText.textContent =
            data.communication;
    }

    if (workText) {
        workText.textContent =
            data.work;
    }


    /* STRENGTHS */

    const strengthsList =
        document.getElementById("strengthsList");

    if (strengthsList) {

        strengthsList.innerHTML = "";

        data.strengths.forEach(function (strength) {

            const li =
                document.createElement("li");

            li.textContent = strength;

            strengthsList.appendChild(li);

        });

    }


    /* WEAKNESSES */

    const weaknessesList =
        document.getElementById("weaknessesList");

    if (weaknessesList) {

        weaknessesList.innerHTML = "";

        data.weaknesses.forEach(function (weakness) {

            const li =
                document.createElement("li");

            li.textContent = weakness;

            weaknessesList.appendChild(li);

        });

    }


    /* SCORES */

    animateScore(
        "leadershipScore",
        "leadershipValue",
        data.scores.leadership
    );

    animateScore(
        "creativityScore",
        "creativityValue",
        data.scores.creativity
    );

    animateScore(
        "adventureScore",
        "adventureValue",
        data.scores.adventure
    );

    animateScore(
        "logicScore",
        "logicValue",
        data.scores.logic
    );

    animateScore(
        "empathyScore",
        "empathyValue",
        data.scores.empathy
    );


    /* SAVE RESULT */

    try {

        localStorage.setItem(
            "personaResult",
            type
        );

    } catch (error) {

        console.log(
            "Could not save result."
        );

    }

}


/* =========================================================
   SCORE ANIMATION
========================================================= */

function animateScore(barId, valueId, value) {

    const bar =
        document.getElementById(barId);

    const label =
        document.getElementById(valueId);

    if (!bar || !label) {
        return;
    }

    bar.style.width = "0%";

    label.textContent = "0%";

    setTimeout(function () {

        bar.style.width =
            `${value}%`;

        label.textContent =
            `${value}%`;

    }, 150);

}


/* =========================================================
   RETAKE QUIZ
========================================================= */

const retakeBtn =
    document.getElementById("retakeBtn");

if (retakeBtn) {

    retakeBtn.addEventListener(
        "click",
        function () {

            currentQuestion = 0;

            selectedAnswers =
                new Array(
                    questions.length
                ).fill(null);

            scores = {
                leader: 0,
                explorer: 0,
                thinker: 0,
                caregiver: 0,
                creative: 0,
                peacemaker: 0
            };

            displayQuestion();

            const quizSection =
                document.getElementById("quiz");

            if (quizSection) {

                quizSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   PERSONALITY MODAL
========================================================= */

const modal =
    document.getElementById("personalityModal");

const closeModal =
    document.getElementById("closeModal");


document.querySelectorAll(".learn-btn")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const type =
                    button.getAttribute(
                        "data-personality"
                    );

                const data =
                    personalities[type];

                if (!data || !modal) {
                    return;
                }

                document.getElementById(
                    "modalIcon"
                ).textContent = data.icon;

                document.getElementById(
                    "modalTitle"
                ).textContent = data.name;

                document.getElementById(
                    "modalDescription"
                ).textContent = data.description;

                document.getElementById(
                    "modalStrengths"
                ).textContent =
                    data.strengths.join(" • ");

                document.getElementById(
                    "modalWeaknesses"
                ).textContent =
                    data.weaknesses.join(" • ");

                modal.classList.add("show");

            }
        );

    });


if (closeModal) {

    closeModal.addEventListener(
        "click",
        function () {

            modal.classList.remove("show");

        }
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        }
    );

}


/* =========================================================
   CLOSE MODAL WITH ESCAPE
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal
        ) {

            modal.classList.remove("show");

        }

    }
);


/* =========================================================
   COMPARISON
========================================================= */

const personalityOne =
    document.getElementById(
        "personalityOne"
    );

const personalityTwo =
    document.getElementById(
        "personalityTwo"
    );


function updateComparison() {

    if (!personalityOne || !personalityTwo) {
        return;
    }

    const one =
        personalities[
            personalityOne.value
        ];

    const two =
        personalities[
            personalityTwo.value
        ];

    if (!one || !two) {
        return;
    }


    document.getElementById(
        "compareNameOne"
    ).textContent = one.name;

    document.getElementById(
        "compareNameTwo"
    ).textContent = two.name;


    setComparisonValue(
        "leadOne",
        "leadOneText",
        one.scores.leadership
    );

    setComparisonValue(
        "leadTwo",
        "leadTwoText",
        two.scores.leadership
    );


    setComparisonValue(
        "creativeOne",
        "creativeOneText",
        one.scores.creativity
    );

    setComparisonValue(
        "creativeTwo",
        "creativeTwoText",
        two.scores.creativity
    );


    setComparisonValue(
        "adventureOne",
        "adventureOneText",
        one.scores.adventure
    );

    setComparisonValue(
        "adventureTwo",
        "adventureTwoText",
        two.scores.adventure
    );


    setComparisonValue(
        "logicOne",
        "logicOneText",
        one.scores.logic
    );

    setComparisonValue(
        "logicTwo",
        "logicTwoText",
        two.scores.logic
    );


    setComparisonValue(
        "empathyOne",
        "empathyOneText",
        one.scores.empathy
    );

    setComparisonValue(
        "empathyTwo",
        "empathyTwoText",
        two.scores.empathy
    );

}


function setComparisonValue(
    barId,
    textId,
    value
) {

    const bar =
        document.getElementById(barId);

    const text =
        document.getElementById(textId);

    if (bar) {
        bar.style.width =
            `${value}%`;
    }

    if (text) {
        text.textContent =
            `${value}%`;
    }

}


if (personalityOne) {

    personalityOne.addEventListener(
        "change",
        updateComparison
    );

}

if (personalityTwo) {

    personalityTwo.addEventListener(
        "change",
        updateComparison
    );


}


/* =========================================================
   RANDOM FACTS
========================================================= */

const facts = [

    {
        icon: "🧠",
        text:
            "Self-awareness can help you understand how your choices affect your relationships and goals."
    },

    {
        icon: "💬",
        text:
            "People may communicate differently depending on their personality and situation."
    },

    {
        icon: "🎯",
        text:
            "Knowing your strengths can help you choose environments where you can perform at your best."
    },

    {
        icon: "🤝",
        text:
            "Understanding personality differences can make teamwork easier."
    },

    {
        icon: "🌱",
        text:
            "Personality is complex and can be influenced by experiences, environment and personal growth."
    },

    {
        icon: "✨",
        text:
            "A personality quiz should be treated as a tool for reflection rather than a professional diagnosis."
    },

    {
        icon: "🎨",
        text:
            "Creative thinking can appear in many forms, from art to problem solving."
    },

    {
        icon: "🌎",
        text:
            "There is no single personality type that is best for every situation."
    }

];

let lastFact = -1;

const randomFactBtn =
    document.getElementById(
        "randomFactBtn"
    );


if (randomFactBtn) {

    randomFactBtn.addEventListener(
        "click",
        function () {

            let index;

            do {

                index =
                    Math.floor(
                        Math.random() *
                        facts.length
                    );

            } while (
                index === lastFact &&
                facts.length > 1
            );

            lastFact = index;

            const fact =
                facts[index];

            const icon =
                document.getElementById(
                    "randomFactIcon"
                );

            const text =
                document.getElementById(
                    "randomFact"
                );

            if (icon) {
                icon.textContent =
                    fact.icon;
            }

            if (text) {
                text.textContent =
                    fact.text;
            }

        }
    );

}


/* =========================================================
   DARK / LIGHT THEME
========================================================= */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


try {

    const savedTheme =
        localStorage.getItem(
            "personaTheme"
        );

    if (savedTheme === "light") {

        document.body.classList.add(
            "light-theme"
        );

        if (themeToggle) {
            themeToggle.textContent = "☀️";
        }

    }

} catch (error) {

    console.log(
        "Theme preference unavailable."
    );

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light-theme"
            );

            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );

            themeToggle.textContent =
                isLight ? "☀️" : "🌙";

            try {

                localStorage.setItem(
                    "personaTheme",
                    isLight
                        ? "light"
                        : "dark"
                );

            } catch (error) {

                console.log(
                    "Could not save theme."
                );

            }

        }
    );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );

const navMenu =
    document.getElementById(
        "navMenu"
    );


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            menuToggle.classList.toggle(
                "open"
            );

            navMenu.classList.toggle(
                "open"
            );

        }
    );

}


document.querySelectorAll(
    ".nav-link"
).forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (menuToggle) {
                menuToggle.classList.remove(
                    "open"
                );
            }

            if (navMenu) {
                navMenu.classList.remove(
                    "open"
                );
            }

        }
    );

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    navLinks.forEach(
                        function (link) {

                            link.classList.remove(
                                "active"
                            );

                            const href =
                                link.getAttribute(
                                    "href"
                                );

                            if (
                                href ===
                                `#${entry.target.id}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(element);

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById(
        "backTop"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!backTop) {
            return;
        }

        if (window.scrollY > 500) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


if (backTop) {

    backTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                ".ripple"
            );

        if (!button) {
            return;
        }

        const ripple =
            document.createElement(
                "span"
            );

        ripple.className =
            "ripple-effect";

        const rect =
            button.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.width =
            `${size}px`;

        ripple.style.height =
            `${size}px`;

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        button.appendChild(ripple);

        setTimeout(function () {

            ripple.remove();

        }, 600);

    }
);


/* =========================================================
   SHARE RESULT
========================================================= */

const shareBtn =
    document.getElementById(
        "shareBtn"
    );


if (shareBtn) {

    shareBtn.addEventListener(
        "click",
        async function () {

            let savedResult = null;

            try {

                savedResult =
                    localStorage.getItem(
                        "personaResult"
                    );

            } catch (error) {

                console.log(
                    "Could not access saved result."
                );

            }


            if (
                !savedResult ||
                !personalities[savedResult]
            ) {

                alert(
                    "Please complete the quiz first!"
                );

                return;

            }


            const personality =
                personalities[savedResult];


            const shareText =
                `My personality type is ${personality.name}! ${personality.quote}`;


            if (
                navigator.share
            ) {

                try {

                    await navigator.share({

                        title:
                            "My PERSONA Result",

                        text:
                            shareText

                    });

                } catch (error) {

                    console.log(
                        "Share cancelled."
                    );

                }

            } else {

                try {

                    if (
                        navigator.clipboard &&
                        window.isSecureContext
                    ) {

                        await navigator.clipboard.writeText(
                            shareText
                        );

                        alert(
                            "Your personality result has been copied!"
                        );

                    } else {

                        alert(
                            shareText
                        );

                    }

                } catch (error) {

                    alert(
                        shareText
                    );

                }

            }

        }
    );

}


/* =========================================================
   LOAD SAVED RESULT
========================================================= */

function loadSavedResult() {

    let saved = null;

    try {

        saved =
            localStorage.getItem(
                "personaResult"
            );

    } catch (error) {

        return;

    }


    if (
        saved &&
        personalities[saved]
    ) {

        displayResult(saved);

    }

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

displayQuestion();

updateComparison();

loadSavedResult();


/* =========================================================
   EXTRA CSS FOR LOADING ANIMATION
========================================================= */

const extraStyle =
    document.createElement("style");

extraStyle.textContent = `
    @keyframes personaSpin {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
`;

document.head.appendChild(extraStyle);