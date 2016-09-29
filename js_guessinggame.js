var target;
var input;
var text;
var guesses = 0;
var finished = false;

function do_game()
{

	var random_number = Math.random() * 100;
	var num = Math.floor(random_number);
	target = num+1;
	
	while(!finished)
	{
	
		text = prompt("I am thinking of a number "+
                                  "in the range 1 to 100.\n\n"+
                                  "What is the number?");
		input = parseInt(text);
		
		guesses++;
		finished = check();
	}

}

function check()
{

	if(isNaN(input))
	{
		alert("You have not entered a Number\n\n"+"Please enter a number in the range 1 to 100");
		return false;
	}
	if((input < 0) || (input > 100))
	{
			alert("Please enter a number in the range 1 to 100");
			return false;
	}
	if(input < target)
	{
		alert("Entered number is small! Try again with a Larger Number");
		return false;
	}
	if(input > target)
	{
		alert("Entered number is large! Try again with a Smaller number");
		return false;
	}
    alert("CONGRATS!!!!\n\n"+"You got it! The number was " + target + 
          ".\n\nIt took you " + guesses + 
          " guesses to get the number!");
    return true;   

}