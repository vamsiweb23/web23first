//- Given a list of user data with name and age, create a list of key-value pairs from the input
//- From the generated data, print the users whose age is more than 30

var obj=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]

var bag=""
//console.log(obj)
for(var i=0; i<=obj.length-1; i++)
  {
    var char=obj[i]
        if(char["age"]>30)
        {
          bag=bag+char["name"]+" "
        }
  }
console.log(bag)