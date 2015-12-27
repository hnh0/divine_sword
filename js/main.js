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
		}
	};
})();