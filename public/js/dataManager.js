/*
DataNode class
*/
function DataNode(name, data, parent=NONE){
  this.name = name;
  this.data = data;
  this.children = [];
  this.modified = true;
  if (parent){
    this.parent = parent;
    parent.children.push(this);
  }

};

DataNode.prototype.setInteractor = function(interactor){
  this.interactor = interactor;
}

DataNode.prototype.setMapper = function(mapper){
  this.mapper = mapper;
}
/*
Data Manager class
*/
function dataManager(){
  this.dataNodes = {}
};

DataManager.prototype.addDataNode = function(node){
  if (this.dataNodes[node.name]){
    return;
  }else {
    this.dataNodes[node.name] = node
  }
};

DataManager.prototype.getDataNode = function(name) {
  if (this.dataNodes[name]){
    return this.dataNodes[name];
  }else {
    return NONE;
  }
};

DataManager.prototype.filter = function(predicate){
  results = [];
  Object.keys(this.dataNodes).forEach(function(key,index){
      if (typeof(this.dataNodes[key]) == "DataNode"){
        if(predicate(this.dataNodes[key])){
            results.push(this.DataNodes[key])
        }
      }
  });
  return results
};

DataManager.prototype.getAll = function(){
  return this.filter(x => x);
};
