//Given an array find the unique items in the array

var vamsi=["vamsi","krishna","vasu","vamsi","vasu"]

var obj={};

for(var i=0; i<vamsi.length; i++)
  {
    var name=vamsi[i];
    obj[name]=1;
    
  }console.log(obj)