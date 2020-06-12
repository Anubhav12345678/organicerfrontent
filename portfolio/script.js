 
 const galleryItems=document.querySelector(".gallery-items").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const page=document.querySelector(".page-num");
 const maxItem=8;
 let index=1;
  
  const pagination=Math.ceil(galleryItems.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
	if(index!=1){
		index--;
		check();
		showItems();
	}

  })
  next.addEventListener("click",function(){
 	if(index!=pagination){
	index++;
  	check();
    showItems();  }
  })

  function check(){
  	 if(index==pagination){
  	 	next.classList.add("disabled");
  	 }
  	 else{
  	   next.classList.remove("disabled");	
  	 }

  	 if(index==1){
  	 	prev.classList.add("disabled");
  	 }
  	 else{
  	   prev.classList.remove("disabled");	
  	 }
  }

  function showItems() {
  	 for(let i=0;i<galleryItems.length; i++){
  	 	galleryItems[i].classList.remove("show");
  	 	galleryItems[i].classList.add("hide");


  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
  	 	  // if i greater than and equal to (index*maxItem)-maxItem;
  		  // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          galleryItems[i].classList.remove("hide");
          galleryItems[i].classList.add("show");
  	    }
  	    page.innerHTML=index;
  	 }

  	 	
  }
  
  //Video Pagination
  
  const videogalleryItems=document.querySelector(".videogallery-items").children;
  const videoprev=document.querySelector(".videoprev");
  const videonext=document.querySelector(".videonext");
  const videopage=document.querySelector(".videopage-num");
  const videomaxItem=4;
  let videoindex=1;
   
   const videopagination=Math.ceil(videogalleryItems.length/videomaxItem);
   console.log(videopagination)
 
   videoprev.addEventListener("click",function(){
	 if(videoindex!=1){
		videocheck();
		videoindex--;
		videoshowItems();
	 }
   })
   videonext.addEventListener("click",function(){
	 if(videoindex!=videopagination){
		videocheck();
		videoindex++;
		videoshowItems();
	 }
   })
 
   function videocheck(){
		if(videoindex==videopagination){
		 videonext.classList.add("videodisabled");
		}
		else{
		 videonext.classList.remove("videodisabled");	
		}
 
		if(videoindex==1){
		 videoprev.classList.add("videodisabled");
		}
		else{
		 videoprev.classList.remove("videodisabled");	
		}
   }
 
   function videoshowItems() {
		for(let i=0;i<videogalleryItems.length; i++){
		 videogalleryItems[i].classList.remove("videoshow");
		 videogalleryItems[i].classList.add("videohide");
 
 
		   if(i>=(videoindex*videomaxItem)-videomaxItem && i<videoindex*videomaxItem){
			  // if i greater than and equal to (index*maxItem)-maxItem;
			 // means  (1*8)-8=0 if index=2 then (2*8)-8=8
			 videogalleryItems[i].classList.remove("videohide");
		   videogalleryItems[i].classList.add("videoshow");
		   }
		   videopage.innerHTML=videoindex;
		}
 
			
   }

  window.onload=function(){
  	showItems();
	check();
	videoshowItems();
	videocheck();
  }








