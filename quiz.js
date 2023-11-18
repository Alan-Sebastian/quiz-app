const quizData=[
    {
        id:1,
        question:"Which movie won the best Feature Film award at the 69th National Film Awards in 2023?",
        a:"Rocketry: The Nambi Effect",
        b:"Gangubai Kathiawadia",
        c:"Sarpatta Parambarai",
        d:"RRR",
        correct:"a"
    },
    {
        id:2,
        question:"Which movie has won the most number of Oscars?",
        a:"Titanic",
        b:"Cabaret",
        c:"Jungle Book",
        d:" Avatar",
        correct:"a"  
    },
    {
        id:3,
        question:"Which of the following Indian Movies has / have been nominated for Oscar award (in any category)?",
        a:"Three Idiots",
        b:"Lagaan – Once Upon a time in India",
        c:"Dangal",
        d:"Sarpatta Parambarai",
        correct:"b"  
    },
    {
        id:4,
        question:"The first malayalam film to get president’s silver medal ?",
        a:"Nirmalyam",
        b:"Moonnamathoral",
        c:"Chemmeen (1965)",
        d:"Neelakkuyil (1954)",
        correct:"d"  
    },
    {
        id:5,
        question:"Who acted most films in malayalam ?",
        a:"Nedumudi venu",
        b:"Mohanlal",
        c:"Jagathy sreekumar",
        d:"sreenivasan",
        correct:"c"  
    },
];
var quiz=document.getElementById("quiz");
var qp=document.getElementById("qp");
var ans=document.querySelectorAll(".answer");
var a_text=document.getElementById("a_text");
 var b_text=document.getElementById("b_text");
var c_text=document.getElementById("c_text");
var d_text=document.getElementById("d_text");
var submit=document.getElementById("submit");
let currentqp=0;
let score=0;
loadquiz()
function loadquiz(){
    const qpdata=quizData[currentqp]
    deselect()
    qp.innerText=qpdata.question
    a_text.innerText=qpdata.a;
    b_text.innerText=qpdata.b;
    c_text.innerText=qpdata.c;
    d_text.innerText=qpdata.d;

}
submit.addEventListener("click",()=>{
    const answer=getselect()
    if(answer){
        if(answer===quizData[currentqp].correct){
            score++;
        }
        currentqp++;
        if(currentqp<quizData.length){
            loadquiz()
        }
        else{
            quiz.innerHTML=`<h1 style="text-align:center;">your score is ${score}/${quizData.length}</h1>`
        }
    }
})
function deselect(){
ans.forEach(ans=>ans.checked=false
)}
function getselect(){
    ans.forEach(ans=>{
        if(ans.checked){
            answer=ans.id;
        }         
    })
    return answer; 
}
