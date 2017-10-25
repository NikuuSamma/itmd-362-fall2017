function checkform(form) 
{
	// get all the inputs within the submitted form
	var inputs = form.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) 
	{
		// only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required"))
		{
            if(inputs[i].value.length == 0)
			{
               document.getElementsByTagName('input')[i].style.backgroundColor="red";
			}
		}
	}
	return true;
}

var inputs = document.querySelectorAll('.label');

for (var j = 0; j < inputs.length; j++) 
{
    inputs[j].addEventListener('click', reset);
}
	
function reset()
{	
	document.getElementById(this.id).getElementsByTagName('input')[0].style.backgroundColor="white"; 
}


