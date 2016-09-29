	var numberOfFaces = 5;
	var theLeftSide =
    document.getElementById("leftSide");
	
	var theRightSide =
    document.getElementById("rightSide");


function generateFaces()
{

	while(numberOfFaces > 0)
	{
		var face = document.createElement("IMG");
		face.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
		var t = Math.random() * 400;
		var top_position = Math.floor(t);
		var l = Math.random() * 400;
		var left_position = Math.floor(l);
		
		face.style.top = top_position + "px";
		face.style.left = left_position + "px";
		document.getElementById("leftSide").appendChild(face);
		
		numberOfFaces -= 1;
	}

	leftSideImages = document.getElementById("leftSide").cloneNode(true);
	
	leftSideImages.removeChild(leftSideImages.lastChild)
	
	document.getElementById("rightSide").appendChild(leftSideImages);
	
}