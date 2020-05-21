var x;
var y;

function setup() {
	createCanvas(1200, 800);
    background(0);
    
    x = width/2;
    y = height/2;
}

function draw() {
      
    stroke(255);
    strokeWeight(2);
    point(x,y);
    const ran = random(4);
    const r = floor(ran);
    console.log(ran,r);
    switch(r){
        case 0:
            x = x + 2;
            break;
        case 1:
            x = x - 2;
            break;
        case 2:
            y = y + 2;
            break;
        case 3:
            y = y - 2;
            break;
            
            
    }
}


