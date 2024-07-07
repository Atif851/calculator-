var input = document.getElementById("inp");
var btn= document.querySelectorAll("button");
var  result="";
//array;
// var arr = Array.from(btn);
btn.forEach(btns => {
    btns.addEventListener("click",(e)=>{
        //for equal ;
        if (e.target.innerHTML=="=") {
           result = eval(result);
           input.value = result; 
        }
        else if (e.target.innerHTML=="AC") {
            result = "";
            input.value = result
        }
        else if (e.target.innerHTML=="DEL") {
            result = result.substring(0,result.length-1);
            input.value = result;
            
        }
       
        else{
            result += e.target.innerHTML;
            input.value = result 
        }
  
    })
});
