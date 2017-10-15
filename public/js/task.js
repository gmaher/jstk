function Task(text,x,y,rgbBG,rgbText){
  this.text = text;
  this.x = x;
  this.y = y;
  this.backgroundColor = Color(rgbBG[0],rgbBG[1],rgbBG[2]);
  this.textColor = Color(rgbText[0],rgbText[1],rgbText[2]);

};
