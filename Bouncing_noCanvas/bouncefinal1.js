var e= document.getElementById("btn-click");
var ball;
var dx= new Array();
var dy= new Array();
var x;
var y;
maxValue_x = window.innerWidth-60;
maxValue_y = window.innerHeight-60;
var i=0;
var min=0;
var max=0;

var create = function()
{
	this.min_x = Math.floor((Math.random()*maxValue_x)+1);
	this.min_y = Math.floor((Math.random()*maxValue_y)+1);
	this.id=i;
	this.add=create_add.call(this);
}

var moveBall = function()
{
	
	for(var f=0;f<i;f++)
	{
		debugger;
		var balldiv = document.getElementById("div"+f);
		maxValue_x = window.innerWidth-60;
		maxValue_y = window.innerHeight-60;
		x = parseInt(balldiv.style.left,10);
        y = parseInt(balldiv.style.top,10);
		x+=dx[f];
		y+=dy[f];
		//checkBoundaries();
		if (x>maxValue_x || x<min )
		{
			dx[f]=-dx[f];
		}

		if (y>maxValue_y || y<max)
		{
			dy[f]=-dy[f];
		}

		balldiv.style.left = x + "px";
		balldiv.style.top  = y + "px";
	}
}

var create_add = function()
{
	
	var div_tag=document.createElement("div");
	div_tag.id="div"+i;
	//i++;
	dx[i]=Math.floor((Math.random()*10)+1);
	dy[i]=Math.floor((Math.random()*10)+1);
	i++;
	div_tag.style.background="#000";
	div_tag.style.position="absolute";
	debugger;
	div_tag.style.left=this.min_x+"px";
	div_tag.style.top=this.min_y+"px";
	div_tag.style.width="30px";
	div_tag.style.height="30px";
	div_tag.style.borderRadius="50%";
	document.body.appendChild(div_tag);
	
	
}

e.onclick = function()
{
	var ball = new create();	

}

var begin = function()
{
	setInterval(moveBall,40);
}

