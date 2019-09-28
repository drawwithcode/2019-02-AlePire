function preload(){
  // put preload code here
}

var colorList1 = ['#FFFFFF',
 '#B670B8',
 '#E9385E',
 '#FFD400',
 '#4FCAE3'
];

var colorList2 = ['#F3FFBD',
 '#247BA0',
 '#70C1B3',
 '#B2DBBF',
 '#FF1654'
];

var colorList3 = ['#E63946',
 '#F1FAEE',
 '#A8DADC',
 '#457B9D',
 '#1D3557'
];

var colorList4 = ['#20BF55',
 '#0B4F6C',
 '#01BAEF',
 '#FBFBFF',
 '#757575'
];

function setup() {

}

function draw() {
  createCanvas(windowWidth,windowHeight);
  frameRate(10);
  background("#000000")
  noStroke();


      for(var y = 10; y < windowHeight; y += 10)
      {
      for(var x = 10; x < windowWidth; x += 10)
      {

      if(mouseX < windowWidth/2 && mouseY < windowHeight/2){
        var index = (floor(random() * colorList1.length));
        var colorHex = colorList1[index];
        fill(color(colorHex));
      }

      else if(mouseX > windowWidth/2 && mouseY < windowHeight/2){
        var index = (floor(random() * colorList2.length));
        var colorHex = colorList2[index];
        fill(color(colorHex));
      }

      else if(mouseX < windowWidth/2 && mouseY > windowHeight/2){
        var index = (floor(random() * colorList3.length));
        var colorHex = colorList3[index];
        fill(color(colorHex));
      }

      else if(mouseX > windowWidth/2 && mouseY > windowHeight/2){
        var index = (floor(random() * colorList4.length));
        var colorHex = colorList4[index];
        fill(color(colorHex));
      }

        ellipse(x-5,y-5,10,10);
      }
    }
}
