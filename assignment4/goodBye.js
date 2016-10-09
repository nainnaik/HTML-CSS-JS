var byeSpeaker={};
	var speakWord="Good Buy";
	byeSpeaker.name=['ja','may','feb','jan','april'];
	byeSpeaker.speak=function(){
		for(var name in byeSpeaker.name){
 			if(byeSpeaker.name[name].charAt(0) !=='j'){
 			console.log(speakWord + " " + byeSpeaker.name[name]);
			}
			
		}
	}

			
		window.byeSpeaker=byeSpeaker;
