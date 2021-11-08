if (document.images) { 
	tarrent_off= new Image(118,82); 
	tarrent_off.src= '../chars/tarrent-off.jpg';

	tarrent_ovr= new Image(108,66); 
	tarrent_ovr.src= '../chars/tarrent.gif';


        reiz_off= new Image(118,82); 
	reiz_off.src= '../../chars/reiz-off.jpg';

	reiz_ovr= new Image(108,66); 
	reiz_ovr.src= '../../chars/reiz.gif';



        hellios_off= new Image(118,82); 
	hellios_off.src= '../../chars/hellios-off.jpg';

	hellios_ovr= new Image(108,66); 
	hellios_ovr.src= '../../chars/hellios.gif';


 
        avatarr_off= new Image(118,82); 
	avatarr_off.src= '../../chars/avatarr-off.jpg';

	avatarr_ovr= new Image(108,66); 
	avatarr_ovr.src= '../../chars/avatarr.gif';



        tarrant_off= new Image(118,82); 
	tarrant_off.src= '../../chars/tarrant-off.jpg';

	tarrant_ovr= new Image(108,66); 
	tarrant_ovr.src= '../../chars/tarrant.gif';

	

function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 

} 


