define(["text!search/list.tpl"], function(testTpl) {
	
	function list() {
		console.log("list加载");
		listContent();
	}
	
	
	
	function listContent(){
		//最多显示10个字数
		function most(){
			var title_h3 = $('.Title_h3');
			for(var i=0; i<title_h3.length; i++){
				var str = $(title_h3[i]).html();
				var s = str;
				if(str.length>10){
					s = str.substring(0,10)+'...';
				}
				$(title_h3[i]).html(s);
			}
		}
		
		//最多显示10个字数
		function Number_words(){
			var num = $('.list_menu_span');
			for(var i =0; i<num.length; i++){
				var str = $(num[i]).html();
				var s = str;
				if(str.length>10){
					s = str.substring(0,10)+'...';
				}
				$(num[i]).html(s);
			}
		}
		
		
		setTimeout(function(){
			
			
			
			//点击分类进入一级分类
			var forma_pics_List = Handlebars.compile(testTpl)({
				content_one: category_all
			});
			$('#list_menu_content').html(forma_pics_List);
			
			//一级进入二级分类
			$('#list_menu_content>:first').addClass('blue_one_Title');
			
			$('#list_menu_content').on('click','li',function(){
				for(var i=0; i<category_all.length; i++){	
					$(this).addClass('blue_one_Title').siblings().removeClass('blue_one_Title');
					$('.list_menu_one').text($(this).children('a').text());
					most();
					Number_words();
					if($(this).attr('data_id') == category_all[i].id){
						var list_tow = Handlebars.compile(testTpl)({					
							content_tow: category_all[i].children
						});
						$('#Two_Stage_Classification_Content').html(list_tow);
						if(category_all[i].children != null && category_all[i].children != ""){
							$('#Title').text($(this).children('a').text());
							show();
						}
					}
				}
				
			})
			
			//二级进入三级分类
			$('#Two_Stage_Classification_Content').on('click','li',function(){
				for(var i=0; i<category_all.length; i++){	
					for(var j in category_all[i].children){
						if($(this).attr('data_id') == category_all[i].children[j].id){
							var list_tow = Handlebars.compile(testTpl)({
								content_Three: category_all[i].children[j].children
							});
							$('#Three_Title_Content').html(list_tow);
							if(category_all[i].children[j].children != null && category_all[i].children[j].children != ""){
								$(this).addClass('blue_Tow_Title').siblings().removeClass('blue_Tow_Title');
								$('#Three_Title').text($(this).text());
								show2();
							}else{
								$(this).addClass('blue_Tow_Title').siblings().removeClass('blue_Tow_Title');
							}
						}
					}
				}
				most();
			})
			
			
			
			
			
			//显示
			function show(){
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
		},10)
		
	}
	
	
	
	return {
		list:list
	}
	
	
})