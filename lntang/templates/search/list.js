define(["text!search/list.tpl"], function(testTpl) {
	
	function list() {
		console.log("list加载");
		listContent();
	}
	
	
	
	function listContent(){
		
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
		
		
		setTimeout(function(){
			//一级分类
			$('#banner_had').click(function(){
				var forma_pics_List = Handlebars.compile(testTpl)({
					content_one: category_all
				});
				$('#list_menu_content').html(forma_pics_List);
			})
			
			//二级分类
			$('#list_menu_content').on('click','li',function(){
				for(var i=0; i<category_all.length; i++){	
					if($(this).attr('data_id') == category_all[i].id){
						var list_tow = Handlebars.compile(testTpl)({
							
							content_tow: category_all[i].children
						});
						$('#Two_Stage_Classification_Content').html(list_tow);
					}
				}
				most();
			})
			
			//三级分类
			$('#Two_Stage_Classification_Content').on('click','li',function(){
	//			console.log($(this).attr('data_id'));
				for(var i=0; i<category_all.length; i++){	
					for(var j in category_all[i].children){
	//					console.log(category_all[i].children[j].id);
						if($(this).attr('data_id') == category_all[i].children[j].id){
							var list_tow = Handlebars.compile(testTpl)({
								content_Three: category_all[i].children[j].children
							});
							$('#Three_Title_Content').html(list_tow);
						}
					}
				}
				most();
			})
		},10)
		
	}
	
	
	
	return {
		list:list
	}
	
	
})