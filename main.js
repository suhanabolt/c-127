song1=""
song2=""
function preload() 
{
    song1= loadSound("LejaRe.mp3")
    song2 = loadSound("Saanson.mp3")
}
function setup() {
    canvas=createCanvas(550,435)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
}
function draw()
{
image(video,0,0,550,435)
}
