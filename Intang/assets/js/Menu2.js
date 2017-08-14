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
	
	//list
//	var str_list = '<ul>'+
//					'<li class="lii" id="li1">'+
//							'<a href="javascript:;"><img src="links/img/souye.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/home.png"/></a>'+
//							'<span>首页</span>'+
//					'</li>'+
//					'<li id="box_list_search">'+
//							'<a href="javascript:;"><img src="links/img/feiyiminglu.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/feiyi.png"/></a>'+
//							'<span>搜索</span>'+
//					'</li>'+
//					'<li id="li2">'+
//							'<a href="javascript:;"><img src="links/img/minglupass.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/pass.png"/></a>'+
//							'<span>非遗名录</span>'+
//					'</li>'+
//					'<li id="li3">'+
//							'<a href="javascript:;"><img src="links/img/shenbao.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/shenbao.png"/></a>'+
//							'<span>我要申报</span>'+
//					'</li>'+
//					'<li id="li4">'+
//							'<a href="javascript:;"><img src="links/img/Group 13.png"/></a>'+
//							'<a href="javascript:;"><img src="assets/images/Group 13.png"/></a>'+
//							'<span>官方服务</span>'+
//					'</li>'+
//				'</ul>';
//	$('#box_list').append(str_list);


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
	
	
	
	
	
	//下拉菜单
	var banner_had = $('#banner_had');
	var list_menu = $('#list_menu');
	var cover = $('#cover');
	var banner_menu_Button = $('#banner_menu_Button');
	var box = $('#box');
	var Catalog = $('#Catalog');
	var menu = $('#menu');
	
	
	
	
	//点击分类变为高光 跳转
//	$('#box_list').on('click','li',function(){
//		$(this).addClass('lii').siblings().removeClass('lii');
//	})

	
	
	
	
	//显示
	banner_had.click(function(){
		list_menu.css({
			'right':'0',
			'transition':'all 0.5s'
		})
		cover.css('display','block');
		stop();
	})
	//隐藏
	banner_menu_Button.click(function(){
		alert(123)
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		cover.css('display','none');
		move();
	})
	//点击其他部分隐藏
	cover.click(function(){
		list_menu.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
		cover.css('display','none');
		Catalog.css({
			'right':'-12.5rem',
			'transition':'all 0.5s'
		})
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
//		var display = $('#content_search').css('display');
//		if(display == 'none'){
//			$('#content_search').css({
//				'display':'block',
//				'top':'5.05rem',
//				'transition':'all 0.5s'
//			});
//		}else{
//			$('#content_search').css({
//				'display':'none',
//				'top':'2.05rem',
//				'transition':'all 0.5s'
//			})
//		}
		
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
	        document.body.style.overflow='hidden';        
	        document.addEventListener("touchmove",mo,false);//禁止页面滑动
	}
	
	/***取消滑动限制***/
	function move(){
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
		console.log(typeof $(num[i]).html());
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
	console.log($('#search_text').val())
	if($('#search_text').val('')){
		$('#search_content').css('display', 'block');
		$('#sou_content').css('display', 'none');
	}
	
	
	
	
	
	
	
	
	
	
})