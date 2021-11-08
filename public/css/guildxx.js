if (document.images) { 

	home_off= new Image(118,82); 
	home_off.src= '../../menu_buttons/home-off.gif'; 

	home_ovr= new Image(108,66); 
	home_ovr.src= '../../menu_buttons/home-ovr.gif'; 

	home_act = new Image(118,82);
	home_act.src = '../../menu_buttons/home-act.gif';



        announce_off= new Image(116,37); 
	announce_off.src= '../../menu_buttons/announcements-off.gif'; 

	announce_ovr= new Image(116,37); 
	announce_ovr.src= '../../menu_buttons/announcements-ovr.gif'; 

	announce_act = new Image(116,37);
	announce_act.src = '../../menu_buttons/announcements-act.gif';
	

	
        events_off= new Image(118,82); 
	events_off.src= '../../menu_buttons/events-off.gif'; 

	events_ovr= new Image(118,82); 
	events_ovr.src= '../../menu_buttons/events-ovr.gif'; 

	events_act = new Image(118,82);
	events_act.src = '../../menu_buttons/events-act.gif';



        allies_off= new Image(118,82); 
	allies_off.src= '../../menu_buttons/allies-off.gif'; 

	allies_ovr= new Image(118,82); 
	allies_ovr.src= '../../menu_buttons/allies-ovr.gif'; 

	allies_act = new Image(118,82);
	allies_act.src = '../../menu_buttons/allies-act.gif';



        guildmaster_off= new Image(118,82); 
	guildmaster_off.src= '../../menu_buttons/guildmaster-off.gif'; 

	guildmaster_ovr= new Image(108,66); 
	guildmaster_ovr.src= '../../menu_buttons/guildmaster-ovr.gif'; 

	guildmaster_act = new Image(118,82);
	guildmaster_act.src = '../../menu_buttons/guildmaster-act.gif';



        
        asstguildmaster_off= new Image(118,82); 
	asstguildmaster_off.src= '../../menu_buttons/asstguildmaster-off.gif'; 

	asstguildmaster_ovr= new Image(118,82); 
	asstguildmaster_ovr.src= '../../menu_buttons/asstguildmaster-ovr.gif'; 

	asstguildmaster_act = new Image(118,82);
	asstguildmaster_act.src = '../../menu_buttons/asstguildmaster-act.gif';



        battlemaster_off= new Image(118,82); 
	battlemaster_off.src= '../../menu_buttons/battlemaster-off.gif'; 

	battlemaster_ovr= new Image(118,82); 
	battlemaster_ovr.src= '../../menu_buttons/battlemaster-ovr.gif'; 

	battlemaster_act = new Image(118, 82);
	battlemaster_act.src = '../../menu_buttons/battlemaster-act.gif';



        guildmembers_off= new Image(118,82); 
	guildmembers_off.src= '../../menu_buttons/guildmembers-off.gif'; 

	guildmembers_ovr= new Image(118,82); 
	guildmembers_ovr.src= '../../menu_buttons/guildmembers-ovr.gif'; 

	guildmembers_act = new Image(118,82);
	guildmembers_act.src = '../../menu_buttons/guildmembers-act.gif';

	
	
        dm_off= new Image(118,82); 
	dm_off.src= '../../menu_buttons/dm-off.gif'; 

	dm_ovr= new Image(118,82); 
	dm_ovr.src= '../../menu_buttons/dm-ovr.gif'; 

	dm_act = new Image(118,82);
	dm_act.src = '../../menu_buttons/dm-act.gif';
	
	

        classes_off= new Image(118,82); 
	classes_off.src= '../../menu_buttons/classes-off.gif'; 

	classes_ovr= new Image(118,82); 
	classes_ovr.src= '../../menu_buttons/classes-ovr.gif'; 

	classes_act = new Image(118,82);
	classes_act.src = '../../menu_buttons/classes-act.gif';
	
	
	
        gallery_off= new Image(118,82); 
	gallery_off.src= '../../menu_buttons/gallery-off.gif'; 

	gallery_ovr= new Image(118,82); 
	gallery_ovr.src= '../../menu_buttons/gallery-ovr.gif'; 

	gallery_act = new Image(118,82);
	gallery_act.src = '../../menu_buttons/gallery-act.gif';
	
	
	
        videos_off= new Image(118,82); 
	videos_off.src= '../../menu_buttons/videos-off.gif'; 

	videos_ovr= new Image(118,82); 
	videos_ovr.src= '../../menu_buttons/videos-ovr.gif'; 

	videos_act = new Image(118,82);
	videos_act.src = '../../menu_buttons/videos-act.gif';
	
	
	
        chat_off= new Image(118,82); 
	chat_off.src= '../../menu_buttons/chat-off.gif'; 

	chat_ovr= new Image(118,82); 
	chat_ovr.src= '../../menu_buttons/chat-ovr.gif'; 

	chat_act = new Image(118,82);
	chat_act.src = '../../menu_buttons/chat-act.gif';
	
	
	
        site_off= new Image(118,82); 
	site_off.src= '../../menu_buttons/site-off.gif'; 

	site_ovr= new Image(118,82); 
	site_ovr.src= '../../menu_buttons/site-ovr.gif'; 

	site_act = new Image(118,82);
	site_act.src = '../../menu_buttons/site-act.gif';
	



        links_off= new Image(118,82); 
	links_off.src= '../../menu_buttons/links-off.gif'; 

	links_ovr= new Image(118,82); 
	links_ovr.src= '../../menu_buttons/links-ovr.gif'; 

	links_act = new Image(118,82);
	links_act.src = '../../menu_buttons/links-act.gif';


 

        downloads1_off= new Image(118,82); 
	downloads1_off.src= '../../menu_buttons/downloads1-off.gif'; 

	downloads1_ovr= new Image(118,82); 
	downloads1_ovr.src= '../../menu_buttons/downloads1-ovr.gif'; 

	downloads1_act = new Image(118,82);
	downloads1_act.src = '../../menu_buttons/downloads1-act.gif';





function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 


function mouseClick(myImgName) { 
document[myImgName].src=eval(myImgName+ '_act' ).src; } 
}

