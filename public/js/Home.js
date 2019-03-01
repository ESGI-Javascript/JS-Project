export default class Home
{
	load()
	{
		document.getElementById("homeindex").style.display = "none";
		document.getElementById("newGame").onclick = function() {
            	localStorage.setItem('name', document.getElementById("nameInput").value);
       		};
	}
}
