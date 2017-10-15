function Mapper(dataNode){
  this.dataNode = dataNode;
  this.dataNode.setMapper(this);
  this.primitives = this.getPrimitives();
};

Mapper.prototype.updatePrimitives = function(){
  this.primitives = [];
}

Mapper.prototype.getPrimitives = function(){
  if (this.dataNode.modified){
    this.updatePrimitives();
    this.dataNode.modified = false;
  }
  return this.primitives;
};

/*
* Task Mapper Class
*/
function TaskMapper(dataNode){
  Mapper.call(this, dataNode);

  this.r = Rectangle(0,0,0,0);
  this.s = TextPrim(0,0,"");
  this.primitives = [this.s,this.r];

  this.updatePrimitives = function(){
    d = this.dataNode.data;
    this.r.topLeftX = d.x;
    this.r.topLeftY = d.y;
    this.r.width = d.width;
    this.r.height = d.height;
    this.r.color = d.backgroundColor;

    this.s.topLeftX = d.x;
    this.s.topLeftY = d.y;
    this.s.text = d.text;
    this.s.text.color = d.textColor;
  }
}
