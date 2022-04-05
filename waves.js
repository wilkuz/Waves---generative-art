function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES)
  colorPalette = [
    "#9b5de5",
    "#f15bb5",
    "#fee440",
    "#00bbf9",
    "#00f5d4"
  ]
  noLoop();
}

function draw() {
  const waves = 250;
  const amp = 250;
  const waveGap = 20;
  const thickness = 25;
  const randomness = 35;

  background(colorPalette[0]);
  strokeWeight(thickness)
  noFill();
  
  // for every wave defined by number of waves
  for (let i = 0; i < waves; i++) {
    let randomColor = randomInt(colorPalette.length-1);
    let strokeColor = colorPalette[randomColor]
    stroke(strokeColor);
    let waveRandomness = noise(i) * randomness

    translate(0, waveGap * noise(i))

    let direction = AddOrMin()
    
    beginShape()
      // draw vectors
      for (let i = 0; i < amp; i++) {
        let x = map(i, 0, amp, 0, width);
        let y = sin(i*2) * (50 * direction) - i*1.6
        y += (waveRandomness * direction)
        y += (sin(i) * 10 * direction);
        vertex(x, y)
      }
    endShape()
  }
  // save('imageName.jpg');
}

function AddOrMin() {
  return random() > 0.5 ? -1:1
}

function randomInt(n) {
  return Math.round(random(n))
}