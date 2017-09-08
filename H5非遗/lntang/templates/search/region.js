define(["text!search/region.tpl"],function(testTpl){
	function reg(){
		console.log("region加载");
		region();
	}
	
		
	function region(){
		
		setTimeout(function(){
			//点击分类进入一级分类
//			$('#banner_had').click(function(){
				var forma_reg = Handlebars.compile(testTpl)({
					content_reg: dic_arr_city
				});
				$('#list_reg').html(forma_reg);
				$('#list_reg>:first').addClass('blue_one_Title');
//			})
				
			
			
			//一级进入二级分类
			$('#list_reg').on('click','li',function(){
				for(var i =0; i<dic_arr_city.length; i++){
					if($(this).attr('data-id') == dic_arr_city[i].id){
						var forma_tow_reg = Handlebars.compile(testTpl)({
							content_tow_reg: dic_arr_city[i].children
						});
						$('#Two_Stage_Classification_Content').html(forma_tow_reg);
						if(dic_arr_city[i].children != "" && dic_arr_city[i].children != null){
							$(this).addClass('blue_one_Title').siblings().removeClass('blue_one_Title');
							$('.list_menu_one').text($(this).children('a').text());
							$('#Title').text($(this).children('a').text());
							$('#list_menu_region').text($(this).children('a').text());
							show();
						}else{
							$(this).addClass('blue_one_Title').siblings().removeClass('blue_one_Title');
							$('#list_menu_region').text($(this).children('a').text());
						}
					}
				}
			});

			//二级进入三级分类
			$('#Two_Stage_Classification_Content').on('click','li',function(){
				for(var i =0; i<dic_arr_city.length; i++){
					for(var j=0; j<dic_arr_city[i].children.length; j++){
						if($(this).attr('data-id') == dic_arr_city[i].children[j].id){
							var forma_Three_reg = Handlebars.compile(testTpl)({
								content_Three_reg: dic_arr_city[i].children[j].children
							});
							$('#Three_Title_Content').html(forma_Three_reg);
							if(dic_arr_city[i].children[j].children != "" && dic_arr_city[i].children[j].children != null){
								$(this).addClass('blue_Tow_Title').siblings().removeClass('blue_Tow_Title');
								$('#Three_Title').text($(this).text());
								show2();
							}else{
								$(this).addClass('blue_Tow_Title').siblings().removeClass('blue_Tow_Title');
							}
						}
					}
				}
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
		reg:reg
	}
})