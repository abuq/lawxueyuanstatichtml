//操作导航菜单
			$(function() {

				//子菜单
				$(".am-dropdown").hover(function() {
					$(this).find("ul").fadeIn("slow");

				},function(){
					$(this).find("ul").fadeOut("slow");
				});

			});