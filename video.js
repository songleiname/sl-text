(function(){
	var btn = document.getElementById("button")
	btn.onclick = function playpause(){
		var a = document.getElementById("longzhu")
		if (a.paused) {
			a.play()
		} else{
			a.pause()
		}
		console.log(longzhu.currentSrc)
	}
	var yinliang = document.getElementById("muted");
	yinliang.onclick = function muted(){
		var b = document.getElementById("longzhu");
		if (b.muted == false) {
			b.muted=true;
		} else{
			b.muted=false;
		}
	}
	var big= document.getElementById("big");
	big.onclick = function big(){
		var c = document.getElementById("longzhu");
		 c.width = 800;
		 c.height = 500;
	}
	
	
	/*var btn1 = document.getElementById("button")
	btn1.onclick = function playpause(){
		console.log("play")
	}*/
	var btn1 =document.getElementById("longzhu")
	btn1.onplay = function (){
		document.getElementById("img").style.display="none" 
	}
	var btn1 =document.getElementById("longzhu")
	btn1.onpause = function (){
		document.getElementById("img").style.display="block" 
	}
	
	/*var btn2 = document.getElementById("longzhu")*/
	/*btn2.onseeking = function(){
		document.getElementById("img").style.display="block"
	}
	var btn3 = document.getElementById("longzhu")*/
	/*btn3.onseeked = function(){
		document.getElementById("img").style.display="block"
	}*/
	
	/*var btn4 = document.getElementById("longzhu")
	btn4.ontimeupdate = function(){
		console.log("ontimeupdate")		
	}
	
	btn4.addEventListener("loadeddata",function(){
			console.log('loadeddata')
			console.log('btn4.currentTime=10')
			
	})*/
	
	
	
//		btn4.poster="1.gif"
		
	var video = document.getElementById('longzhu')
	video.ontimeupdate = function(){
		document.getElementById("shijian").innerHTML=Math.floor(video.currentTime)/100
		document.getElementById("zsj").innerHTML=Math.floor(video.duration)/60.569
		console.log('video.playbackRate')
	}
	
	var playbackRate =document.getElementById('playbackRate')
	playbackRate.onclick = function(){
		video.playbackRate = 10;

	}
			video.loop = true;
}(window))
