function setup() {
    createCanvas(800, 400);
   frameRate(7)}
  //set up canvas
  function draw() {
    background(220);
  //draw background
     
    // Set the center coordinates and radius of the bike tire to align with mouse position.
    let centerX = 250;
    let centerY = 250;
    let radius = min(100, 200) / 2;
  
    // Define the number of segments
    let numSegments = 6;
  
    // Set the fill color for each segment randomly -cribbed code from ChatGPT to create tire effect, could not otherwise figure out how to segment and color bike tires.
    for (let i = 0; i < numSegments; i++) {
      fill(random(255), random(255), random(255));
      segment(centerX, centerY, radius, i, numSegments);
    }
  }
  
  // Function to draw a segment of the divided circle -cribbed code from ChatGPT to create tire effect, could not otherwise figure out how to segment and color bike tires.
  function segment(centerX, centerY, radius, index, totalSegments) {
    let angle = TWO_PI / totalSegments;
    let startAngle = index * angle;
    let endAngle = (index + 1) * angle;
  
    beginShape();
    vertex(centerX, centerY);
    arc(centerX, centerY, radius, radius, startAngle, endAngle);
    endShape(CLOSE);
  //back wheel  
    beginShape();
    vertex(centerX+140, centerY);
    arc(centerX+140, centerY, radius, radius, startAngle, endAngle);
    endShape(CLOSE);
  //front wheel
    
    strokeWeight(5)
    beginShape(LINES)
    vertex(centerX,centerY)
    vertex(centerX+70,centerY)
    //chain
    vertex(centerX+70,centerY-50)
    vertex(centerX,centerY)
    //back frame bar
    vertex(centerX+70,centerY-50)
    vertex(centerX+126,centerY-50)
    //center frame
    vertex(centerX+120,centerY-90)
    vertex(centerX+140,centerY)
    //front frame bar
    vertex(centerX+126,centerY-50)
    vertex(centerX+70,centerY)
    //front triangle
    vertex(centerX+70,centerY-80)
    vertex(centerX+70,centerY)
    //seat bar
    vertex(centerX+115,centerY-65 )
    vertex(centerX+125,centerY-110)
    //handle bars
    endShape()
    
    ellipseMode(CORNER)
    fill(229,184,166)
    noStroke(200,40,22)
  
    ellipse(centerX+56,centerY-105,65,15)
    ellipse(centerX+56,centerY-80,65,15)
    //arm
      ellipse(centerX+115,centerY-80,5,15)
      ellipse(centerX+120,centerY-108,5,15)
    //hand
    fill(120,81,169)
    rect(centerX+55,centerY-100,30,60)
    //for every x/y within the square put a dot of a random color
    fill(233,30)
    //body
    fill(229,184,166)
    circle(centerX+52,centerY-135,35)
    //face
    fill(255)
    ellipse(centerX+81,centerY-122,5,4)
    fill(94,48,26)
    ellipse(centerX+82.5,centerY-121,2)
    //eyeball
    fill(180,60,60)
    ellipse(centerX+82.5,centerY-113,4,2)
    //mouth
    fill(94,48,26)
    beginShape(TESS)
      curveVertex(centerX+88,centerY-130)
      curveVertex(centerX+78,centerY-137)  
      curveVertex(centerX+63,centerY-135)
      curveVertex(centerX+57,centerY-133)
      curveVertex(centerX+55,centerY-130)
      curveVertex(centerX+50,centerY-125)
      curveVertex(centerX+50,centerY-120)
      curveVertex(centerX+48,centerY-110)
      curveVertex(centerX+48,centerY-85)
      curveVertex(centerX+70,centerY-90)
      vertex(centerX+80,centerY-120)
      endShape(CLOSE)
      //hair
    fill(0)
    beginShape(TESS)
      curveVertex(centerX+88,centerY-130)
      curveVertex(centerX+78,centerY-140)  
      curveVertex(centerX+50,centerY-137)
      curveVertex(centerX+45,centerY-127)
      curveVertex(centerX+45,centerY-120)  
      curveVertex(centerX+45,centerY-115)  
      curveVertex(centerX+50,centerY-110)
      endShape(CLOSE)
    //helmet
    fill(39, 60, 117)
    ellipse(centerX+52,centerY-40,30,55)
    //legs
    fill(0)  
    ellipse(centerX+58,centerY+10,30,15)
    //foot
    stroke(255)
    strokeWeight(1)
    line(centerX+75,centerY+21,centerX+80,centerY+16)
    line(centerX+70,centerY+20,centerX+75,centerY+15)
    line(centerX+65,centerY+19,centerX+70,centerY+14)
      //shoe
    strokeWeight(5)
    stroke(200,40,22)
    fill(233,30)
     
    ellipseMode(CENTER)  
    stroke(0)
    //body
  
    }
  
  
  
  // things I would have done if I had the time or tehcnial expertise:
  //make his leg move up and down as he moves left and right?
  //make music notes come out of the bike? (drew  music notes could not figure out the writing of the array to have them emerge from the center of the bike and float away)
  //make the shirt appear tyedye?
  
  //attempted to make him travel on his own across the page but could not figure it out - was either stationary at the far right of screen 
  //for (var centerX = 0; centerX <= width; centerX+=50){centerX = centerX +1}
  //or if adding a 'offset' functin per coding train video 4.2 created perpetually out of line wheels. see:https://editor.p5js.org/brooklynhumanist/sketches/6fnwAPE2_
  