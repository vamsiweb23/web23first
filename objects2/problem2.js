//### **Problem-2 Grade Student Marks**

//- Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total

var obj=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]


for(var i=0; i<=obj.length-1; i++)
  {
    var max=-Infinity;
    var char=obj[i].students
     name=""
    for(var j=0; j<=char.length-1; j++)
      {
          if(max<checktotalsum(char[j].marks))
             {
              max=checktotalsum(char[j].marks)
              name=char[j].name
             }
      }
    console.log(obj[i].grade+"-"+name+"-"+max)
  }
function checktotalsum(vamsi)
  {
       var pri=0;
    for(var k=0; k<=vamsi.length-1; k++)
      {
         pri+=vamsi[k]
      }
    return pri
  }