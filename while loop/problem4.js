//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let start=1;
sum=0;
for(let start=1;start<=100;start++){
  if (start%2==0){
    sum=sum+start;
  }
  console.log(sum);
}