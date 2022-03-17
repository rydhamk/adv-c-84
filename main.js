canvas = document.getElementById('mycanvas');
ctx = canvas.getcontext("2d")

rover_width = 100;
rover_heigth = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
 background_imgtag = new Image();   
background_imgtag.onload = uploadbackground;
background_imgtag.src = background_image;

rover_imgtag = new Image();   
rover_imgtag.onload = uploadrover;
rover_imgtag.src = rover_image;
}

function uploadbackground() {
ctx.drawimage(background_imgtag,0,0,canvas.width,canvas.heigth);
}

function uploadrover() {
ctx.drawimage(rover_imgtag,rover_x,rover_y.rover_width,rover_heigth)
}


window.addEventListener("keydown",my_keyboard)

function my_keyboard(e)
{
keypressed = e.keycode;
console.log(keypressed);
if(keypressed == '38')
{
  up();
  console.log("up");
}
if(keypressed == '40')
 {
  down();
  console.log("down");
 }
 if(keypressed == '37')
{
    left();
    console.log("left");
}
if(keypressed == '39')
{
    right();
    console.log("right");
}
}
p
function up()
{
   if(rover_y >=0)
    {
     rover_y = rover_y - 10;
     console.log("when up arrow is pressed, x = " + rover_x + " | y ="  rover_y);
      uploadbackground();
       uploadrover();
    }
}
function down()
{
    if(rover_y >=500)
     {
      rover_y = rover_y - 10;
      console.log("when up arrow key is pressed, x = " + rover_x + " | y ="  rover_x);
       uploadbackground();
        uploadrover();
     }
    }
    function left ()
    {
        if(rover_y >=0)
         {
          rover_y = rover_y - 10;
          console.log("when up arrow key is pressed, x = " + rover_x + " | y ="  rover_y);
           uploadbackground();
            uploadrover();
         }
        }
        function right ()
        {
            if(rover_y >=700)
             {
              rover_y = rover_y - 10;
              console.log("when up arrow key is pressed, x = " + rover_x + " | y ="  rover_y);
               uploadbackground();
                uploadrover();
             }
            }