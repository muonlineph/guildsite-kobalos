if (document.images) { 
	tarrent_off= new Image(118,82); 
	tarrent_off.src= 'http://www.freewebs.com/kobalos/chars/tarrent-off.jpg';

	tarrent_ovr= new Image(108,66); 
	tarrent_ovr.src= 'http://www.freewebs.com/kobalos/chars/tarrent.gif'; 



        reiz_off= new Image(118,82); 
	reiz_off.src= 'http://www.freewebs.com/kobalos/chars/reiz-off.JPG';

	reiz_ovr= new Image(108,66); 
	reiz_ovr.src= 'http://www.freewebs.com/kobalos/chars/reiz.gif';



        hellios_off= new Image(118,82); 
	hellios_off.src= 'http://www.freewebs.com/kobalos/chars/hellios-off.jpg';

	hellios_ovr= new Image(108,66); 
	hellios_ovr.src= 'http://www.freewebs.com/kobalos/chars/hellios.gif' ;



        avatarr_off= new Image(118,82); 
	avatarr_off.src= 'http://www.freewebs.com/kobalos/chars/avatarr-off.JPG';

	avatarr_ovr= new Image(108,66); 
	avatarr_ovr.src= 'http://www.freewebs.com/kobalos/chars/avatarr.gif';



        tarrant_off= new Image(118,82); 
	tarrant_off.src= 'http://www.freewebs.com/kobalos/chars/tarrant-off.jpg';

	tarrant_ovr= new Image(108,66); 
	tarrant_ovr.src= 'http://www.freewebs.com/kobalos/chars/tarrant.gif';
 	

function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 

} 

