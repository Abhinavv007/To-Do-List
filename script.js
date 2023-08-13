let index = 1;
const inputBox = document.getElementById("list-items")
const inputbtn = document.getElementById("inputbtn")
inputbtn.addEventListener(
    "keyup",(e)=>{
        if(e.key=="Enter"){
       add(inputbtn.value)
       inputbtn.value=""
        }
    }
)

const add = (item)=>{
 let listItem = document.createElement("li")
 listItem.innerHTML=`
 ${index++}. ${inputbtn.value}
<button id="rbtn">X</button>
<button id="lbtn">&#10003;</button>

 `
 inputBox.append(listItem)


 listItem.querySelector("#lbtn").addEventListener("click",()=>{
    listItem.classList.toggle("done")
    
    

 })
 listItem.querySelector("#rbtn").addEventListener("click",()=>{
    listItem.remove()
 })

 
}

