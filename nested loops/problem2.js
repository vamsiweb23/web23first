//Print the Calendar date in the below format

for(var month=1; month<=12; month++)
  {
    var days=30;
    if(month==2)
    {
      days=28;
    }
    else if(month==3 || month==5 || month==7|| month==8 || month==11)
    {
      days=31
    }
    for(var day=1; day<=days; day++)
      {
        console.log("month","-",month,"---",day,"day")
      }
  }