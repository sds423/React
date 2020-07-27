function billingFunction(){

	if(same.checked)
	{
		

		document.querySelector("#billingName").value=document.querySelector("#shippingName").value;   //these lines will copy the above values to the billing address and billing zip
		document.querySelector("#billingZip").value=document.querySelector("#shippingZip").value;  
	}

	else
	{
		document.querySelector("#billingName").value="";//if it is not checked,we are giving empty values.
		document.querySelector("#billingZip").value="";
	}
}