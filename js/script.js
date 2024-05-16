var products = document.querySelectorAll(".products .component")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btn1")
var div2 = document.querySelector("#div2")
var Total = 0;

products.forEach(function(item){
    item.onclick = function(){
        div1.innerHTML += item.textContent + "<br><br>"
        if(div1.innerHTML != ""){
            btn1.style.display = "block";
            btn1.style.backgroundColor = "black";
            btn1.style.color = "white";
            btn1.style.border = "none";
            btn1.style.width = "100px";
            btn1.style.height = "40px";
            btn1.style.margin = "10px"
            
        }
        Total += +(item.getAttribute("price"));
    }
})

btn1.onclick = function(){
    div2.innerHTML = Total

}
