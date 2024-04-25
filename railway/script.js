/*<--var information = document.querySelector(".train-info")
var data = document.querySelector(".more")

function view()
{
    information.style.display = "block";
}
function closenav()
{
    information.style.display = "none";
}

function opennav()
{
    data.style.display = "block";
}

function closenav2()
{
    data.style.display = "none";
}*/

var information = document.querySelector(".train-info")
var data = document.querySelector(".more")
var traininfor = document.querySelector(".train-inform")
var xmaark = document.querySelector(".xmark")
var trainmore = document.querySelector(".train-more ")
var xmaark2 = document.querySelector(".xmarrk")

traininfor.addEventListener("click", function(event){
    event.preventDefault()
    information.style.display = "block";
})

xmaark.addEventListener("click", function(event){
    event.preventDefault()
    information.style.display = "none";
})

trainmore.addEventListener("click", function(event){
    event.preventDefault()
    data.style.display = "block";
})

xmaark2.addEventListener("click", function(event){
    event.preventDefault()
    data.style.display = "none";
})
var cancella = document.querySelector(".cancellation")
var trackfund =document.querySelector(".track-refund")
var cancelbutton = document.querySelector(".scri-button")
var refundbutton = document.querySelector(".button-ref")

/*cancelbutton.addEventListener("click", function(event){
    
    cancella.style.display = "block";
    trackfund.style.display = "none";
})

refundbutton.addEventListener("click", function(event){
    
    trackfund.style.display = "block";
    cancella.style.display = "none";
})
*/
function cancel(){
    cancella.style.display = "block";
    trackfund.style.display = "none";
}

function refund(){
    trackfund.style.display = "block";
    cancella.style.display = "none";
}




