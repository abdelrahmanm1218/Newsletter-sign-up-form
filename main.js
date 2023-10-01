let errorStateSpan = document.getElementById("error-state");
let emailregEx = /\w+@\w+.(com|org|net)/g ;

let inputEmail = document.getElementById("email-input");
let form = document.getElementById("email-form");

let container = document.querySelector(".container");
let formDiv = document.getElementById("form-div");
let submit = document.getElementById("submit")


submit.addEventListener("click",function(event){
    let emailData = inputEmail.value;
    (emailregEx.test(emailData))? sucessMessge(emailData): errorState();;
    event.preventDefault();
});

function sucessMessge(email){
    let sucessDiv = document.createElement("div");
    let i = document.createElement("i");
    let head = document.createElement("h1");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    //main div
    sucessDiv.id ="success";
    sucessDiv.className = "success";
    //icon
    i.className ="fa-solid fa-circle-check";
    i.style.color = "#e87211";
    sucessDiv.appendChild(i);
    //header h1
    head.appendChild(document.createTextNode("Thanks for subscribing!"));
    sucessDiv.appendChild(head);
    //paragraph or description
    p.id = "success-desc";
    p.className ="success-desc";
    p.innerHTML = `A confirmation messgege send to <span class='email'>${email}</span>. please open it and click the button inside to confirm you subscription`;
    sucessDiv.appendChild(p);
    //btn dismiss
    btn.id="dismiss";
    btn.className = "dismiss";
    btn.appendChild(document.createTextNode("Dismiss messge"));
    sucessDiv.appendChild(btn);
    //removing form and show success
    // formDiv.style.display = "none";
    formDiv.remove();
    container.appendChild(sucessDiv);
    //if the btn is clicked remove sucess messege
    btn.addEventListener("click",()=>sucessDiv.remove())
}


function errorState(){
    inputEmail.value ="";
    inputEmail.classList.add("error");
    let errorSpan = document.createElement("span");
    errorSpan.id = "error-state";
    errorSpan.className = "error-state";
    errorSpan.appendChild(document.createTextNode("Valid email required"));
    inputEmail.after(errorSpan);
    inputEmail.onfocus = ()=>{
        inputEmail.classList.remove("error");
        errorSpan.remove();
    }
}