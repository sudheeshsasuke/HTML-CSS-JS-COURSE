var color = ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'white', 'purple', 'black', 'orange'];
var guesses = 0;
var text;
var input;
var target;
var finished = false;

var len = color.length;
len = len -1;

function do_game()
{

	var random_number = Math.random() * len;
	var num = Math.floor(random_number);
	target = color[num];
	
		while(!finished)
	{
	
		text = prompt("I am thinking of a colour from this list \n\n"+
                                  color.join()+
                                  "What is the number?");
		input = text;
		
		guesses++;
		finished = check();
	}
	
	//myBody=document.getElementsByTagName("body")[0];
	//myBody.style.background=target;

}

function check()
{

	var i = 0;
	var flag = false;
	while(i <= len)
	{
		if(input == color[i])
		{
			flag = true;
			break;
		}
		i++;
	}
	
	if(!flag)
	{
		alert("The entered color is not in the list!");
		return false;
	}
	
	if(input < target)
	{
		alert("The color is alphabetically higher than the entered color");
		return false;
	}
	
		if(input > target)
	{
		alert("The color is alphabetically lower than the entered color");
		return false;
	}


	myBody=document.getElementsByTagName("body")[0];
	myBody.style.background=target;
	
		alert("You guessed the right color \n\n"+target+".\n\nIt took you " + guesses + 
          " guesses to get the color!" );
	return true;
}