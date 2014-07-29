function loadform()
{
  var xmlhttp;
  var URL;

  var id1=document.getElementById("selected").selectedIndex;

  if(id1==1)
  {
      URL="http://dev-mystique.tavisca.com/api/deals/all?token=twzlrvspgvmi05ww1er2v5l1&$filter=Type eq 'car'";
  }
  else if(id1==2)
  {
      URL="http://dev-mystique.tavisca.com/api/deals/all?token=twzlrvspgvmi05ww1er2v5l1&$filter=Type eq 'hotel'";
  }
  else if(id1==3)
  {
      URL="http://dev-mystique.tavisca.com/api/deals/all?token=twzlrvspgvmi05ww1er2v5l1&$filter=Type eq 'activity'";
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
						
							var cardivision = document.createElement("div");
							cardivision.id = "cdiv"+i;
							cardivision.style.border = "1px solid #1836CE";
							cardivision.style.width="600px"
							
							var cdetails = document.createElement("div");
							cdetails.style.background = "#FFFFFF";
							cdetails.style.color = "#232323";
							cardivision.appendChild(cdetails);
							
							var companyName = document.createElement("H2");
							companyName.style.color = "#1836CE";
							companyName.innerHTML = cars.rentalCompanyName;
							cdetails.appendChild(companyName);

							var cardesc = document.createElement("H3");
							cardesc.style.color = "#000";
							cardesc.innerHTML = cars.description;
							cdetails.appendChild(cardesc);

							var validityperoid = document.createElement("H4");
							validityperoid.style.color = "#000";
							validityperoid.innerHTML = "----Validity----";
							cdetails.appendChild(validityperoid);

							var validity = document.createElement("H5");
							validity.style.color = "#000";
							validity.innerHTML = cars.validityPeriod.start.date + ", " + cars.validityPeriod.start.time +" to " + cars.validityPeriod.end.date + ", " + cars.validityPeriod.end.time;
							cdetails.appendChild(validity);

							var carImage = document.createElement("img");
							carImage.src = cars.imageUrl;
							carImage.style.width="300px";
							carImage.style.height="200px";
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
							hoteldivision.style.border = "1px solid #1836CE";
							hoteldivision.style.width="600px"
							
							var hdetails = document.createElement("div");
							hdetails.style.background = "#FFFFFF";
							hdetails.style.color = "#232323";
							hoteldivision.appendChild(hdetails);
							
							var hotelName = document.createElement("H1");
							hotelName.style.color = "#1836CE";
							hotelName.innerHTML = hotels.hotelName;
							hdetails.appendChild(hotelName);

							var validityperoid = document.createElement("H4")
							var hoteldesc = document.createTextNode(hotels.description);
							hdetails.appendChild(hoteldesc);


							var validityperoid = document.createElement("H4");
							validityperoid.style.color = "#000";
							validityperoid.innerHTML = "----Validity----";
							hdetails.appendChild(validityperoid);

							var validity = document.createElement("H5");
							validity.style.color = "#000";
							validity.innerHTML = hotels.validityPeriod.start.date + ", " + hotels.validityPeriod.start.time +" to " + hotels.validityPeriod.end.date + ", " + hotels.validityPeriod.end.time;
							hdetails.appendChild(validity);

							var hotelImage = document.createElement("img");
							hotelImage.src = hotels.imageUrl;
							hotelImage.style.width="300px";
							hotelImage.style.height="200px";
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


