
import "./index.css"
import img from './images/file.png';


const form = document.createElement("form")
form.setAttribute("class","myform")
let inputName = document.createElement("input")
inputName.setAttribute("class", "name")
inputName.placeholder = "Name"
inputName.type = "text"

let inputemail = document.createElement("input")
inputemail.setAttribute("class", "email")
inputemail.placeholder = "Email"
inputemail.type = "email"

let submit = document.createElement("input")
submit.value = "submit"
submit.type = "submit"

let divnote = document.createElement("div")

let inputnote = document.createElement("input")
inputnote.setAttribute("class", "notes")
inputnote.placeholder = "write something"
inputnote.type = "text"

form.append(inputName,inputemail,submit)
divnote.append(inputnote)
document.getElementById("root").append(form,divnote)


document.querySelector(".myform").addEventListener("submit",addItem);

function addItem(event){
    event.preventDefault();
    var name = document.querySelector(".name").value;
    var Email = document.querySelector(".email").value;
    var notes = document.querySelector(".notes").value

    var row = document.createElement('tr')
     
    var td1 = document.createElement('td')
    td1.textContent=name;
    var td2 = document.createElement('td')
    td2.textContent=Email;
    var td3 = document.createElement('td')
    td3.textContent=notes;
  
    var td4 = document.createElement('td')
    td4.textContent="delete";
    td4.addEventListener("click", deleteTask);
    row.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(row);

}
    function deleteTask(event){
        event.target.parentNode.remove();
    }