if (document.images) { 
	next_off= new Image(118,82); 
	next_off.src= '../../misc_buttons/next-off.gif' ; 

	next_ovr= new Image(108,66); 
	next_ovr.src= '../../misc_buttons/next-ovr.gif'; 


function mouseOver(myImgName) { 
document[myImgName].src=eval(myImgName+ '_ovr' ).src; } 

function mouseOut(myImgName) { 
document[myImgName].src=eval(myImgName+ '_off' ).src; } 

} 
