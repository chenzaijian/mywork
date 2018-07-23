window.onload=function(){
  banner();
	time();
	tabPage();
}
function  banner(){
var ul=document.querySelector(".jd_banner ul");
// console.log(ul)
var li=document.querySelectorAll(".jd_banner ul li");
// console.log(li)
var first=li[0];
var ol=document.querySelector(".jd_banner ol");
var points=document.querySelectorAll(".jd_banner ol li");

var setTransition=function(){
      ul.style.Transition="all .5s";
      ul.style.webkitTransition="all .5s";
}	
var removeTransition=function(){
      ul.style.Transition="none";
      ul.style.webkitTransition="none";
}	
var setPoints=function(){
    for(i=0;i<points.length;i++)
    	{  points[i].classList.remove("active");}
     points[flag-1].classList.add("active");

}	
var setTranslateX=function(step){
           ul.style.transform="translateX("+(-step)+"px)";
           ul.style.webkitTransform="translateX("+(-step)+"px)";

}
var flag=0;
// console.log(flag)
var width=first.offsetWidth;
// console.log(width)
var timer=setInterval(changeImage,1500);
function changeImage(){
         flag++;
        setTransition();
         setTranslateX(flag*width);
         // console.log(flag*width)
}
ul.addEventListener("webkitTransitionend",function(){
				if(flag>=9){
					flag=1;
				}       

				removeTransition();
				setTranslateX(flag*width)
				setPoints();
		});
		ul.addEventListener("transitionend",function(){
				if(flag>=9){
					flag=1;
				}
				removeTransition();
				setTranslateX(flag*width)
				setPoints();	
		});


}
function time(){
	var times=document.querySelectorAll(".jd_act_top  .time_box span");
	var total=3*60*60;  //3分钟
    var time_final=setInterval(function(){
		total--;
		var h=0;
		var m=0;
		var s=0;
		h = Math.floor(total/3600);

		m = Math.floor(total%3600)/60;

		s = Math.floor(total%60);

		times[0].innerHTML=Math.floor(h/10);
		times[1].innerHTML=Math.floor(h%10);  //小时

		times[3].innerHTML=Math.floor(m/10);
		times[4].innerHTML=Math.floor(m%10);    //分

		times[6].innerHTML=Math.floor(s/10);
		times[7].innerHTML=Math.floor(s%10);    //秒

        if(total<=0){
			clearInterval(time_final)
		}

	},1000)
}
function tabPage(){
	var tab= document.querySelector(".jd_header .jd_header_box  form  input");
	console.log(tab)
	tab.addEventListener("focus",function(){
		// 跳转搜索页面
		location.href ="./search.html";
	})

}

