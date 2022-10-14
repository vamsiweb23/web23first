//Problem 2: Print Prime Numbers from 1 to given limit
for(var i=1; i<=100; i++)
  {
    var factor=0;
    for(var j=1; j<=i; j++)
      {
        if(i%j==0)
        {
          factor++;
        }
      }
  
if(factor==2)
{
  console.log(i,"is a prime number")
}
    else
{
  console.log(i,"is not a prime number")
}
    
    
  }