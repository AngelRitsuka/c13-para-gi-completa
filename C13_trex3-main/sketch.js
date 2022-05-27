var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var obstaculo;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  //imagem do chao
  //loadImage- carrega a imagem
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");

  //imagens dos cactos
  cacto1= loadImage("obstacle1.png");
  cacto2= loadImage("obstacle2.png");
  cacto3= loadImage("obstacle3.png");
  cacto4= loadImage("obstacle4.png");
  cacto5= loadImage("obstacle5.png");
  cacto6= loadImage("obstacle6.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  background(180);
  
  
  //trex pular
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  //gravidade- peso quando pular
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  criarCactos();

  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens4
  //framecount - quadros por segundo
  if (frameCount % 60 === 0) {
    //criando o sprite/personagem
    cloud = createSprite(600,100,40,10);
    //adicionando a imagem da niuvem
    cloud.addImage(cloudImage)
    //round - inteiro  / random - aleatotio
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

    //tempo de vida para as nuvens
    //largura da tela dividir pela velocidade do sprite
    cloud.lifetime = 200;

    }
}

function criarCactos(){
  if(frameCount %80 === 0){
    obstaculo = createSprite(500,160,20,20);
    obstaculo.velocityX = -4;
    obstaculo.scale = 0.7;
    obstaculo.lifetime = 150;

    //switch - troca as imagens
    var rand= Math.round(random(1,6));
    switch(rand){
      case 1: obstaculo.addImage(cacto1);
      break;
      case 2: obstaculo.addImage(cacto2);
      break;
      case 3: obstaculo.addImage(cacto3);
      break;
      case 4: obstaculo.addImage(cacto4);
      break;
      case 5: obstaculo.addImage(cacto5);
      break;
      case 6: obstaculo.addImage(cacto6);
      break;
      default: break;
    }

  }

}