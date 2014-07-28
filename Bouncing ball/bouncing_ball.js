var context;
     var posX = 100;
     var posY = 200;
     var dx = 5;
     var dy = 5;

     function bouncyBall()
     {
         var canvas = document.getElementById("circleCanvas");
         context = canvas.getContext('2d');
         setInterval(draw, 10);
     }

     function draw()
     {
         context.clearRect(0, 0, 800, 600);
         context.beginPath();
         context.fillStyle = "red";
         context.arc(posX, posY, 20, 0, Math.PI * 2, true);
         context.closePath();
         context.fill();
         if (posX < 0 || posX > 800) dx = -dx;
         if (posY < 0 || posY > 600) dy = -dy;
         posX = posX + dx;
         posY = posY + dy;  
    }

