function colorPicker()
{
//this function return a random color on every run
var hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
var colorcode="#";
for(var i=0;i<=5;i++)
	colorcode+=hex[Math.floor(hex.length*Math.random())];
return colorcode;
}
function getAge()
{
  return Math.round(80*Math.random());
}
function getProjects()
{
  return Math.round(100*Math.random());
}
function getFollowers()
{
  return Math.round(100000*Math.random());
}
export {colorPicker,getAge,getProjects,getFollowers};