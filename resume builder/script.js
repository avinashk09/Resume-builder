//this function is used for the form to fill data
function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add ("form-control");
    newNode.classList.add ("weField");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}
function addeqField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add ("form-control");
    newNode.classList.add ("eqField");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here");

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode, eqAddButtonOb);
} 
function addachievementsField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add ("form-control");
    newNode.classList.add ("achField");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter Here");

    let achOb = document.getElementById("ach");
    let achAddButtonOb = document.getElementById("achAddButton");
    achOb.insertBefore(newNode, achAddButtonOb);
}

//this is used to generate cv
function generateCV() {
let nameField = document.getElementById("nameField").value;
let namet1 = document.getElementById("namet1");
namet1.innerHTML = nameField; 

let namet2 = document.getElementById("namet2");
namet2.innerHTML = nameField; 

let contactField = document.getElementById("contactField").value;
let phonet = document.getElementById("phonet");
phonet.innerHTML = contactField; 
let addressField = document.getElementById("addressField").value;
let addt = document.getElementById("addt");
addt.innerHTML = addressField;
let linkedinField = document.getElementById("linkedinField").value;
let lt = document.getElementById("lt");
lt.innerHTML = linkedinField;
let githubField = document.getElementById("githubField").value;
let gt = document.getElementById("gt");
gt.innerHTML = githubField;
let gmailField = document.getElementById("gmailField").value;
let gmt = document.getElementById("gmt");
gmt.innerHTML = gmailField;
document.getElementById("ot").innerHTML=document.getElementById("objField").value;
document.getElementById("st").innerHTML=document.getElementById("skillsField").value;
//going for work experience using off loop
let wes = document.getElementsByClassName("weField");
let str = "";
for (let i = 0; i < wes.length; i++) {
    str += "<li>" + wes[i].value + "</li>";
}
document.getElementById("wet").innerHTML = str;
let eqs = document.getElementsByClassName("eqField");
let str1 = "";
for (let i = 0; i < eqs.length; i++) {
    str1 += "<li>" + eqs[i].value + "</li>";
}
document.getElementById("eqt").innerHTML = str1;
let prs = document.getElementsByClassName("achField");
let str2 = "";
for (let i = 0; i < prs.length; i++) {
    str2 += "<li>" + prs[i].value + "</li>";
}
document.getElementById("pt").innerHTML = str2;
 document.getElementById('cv-form').style.display='none';
 document.getElementById('cv-template').style.display='block';
}
//print cv
function printCV() {
    window.print();
}