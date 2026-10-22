const questions = [ { question: "Inside which HTML element do we put the JavaScript?",
 option1: "script", 
 option2: "javascript",
  option3: "js",
   correctOption: "script", },
   { question: "Where is the correct place to insert a JavaScript?", 
   option1: "The head section",
   option2: "The body section",
    option3: "Both the head and body section are correct", 
    correctOption: "Both the head and body section are correct", },
     { question: 'What is the correct syntax for referring to an external script called "xxx.js"?', option1: "script href=xxx.js",
      option2: "script name=xxx.js",
       option3: "script src=xxx.js", 
       correctOption: "script src=xxx.js", }, 
    ];




    let quizbox = document.querySelector("#quizBox")
    let nextBtn = document.querySelector("#nextbtn")
let questionsNo = 0

const showFunction =()=>{
if(questionsNo != questions.length){
    quizbox.innerHTML = `<h1> ${questionsNo + 1} : ${questions[questionsNo].question}  </h1> 
    <label ><input type="radio" name="options " value="    ${questions[questionsNo].option1}"> 
    ${questions[questionsNo].option1}
    </label>
    </br>
    </br>
    <label ><input type="radio" name="options " value="    ${questions[questionsNo].option2}"> 
    ${questions[questionsNo].option2}
    </label>
    </br>
    </br>
    <label >
    <input type="radio" name="options " value="    ${questions[questionsNo].option3}"> 
    ${questions[questionsNo].option3}
    </label>
    </br>
    </br>




    `
    nextBtn.disabled = true
const options = document.querySelectorAll("input")

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        nextBtn.disabled = false
        console.log(option.value)
        if(option.value == questions[questionsNo].correctOption){

        }

  })
})
  

}
else {
    quizbox.innerHTML = "quizEnd"
    nextBtn.style.display = "none"
}

    
    
}
showFunction()

nextBtn.addEventListener("click",()=>{
    questionsNo++
    showFunction()
})
    

