
//	$.ajax({
//		type:"get",
//		url:"data/json.json",
//		success:function(obj){
//			console.log(obj.Icon);
////			alert(obj)
//			var str = '';
//			for(var i in obj.Icon){
//				str+='<li><a href="javascript:;"><img src="'+obj.Icon[i].image+'"/><span>'+obj.Icon[i].text+'</span></a></li>';
//			}
//			$('#pice').append(str);
//			
//			var con = '';
//			for(var i in obj.content){
//				if(i == 6 || i==7){
//					con+=`<li class="remo">
//						<div class="`+obj.content[i].cls1+`" style="background: url(`+obj.content[i].image1+`); background-size:100% 100% ;">
//							<p>`+obj.content[i].text1+`</p>
//							<a href="`+obj.content[i]._url+`" style="width: 100%; height: 100%; display: block;"></a>
//						</div>
//						<div class="`+obj.content[i].cls2+`">
//							<div>
//								<h3>`+obj.content[i].text2+`</h3>
//								<p>`+obj.content[i].text3+`</p>
//							</div>
//							<div>
//								<a href="javascript:;">
//									<img src="`+obj.content[i].image2+`"/>
//									<span>`+obj.content[i].num1+`</span>
//								</a>
//								<a href="javascript:;">
//									<img src="`+obj.content[i].image3+`"/>
//									<span>`+obj.content[i].num2+`</span>
//								</a>
//							</div>
//						</div>
//					</li>`;
//				}else{
//				con+=`<li>
//						<div class="`+obj.content[i].cls1+`" style="background: url(`+obj.content[i].image1+`); background-size:100% 100% ;">
//							<p>`+obj.content[i].text1+`</p>
//							<a href="`+obj.content[i]._url+`" style="width: 100%; height: 100%; display: block;"></a>
//						</div>
//						<div class="`+obj.content[i].cls2+`">
//							<div>
//								<h3>`+obj.content[i].text2+`</h3>
//								<p>`+obj.content[i].text3+`</p>
//							</div>
//							<div>
//								<a href="javascript:;">
//									<img src="`+obj.content[i].image2+`"/>
//									<span>`+obj.content[i].num1+`</span>
//								</a>
//								<a href="javascript:;">
//									<img src="`+obj.content[i].image3+`"/>
//									<span>`+obj.content[i].num2+`</span>
//								</a>
//							</div>
//						</div>
//					</li>`;
//				}
//			}
//			$('#forma_pics').append(con);
//			
//		}
//	});


	


$('#sou').click(function(){
	alert(123);
//	var condition = key();
//
//	$.ajax({
//		
//		type:'post',
//		
//		url:'http://192.168.1.41:8080/search',
//		
//		data:{
//			'condition':JSON.stringify(condition)
//		},
//		dataType:'json', 
//		
//		success:function(obj){
//			
//			console.log(obj);
//			
//		}, error: function(error) {
//			
//         alert('数据找不到');
//         
//     }
//	});
})	


	function key(){
		
		var condition = {};
		
		var keyword = global_keyword;
		
		if(keyword != null && keyword !=''){
			
			keyword = keyword.replace(/\+/g,'');
			
			condition.keyword = filterStr(keyword);
			
			$('#textSou').val(keyword);
			
		}
	}
