//Given a string count the number of words in that string

var str="vamsi is good boy";
var count=0
if(str.length>0)
{
for(var i=0;i<str.length;i++)
  {
    if(str[i]==" ")
    {
      count++;
    }
  }
}
console.log(count+1)