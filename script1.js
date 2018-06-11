		var menuItem = document.getElementById('menu').getElementsByTagName('li');
		var btn =document.getElementById('zar');
	    var myText=document.getElementById("text");
	    var myMenu=document.getElementById("menu");
	    var counter=1;



		for (i = 0; i < menuItem.length; i++) {
			menuItem[i].addEventListener("click", selectItem);



	}
	
function selectItem(){

			menuItem[3].innerHTML="ayman";
}

		        btn.addEventListener("click", clickHere);
	

	function clickHere(){
		myMenu.innerHTML += "<li> new line "+ counter +" </li>";
		counter++;
		
		}






