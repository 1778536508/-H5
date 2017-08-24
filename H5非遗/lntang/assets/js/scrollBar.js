//当滚动条的位置处于距顶部10像素以下时，跳转链接出现，否则消失
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>10){
        	$('#Return').fadeIn(100);
            $('#menu').css({
            	'bottom':'calc(13.7rem/2)',
            	'-webkit-transition':'all 0.1s'
            });
            $('#box_list').hide(100);
//          $('#menu').fadeIn(200);
        }else{
            $('#Return').fadeOut(100);
            setTimeout(function(){
            	$('#menu').css({
	            	'bottom':'calc(9.7rem/2)',
	            	'-webkit-transition':'all 0.2s'
	            });
            },200)
            $('#box_list').show(100);
//          $('#menu').fadeOut(200);
        }
    });
    
    //滑动页面将搜索隐藏
    $(window).scroll(function(){
        if ($(window).scrollTop()>0){
				$('#content_search').hide();
       }
    });
    
    
    
    
    
    //当点击跳转链接后，回到页面顶部位置
    $('#Return').click(function(){
        //$('body,html').animate({scrollTop:0},1000);
    	if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 0.2);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 300);
                 return false;            
           });       
           
    
    //搜索
    $('#Text').click(function(){
    	$('#content_search').css('display','none');
//  	跳转页面
    	location.href = 'search.html';
    	var val_inp = $('#Text_inp').val();
    	localStorage.setItem('val',val_inp);
    })
    
    $('#val_rem').click(function(){
    	$('#Text_inp').val("");
    	localStorage.removeItem('val');
    })
    
    setTimeout(function(){
    	//默认为聚焦状态
		$('#search_text').focus();
		var val_text = localStorage.getItem('val');
		if(val_text == "undefined"){
			$('#search_text').val("");
		}else{
			$('#search_text').val(val_text);
		}
		
    },100)
    
   
   
    
    
    
    
    
    
   

    
    

});