	setTimeout(function(){
	//轮播图
	    	var mySwiper = new Swiper('.swiper-container',{
	    		//设置轮播的方向为上下轮播默认为true左右轮播
//	  			direction: 'vertical',

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
	    	
	    	 	
	    	
},100)
setTimeout(function(){	
	var mySwiper1 = new Swiper('.swiper-banner-Lu',{
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
		slidesPerView : 4,
		spaceBetween : 10,
		loop: false,
		speed:500,
		autoplayDisableOnInteraction : false
	})
	var mySwiper2 = new Swiper('.swiper-banner-Lu-back',{
		
		effect : 'coverflow',
		slidesPerView: 6,
		centeredSlides: true,
		slidesPerView : 1,
		loop: false,
		speed:500,
		autoplayDisableOnInteraction : false
	})
	mySwiper1.params.control = mySwiper2;//需要在Swiper2初始化后，Swiper1控制Swiper2
	mySwiper2.params.control = mySwiper1;//需要在Swiper1初始化后，Swiper2控制Swiper1
//	var mySwiper3 = new Swiper('#swiper-container3',{
//		control: [mySwiper1, mySwiper2],//控制前面两个Swiper
//	})
	
	
},10)

