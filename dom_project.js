/** dom_project.js **/

function show_pattern()
{
	var top_position = 25, left_position = 25;
	var height = 500, width = 500;
	var colors = ['red', 'orange', 'violet', 'blue', 'indigo', 'green', 'yellow'];
	var the_body = document.getElementById("this_body");
	
	while(width > 50)
	{
		var this_div = document.createElement("div");
		var c = Math.random() * 7;
		var random_color = Math.floor(c);
		this_div.style.top = top_position + "px";
		this_div.style.left = left_position + "px";
		this_div.style.height = height + "px";
		this_div.style.width = width + "px";
		this_div.style.background = colors[random_color];
		
		the_body.appendChild(this_div);
		
		top_position += 10;
		left_position += 10;
		width -= 20;
		height -= 20;
		
	}
	
}