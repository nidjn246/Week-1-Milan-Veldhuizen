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

  //6. de dobbelsteen
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

  //7. Mario hoofd
  fill ("red")
  rect (500, 50, 100, 20)
  rect (480, 70, 180, 20)
  fill (143,114,10)
  rect (480, 90, 60, 20)
  rect (500, 90, 20, 60)
  rect (460, 110, 20, 60)
  rect (460, 150, 40, 20)
  rect (520, 130, 20, 20)
  rect (580, 90, 20, 40)
  rect (600, 130, 20, 20)
  rect (580, 150, 80, 20)
  fill (212, 150, 104)
  rect (480, 110, 20, 40)
  rect (540, 90, 40, 100)
  rect (520, 110, 20, 20)
  rect (500, 150, 40, 40)
  rect (600, 90, 20, 40)
  rect (580, 130, 20, 20)
  rect (600, 110, 60, 20)
  rect (620, 130, 60, 20)
  rect (580, 170, 60, 20)

}