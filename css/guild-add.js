if (document.images) { 

	dm_off= new Image(118,82); 
	dm_off.src= 'dm-off.gif'; 

	dm_ovr= new Image(108,66); 
	dm_ovr.src= 'dm-ovr.gif'; 

	dm_act = new Image(118,82);
	dm_act.src = 'dm-act.gif';



        gallery_off= new Image(116,37); 
	gallery_off.src= 'gallery-off.gif'; 

	gallery_ovr= new Image(116,37); 
	gallery_ovr.src= 'gallery-ovr.gif'; 

	gallery_act = new Image(116,37);
	gallery_act.src = 'gallery-act.gif';
	

	
        videos_off= new Image(118,82); 
	videos_off.src= 'videos-off.gif'; 

	videos_ovr= new Image(118,82); 
	videos_ovr.src= 'videos-ovr.gif'; 

	videos_act = new Image(118,82);
	videos_act.src = 'videos-act.gif';



        chat_off= new Image(118,82); 
	chat_off.src= 'chat-off.gif'; 

	chat_ovr= new Image(118,82); 
	chat_ovr.src= 'chat-ovr.gif'; 

	chat_act = new Image(118,82);
	chat_act.src = 'chat-act.gif';
	
	
        classes_off= new Image(118,82); 
	classes_off.src= 'classes-off.gif'; 

	classes_ovr= new Image(118,82); 
	classes_ovr.src= 'classes-ovr.gif'; 

	classes_act = new Image(118,82);
	classes_act.src = 'classes-act.gif';
	
	
	
        site_off= new Image(118,82); 
	site_off.src= 'site-off.gif'; 

	site_ovr= new Image(118,82); 
	site_ovr.src= 'site-ovr.gif'; 

	site_act = new Image(118,82);
	site_act.src = 'site-act.gif';

function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 


function mouseClick(myImgName) { 
document[myImgName].src=eval(myImgName+ '_act' ).src; } 
}

