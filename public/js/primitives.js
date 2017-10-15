function Color(r,g,b){
  this.r = r;
  this.g = g;
  this.b = b;
}

function Rectangle(x,y,w,h,rgb){
  this.topLeftX = x;
  this.topLeftY = y;
  this.height = h;
  this.width = w;
  this.color = Color(rgb[0],rgb[1],rgb[2]);
}

function TextPrim(x,y,text,rgb){
  this.topLeftX = x;
  this.topLeftY = y;
  this.text = text;
  this.color = Color(rgb[0],rgb[1],rgb[2]);
}
