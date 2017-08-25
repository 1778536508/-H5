$(function () {
	
	//header
	var str_header = '<header>'+
						'<a href="javascript:;" class="left">'+
							'<img src="assets/images/retuen.jpg"/>'+
							'<span>返回</span>'+
						'</a>'+
						'<label>'+
							'非遗国际 DIICH'+
						'</label>'+
						'<a href="javascript:;" class="right">'+
							'<img src="assets/images/More.png"/>'+
						'</a>'+
					'</header>';
	$('#box_header').append(str_header);
	



	//小功能
	var str ='<div class="menu" id="menu">'+
				'<a href="javscript:;">'+
					'<img src="assets/iocn/copy.png"/>'+
				'</a>'+
			'</div>'+
			'<div class="Catalog" id="Catalog">'+
				'<h4>目录</h4>'+
				'<ul id="Catalog_list">'+
					'<li class="li1" id="li1"><a href="#Representative_inheritors">代表传成人</a></li>'+
					'<li><a href="#Essential_information">基本信息</a></li>'+
					'<li><a href="#Essential_content">基本内容</a></li>'+
					'<li><a href="#Representative_works">代表性作品</a></li>'+
					'<li><a href="#historical_origin">历史渊源</a></li>'+
					'<li><a href="#basic_feature">基本特性</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="Return" id="Return">'+
				'<a href="javascript:;">'+
					'<img src="assets/iocn/Return.png"/>'+
				'</a>'+
			'</div>'+
			'<div class="add">'+
				'<a href="javscript:;">'+
					'<img src="assets/iocn/add.png"/>'+
				'</a>'+
			'</div>'+
			'<div class="cover" id="cover"></div>';
			
		$('#gong').append(str);
	
	
	
setTimeout(function(){
	
	//下拉菜单
	var banner_had = $('#banner_had');
	var list_menu = $('#list_menu');
	var cover = $('#cover');
//	var banner_menu_Button = $('#banner_menu_Button');
	var box = $('#box');
	var Catalog = $('#Catalog');
	var menu = $('#menu');
	

	//隐藏
	function typeHide(){
		//一级分类
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		//一级遮盖层
		cover.css('display','none');
		//确认重置按钮
		$('#list_menu_input').css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		//解除禁止滑动
		$('body').css('position','');
	}

	
	
	
	
	//显示进入一级分类
	banner_had.click(function(){
		list_menu.css({
			'right':'0',
			'transition':'all 0.5s'
		})
		$('#list_menu_input').css({
						'right':'0',
						'transition':'all 0.5s'
					})
		cover.css('display','block');
		$('body').css({
			'position':'fixed',
			'left':'0',
			'top':'0'
		})
	})
	//隐藏
//	banner_menu_Button.click(function(){
//		alert(123)
//		list_menu.css({
//			'right':'-12.5rem',
//			'transition':'all 0.5s'
//		})
//		cover.css('display','none');
//		move();
//	})
	//点击其他部分隐藏
	cover.click(function(){
		Catalog.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		typeHide();
		move();
	})
	
	 $('#Catalog_list>li').click(function(){
    	
    	$(this).addClass('li1').siblings().removeClass('li1');
    	Catalog.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
    	$('#cover').css('display','none');
    	move();
    })
	
	
	
	
	
	
	
	//点击搜索
	$('#content_search').hide();
	$('#box_list_search').click(function(event){
		var blo = $('#box_search').css('display');
    	if(blo == 'block'){
    		event.stopPropagation();
    	}else{
    		if($("#content_search").is(":hidden")){
				$('#content_search').show();
			}else{
				$('#content_search').hide();
			}
    	}
		
	})
	
	
	//点击切换页面
	$('#li1').click(function(){
		location.href = 'home.html';
	})
	$('#li2').click(function(){
		location.href = 'name.html';
	})
	$('#li3').click(function(){
		location.href = 'declare.html';
	})
	$('#li4').click(function(){
		location.href = 'Official.html';
	})
	
	
	
	
	
	
	//点击目录
	menu.click(function(){
		Catalog.css({
			'right':'0',
			'transition':'all 0.5s'
		})
		cover.css('display','block');
		stop();
	})
	
	
	
	
	//实现滚动条无法滚动
	var mo=function(e){
		e.preventDefault();
	};
	
	/***禁止滑动***/
	function stop(){
			var bo = document.getElementsByTagName('body')[0];
	        document.body.style.overflow='hidden';        
	        document.addEventListener("touchmove",mo,false);//禁止页面滑动
	}
	
	/***取消滑动限制***/
	function move(){
			var bo = document.getElementsByTagName('body')[0];
	        document.body.style.overflow='';//出现滚动条
	        document.removeEventListener("touchmove",mo,false);        
	}
	
	
	
	//点击加载
	$('#load').click(function(){
		$('#load').css('display','none');
		$('#load_gif').css('display','block');
		setTimeout(function(){
			$('#load_gif').css('display','none');
			$('#load').css('display','block');
			$('.remo').css('display','block');
		},1000)
		
	})
	
	
	
	//重置确定
	$('#list_menu_input').on('click','input',function(){
		$(this).addClass('inp').siblings().removeClass('inp');
	})
	
	
	
	
	//最多显示字数
	var num = $('.list_menu_span');
	for(var i =0; i<num.length; i++){
//		console.log(typeof $(num[i]).html());
		var str = $(num[i]).html();
		var s = str;
		if(str.length>10){
			s = str.substring(0,10)+'...';
		}
		$(num[i]).html(s);
	}
	
	
	
	//搜索关键字添加
	$('#search_content').on('click','a',function(){
		$('#search_text').val($(this).html());
	})
	

	//点击申报跳转
	$('#declare').click(function(){
		location.href = 'declare.html'
	})


	//当搜索中无内容时清空搜索content    关键字显示
	if($('#search_text').val('')){
		$('#search_content').css('display', 'block');
		$('#sou_content').css('display', 'none');
	}
	
	
	
	//类型
	$('#list_type').on('click','li',function(){
		$(this).addClass('type').siblings().removeClass('type');
		$('#list_menu_span').text($(this).children('a').text());
		typeHide();
	})
	
	
	//类别	
	
	//点击一级分类进入二级分类
//	$('#list_menu_content').on('click','li',function(){
//		
//		$(this).addClass('blue_one_Title').siblings().removeClass('blue_one_Title');
//		$('.list_menu_one').text($(this).text());
//		$('#Title').text($(this).text());
//		show1();
//	})
	
	
	//点击二级遮盖层使二级分类隐藏
	$('#cover_tow').click(function(){
		$('#Two_Stage_Classification_Content').html('');
		$('#Two_Stage_Classification').css({
						'right':'-12.5rem',
						'transition':'all 0.5s'
					})
		$('#cover_tow').css('display','none');
	})
	
	
	
	//点击二级分类进入三级分类
//	$('#Two_Stage_Classification_Content').on('click','li',function(){
//		$(this).addClass('blue_Tow_Title').siblings().removeClass('blue_Tow_Title');
//		$('#Three_Title').text($(this).text());
//		show2();
//	})
	//点击三级遮盖层使三级分类隐藏
	$('#cover_Three').click(function(){
		$('#Three_Title_Content').html('');
		$('#Three_Stage_Classification').css({
						'right':'-12.5rem',
						'transition':'all 0.5s'
					})
		$('#cover_Three').css('display','none');
	})
	
	$('#Three_Title_Content').on('click','li',function(){
		$(this).addClass('blue_Three_Title').siblings().removeClass('blue_Three_Title');
	})
	
	
	
	
	
	//确定
	$('#btn').click(function(){
		$('body').css('position','');
		move();
		//三级分类隐藏
		$('#Three_Stage_Classification').css({
						'right':'-12.5rem',
						'transition':'all 0.5s'
					})
		//三级遮盖层隐藏
		$('#cover_Three').css('display','none');
		
		//二级分类隐藏
		$('#Two_Stage_Classification').css({
						'right':'-12.5rem',
						'transition':'all 0.5s'
					})
		//二级分类隐藏
		$('#cover_tow').css('display','none');
		
		//一级分类隐藏
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		//一级遮盖层隐藏		
		cover.css('display','none');
		
		//自己隐藏
		$('#list_menu_input').css({
				'right':'-12.5rem',
				'transition':'all 0.5s'
			})
	});
	
	
	
	//地域
//	$('#list_reg').on("click","li",function(){
//		$('.list_menu_one').text($(this).text());
//		$('#Title').text($(this).text());
//		$(this).addClass('blue_reg').siblings().removeClass('blue_reg');
//		show1();
//	})

	
		
		
		
		
	
	
	//显示
	function show1(){
		$('#cover_tow').css('display','block');
		$('#Two_Stage_Classification').css({
						'right':'0',
						'transition':'all 0.5s'
		})
	}
	function show2(){
		$('#cover_Three').css('display','block');
		$('#Three_Stage_Classification').css({
						'right':'0',
						'transition':'all 0.5s'
					})
	}
	//隐藏
	
	
	
	
},20)
	
	$('body').on("click",'.heart',function(){
	    	var idNum=$(this).attr("id");
	    	var linkNum=idNum.split("like");
				console.log(linkNum);
	        var messageID=linkNum[1];
	        var link_con=parseInt($("#likeCount"+messageID).html());
	    	$(this).css("background-position","")
	        var link_rel=$(this).attr("rel");
	        if(link_rel === 'like'){
		        $("#likeCount"+messageID).html(link_con+1);
		        $(this).addClass("heartAnimation").attr("rel","unlike");
	        }else{
		        $("#likeCount"+messageID).html(link_con-1);
		        $(this).removeClass("heartAnimation").attr("rel","like");
		        $(this).css("background-position","left");
	        }
	    });
	
})