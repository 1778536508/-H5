$(function () {
	//header
	var str_header = '<header>'+
						'<a href="javascript:;" onclick="javascript:history.go(-1)" class="left">'+
							'<img src="http://47.95.32.236/lntang/assets/images/retuen.jpg"/>'+
							'<span>返回</span>'+
						'</a>'+
						'<label>'+
							'非遗国际 DIICH'+
						'</label>'+	
					'</header>';
	$('#box_header').append(str_header);
	
	//搜索
	var str_sou = '<div class="banner_remove" id="">'+
						'<a href="javascript:;">'+
							'<span>|</span>'+
							'<img src="http://47.95.32.236/lntang/links/img/Combined Shape.png" id="val_rem"/>'+
						'</a>'+
					'</div>'+
					'<div class="banner_search">'+
						'<input type="text" placeholder="请输入非遗相关内容" id="Text_inp"/>'+
						'<input type="image" src="http://47.95.32.236/lntang/links/img/sousuo.png" id="Text"/>'+
					'</div>';
	$('#content_search').html(str_sou);
	
	//小功能
	var str ='<div class="menu" id="menu">'+
				'<span>'+
					'<img src="http://47.95.32.236/lntang/assets/iocn/copy.png"/>'+
				'</span>'+
			'</div>'+
			'<div class="Catalog" id="Catalog">'+
				'<h4>目录</h4>'+
				'<ul id="Catalog_list">'+
				'</ul>'+
			'</div>'+
			'<div class="Return" id="Return">'+
				'<a href="javascript:;">'+
					'<img src="http://47.95.32.236/lntang/assets/iocn/Return.png"/>'+
				'</a>'+
			'</div>'+
			'<div class="cover" id="cover"></div>'+	
			'<div class="name_list" id="name_list">'+
				'<ul>'+
					'<li data-id="A"><a href="http://47.95.32.236/lntang/search.html">口头传说和表述：</a></li>'+
					'<li data-id="A01"><a href="http://47.95.32.236/lntang/search.html">语言</a></li>'+
					'<li data-id="A02"><a href="http://47.95.32.236/lntang/search.html">文字</a></li>'+
					'<li data-id="A03"><a href="http://47.95.32.236/lntang/search.html">口述</a></li>'+
					'<li data-id="A04"><a href="http://47.95.32.236/lntang/search.html">其他口头传说和表述</a></li>'+
					'<li data-id="B"><a href="http://47.95.32.236/lntang/search.html">表演艺术：</a></li>'+
					'<li data-id="B01"><a href="http://47.95.32.236/lntang/search.html">音乐演奏</a></li>'+
					'<li data-id="B02"><a href="http://47.95.32.236/lntang/search.html">舞蹈</a></li>'+
					'<li data-id="B03"><a href="http://47.95.32.236/lntang/search.html">民歌</a></li>'+
					'<li data-id="B04"><a href="http://47.95.32.236/lntang/search.html">曲艺</a></li>'+
					'<li data-id="B05"><a href="http://47.95.32.236/lntang/search.html">传统戏剧曲艺</a></li>'+
					'<li data-id="B06"><a href="http://47.95.32.236/lntang/search.html">传统体育、游艺与杂技</a></li>'+
					'<li data-id="B99"><a href="http://47.95.32.236/lntang/search.html">其他表演艺术</a></li>'+
					'<li data-id="C"><a href="http://47.95.32.236/lntang/search.html">社会风俗礼仪节庆：</a></li>'+
					'<li data-id="C01"><a href="http://47.95.32.236/lntang/search.html">生产商贸习俗</a></li>'+
					'<li data-id="C02"><a href="http://47.95.32.236/lntang/search.html">生活习惯</a></li>'+
					'<li data-id="C03"><a href="http://47.95.32.236/lntang/search.html">人生仪式</a></li>'+
					'<li data-id="C04"><a href="http://47.95.32.236/lntang/search.html">节日庆典</a></li>'+
					'<li data-id="C99"><a href="http://47.95.32.236/lntang/search.html">节日庆典其他仪式和庆典</a></li>'+
					'<li data-id="D"><a href="http://47.95.32.236/lntang/search.html">有关自然界和宇宙知识的实践：</a></li>'+
					'<li data-id="D01"><a href="http://47.95.32.236/lntang/search.html">浓林牧渔</a></li>'+
					'<li data-id="D02"><a href="http://47.95.32.236/lntang/search.html">服装</a></li>'+
					'<li data-id="D03"><a href="http://47.95.32.236/lntang/search.html">食品</a></li>'+
					'<li data-id="D04"><a href="http://47.95.32.236/lntang/search.html">住房与建筑</a></li>'+
					'<li data-id="D05"><a href="http://47.95.32.236/lntang/search.html">交通旅行</a></li>'+
					'<li data-id="D06"><a href="http://47.95.32.236/lntang/search.html">医药军事</a></li>'+
					'<li data-id="D07"><a href="http://47.95.32.236/lntang/search.html">防御</a></li>'+
					'<li data-id="D08"><a href="http://47.95.32.236/lntang/search.html">商贸</a></li>'+
					'<li data-id="D09"><a href="http://47.95.32.236/lntang/search.html">工业工程</a></li>'+
					'<li data-id="D10"><a href="http://47.95.32.236/lntang/search.html">天文地理水文</a></li>'+
					'<li data-id="D99"><a href="http://47.95.32.236/lntang/search.html">其他自然知识实践</a></li>'+
					'<li data-id="E"><a href="http://47.95.32.236/lntang/search.html">传统手工艺技能：</a></li>'+
					'<li data-id="E01"><a href="http://47.95.32.236/lntang/search.html">工具及机械制作</a></li>'+
					'<li data-id="E02"><a href="http://47.95.32.236/lntang/search.html">髹饰工艺</a></li>'+
					'<li data-id="E03"><a href="http://47.95.32.236/lntang/search.html">家畜农林产品加工</a></li>'+
					'<li data-id="E04"><a href="http://47.95.32.236/lntang/search.html">织染工艺</a></li>'+
					'<li data-id="E05"><a href="http://47.95.32.236/lntang/search.html">造纸印刷机装裱</a></li>'+
					'<li data-id="E06"><a href="http://47.95.32.236/lntang/search.html">编扎工艺</a></li>'+
					'<li data-id="E07"><a href="http://47.95.32.236/lntang/search.html">字画工艺</a></li>'+
					'<li data-id="E08"><a href="http://47.95.32.236/lntang/search.html">锻冶工艺</a></li>'+
					'<li data-id="E09"><a href="http://47.95.32.236/lntang/search.html">剪刻工艺</a></li>'+
					'<li data-id="E10"><a href="http://47.95.32.236/lntang/search.html">雕塑工艺</a></li>'+
					'<li data-id="E11"><a href="http://47.95.32.236/lntang/search.html">烧造工艺</a></li>'+
					'<li data-id="E12"><a href="http://47.95.32.236/lntang/search.html">木制工艺</a></li>'+
					'<li data-id="E99"><a href="http://47.95.32.236/lntang/search.html">其他类</a></li>'+
					'<p></p>'+
				'</ul>'+
			'</div>';
		$('#gong').append(str);
		
		//判断用户是否使用微信浏览器
		$(function(){
			if(isWeixin()){
				$('#box_header').css('display','none');
				$('#content_search').css({
					'top':'3.5rem'
				})
				$('#box_list').css({
					'top':'0'
				})
				$('#list_menu').css({
					'top':'0'
				})
				$('#Two_Stage_Classification').css('top','0');
				$('#Three_Stage_Classification').css('top','0');
				$('#Mosaic').css('top','0');
				$('#Catalog').css('top','0');
				$('#Close').css('top','1rem');
				$('#banner_back').css('top','calc(-4.5rem/2)');
				$('#name_list').css('top','3.3rem');
				$('#content').css('margin-top','3.48rem');
			}
		})
		function isWeixin(){
			var ifData = window.navigator.userAgent.toLowerCase();
			if(ifData.match(/MicroMessenger/i) == 'micromessenger'){
				return true;
			}else{
				return false;
			}
		}
		
		
		
		
		
		
		Load_la();
        function Load_la(){
        	if($('#inherit_content_ul').children('li').length <= 2){
        		$('#img1').hide();
        		$('#img2').hide();
        	}else{
        		$('#Load_la').on('click','img',function(){
					$(this).removeClass('shOp').siblings().addClass('shOp');
				});
				$('#img1').click(function(){
					$('#Representative_inheritors').css('height','auto');
				});
				$('#img2').click(function(){
					$('#Representative_inheritors').css('height',' calc(15.4rem/2)');
				});
        	}
        }
        
        //非遗在中国
        inherit_content2();
        function inherit_content2(){
        	var numLength = $('.inherit_content2').children('p').length;
        	if(numLength <= 0){
        		$('.inherit_content2').css('display','none');
        	}
        }
        
        
        
		
	
		setTimeout(function(){
			
			//搜索分类按钮
			var banner_had = $('#banner_had');
			//一级分类
			var list_menu = $('#list_menu');
			//一级遮盖层
			var cover = $('#cover');
			//最外层div
			var box = $('#box');
			//目录分类
			var Catalog = $('#Catalog');
			//目录按钮
			var menu = $('#menu');
			
		
			//隐藏
			function typeHide(){
				//一级分类
				list_menu.css({
					'margin-right': 'calc(-82rem/4)',
					'transition':'all 0.5s'
				})
				//一级遮盖层
				cover.css('display','none');
				//确认重置按钮
				$('#list_menu_input').css({
					'margin-right': 'calc(-82rem/4)',
					'transition':'all 0.5s'
				})
				//解除禁止滑动
				$('body').css('position','');
			}
		
			
			
			
			
			//显示进入一级分类
			banner_had.click(function(){
				list_menu.css({
					'margin-right':'calc(-33rem/4)',
					'transition':'all 0.5s'
				})
				$('#list_menu_input').css({
								'margin-right':'calc(-33rem/4)',
								'transition':'all 0.5s'
							})
				cover.css('display','block');
				//将body设置为固定定位   使其页面不能滑动
				$('body').css({
					'position':'fixed',
					'left':'0',
					'top':'0'
				})
			})
			//点击其他部分隐藏
			cover.click(function(){
				resBtn();
			})
			
			//目录
			$('#Catalog_list>li').click(function(){
		    	
		    	$(this).addClass('li1').siblings().removeClass('li1');
		    	Catalog.css({
					'margin-right': 'calc(-82rem/4)',
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
						$('#content_search').show(500);
					}else{
						$('#content_search').hide(500);
					}
		    	}
				
			})
			
			
			//点击切换页面
			$('#li1').click(function(){
				location.href = 'http://47.95.32.236/lntang/home.html';
			})
//			$('#li2').click(function(){
//				
//				if($('#name_list').css('display') == 'none'){
//					$('#name_list').css('display','block');
//					//将body设置为固定定位   使其页面不能滑动
//					$('body').css({
//						'position':'fixed',
//						'left':'0',
//						'top':'0'
//					})
//					$('#li2 a:nth-child(1)').css('display','none');
//					$('#li2 a:nth-child(2)').css('display','block');
//				}else{
//					$('#name_list').css('display','none');
//					//解除禁止滑动
//					$('body').css('position','');
//					$('#li2 a:nth-child(1)').css('display','block');
//					$('#li2 a:nth-child(2)').css('display','none');
//				}
//				
//				
//			})
			$('#li3').click(function(){
				location.href = 'http://47.95.32.236/lntang/declare.html';
			})
			$('#li4').click(function(){
				location.href = 'http://47.95.32.236/lntang/Official.html';
			})
			
			//name list高光
			$('#name_list').on('click','li',function(){
				$(this).children('a').addClass('blue_fef').siblings().removeClass('blue_fef');
				var cate = $(this).attr('data-id');	
				localStorage.setItem('cate',cate);
			})
			
			

			//点击目录
			menu.click(function(){
				Catalog.css({
					'margin-right':'calc(-33rem/4)',
					'transition':'all 0.5s'
				})
				cover.css('display','block');
				stop();
			})
			
			//点击加载
			$('#load').click(function(){
				$('#load').css('display','none');
				$('#load_gif').css('display','block');
				setTimeout(function(){
					$('.Load').css('display','none');
					$('#forma_pics li:nth-child(6)').css('display','block');
					$('#forma_pics li:nth-child(7)').css('display','block');
				},1000)
				
			})
			

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
			
			
			
			//类型高光
			$('#list_type').on('click','li',function(){
				$(this).addClass('type').siblings().removeClass('type');
				$('#list_menu_span').text($(this).children('a').text());
				typeHide();
			})
			
			
			
			
			//点击二级遮盖层使二级分类和二级遮盖层隐藏
			$('#cover_tow').click(function(){
				$('#Two_Stage_Classification_Content').html('');
				$('#Two_Stage_Classification').css({
								'margin-right':'calc(-82rem/4)',
								'transition':'all 0.5s'
							});
				$('#cover_tow').css('display','none');
			})
			
			
			
			
			//点击三级遮盖层使三级分类和二级遮盖层隐藏
			$('#cover_Three').click(function(){
				$('#Three_Title_Content').html('');
				$('#Three_Stage_Classification').css({
								'margin-right':'calc(-82rem/4)',
								'transition':'all 0.5s'
							});
				$('#cover_Three').css('display','none');
			})
			
			//三级高光
			$('#Three_Title_Content').on('click','li',function(){
				$(this).addClass('blue_Three_Title').siblings().removeClass('blue_Three_Title');
			})
			
			
			
			//重置确定高光
			$('#list_menu_input').on('click','input',function(){
				$(this).addClass('inp').siblings().removeClass('inp');
			})
			
			//确定
			$('#btn').click(function(){
				resBtn();
			});
			
			
			
			//重置
			$('#reset').click(function(){
				resBtn();
			})
			
			
			
			function resBtn(){
				//使页面可以滑动
				$('body').css('position','');
				move();
				//三级分类隐藏
				$('#Three_Stage_Classification').css({
								'margin-right':'calc(-82rem/4)',
								'transition':'all 0.5s'
							})
				//三级遮盖层隐藏
				$('#cover_Three').css('display','none');
				
				//二级分类隐藏
				$('#Two_Stage_Classification').css({
								'margin-right':'calc(-82rem/4)',
								'transition':'all 0.5s'
							})
				//二级分类隐藏
				$('#cover_tow').css('display','none');
				
				//一级分类隐藏
				list_menu.css({
					'margin-right':'calc(-82rem/4)',
					'transition':'all 0.5s'
				})
				//一级遮盖层隐藏		
				cover.css('display','none');
				
				//自己隐藏
				$('#list_menu_input').css({
						'margin-right':'calc(-82rem/4)',
						'transition':'all 0.5s'
					})
			}
		
			//显示
			function show1(){
				$('#cover_tow').css('display','block');
				$('#Two_Stage_Classification').css({
								'margin-right':'calc(-33rem/4)',
								'transition':'all 0.5s'
				})
			}
			function show2(){
				$('#cover_Three').css('display','block');
				$('#Three_Stage_Classification').css({
								'margin-right':'calc(-33rem/4)',
								'transition':'all 0.5s'
							})
			}

		},20)
	
		//喜欢
		$('body').on("click",'.heart',function(){
	    	var idNum=$(this).attr("id");
	    	var linkNum=idNum.split("like");
				console.log(linkNum);
	        var messageID=linkNum[1];
	        var link_con=parseInt($("#likeCount"+messageID).html());
	    	$(this).css("background-position","");
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
	    
	    
	    
	    
	    
	    
	    //图片视频数量
		var barNum = $('.numBerStr');
		console.log(barNum);
		for(var i=0; i<barNum.length; i++){
			var strNum = $(barNum[i]).parent().parent().children('ul').children('div').length;
			$(barNum[i]).text(strNum);
			var oDiv = $(barNum[i]).parent().parent().children('ul').children('div');
			if(strNum == 1){
				oDiv.css({
					'width':'16rem',
					'height':'auto'
				});
				$('.numBerStr').parent().parent().children('b').css('display','none');
			}
			if(strNum == 2){
				oDiv.css({
					'width':'7.9rem',
					'height':'auto',
					'padding-left':'0.1rem'
					});
				oDiv.eq(0).css({
					'padding-left':'0'
				})
				$('.numBerStr').parent().parent().children('b').css('display','none');
			}
			
			
			
			
		}
		
		//隐藏图片展示层
		$('#box_layer').hide();
		//点击显示
		$('.link').click(function(){
			var uLi = $(this).html();
//			console.log(uLi);
			$('#swiper-wrapper-append').html(uLi);
			$('#banner_back').html(uLi);
			$('#box_layer').fadeIn(1000);
			stop();
			vide();
			setTimeout(function(){	
				var mySwiper1 = new Swiper('.swiper-banner-Lu',{
					prevButton:'.swiper-button-prev',
					nextButton:'.swiper-button-next',
					slidesPerView : 4,
					spaceBetween : 10,
					loop: false,
					speed:500,
					autoplayDisableOnInteraction : false
				});
				var mySwiper2 = new Swiper('.swiper-banner-Lu-back',{
					pagination : '.swiper-pagination',
					paginationClickable :true,
			//		effect : 'coverflow',
			//		centeredSlides: true,
			//		slidesPerView : 1,
					loop: false,
					speed:500,
					autoplayDisableOnInteraction : false
				});
				mySwiper1.params.control = mySwiper2;//需要在Swiper2初始化后，Swiper1控制Swiper2
				mySwiper2.params.control = mySwiper1;//需要在Swiper1初始化后，Swiper2控制Swiper1
			},10);
		})
		//点击更多数量
		$('.More_num').click(function(){
			var More = $(this).parent().children('ul').html();
//			var More_li = $(this).parent().clone(true).find('ul li').get(0);
			$('#swiper-wrapper-append').html(More);
			$('#box_layer').fadeIn(500);
			$('body').append(script_src);
			
			$('#banner_back').html(More);
			stop();
		})
		
		
		
		//关闭
		$('#Close').click(function(){
			$('#box_layer').fadeOut();
			$('body>script').remove();
			move();
		})
		
		function vide(){
			//视频按钮
		    $('#banner_back').on('click','.clIck2',function(){
		    	$(this).css('display','none');
		    	var this_Div = $(this);
		    	var vide_Div = $(this).prev();
		    	for(var i = 0; i < vide_Div.length; i++){
						vide_Div[i].play();
						vide_Div[i].onended = function(){
					    	this_Div.css('display','block');
					    }
			    }
		    })
		}
		
		function vide2(){
			//视频按钮
		    $('#box_layer_tow').on('click','.clIck2',function(){
		    	$(this).css('display','none');
		    	var this_Div = $(this);
		    	var vide_Div = $(this).prev();
		    	for(var i = 0; i < vide_Div.length; i++){
						vide_Div[i].play();
						vide_Div[i].onended = function(){
					    	this_Div.css('display','block');
					    }
			    }
		    })
		}
		
		
		
		//点击下轮播显示大图
		$('#box_layer_tow_show').hide();
		$('#swiper-wrapper-append').on('click','.swiper-slide',function(){
			$('#box_layer_tow_show').fadeIn(500);
			$('#box_layer_tow').html($(this).html());
			vide2();
		})
		$('#banner_back').on('click','.swiper-slide',function(){
			$('#box_layer_tow_show').fadeIn(500);
			$('#box_layer_tow').html($(this).html());
			vide2();
		})
		
		
		$('#Close_tow').click(function(){
			$('#box_layer_tow_show').hide(500);
			$('#box_layer_tow').html('');
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
	    
	    
	    
	  //home页最多显示
	  var title_div = $('.forma_imaGes');
	  for(var i = 0; i<title_div.length; i++){
	  	
	  		var str = $(title_div[i]).children('p').html();
			var s = str;
			if(str.length>50){
				s = str.substring(0,50)+'...';
			}
			$(title_div[i]).children('p').html(s);
	  }
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  //点击分类
	  $('#list').on('click','a',function(){
	  	var cate = $(this).attr('data-id');
	  	localStorage.setItem("cate",cate);
	  	location.href = 'search.html';
	  })
	  
	  //project分类
	  var str = "";
	  var list_title = $('.content_box').children('div');
	  for(var i = 0; i<list_title.length; i++){
	  	var title = $(list_title[i]).children('h3').html();
	  	var title_id = $(list_title[i]).attr('id');
	  	str+='<li><a href="#'+title_id+'">'+title+'</a></li>';
	  }
	  $('#Catalog_list').html(str);
	  $('#Catalog_list span').remove();   
})