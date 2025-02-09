const questions = [
    { q: "What does HTML stand for?", options: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], answer: 1 },
    { q: "Which tag is used to define a hyperlink in HTML?", options: ["<a>", "<link>", "<href>", "<url>"], answer: 0 },
    { q: "Which attribute specifies an alternate text for an image?", options: ["alt", "src", "href", "title"], answer: 0 },
    { q: "What is the default file extension of an HTML document?", options: [".html", ".htm", ".doc", ".txt"], answer: 0 },
    { q: "Which tag is used to create a line break in HTML?", options: ["<br>", "<lb>", "<break>", "<hr>"], answer: 0 },
    { q: "Which HTML element is used for the largest heading?", options: ["<h6>", "<h3>", "<h1>", "<heading>"], answer: 2 },
    { q: "What is the correct way to comment in HTML?", options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "' This is a comment"], answer: 1 },
    { q: "Which tag is used to define a table in HTML?", options: ["<tr>", "<table>", "<td>", "<tab>"], answer: 1 },
    { q: "Which tag is used to insert an image in HTML?", options: ["<img>", "<pic>", "<image>", "<src>"], answer: 0 },
    { q: "Which HTML element represents a paragraph?", options: ["<p>", "<para>", "<text>", "<paragraph>"], answer: 0 },

    { q: "Which tag is used for creating a checkbox?", options: ["<check>", "<checkbox>", "<input type='checkbox'>", "<cb>"], answer: 2 },
    { q: "Which tag is used for creating a dropdown menu?", options: ["<dropdown>", "<select>", "<list>", "<menu>"], answer: 1 },
    { q: "Which tag is used for creating a text input field?", options: ["<text>", "<input>", "<textfield>", "<txt>"], answer: 1 },
    { q: "Which attribute is used to specify that an input field must be filled out?", options: ["required", "validate", "mandatory", "needed"], answer: 0 },
    { q: "Which attribute specifies the URL of the page the form data should be sent to?", options: ["action", "href", "target", "url"], answer: 0 },
    { q: "Which tag is used to create a numbered list?", options: ["<ul>", "<list>", "<ol>", "<li>"], answer: 2 },
    { q: "Which tag is used to create an unordered list?", options: ["<ol>", "<ul>", "<li>", "<list>"], answer: 1 },
    { q: "What is the default display property of a <div> element?", options: ["inline", "block", "flex", "grid"], answer: 1 },
    { q: "What is the default display property of a <span> element?", options: ["inline", "block", "flex", "grid"], answer: 0 },
    { q: "Which tag is used to define the footer of a document?", options: ["<foot>", "<footer>", "<bottom>", "<section>"], answer: 1 },

    { q: "What is the purpose of the 'action' attribute in a form?", options: ["Defines a CSS style", "Links to an external JS file", "Specifies where to send form data", "Creates a table"], answer: 2 },
    { q: "Which tag is used for creating a radio button?", options: ["<radio>", "<rb>", "<input type='radio'>", "<select>"], answer: 2 },
    { q: "Which tag defines emphasized text?", options: ["<em>", "<strong>", "<b>", "<i>"], answer: 0 },
    { q: "Which HTML element is used for marking up contact information?", options: ["<contact>", "<info>", "<address>", "<details>"], answer: 2 },
    { q: "Which tag is used for defining an acronym?", options: ["<abbr>", "<acronym>", "<short>", "<define>"], answer: 0 },
    { q: "Which tag is used to create a submit button?", options: ["<input type='submit'>", "<button>", "<submit>", "<send>"], answer: 0 },
    { q: "What is the purpose of the <title> tag?", options: ["To set the document title", "To create a heading", "To define a table", "To style elements"], answer: 0 },
    { q: "Which tag is used to define a division or section in an HTML document?", options: ["<span>", "<div>", "<section>", "<article>"], answer: 1 },
    { q: "Which HTML element is used to define a quotation?", options: ["<quote>", "<q>", "<blockquote>", "<quot>"], answer: 2 },
    { q: "What is the purpose of the <meta> tag?", options: ["To create a table", "To define metadata", "To add a footer", "To create a new page"], answer: 1 },

    { q: "Which tag is used to define a self-contained piece of content?", options: ["<section>", "<article>", "<div>", "<span>"], answer: 1 },
    { q: "What is the function of the 'id' attribute in HTML?", options: ["To group elements", "To uniquely identify an element", "To define a class", "To create a link"], answer: 1 },
    { q: "Which tag is used to define a navigation menu?", options: ["<nav>", "<menu>", "<links>", "<header>"], answer: 0 },
    { q: "Which HTML element defines important text?", options: ["<strong>", "<important>", "<b>", "<bold>"], answer: 0 },
    { q: "Which tag is used to create a text area?", options: ["<input>", "<textarea>", "<textbox>", "<text>"], answer: 1 },
    { q: "Which tag is used to create a definition list?", options: ["<dl>", "<ol>", "<list>", "<ul>"], answer: 0 },
    { q: "What is the purpose of the 'alt' attribute?", options: ["To add alternative text to images", "To change font size", "To add color", "To define a class"], answer: 0 },

    // Add 50 more similar questions her
    { q: "What is the purpose of the 'aria-label' attribute in HTML?", options: ["To define a tooltip", "To improve accessibility by providing a label for elements", "To create a hyperlink", "To set a CSS class"], answer: 1 },
    { q: "Which HTML tag is used to define a custom data attribute?", options: ["<meta>", "<custom>", "<data>", "Any tag with 'data-' attribute"], answer: 3 },
    { q: "What does the 'defer' attribute do in a script tag?", options: ["Delays script execution until the DOM is fully loaded", "Runs the script immediately", "Prevents the script from running", "Loads the script asynchronously"], answer: 0 },
    { q: "Which HTML element is used to define a dialog box?", options: ["<popup>", "<dialog>", "<window>", "<message>"], answer: 1 },
    { q: "Which HTML attribute is used to specify that an input field should automatically get focus when the page loads?", options: ["autofocus", "focus", "default", "selected"], answer: 0 },
    { q: "Which HTML tag is used to specify multiple media resources for a video element?", options: ["<source>", "<media>", "<video-source>", "<srcset>"], answer: 0 },
    { q: "Which attribute is used to specify that a track in a <video> element is the default?", options: ["selected", "default", "primary", "main"], answer: 1 },
    { q: "Which tag is used to define a progress bar?", options: ["<progress>", "<meter>", "<bar>", "<status>"], answer: 0 },
    { q: "Which element is used to represent the result of a calculation in an HTML form?", options: ["<output>", "<result>", "<calc>", "<display>"], answer: 0 },
    { q: "What does the 'sandbox' attribute do in an <iframe>?", options: ["Provides additional security restrictions", "Resizes the frame", "Loads the frame faster", "Creates a transparent background"], answer: 0 },

    { q: "Which HTML element represents the navigation section of a page?", options: ["<nav>", "<menu>", "<sidebar>", "<links>"], answer: 0 },
    { q: "What is the purpose of the 'download' attribute in an <a> tag?", options: ["Specifies that the link should download a file", "Opens the link in a new tab", "Redirects to a different page", "Caches the linked content"], answer: 0 },
    { q: "Which HTML attribute specifies that an input field must be filled out?", options: ["required", "validate", "mandatory", "needed"], answer: 0 },
    { q: "Which HTML element is used to define key-pair metadata?", options: ["<dl>", "<meta>", "<key>", "<data>"], answer: 1 },
    { q: "Which tag is used to create a collapsible panel in HTML?", options: ["<collapse>", "<details>", "<panel>", "<summary>"], answer: 1 },
    { q: "Which tag is used to provide a heading inside a <details> element?", options: ["<header>", "<summary>", "<caption>", "<title>"], answer: 1 },
    { q: "Which tag is used for embedding an external interactive application in HTML?", options: ["<iframe>", "<embed>", "<object>", "All of the above"], answer: 3 },
    { q: "Which element is used to define a relationship between a document and an external resource?", options: ["<meta>", "<link>", "<rel>", "<resource>"], answer: 1 },
    { q: "Which attribute specifies that an input field should automatically complete user input?", options: ["autofill", "autocomplete", "autofocus", "autosuggest"], answer: 1 },
    { q: "Which tag is used to define time-related content?", options: ["<date>", "<time>", "<datetime>", "<clock>"], answer: 1 },

    { q: "Which tag is used to define an interactive user control?", options: ["<user>", "<control>", "<widget>", "<input>"], answer: 3 },
    { q: "What is the purpose of the 'contenteditable' attribute?", options: ["Makes an element editable", "Makes an element visible", "Adds a tooltip", "Specifies metadata"], answer: 0 },
    { q: "Which HTML element is used to define the title of a document?", options: ["<h1>", "<meta>", "<head>", "<title>"], answer: 3 },
    { q: "Which HTML5 feature allows users to store data in the browser?", options: ["Cookies", "LocalStorage", "SessionStorage", "Both LocalStorage and SessionStorage"], answer: 3 },
    { q: "Which tag is used to define the author of a document?", options: ["<author>", "<meta>", "<cite>", "<address>"], answer: 1 },
    { q: "What is the purpose of the 'spellcheck' attribute?", options: ["Enables spell checking", "Checks for syntax errors", "Converts text to uppercase", "Runs a grammar check"], answer: 0 },
    { q: "Which tag is used to define an external script?", options: ["<script>", "<link>", "<src>", "<import>"], answer: 0 },
    { q: "Which tag is used for defining a caption in a table?", options: ["<caption>", "<title>", "<header>", "<summary>"], answer: 0 },
    { q: "What is the difference between <b> and <strong>?", options: ["No difference", "<strong> has semantic meaning, <b> is only for styling", "<b> is deprecated", "Both are the same but <b> is for mobile"], answer: 1 },
    { q: "Which element represents machine-readable content?", options: ["<data>", "<var>", "<code>", "<meta>"], answer: 0 },

    { q: "Which attribute is used to specify the character encoding in an HTML document?", options: ["charset", "encoding", "lang", "type"], answer: 0 },
    { q: "Which attribute makes a video start automatically when loaded?", options: ["autoplay", "start", "play", "loop"], answer: 0 },
    { q: "What is the purpose of the 'rel' attribute in a <link> element?", options: ["Specifies the relationship between documents", "Defines an external script", "Sets an internal style", "Defines a navigation menu"], answer: 0 },
    { q: "Which HTML element is used to represent an independent, self-contained piece of content?", options: ["<section>", "<article>", "<aside>", "<div>"], answer: 1 },
    { q: "Which tag is used to provide additional information when hovering over an element?", options: ["title", "alt", "tooltip", "hover"], answer: 0 },
    { q: "What is the purpose of the 'http-equiv' attribute in a <meta> tag?", options: ["Defines an HTTP header", "Specifies a viewport setting", "Links an external stylesheet", "Defines a JavaScript function"], answer: 0 },
    { q: "Which tag is used to embed scalable vector graphics (SVG) in HTML?", options: ["<vector>", "<svg>", "<canvas>", "<graphics>"], answer: 1 },
    { q: "What does the 'poster' attribute do in a <video> element?", options: ["Sets a default thumbnail", "Starts the video automatically", "Repeats the video", "Adds subtitles"], answer: 0 },
    { q: "Which tag is used to define a container for interactive controls?", options: ["<fieldset>", "<container>", "<group>", "<form>"], answer: 0 },
    { q: "Which tag is used to display computer code?", options: ["<code>", "<pre>", "<kbd>", "All of the above"], answer: 3 }
];



// Shuffle and select 40 unique questions
const selectedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 40);

let currentQuestionIndex = 0;
let score = 0;
let timer = 20 * 60; // 20 minutes in seconds
let startTime = Date.now(); // Track quiz start time
let userAnswers = [];

const questionDiv = document.getElementById("Question");
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.onclick = nextQuestion;
document.body.appendChild(nextButton);

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.style.display = "none";
submitButton.onclick = submitQuiz;
document.body.appendChild(submitButton);

// Display First Question
displayQuestion();

// Timer Function
const countdown = setInterval(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    document.getElementById("timer").textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    if (timer === 0) {
        clearInterval(countdown);
        submitQuiz();
    } else {
        timer--;
    }
}, 1000);

// Function to Display Questions
function displayQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    questionDiv.innerHTML = `<h3>${currentQuestionIndex + 1}. ${questionData.q}</h3>`;

    questionData.options.forEach((option, index) => {
        questionDiv.innerHTML += `
            <label>
                <input type="radio" name="answer" value="${index}">
                ${option}
            </label><br>`;
    });
}

// Function to Load Next Question
function nextQuestion() {
    const selectedOption = document.querySelector("input[name='answer']:checked");

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    // Store Answer
    userAnswers.push(parseInt(selectedOption.value));

    // Move to Next Question
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();

        // Show Submit button only on last question
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        }
    }
}

// Function to Submit Quiz
function submitQuiz() {
    clearInterval(countdown);
    let endTime = Date.now();
    let timeTaken = Math.floor((endTime - startTime) / 1000); // Time taken in seconds

    questionDiv.innerHTML = `<h2>Quiz Completed!</h2>
                             <p>You completed the quiz in <strong>${timeTaken} seconds</strong>.</p>
                             <h3>Results:</h3>`;

    selectedQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.answer;
        const isCorrect = userAnswer === correctAnswer;

        questionDiv.innerHTML += `<p style="color: ${isCorrect ? 'green' : 'red'};">
                                     ${index + 1}. ${question.q} <br>
                                     Your Answer: ${question.options[userAnswer] || "No Answer"}
                                 </p>`;

        if (!isCorrect) {
            questionDiv.innerHTML += `<p style="color: blue;">Correct Answer: ${question.options[correctAnswer]}</p>`;
        }
    });

    questionDiv.innerHTML += `<h2>Your Final Score: ${userAnswers.filter((ans, i) => ans === selectedQuestions[i].answer).length} / ${selectedQuestions.length}</h2>`;

    nextButton.style.display = "none";
    submitButton.style.display = "none";
}
