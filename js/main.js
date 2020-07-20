
			function openmenu(){
				document.getElementById("side-menu").style.display="block";
				document.getElementById("menu-btn").style.display="none";
				document.getElementById("close-btn").style.display="block";
			}
			function closemenu(){
				document.getElementById("side-menu").style.display="none";
				document.getElementById("menu-btn").style.display="block";
				document.getElementById("close-btn").style.display="none";
			}
			function openmenu2(){
				document.getElementById("srch").style.display="block";
				document.getElementById("srch-btn").style.display="none";
			}
			$("textarea").resizable();
			$('textarea').autoResize();
			function registration(){
				document.getElementById("op").style.display="block";
				document.getElementById("cls").style.display="none";
			}