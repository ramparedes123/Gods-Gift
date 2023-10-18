
function send()
{
	if (validate() == false)
	{
		return;
	}

	if (validateRadio()==false)
	{
		alert("You have to select a size");
	}
	if (validatePaymentMethod() == false)
	{
		alert("You have to choose a payment method");
	}

	alerrt("Your order has been sent.");
}


function checkForm()
{
	var e1 = document.CompanyForm.elements.lenght;
	var txt = "";

	for (i=0; i<e1; i++)

{
	var type = CompanyForm.elements[i].type;

	if (type=="radio" && CompanyForm.elements[i].checked)

	{
		txt = txt + CompanyForm.elements[i].value+"<br>";
	}
	if (type=="text" && CompanyForm.elements[i].checked)

	{
		txt = txt + CompanyForm.elements[i].value+"<br>";
	}
	if (type=="select-one")
	{
		var e = document.getElementById("sel");
		var strUser = e.options[e.selectedIndex].text;
		txt = txt + "Amount:" + e.options[e.selectedIndex].text +"<br>";
	}

  }
	document.getElementById("lblValues").innerHTML = txt;
}