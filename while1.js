function new_table(z)
{
txt=document.querySelector("textarea");
 z=txt.value;
  
  t=document.createElement("table");
  t.border=1;
  for(x=0;x<z;x++) 
  {
  tr=document.createElement("tr");
  
  
  for(y=0;y<z;y++)
  {
  td=document.createElement("td");
  td.innerHTML=x+"."+y;
  tr.append(td);
  }
  t.append(tr);
  }
document.body.append(t);}
  new_table(10)


function new_f()
  
  {txt=document.querySelector("textarea");
   liv=txt.value;
   
   for(y=0;y<liv.length;y++)
   {
   a=document.createElement("div");
   a.innerHTML=liv[y];
   document.body.append(a);}
   }
   
   	
	
	window.onload=function() {
	console.log("ОКНО ЗАГРУЖЕНО!");
	
	}
	console.log("СКРИПТ ЗАПУЩЕН");
	window.DOMContentLoaded = function() {
	console.log("DOMContentLoaded");
	}
	
	main_div=document.querySelector('div');
	main_div.onmousedown=function(e)
	{
		main_div.onmousemove=function(e)
		{div=document.createElement('div')
		div.style.left=e.clientX+"px";
		div.style.top=e.clientY+"px";
		
		main_div.append(div);}
		}
		main_div.onmouseup=function(e)
		{main_div.onmousemove=0;}
		
		
		//main_div.onmousemove=function(e){stop();