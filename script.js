const questions = [
    { q: "What does HTML stand for?", options: ["Hyper Transfer Markup Language", "Hyper Text Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], answer: 1 },
    { q: "Which tag is used to define a hyperlink in HTML?", options: ["&lta&gt", "&ltlink&gt", "&lthref&gt", "&lturl&gt"], answer: 0 },
    { q: "Which attribute specifies an alternate text for an image?", options: ["alt", "src", "href", "title"], answer: 0 },
    { q: "What is the default file extension of an HTML document?", options: [".html", ".htm", ".doc", ".txt"], answer: 0 },
    { q: "Which tag is used to create a line break in HTML?", options: ["&ltbr&gt", "&ltlb&gt", "&ltbreak&gt", "&lthr&gt"], answer: 0 },
    { q: "Which HTML element is used for the largest heading?", options: ["&lth6&gt", "&lth3&gt", "&lth1&gt", "&ltheading&gt"], answer: 2 },
    { q: "What is the correct way to comment in HTML?", options: ["// This is a comment", "&lt!-- This is a comment --&gt", "/* This is a comment */", "' This is a comment"], answer: 1 },
    { q: "Which tag is used to define a table in HTML?", options: ["&lttr&gt", "&lttable&gt", "&lttd&gt", "&lttab&gt"], answer: 1 },
    { q: "Which tag is used to insert an image in HTML?", options: ["&ltimg&gt", "&ltpic&gt", "&ltimage&gt", "&ltsrc&gt"], answer: 0 },
    { q: "Which HTML element represents a paragraph?", options: ["&ltp&gt", "&ltpara&gt", "&lttext&gt", "&ltparagraph&gt"], answer: 0 },

    { q: "Which tag is used for creating a checkbox?", options: ["&ltcheck&gt", "&ltcheckbox&gt", "&ltinput type='checkbox'&gt", "&ltcb&gt"], answer: 2 },
    { q: "Which tag is used for creating a dropdown menu?", options: ["&ltdropdown&gt", "&ltselect&gt", "&ltlist&gt", "&ltmenu&gt"], answer: 1 },
    { q: "Which tag is used for creating a text input field?", options: ["&lttext&gt", "&ltinput&gt", "&lttextfield&gt", "&lttxt&gt"], answer: 1 },
    { q: "Which attribute is used to specify that an input field must be filled out?", options: ["required", "validate", "mandatory", "needed"], answer: 0 },
    { q: "Which attribute specifies the URL of the page the form data should be sent to?", options: ["action", "href", "target", "url"], answer: 0 },
    { q: "Which tag is used to create a numbered list?", options: ["&ltul&gt", "&ltlist&gt", "&ltol&gt", "&ltli&gt"], answer: 2 },
    { q: "Which tag is used to create an unordered list?", options: ["&ltol&gt", "&ltul&gt", "&ltli&gt", "&ltlist&gt"], answer: 1 },
    { q: "What is the default display property of a &ltdiv&gt element?", options: ["inline", "block", "flex", "grid"], answer: 1 },
    { q: "What is the default display property of a &ltspan&gt element?", options: ["inline", "block", "flex", "grid"], answer: 0 },
    { q: "Which tag is used to define the footer of a document?", options: ["&ltfoot&gt", "&ltfooter&gt", "&ltbottom&gt", "&ltsection&gt"], answer: 1 },

    { q: "What is the purpose of the 'action' attribute in a form?", options: ["Defines a CSS style", "Links to an external JS file", "Specifies where to send form data", "Creates a table"], answer: 2 },
    { q: "Which tag is used for creating a radio button?", options: ["&ltradio&gt", "&ltrb&gt", "&ltinput type='radio'&gt", "&ltselect&gt"], answer: 2 },
    { q: "Which tag defines emphasized text?", options: ["&ltem&gt", "&ltstrong&gt", "&ltb&gt", "&lti&gt"], answer: 0 },
    { q: "Which HTML element is used for marking up contact information?", options: ["&ltcontact&gt", "&ltinfo&gt", "&ltaddress&gt", "&ltdetails&gt"], answer: 2 },
    { q: "Which tag is used for defining an acronym?", options: ["&ltabbr&gt", "&ltacronym&gt", "&ltshort&gt", "&ltdefine&gt"], answer: 0 },
    { q: "Which tag is used to create a submit button?", options: ["&ltinput type='submit'&gt", "&ltbutton&gt", "&ltsubmit&gt", "&ltsend&gt"], answer: 0 },
    { q: "What is the purpose of the &lttitle&gt tag?", options: ["To set the document title", "To create a heading", "To define a table", "To style elements"], answer: 0 },
    { q: "Which tag is used to define a division or section in an HTML document?", options: ["&ltspan&gt", "&ltdiv&gt", "&ltsection&gt", "&ltarticle&gt"], answer: 1 },
    { q: "Which HTML element is used to define a quotation?", options: ["&ltquote&gt", "&ltq&gt", "&ltblockquote&gt", "&ltquot&gt"], answer: 2 },
    { q: "What is the purpose of the &ltmeta&gt tag?", options: ["To create a table", "To define metadata", "To add a footer", "To create a new page"], answer: 1 },

    { q: "Which tag is used to define a self-contained piece of content?", options: ["&ltsection&gt", "&ltarticle&gt", "&ltdiv&gt", "&ltspan&gt"], answer: 1 },
    { q: "What is the function of the 'id' attribute in HTML?", options: ["To group elements", "To uniquely identify an element", "To define a class", "To create a link"], answer: 1 },
    { q: "Which tag is used to define a navigation menu?", options: ["&ltnav&gt", "&ltmenu&gt", "&ltlinks&gt", "&ltheader&gt"], answer: 0 },
    { q: "Which HTML element defines important text?", options: ["&ltstrong&gt", "&ltimportant&gt", "&ltb&gt", "&ltbold&gt"], answer: 0 },
    { q: "Which tag is used to create a text area?", options: ["&ltinput&gt", "&lttextarea&gt", "&lttextbox&gt", "&lttext&gt"], answer: 1 },
    { q: "Which tag is used to create a definition list?", options: ["&ltdl&gt", "&ltol&gt", "&ltlist&gt", "&ltul&gt"], answer: 0 },
    { q: "What is the purpose of the 'alt' attribute?", options: ["To add alternative text to images", "To change font size", "To add color", "To define a class"], answer: 0 },

    // Add 50 more similar questions her
    { q: "What is the purpose of the 'aria-label' attribute in HTML?", options: ["To define a tooltip", "To improve accessibility by providing a label for elements", "To create a hyperlink", "To set a CSS class"], answer: 1 },
    { q: "Which HTML tag is used to define a custom data attribute?", options: ["&ltmeta&gt", "&ltcustom&gt", "&ltdata&gt", "Any tag with 'data-' attribute"], answer: 3 },
    { q: "What does the 'defer' attribute do in a script tag?", options: ["Delays script execution until the DOM is fully loaded", "Runs the script immediately", "Prevents the script from running", "Loads the script asynchronously"], answer: 0 },
    { q: "Which HTML element is used to define a dialog box?", options: ["&ltpopup&gt", "&ltdialog&gt", "&ltwindow&gt", "&ltmessage&gt"], answer: 1 },
    { q: "Which HTML attribute is used to specify that an input field should automatically get focus when the page loads?", options: ["autofocus", "focus", "default", "selected"], answer: 0 },
    { q: "Which HTML tag is used to specify multiple media resources for a video element?", options: ["&ltsource&gt", "&ltmedia&gt", "&ltvideo-source&gt", "&ltsrcset&gt"], answer: 0 },
    { q: "Which attribute is used to specify that a track in a &ltvideo&gt element is the default?", options: ["selected", "default", "primary", "main"], answer: 1 },
    { q: "Which tag is used to define a progress bar?", options: ["&ltprogress&gt", "&ltmeter&gt", "&ltbar&gt", "&ltstatus&gt"], answer: 0 },
    { q: "Which element is used to represent the result of a calculation in an HTML form?", options: ["&ltoutput&gt", "&ltresult&gt", "&ltcalc&gt", "&ltdisplay&gt"], answer: 0 },
    { q: "What does the 'sandbox' attribute do in an &ltiframe&gt?", options: ["Provides additional security restrictions", "Resizes the frame", "Loads the frame faster", "Creates a transparent background"], answer: 0 },

    { q: "Which HTML element represents the navigation section of a page?", options: ["&ltnav&gt", "&ltmenu&gt", "&ltsidebar&gt", "&ltlinks&gt"], answer: 0 },
    { q: "What is the purpose of the 'download' attribute in an &lta&gt tag?", options: ["Specifies that the link should download a file", "Opens the link in a new tab", "Redirects to a different page", "Caches the linked content"], answer: 0 },
    { q: "Which HTML attribute specifies that an input field must be filled out?", options: ["required", "validate", "mandatory", "needed"], answer: 0 },
    { q: "Which HTML element is used to define key-pair metadata?", options: ["&ltdl&gt", "&ltmeta&gt", "&ltkey&gt", "&ltdata&gt"], answer: 1 },
    { q: "Which tag is used to create a collapsible panel in HTML?", options: ["&ltcollapse&gt", "&ltdetails&gt", "&ltpanel&gt", "&ltsummary&gt"], answer: 1 },
    { q: "Which tag is used to provide a heading inside a &ltdetails&gt element?", options: ["&ltheader&gt", "&ltsummary&gt", "&ltcaption&gt", "&lttitle&gt"], answer: 1 },
    { q: "Which tag is used for embedding an external interactive application in HTML?", options: ["&ltiframe&gt", "&ltembed&gt", "&ltobject&gt", "All of the above"], answer: 3 },
    { q: "Which element is used to define a relationship between a document and an external resource?", options: ["&ltmeta&gt", "&ltlink&gt", "&ltrel&gt", "&ltresource&gt"], answer: 1 },
    { q: "Which attribute specifies that an input field should automatically complete user input?", options: ["autofill", "autocomplete", "autofocus", "autosuggest"], answer: 1 },
    { q: "Which tag is used to define time-related content?", options: ["&ltdate&gt", "&lttime&gt", "&ltdatetime&gt", "&ltclock&gt"], answer: 1 },

    { q: "Which tag is used to define an interactive user control?", options: ["&ltuser&gt", "&ltcontrol&gt", "&ltwidget&gt", "&ltinput&gt"], answer: 3 },
    { q: "What is the purpose of the 'contenteditable' attribute?", options: ["Makes an element editable", "Makes an element visible", "Adds a tooltip", "Specifies metadata"], answer: 0 },
    { q: "Which HTML element is used to define the title of a document?", options: ["&lth1&gt", "&ltmeta&gt", "&lthead&gt", "&lttitle&gt"], answer: 3 },
    { q: "Which HTML5 feature allows users to store data in the browser?", options: ["Cookies", "LocalStorage", "SessionStorage", "Both LocalStorage and SessionStorage"], answer: 3 },
    { q: "Which tag is used to define the author of a document?", options: ["&ltauthor&gt", "&ltmeta&gt", "&ltcite&gt", "&ltaddress&gt"], answer: 1 },
    { q: "What is the purpose of the 'spellcheck' attribute?", options: ["Enables spell checking", "Checks for syntax errors", "Converts text to uppercase", "Runs a grammar check"], answer: 0 },
    { q: "Which tag is used to define an external script?", options: ["&ltscript&gt", "&ltlink&gt", "&ltsrc&gt", "&ltimport&gt"], answer: 0 },
    { q: "Which tag is used for defining a caption in a table?", options: ["&ltcaption&gt", "&lttitle&gt", "&ltheader&gt", "&ltsummary&gt"], answer: 0 },
    { q: "What is the difference between &ltb&gt and &ltstrong&gt?", options: ["No difference", "&ltstrong&gt has semantic meaning, &ltb&gt is only for styling", "&ltb&gt is deprecated", "Both are the same but &ltb&gt is for mobile"], answer: 1 },
    { q: "Which element represents machine-readable content?", options: ["&ltdata&gt", "&ltvar&gt", "&ltcode&gt", "&ltmeta&gt"], answer: 0 },

    { q: "Which attribute is used to specify the character encoding in an HTML document?", options: ["charset", "encoding", "lang", "type"], answer: 0 },
    { q: "Which attribute makes a video start automatically when loaded?", options: ["autoplay", "start", "play", "loop"], answer: 0 },
    { q: "What is the purpose of the 'rel' attribute in a &ltlink&gt element?", options: ["Specifies the relationship between documents", "Defines an external script", "Sets an internal style", "Defines a navigation menu"], answer: 0 },
    { q: "Which HTML element is used to represent an independent, self-contained piece of content?", options: ["&ltsection&gt", "&ltarticle&gt", "&ltaside&gt", "&ltdiv&gt"], answer: 1 },
    { q: "Which tag is used to provide additional information when hovering over an element?", options: ["title", "alt", "tooltip", "hover"], answer: 0 },
    { q: "What is the purpose of the 'http-equiv' attribute in a &ltmeta&gt tag?", options: ["Defines an HTTP header", "Specifies a viewport setting", "Links an external stylesheet", "Defines a JavaScript function"], answer: 0 },
    { q: "Which tag is used to embed scalable vector graphics (SVG) in HTML?", options: ["&ltvector&gt", "&ltsvg&gt", "&ltcanvas&gt", "&ltgraphics&gt"], answer: 1 },
    { q: "What does the 'poster' attribute do in a &ltvideo&gt element?", options: ["Sets a default thumbnail", "Starts the video automatically", "Repeats the video", "Adds subtitles"], answer: 0 },
    { q: "Which tag is used to define a container for interactive controls?", options: ["&ltfieldset&gt", "&ltcontainer&gt", "&ltgroup&gt", "&ltform&gt"], answer: 0 },
    { q: "Which tag is used to display computer code?", options: ["&ltcode&gt", "&ltpre&gt", "&ltkbd&gt", "All of the above"], answer: 3 }
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
