function Interactor(dataNode){
  this.dataNode = dataNode;
  this.dataNode.setInteractor(this);

  this.state = "start";
};

Interactor.prototype.handleEvent = function(e){
  return ;
};

function Draggable(dataNode){
  Interactor.call(this,dataNode);
};

Draggable.prototype.handleClick = function(e){

};

Draggable.prototype.handleMove = function(e){

};

Draggable.prototype.handleRelease = function(e){

};
