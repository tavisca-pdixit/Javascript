function loadform()
{
  var xmlhttp;
  var URL;

  var id1=document.getElementById("selected").selectedIndex;

  if(id1==1)
  {
      URL="http://dev-mystique.tavisca.com/api/deals/all?token=kyplspylcluqn3r2atlsdzw0&$filter=Type eq 'car'";
  }
  else if(id1==2)
  {
      URL="http://dev-mystique.tavisca.com/api/deals/all?token=kyplspylcluqn3r2atlsdzw0&$filter=Type eq 'hotel'";
  }

  var parent = document.getElementById('containerDisp');
  while ( parent.firstChild ) 
  		parent.removeChild( parent.firstChild );

  	xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
      	if (xmlhttp.readyState==4 && xmlhttp.status==200)
      	{
        	document.getElementById("mytext").innerHTML=xmlhttp.responseText;
			var result =JSON.parse(xmlhttp.responseText);
			switch(id1){

				case 1:
					
					var count1 = result.deals.length;
					for(var i = 0;i<count1;i++)
					{
							var cars = result.deals[i];
						
							var cardivision = document.createElement('div');
							cardivision.id = "cdiv"+i;
							cardivision.className='cardivision1';
							
							var cdetails = document.createElement("div");
							cdetails.className='cardetails';
							cardivision.appendChild(cdetails);
							
							var companyName = document.createElement("H2");
							companyName.className='name';
							companyName.innerHTML = cars.rentalCompanyName;
							cdetails.appendChild(companyName);

							var cardesc = document.createElement("H3");
							cardesc.className='cardescription';
							cardesc.innerHTML = cars.description;
							cdetails.appendChild(cardesc);

							var validityperoid = document.createElement("H4");
							validityperoid.className='validity1';
							validityperoid.innerHTML = "----Validity----";
							cdetails.appendChild(validityperoid);

							var validity = document.createElement("H5");
							validity.className='validity2';
							validity.innerHTML = cars.validityPeriod.start.date + ", " + cars.validityPeriod.start.time +" to " + cars.validityPeriod.end.date + ", " + cars.validityPeriod.end.time;
							cdetails.appendChild(validity);

							var carImage = document.createElement("img");
							carImage.src = cars.imageUrl;
							carImage.className='imageclass';
							
							cardivision.appendChild(carImage);
							document.getElementById("containerDisp").appendChild(cardivision);
					}
					break;

				case 2:
					var count2 = result.deals.length;
					for(var j = 0;j<count2;j++)
					{
							var hotels = result.deals[j];
							
							var hoteldivision = document.createElement("div");
							hoteldivision.id = "hdiv"+j;
							hoteldivision.className='hoteldivision1';
							
							var hdetails = document.createElement("div");
							hdetails.className='hoteldetails';
							hoteldivision.appendChild(hdetails);
							
							var hotelName = document.createElement("H1");
							hotelName.className='name';
							hotelName.innerHTML = hotels.hotelName;
							hdetails.appendChild(hotelName);

							var hoteldesc = document.createTextNode(hotels.description);
							hdetails.appendChild(hoteldesc);

							var validityperoid = document.createElement("H4");
							validityperoid.className='validity1';
							validityperoid.innerHTML = "----Validity----";
							hdetails.appendChild(validityperoid);

							var validity = document.createElement("H5");
							validity.className='validity2';
							validity.innerHTML = hotels.validityPeriod.start.date + ", " + hotels.validityPeriod.start.time +" to " + hotels.validityPeriod.end.date + ", " + hotels.validityPeriod.end.time;
							hdetails.appendChild(validity);

							var hotelImage = document.createElement("img");
							hotelImage.className='imageclass';
							hotelImage.src = hotels.imageUrl;
							hoteldivision.appendChild(hotelImage);
							document.getElementById("containerDisp").appendChild(hoteldivision);
					}
					break;
			}
    	}
    }
  
  xmlhttp.open("GET",URL,true);
  xmlhttp.send();
}
