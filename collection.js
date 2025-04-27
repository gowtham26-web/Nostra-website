// offer bar hide
var offerclose = document.getElementById("offer-close")
var offerbarhide = document.getElementById("offer-bar-hide")
offerclose.addEventListener("click",function(){
    offerbarhide.style.display="none"
})



// search button input 
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
console.log(productlist)

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    for(count = 0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})