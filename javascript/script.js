const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 500;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if(!isDrawing) return; //stop fn from running when they are not moused down
  console.log(e);
  // ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  if((lastX >= e.offsetX) && (lastY >= e.offsetY)){
    ctx.lineWidth = 20;
    // ctx.strokeStyle = "blue"
  }else if((lastX >= e.offsetX) && (lastY <= e.offsetY)){
    // ctx.strokeStyle = "pink"
    ctx.lineWidth = 30;
  }else if((lastX <= e.offsetX) && (lastY <= e.offsetY)){
    // ctx.strokeStyle = "green"
    ctx.lineWidth = 15;
  }else if((lastX <= e.offsetX) && (lastY >= e.offsetY)){
    // ctx.strokeStyle = "purple"
    ctx.lineWidth = 10;
  }else{
    ctx.strokeStyle = "black";
  }
  [lastX, lastY] = [e.offsetX, e.offsetY]

  // if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
  //   direction = !direction
  // }

  // if(direction){
  //   ctx.lineWidth++;
  // }else{
  //   ctx.lineWidth--;
  // }


}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
