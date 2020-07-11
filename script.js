	
  var slide = document.getElementsByClassName("slide");
  var dot = document.getElementsByClassName("dot");
  var prev = document.querySelector(".prev");
  var next = document.querySelector(".next");
  var n = 0;

 function display(){
	for(var i = 0 ; i < slide.length ; i++){	
		slide[i].style.display="none";
	}
 }

 function noActive(){
	for(var i = 0 ; i < dot.length ; i++){	
		dot[i].classList.remove("active");
	}
 }
 next.addEventListener("click",function(e){
	e.preventDefault();
	n++;
	if(n > slide.length -1){  n = 0;  }
	display();
	noActive();
	slide[n].style.display="block";
	dot[n].classList.add("active");

 });

 prev.addEventListener("click",function(e){
	e.preventDefault();
	n--;
	if(n < 0){  n = slide.length-1;  }
	display();
	noActive();
	slide[n].style.display="block";
	dot[n].classList.add("active");

 });

 setInterval(function(){
 	n++;
	if(n > slide.length-1){ n=0; }
	display();
	noActive();
	slide[n].style.display="block";
	dot[n].classList.add("active");


 },3000);












 
















 