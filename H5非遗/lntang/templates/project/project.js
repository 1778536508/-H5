//define(["text!project/project.tpl"],function(testTpl){
//	function prot(){
//		console.log("project加载");
//		proTo();
//	}
//	
//	function proTo(){
//		
//		
//		var Id = 30385;
//		var _url = "http://192.168.1.41:8080/ichProject/getIchProject";
//
//		$.ajax({
//			type:"post",
//			url: _url,
//			data:{
//				"params" : Id
//			},
//			dataType: "json",
//			success: function(obj){
//				console.log(">>>>>>>>>>>>>总数据",obj.data);
//				var forma_pro_banner = Handlebars.compile(testTpl)({
//					content_pro: obj.data
//				});
//				$('#banner_name').html(forma_pro_banner);
//			}
//		});
//		
//		
//		
//		
//		
//	}
//
//	return {
//		prot: prot
//	}
//	
//})