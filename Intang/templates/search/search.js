
//自己找模板文件.tpl
define(["text!search/search.tpl"], function(testTpl) {
	//调用加载
	function init() {
		console.log("加载");
		_onGetData();
	}



	


	function _onGetData() {
		$('#sou').click(function() {
			$('#paging').css('display','block');
			$('#forma_pics').html('');
			$('#search_content').css('display', 'none');
			$('#sou_content').css('display', 'block');
			var val = $('#search_text').val();
			//页数
			var num = 1;
			//每页的数量
			var limnum = 5;

			var offnum = (num-1)*limnum;
			ajaxData(val,offnum,limnum,num);
			Load(val,limnum);
		})
		
		
		
		

		function ajaxData(val,off,lim,num){
			//参数
			var condition = { 'keyword': val, "offset": off, "limit": lim };
			$.ajax({
				type: 'post',
				url: 'http://diich.efeiyi.com/search',
				data: {
					'condition': JSON.stringify(condition)
				},
				dataType: 'json',
				success: function(obj) {
					console.log('>>>>>总数据>>>>>>>>>',obj)
					console.log("---内容数据---->", obj.data);
					//默认获取的总分页数
					var total_storage = localStorage.getItem('search_total');
					var total= 0;
					if(num > 1){
						//获取客户端数据
				        var total_storage = localStorage.getItem('search_total');
				        total = total_storage != null ? total_storage : 0;
				    } else {
				    	//将搜索条数存到客户端
				        total = obj.total != null ? obj.total : 0;
				        localStorage.setItem('search_total', total);
				    }
					
					
					
					
					//定义一个实例化对象
					var forma_pics_Li = Handlebars.compile(testTpl)({
						//数据名：数据
						contents: obj.data
					});
					//将数据放到UL中
	    			$("#forma_pics").append(forma_pics_Li);
	    			
	    			
	    			
	    			//默认的页数
	    			$('#thisPage').text(num);
	    			//分页
	    			$('#page').text(Math.ceil(total_storage/lim));
	    			if(num >= Math.ceil(total_storage/lim)){
	    				num = Math.ceil(total_storage/lim);
	    				$('#thisPage').text(num);
	    			}
	    			
				},error: function(error) {
					alert('数据找不到');
				}
			});
		}
		
		
		
		
		
		//加载更多
		function Load(val,limnum){
			//滑动到底部
			var num = 1;
			$(window).scroll(function(){
			　　 var scrollTop = $(this).scrollTop();
			　　 var scrollHeight = $(document).height();
			　　 var windowHeight = $(this).height();
			　　 if(scrollTop + windowHeight == scrollHeight){
					num++;
					var offset = (num-1)*limnum;
					console.log(num);
					ajaxData(val,offset,limnum,num);
			　　}
			
		
			});
	
		}
		
		
		
		
		
		
	}

	//返回数据
	return {
		init: init
	}
})
