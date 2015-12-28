var sword = window.sword || {};
(function () {
	sword = {
		swiptInit: function() {
			var self = this;
			window.mySwipe = Swipe(document.getElementById('swipe'), {
				startSlide: 0,
				speed: 400,
				auto: 3000,
				continuous: true,
				disableScroll: false,
				stopPropagation: false,
				callback: function(pos) {
					var i = bullets.length;
					while (i--) {
						bullets[i].className = ' ';
					}
					bullets[pos].className = 'on';
				}
			});
			var bullets = document.getElementById('position').getElementsByTagName('li');
		},
		openTab: function (index) {
			var tab_items = $('.tab_detail_item');
			if(index){
				index = Number(index);
				var tab_item = tab_items.eq(index);
			}else{
				var tab_item = tab_items.eq(0);
			}
			tab_items.removeClass('active').addClass('hidden');
			tab_item.removeClass('hidden').addClass('active');
			$('.light_box').removeClass('hidden');
			$('.light_model').removeClass('hidden');
		},
		closeTab: function () {
			$('.tab_detail_item').removeClass('active').addClass('hidden');
			$('.light_box').addClass('hidden');
			$('.light_model').addClass('hidden');
		},
		showFigure: function (index) {
			$('.figure_detail').removeClass('hidden');
		},
		showList: function () {
			
		}
	};
	$('.figure_item_btn').on('click', function () {
		var index = $(this).attr('index');
		sword.openTab(index)
	});
	$('.tab_item').on('click',function () {
		var type = $(this).attr('type');
		$('.tab_detail_item').addClass('hidden').removeClass('active');
		$('#' + type + '_item').removeClass('hidden').addClass('active');
		$('.figure_list').removeClass('hidden');
		$('.figure_detail').addClass('hidden');
	});
	$('.light_model_close').on('click',function () {
		sword.closeTab();
	});
	$('.figure_list_item').on('click',function(){
		$(this).closest('.figure_list').addClass('hidden');
		sword.showFigure();
	});
	$('.figure_detail').on('click', function () {
		$(this).addClass('hidden');
		$('.figure_list').removeClass('hidden');
	})
})();







