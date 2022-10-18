var vamsi="aaaabbbbcccdddvvveee"

var obj={};

for(var i=0; i<vamsi.length; i++)
  {
    var name=vamsi[i];
    if(obj[name]==undefined)
    {
    obj[name]=1;
    }
    else
    {
      obj[name]++
    }
    
  }console.log(obj)