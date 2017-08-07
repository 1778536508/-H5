//当滚动条的位置处于距顶部10像素以下时，跳转链接出现，否则消失
$(function () {
    $(window).scroll(function(){
        if ($(window).scrollTop()>10){
        	$('#Return').fadeIn(200);
            $('#menu').css({
            	'bottom':'calc(13.7rem/2)',
            	'-webkit-transition':'all 0.1s'
            });
            $('#box_list').hide(200);
//          $('#menu').fadeIn(200);
        }else{
            $('#Return').fadeOut(200);
            setTimeout(function(){
            	$('#menu').css({
	            	'bottom':'calc(9.7rem/2)',
	            	'-webkit-transition':'all 0.2s'
	            });
            },200)
            $('#box_list').show(500);
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
    $('#Text').focus(function(){
    	$('#content').css('display','none');
    	$('#box_search').css('display','block');
    	$('#content_search').css('display','none');
    	//默认为聚焦状态
    	$('#search_text').focus();
    	
    	
    	
    })
   

    //选中高光状态
    $('#Catalog_list>li').click(function(){
    	$(this).addClass('li1').siblings().removeClass('li1');
    })
    
    

    
    

});