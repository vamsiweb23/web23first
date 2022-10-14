//Given a string in lower case convert it to upper case

var  str="vamsi";
var lower="abcdefghijklmnopqrstuvwxyz";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var bag="";
for(var i=0; i<str.length; i++)
  {
    let char=str[i]
    for(var j=0; j<lower.length; j++)
      {
        if(char==lower[j])
        {
          bag=bag+upper[j]
          break;
        }
      }
  }
console.log(bag)