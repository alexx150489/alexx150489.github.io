var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-form");
var close = popup.querySelector(".close-btn"); 


 

link.addEventListener("click", function(event) {  
event.preventDefault();
popup.classList.add("modal-form-show");
});

close.addEventListener("click", function(event) { 
event.preventDefault();
popup.classList.remove("modal-form-show"); 
popup.classList.remove("modal-form-error");         
});


window.addEventListener("keydown", function(event) {  
if (event.keyCode === 27) {
popup.classList.remove("modal-form-show"); 
popup.classList.remove("modal-form-error"); 
}
});

