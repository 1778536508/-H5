window.onload = function(){
	
	
	//下拉菜单
	var banner_had = document.getElementById('banner_had');
	var banner_menu = document.getElementById('banner_menu');
	var cover = document.getElementById('cover');
	var banner_menu_Button = document.getElementById('banner_menu_Button');
	var box = document.getElementById('box');
	
	
	
	//显示
	banner_had.onclick = function(){
		banner_menu.style.top = 0;
		banner_menu.style.transition = 'all 0.5s';
		cover.style.display = 'block';

	}
	//隐藏
	banner_menu_Button.onclick = function(){
		banner_menu.style.top = '-11rem';
		banner_menu.style.transition = 'all 0.5s';
		cover.style.display = 'none';
	}
	//点击其他部分隐藏
	cover.onclick = function(){
		banner_menu.style.top = '-11rem';
		banner_menu.style.transition = 'all 0.5s';
		cover.style.display = 'none';
		Catalog.style.right = '-12.5rem';
		Catalog.style.transition = 'all 0.5s';
	} 
	
	
	
	
	
	
	//点击目录
	var Catalog = document.getElementById('Catalog');
	var menu = document.getElementById('menu');
	menu.onclick = function(){
		Catalog.style.right = '0';
		Catalog.style.transition = 'all 0.5s';
		cover.style.display = 'block';
	}
	
	
	
	
	
	
}