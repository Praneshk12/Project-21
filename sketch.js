var canvas;
var music;
var box;
var tile1, tile2, tile3, tile4;
var tile5, tile6, tile7, tile8;
var tile9, tile10, tile11, tile12;
var tile13, tile14, tile15, tile16;

var gameState = PLAY;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    tile1 = createSprite(100, 600, 200,30);
    tile1.shapeColor = "red";

    tile2 = createSprite(tile1.x + 200,600,200,30);
    tile2.shapeColor = "cyan";

    tile3 = createSprite(tile2.x + 200,600,200,30);
    tile3.shapeColor = "yellow";

    tile4 = createSprite(tile3.x + 200,600,200,30);
    tile4.shapeColor = "lightgreen";

    tile5 = createSprite(5, 510, 20, 150);
    tile5.shapeColor = "pink";

    tile6 = createSprite(5, tile5.y - 150, 20, 150);
    tile6.shapeColor = "green";

    tile7 = createSprite(5, tile6.y - 150, 20, 150);
    tile7.shapeColor = "blue";

    tile8 = createSprite(5, tile7.y - 150, 20, 150);
    tile8.shapeColor = "white";

    tile9 = createSprite(115, 5, 200, 20);
    tile9.shapeColor = "gray";

    tile10 = createSprite(tile9.x + 200, 5, 200, 20);
    tile10.shapeColor = "brown";

    tile11 = createSprite(tile10.x + 200, 5, 200, 20);
    tile11.shapeColor = "teal";

    tile12 = createSprite(tile11.x + 200, 5, 200, 20);
    tile12.shapeColor = "purple";

    tile13 = createSprite(790, 50, 20, 200);
    tile13.shapeColor = "lightblue";

    tile14 = createSprite(790, tile13.y + 200, 20, 200);
    tile14.shapeColor = "violet";

    tile15 = createSprite(790, tile14.y + 200, 20, 200);
    tile15.shapeColor = "pink";

    tile16 = createSprite(790, tile15.y + 200, 20, 200);
    tile16.shapeColor = "white";

    //create box sprite and give velocity
    box = createSprite(random(50,750), 300);
    box.width = 20;
    box.height = 20;
    box.shapeColor = "white";
    box.velocityX = 7;
    box.velocityY = -7;
    
    
}

function draw() {
    background("black");
    //creating edges
    var edges = createEdgeSprites();
    
    //box bounces of all the tiles
    box.bounceOff(tile1) && box.bounceOff(tile2) && box.bounceOff(tile3) && box.bounceOff(tile4) && box.bounceOff(tile5) && box.bounceOff(tile6) && box.bounceOff(tile7) && box.bounceOff(tile8) && box.bounceOff(tile9) && box.bounceOff(tile10) && box.bounceOff(tile11) && box.bounceOff(tile12) && box.bounceOff(tile13) && box.bounceOff(tile14) && box.bounceOff(tile15) && box.bounceOff(tile16);

    //adding a  condition to check if box touching tiles then changing color
    if(box.isTouching(tile1) && box.bounceOff(tile1)) {
        box.shapeColor = tile1.shapeColor;
        
    }
    if(box.isTouching(tile2) && box.bounceOff(tile2)) {
        box.shapeColor = tile2.shapeColor;
        music.play();
    }
    if(box.isTouching(tile3) && box.bounceOff(tile3)) {
        box.shapeColor = tile3.shapeColor;
        music.play();
    }
    if(box.isTouching(tile3) && box.bounceOff(tile3)) {
        box.shapeColor = tile3.shapeColor;
    }
    if(box.isTouching(tile4) && box.bounceOff(tile4)) {
        box.shapeColor = tile4.shapeColor;
        music.play();
    }
    if(box.isTouching(tile5) && box.bounceOff(tile5)) {
        box.shapeColor = tile5.shapeColor;
    }
    if(box.isTouching(tile6) && box.bounceOff(tile6)) {
        box.shapeColor = tile6.shapeColor;
        music.play();
    }
    if(box.isTouching(tile7) && box.bounceOff(tile7)) {
        box.shapeColor = tile7.shapeColor;
    }
    if(box.isTouching(tile8) && box.bounceOff(tile8)) {
        box.shapeColor = tile8.shapeColor;
        music.play();
    }
    if(box.isTouching(tile9) && box.bounceOff(tile9)) {
        box.shapeColor = tile9.shapeColor;
    }
    if(box.isTouching(tile10) && box.bounceOff(tile10)) {
        box.shapeColor = tile10.shapeColor;
        music.play();
    }
    if(box.isTouching(tile11) && box.bounceOff(tile11)) {
        box.shapeColor = tile11.shapeColor;
    }
    if(box.isTouching(tile12) && box.bounceOff(tile12)) {
        box.shapeColor = tile12.shapeColor;
        music.play();
    }
    if(box.isTouching(tile13) && box.bounceOff(tile13)) {
        box.shapeColor = tile13.shapeColor;
    }
    if(box.isTouching(tile14) && box.bounceOff(tile14)) {
        box.shapeColor = tile14.shapeColor;
        music.play();
    }
    if(box.isTouching(tile15) && box.bounceOff(tile15)) {
        box.shapeColor = tile15.shapeColor;
        music.play();
    }
    if(box.isTouching(tile16) && box.bounceOff(tile16)) {
        box.shapeColor = tile16.shapeColor;
    }

drawSprites();
}
