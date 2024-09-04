function setup() {
  createCanvas(700, 600);
}

function draw() {
  background(0, 120, 0);
  //1. alle nummers/naam
  fill (0)
  text ("1. Milan Veldhuizen", 5, 20)
  text ("2.", 5, 50)
  text ("3.", 5, 170)
  text ("4.", 5, 350)
  text ("5.", 220, 50)
  text ("6.", 220, 320)
  text ("7.", 420, 50)
  fill ("red")
  text ("Mario", 440, 50)

  //2. de vlag
  strokeWeight (0)
  fill ("red")
  rect (30, 40, 100, 30)
  fill (255)
  rect (30, 70, 100, 30)
  fill ("blue")
  rect (30, 100, 100, 30)

  //3. het schaakbord
  strokeWeight (2)
  fill (255)
  square (30, 170, 150)
  fill (0)
  strokeWeight (0)
  square (30, 170, 50)
  square (30, 270, 50)
  square (130, 170, 50)
  square (130, 270, 50)
  square (80, 220, 50)

  //4. het huisje
  strokeWeight (1)
  fill (0, 120, 0)
  triangle(30, 420, 170, 420, 100, 350)
  square (30, 420, 140)

  //5. Stoplicht
  strokeWeight (0)
  fill ("grey")
  rect (240, 50, 50, 150)
  rect (257, 200, 15, 80)
  fill ("red")
  circle(264, 75, 35)
  fill ("orange")
  circle(264, 120, 35)
  fill ("lime")
  circle(264, 170, 35)

  //de dobbelsteen
  fill (255)
  strokeWeight (5)
  square(230, 330, 150, 20)
  strokeWeight (0)
  fill (0)
  circle (260, 360, 25)
  circle (340, 360, 25)
  circle (300, 410, 25)
  circle (260, 450, 25)
  circle (340, 450, 25)

  //Mario
}


