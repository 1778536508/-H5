	setTimeout(function(){
		
	
	//轮播图
	    	var mySwiper = new Swiper('.swiper-container',{
	    		//设置轮播的方向为上下轮播默认为true左右轮播
//	  		direction: 'vertical',
	
	
				
	    		//3D效果
	    		//立体效果
//				effect : 'cube',
				
				//淡入淡出效果
				effect : 'fade',
				
				//3D折页效果
//				effect : 'coverflow',
//				slidesPerView: 2,
//				centeredSlides: true,
				
				//翻页效果
	//			effect : 'flip',
	
				//默认是左右的普通效果
//				cube: {
//				  slideShadows: true,
//				  shadow: true,
//				  shadowOffset: 100,
//				  shadowScale: 0.6
//				},
				
				
				
				//循环轮播
				loop: true,
				
				//持续时间
				speed:1000,
				
				//自动播放
				autoplay: 1000,
				
				//触摸后轮播不停止(为false时,默认停止位true)
				autoplayDisableOnInteraction : false
				
			})
	    	
	    	//list
	    	var mySwiper = new Swiper('.swiper-list',{
	    		slidesPerView : 1,
	    		pagination : '.swiper-pagination',
	    		paginationClickable :true
	    	})
	    	
	    	var mySwiper = new Swiper('.swiper-container_banner',{
	    		//设置轮播的方向为上下轮播默认为true左右轮播
	  		direction: 'vertical',
			nextButton:'.swiper-button-next',
				
	    		//3D效果
	    		//立体效果
//				effect : 'cube',
				
				//淡入淡出效果
				effect : 'fade',
				
				//3D折页效果
//				effect : 'coverflow',
//				slidesPerView: 6,
//				centeredSlides: true,
				
				//翻页效果
//				effect : 'flip',
	
				//默认是左右的普通效果
//				cube: {
//				  slideShadows: true,
//				  shadow: true,
//				  shadowOffset: 100,
//				  shadowScale: 0.6
//				},
				
				
				
				//循环轮播
				loop: false,
				
				//持续时间
				speed:1000,
				
				
				//触摸后轮播不停止(为false时,默认停止位true)
				autoplayDisableOnInteraction : false
	    	})
	    	
	    	
	    	
	    	
},1)
