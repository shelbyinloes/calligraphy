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
  // console.log(e);
  // ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  changeWidth(e);
  [lastX, lastY] = [e.offsetX, e.offsetY]

}

function changeWidth(e){
  const newX = Math.ceil(e.offsetX/10);
  const newY = Math.ceil(e.offsetY/10);
  const newLastX = Math.ceil(lastX/10);
  const newLastY = Math.ceil(lastY/10);
  console.log(newX, newY)
  console.log(newLastX, newLastY)

  // if((newLastX > newX) && newLastY > newY){
  //   ctx.strokeStyle = "black";
  // }

  if((newLastX > newX) && (newLastY > newY)){
    if(ctx.lineWidth == 20){
      return;
    }else if(ctx.lineWidth < 20){
      ctx.lineWidth++
    }else if(ctx.lineWidth > 20){
      ctx.lineWidth--
    }
    // ctx.strokeStyle = "blue"
  }else if((newLastX > newX) && (newLastY < newY)){
    if(ctx.lineWidth == 30){
      return
    }if(ctx.lineWidth < 30){
      ctx.lineWidth++
    }
    // ctx.strokeStyle = "pink"
  }else if((newLastX < newX) && (newLastY < newY)){
    // ctx.strokeStyle = "green"
    if(ctx.lineWidth == 15){
      return;
    }else if(ctx.lineWidth < 15){
      ctx.lineWidth++
    }else if(ctx.lineWidth > 15){
      ctx.lineWidth--
    }
  }else if((newLastX < newX) && (newLastY > newY)){
    // ctx.strokeStyle = "purple"
    if(ctx.lineWidth == 10){
      return
    }if(ctx.lineWidth < 10){
      ctx.lineWidth--
    }
  }


}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
