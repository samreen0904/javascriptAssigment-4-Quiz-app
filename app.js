// const questions = [ { question: "Inside which HTML element do we put the JavaScript?",
//  option1: "script", 
//  option2: "javascript",
//   option3: "js",
//    correctOption: "script", },
//    { question: "Where is the correct place to insert a JavaScript?", 
//    option1: "The head section",
//    option2: "The body section",
//     option3: "Both the head and body section are correct", 
//     correctOption: "Both the head and body section are correct", },
//      { question: 'What is the correct syntax for referring to an external script called "xxx.js"?', option1: "script href=xxx.js",
//       option2: "script name=xxx.js",
//        option3: "script src=xxx.js", 
//        correctOption: "script src=xxx.js", }, 
//     ];




//     let quizbox = document.querySelector("#quizBox")
//     let nextBtn = document.querySelector("#nextbtn")
// let questionsNo = 0

// const showFunction =()=>{
// if(questionsNo != questions.length){
//     quizbox.innerHTML = `<h1> ${questionsNo + 1} : ${questions[questionsNo].question}  </h1> 
//     <label ><input type="radio" name="options " value="    ${questions[0].option1}"> 
//     ${questions[0].option1}
//     </label>
//     </br>
//     </br>
//     <label ><input type="radio" name="options " value="    ${questions[0].option2}"> 
//     ${questions[0].option2}
//     </label>
//     </br>
//     </br>
//     <label >
//     <input type="radio" name="options " value="    ${questions[0].option3}"> 
//     ${questions[0].option3}
//     </label>
//     </br>
//     </br>




//     `
//     nextBtn.disabled = true
// const options = document.querySelectorAll("input")

// options.forEach((option)=>{
//     option.addEventListener("click",()=>{
//         nextBtn.disabled = false
//         console.log(option.value)
//         if(option.value == questions[questionsNo].correctOption){

//         }

//   })
// })
  

// }
// else {
//     quizbox.innerHTML = "quizEnd"
//     nextBtn.style.display = "none"
// }

    
    
// }
// showFunction()

// nextBtn.addEventListener("click",()=>{
//     questionsNo++
//     showFunction()
// })
    


const questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      option1: "script",
      option2: "javascript",
      option3: "js",
      correctOption: "script",
    },
    {
      question: "Where is the correct place to insert a JavaScript?",
      option1: "The head section",
      option2: "The body section",
      option3: "Both the head and body section are correct",
      correctOption: "Both the head and body section are correct",
    },
    {
      question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
      option1: "script href=xxx.js",
      option2: "script name=xxx.js",
      option3: "script src=xxx.js",
      correctOption: "script src=xxx.js",
    },
  ];
  
  let quizbox = document.querySelector("#quizBox");
  let nextBtn = document.querySelector("#nextbtn");
  
  let questionsNo = 0;
  let score = 0;
  
  const showFunction = () => {
    if (questionsNo < questions.length) {
      const currentQuestion = questions[questionsNo];
  
      quizbox.innerHTML = `
        <h2>${questionsNo + 1}: ${currentQuestion.question}</h2>
  
        <label>
          <input type="radio" name="options" value="${currentQuestion.option1}">
          ${currentQuestion.option1}
        </label><br><br>
  
        <label>
          <input type="radio" name="options" value="${currentQuestion.option2}">
          ${currentQuestion.option2}
        </label><br><br>
  
        <label>
          <input type="radio" name="options" value="${currentQuestion.option3}">
          ${currentQuestion.option3}
        </label><br><br>
      `;
  
      nextBtn.disabled = true;
  
      const options = document.querySelectorAll('input[name="options"]');
  
      options.forEach((option) => {
        option.addEventListener("change", () => {
          nextBtn.disabled = false;
  
          if (option.value === currentQuestion.correctOption) {
            // The selected answer is correct.
          }
        });
      });
    } else {
      quizbox.innerHTML = `
        <h2>Quiz Completed!</h2>
        <p>Your score: ${score} / ${questions.length}</p>
      `;
  
      nextBtn.style.display = "none";
    }
  };
  
  showFunction();
  
  nextBtn.addEventListener("click", () => {
    const selectedOption = document.querySelector(
      'input[name="options"]:checked'
    );
  
    if (selectedOption.value === questions[questionsNo].correctOption) {
      score++;
    }
  
    questionsNo++;
    showFunction();
  });