//自己找模板文件.tpl
define(["text!search/search.tpl"], function(testTpl) {
	//调用加载
	function init() {
		console.log("search加载");
		_onGetData();
	}

	function _onGetData() {
		 
		
	var num = 1;
	var limnum = 5;
	setTimeout(function(){
		//筛选类别
		var arr_Cate = [];
		//筛选地域
		var arr_Code = [];
		$('#list_menu_content').on('click','li',function(){
			arr_Cate.push($(this).attr('data_Cate'));
			console.log(arr_Cate);
		})
		$('#Two_Stage_Classification_Content').on('click','li',function(){
			arr_Cate.push($(this).attr('data_Cate'));
			arr_Code.push($(this).attr('data-Code'));
		})
		$('#Three_Title_Content').on('click','li',function(){
			arr_Cate.push($(this).attr('data_Cate'));
			arr_Code.push($(this).attr('data-Code'));
		})
		$('#list_reg').on('click','li',function(){
			arr_Code.push($(this).attr('data-Code'));
		})
		
		
		
		
		//搜索
		$('#sou').click(function() {
			$('#Load_none').css('display','block');
			setTimeout(function(){
				$('#Load_none').css('display','none');
			},1000);
			$('#p_content').css('display', 'none');
			localStorage.setItem('page', num);
			//获取关键字
			var val = $('#search_text').val();
			//每次搜索num=1
			num = 1;
			//每页的数量
			var limnum = 5;
			var offnum = (num - 1) * limnum;
			$('#paging').css('display', 'block');
			$('#search_content').css('display', 'none');
			$('#sou_content').css('display', 'block');
			$('#forma_pics').html('');
			

			//筛选类别
			for(var i = 0; i<arr_Cate.length; i++){}
			var cate = arr_Cate[i-1];
			localStorage.setItem('cate',cate);
			console.log(cate);
			//筛选地域
			for(var j = 0; j<arr_Code.length; j++){}
			var code = arr_Code[j-1];
			localStorage.setItem('code',code);
			var type = localStorage.getItem('type');
			ajaxData(val, offnum, limnum, num, cate, code, type);			
		});
		

		//确定筛选
		$('#btn').click(function(){
			$('#Load_none').css('display','block');
			setTimeout(function(){
				$('#Load_none').css('display','none');
			},1000);
			$('#paging').css('display', 'block');
			$('#search_content').css('display', 'none');
			$('#sou_content').css('display', 'block');
			console.log(arr_Code);
			$('#forma_pics').html('');
			var val = $('#search_text').val();
			num = 1;
			var offnum = (num - 1) * limnum;
			var lim = 5;

			//筛选类别
			for(var i = 0; i<arr_Cate.length; i++){};
			var cate = arr_Cate[i-1];
			localStorage.setItem('cate',cate);
			//筛选地域
			for(var j = 0; j<arr_Code.length; j++){};
			var code = arr_Code[j-1];
			localStorage.setItem('code',code);
			
			var type = localStorage.getItem('type');
			ajaxData(val, offnum, lim, num, cate, code, type);
		});
		
		
		//筛选类型
		$('#list_type').on('click','li',function(){
			$('#Load_none').css('display','block');
			setTimeout(function(){
				$('#Load_none').css('display','none');
			},1000);
			var type = $(this).attr('data-id');
			localStorage.setItem('type',$(this).attr('data-id'));
			
			$('#p_content').css('display', 'none');
			//获取关键字
			var val = $('#search_text').val();
			//每次搜索num=1
			num = 1;
			//每页的数量
			var limnum = 5;
			var offnum = (num - 1) * limnum;
			$('#paging').css('display', 'block');
			$('#search_content').css('display', 'none');
			$('#sou_content').css('display', 'block');
			$('#forma_pics').html('');
			//筛选类别
			for(var i = 0; i<arr_Cate.length; i++){}
			var cate = arr_Cate[i-1];
			localStorage.setItem('cate',cate);
			
			//筛选地域
			for(var j = 0; j<arr_Code.length; j++){}
			var code = arr_Code[j-1];
			localStorage.setItem('code',code);
			
			ajaxData(val, offnum, limnum, num, cate, code, type);
		});
		
		
		
		
		//进入搜索页面搜索
		setTimeout(function(){
			$('#Load_none').css('display','block');
			setTimeout(function(){
				$('#Load_none').css('display','none');
			},1000);
			$('#p_content').css('display', 'none');
			$('#paging').css('display', 'block');
			$('#search_content').css('display', 'none');
			$('#sou_content').css('display', 'block');
			$('#forma_pics').html('');
			
			var val = $('#search_text').val();
			num = 1;
			var limnum = 5;
			var offnum = (num - 1) * limnum;
			var cate = localStorage.getItem('cate');
			var code = localStorage.getItem('code');
			var type = localStorage.getItem('type');
			ajaxData(val, offnum, limnum, num, cate, code, type);
		},100)
		
		
		
		
	},10);	

		function ajaxData(val, off, lim, num, cate, code, type) {
//			console.log(type == null ? 1 : 2)
			//参数	
			//'keyword':  value="关键字"
			//"offset":  （分页数-1）*一页的条数
			//"limit": 	     一页的条数
			//"category":	 分类
			
			if((cate != undefined && cate != "undefined" && cate != 0) && (code != undefined  && code != "undefined" && code != "") && type != null){
				condition = { "keyword": val, "offset": off, "limit": lim, "category":cate, "area":code, "type":type};
			}else{
				condition = { "keyword": val, "offset": off, "limit": lim};
				if((cate != undefined && cate != "undefined" && cate != 0) || (code == undefined && code == "undefined"  && code == "")){
					condition = { "keyword": val, "offset": off, "limit": lim, "category":cate};
				}
				if((cate == undefined && cate == "undefined" && cate == 0) || (code != undefined && code != "undefined"  && code != "")){
					condition = { "keyword": val, "offset": off, "limit": lim, "area":code};
				}
				if((cate != undefined && cate != "undefined" && cate != 0) && (code != undefined && code != "undefined"  && code != "")){
					condition = { "keyword": val, "offset": off, "limit": lim, "category":cate, "area":code};
				}
			}
			
			//过滤掉“null” 和 undefined
			if(type != "null" && type != null && type != undefined){
				condition.type = type;
			}else{
				delete condition.type;
			}
			
			console.log(condition);
			$.ajax({
				type: 'post',
				url: 'http://diich.efeiyi.com/search',
				data: {
					'condition': JSON.stringify(condition)
				},
				dataType: 'json',
				success: function(obj) {	
						
					console.log('>>>>>总数据>>>>>>>>>', obj)
					console.log("---内容数据---->", obj.data);
					console.log('-----------', obj.data.length);
					//判断有无内容
					setTimeout(function(){
						if(obj == null || obj.data == null || obj.data.length == 0) {
							$('#p_content').css('display', 'block');
							$('#paging').css('display','none');
							$('#search_content').css('display', 'block');
						} else{
							$('#p_content').css('display', 'none');
							$('#paging').css('display','block');
							$('#search_content').css('display', 'none');
						}
					},10);
					
					//判断type的值    这里type的值为1时数据的ID不同
					if(condition.type != 1){
						//定义一个实例化对象
						var forma_pics_Li = Handlebars.compile(testTpl)({
							//数据名：数据
							contents: obj.data
						});
						//将数据放到UL中
						$("#forma_pics").append(forma_pics_Li);
					}else{
						var forma_inherit = Handlebars.compile(testTpl)({
							content_inherit: obj.data
						});
						$("#forma_pics").append(forma_inherit);
					}
					
					
					//定义一个变量存储总分页
					var total = 0;
					if(num > 1) {
						//获取客户端数据
						var total_storage = localStorage.getItem('search_total');
						total = total_storage != null ? total_storage : 0;
					} else {
						//将搜索条数存到客户端		
						total = obj.total != null ? obj.total : 0;
						localStorage.setItem('search_total', total);
					}
											
					
					//等待加载
					setTimeout(function() {
						//使当前的分页为空   以便重复添加
						$('#thisPage').text('');
						//默认获取的总分页数
						var total_storage = localStorage.getItem('search_total');
						//总分页
						$('#page').text(Math.ceil(total_storage / lim));
						//取整
						if(num >= Math.ceil(total_storage / lim)) {
							num = Math.ceil(total_storage / lim);
						}
						//默认的页数
						$('#thisPage').text(num);
					}, 10)
					
					//search list is content 
					var valList = $('.list_P_id');
					for(var i=0; i<valList.length; i++){
						$(valList[i]).text('#'+getCategoryTextById($(valList[i]).attr('data_list_p')));
					}

				},
				error: function(error) {
					$('#p_content').css('display', 'block');
				}
			});
		}
		
		
		
		

		//加载更多
		$(window).scroll(function() {
			var scrollTop = $(this).scrollTop();           //滚动条距离窗口的高度			　　
			var scrollHeight = $(document).height();       //文档的高度
			var windowHeight = $(this).height();  		   //浏览器高度
			//可视区域的高度
			//每次滑到底部请求ajax
			if(scrollTop + windowHeight >= scrollHeight) {
				var val = $('#search_text').val();
				num++;
				var offset = (num - 1) * limnum;
				//获取当前的总页数渲染到页面
				var total_storage = localStorage.getItem('search_total');
				$('#page').text(Math.ceil(total_storage / limnum));
				
				//当没有数据时   将数据返回    结束请求
				if(num > Math.ceil(total_storage / limnum)) {
					num = Math.ceil(total_storage / limnum);
					return;
				}
				//将每次滑到底部的num存储
				localStorage.setItem('page', num);
				
				//加载更多
				$('#load_search_gif').css('display','block');
				stop();
				setTimeout(function(){
					$('#load_search_gif').css('display','none');
					move();
				},1000);
				
				//获取存储数值
				var cate = localStorage.getItem('cate');
				var code = localStorage.getItem('code');
				var type = localStorage.getItem('type');
				
				
				setTimeout(function(){
					//每次滑到底部请求一次ajax
					ajaxData(val, offset, limnum, num, cate, code, type);
				},500);
			}
		});
		
		
		//判断上滑还是下滑
		$(document).ready(function(){  
		    var p = 0,
		        t = 0;
		    $(window).scroll(function(e){  
	            p = $(this).scrollTop();  
	            if(t <= p){//下滚  
	               console.log('向下');  
	               
	            }  
	            else{//上滚  
	                console.log('向上');  
	            };
	            setTimeout(function(){
	            	t = p;
	            },0);
		    });  
		}); 		




	}
	
	
	
	
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

	//返回数据
	return {
		init: init
	}
})
