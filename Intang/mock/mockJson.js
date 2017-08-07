	Mock.mock('jsonD', {    //匹配.json文件
        'list|3|6|9': [{      //数据模板
            'id|+1': 1,
            'email': '@EMAIL',
            'regexp3': /\d{5,10}/
        }]
    });
    
    $.ajax({
    	url:"jsonD",
    	dataType:'json',
    	success:function(data,status,jqXHR){
    		console.log(data.list);
//  		var str = "<ul>";
//  		for(var i in data.list){
//  			console.log(data.list[i].id);
//  			str+="<li>"+data.list[i].regexp3+"</li>";
//  		}
//  		str+="</ul>";
//  		$('body').html(str);
    		
    		
    		
    	}
    });