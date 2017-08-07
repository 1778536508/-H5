;(function($){
	var box = $("#box");	
	var pice = $('#pice');
	var liwidth = pice.width()/2;
	var index = 0;
	var num = pice.children().size();
	box.swipeLeft(function(){
		index++;
		if(index>1){
			index=1;
		}
		server(index);
	}).swipeRight(function(){
		index--;
		if(index<0){
			index=0;
		}
		server(index);
	})
	
	
	
	
	function server(index){
		var s = index * liwidth+"px";
		pice.css({
			"-webkit-transform":"translateX(-"+s+")",
			'-webkit-transition':'all 0.5s'
		})
		$('#bar>span').eq(index).addClass('bar_blue').siblings().removeClass('bar_blue');
		
	}
	
	
	$('#bar').on('click','span',function(){
		$(this).addClass('bar_blue').siblings().removeClass('bar_blue');
		server($(this).index());
	})
	
})(Zepto);

