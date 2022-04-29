function calcSI()
{   
  //To get the values from user submission and to calculate SI
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var tenure = document.getElementById("tenure").value;
  
  //SI Calculation formula
    var Interest = principal*tenure*rate/100;
  
  //Getting the current year from the date function and adding the number of years by converting the number received by user input NoYears as Integer 
  var year = new Date().getFullYear()+parseInt(tenure);
  
  //Checking condition for valid number input as Principal amount
  if(principal == undefined || principal <= 0)
  {
        alert("Enter a Positive Number");
        document.getElementById("principal").focus();
        
        return
    }
    
    else
    {
      
        // Display the result in the span result section with the calculated values
        var Ftext = "For a deposit amount of <mark>" + principal +",</mark><br>";
        var Stext = "@ Interest Rate of <mark>"+ rate +" %,</mark><br>";
        var Ttext = "for <mark>"+ tenure +"year(s),</mark><br>"
        var Fotext="You will receive an amount of <mark>" +Interest + ",</mark><br>"
        var Fitext ="in the year <mark>"+year +"</mark>";

        document.getElementById("result").innerHTML=Ftext+Stext+Ttext+Fotext+Fitext;

    }
 }

//To update the Rate value as per slider change
   function UpdateRate() 
{
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue;
}