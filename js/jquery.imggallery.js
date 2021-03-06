// jquery.imggallery.js
(function($) {
	$.fn.imggallery = function(options){
		var defaults = {
			auto : false,
			speed : 400,
			timeout : 3000,
			thumb : false
		};
		var setting = $.extend(defaults,options);
		//プラグインの中身
		var self = $(this);
		var timer;
		var no = 0;
		var hno = -1;
		$('li:gt(0)', self).hide();
		$('img:eq(0)', setting.thumb).css('opacity',0.7);
		if(setting.auto){
			startTimer();
		}
		if(setting.thumb){
			$('a', setting.thumb).click(function(){
				if(setting.auto){
					stopTimer();
				}
				var index = $('a', setting.thumb).index(this);
				no = index;
				$('img', setting.thumb).css('opacity',1);
				$('img:eq('+ index +')', setting.thumb).css('opacity',0.7);
				$('li', self).stop().fadeOut(setting.speed);
				$('li:eq('+ index +')', self).stop().fadeIn(setting.speed);
				if(setting.auto){
					startTimer();
				}
			});
		}
		function startTimer() {
			timer = setInterval(function(){
				no = (no+1) % $('li', self).length;
				$('img:not(:eq('+ hno +'))', setting.thumb).css('opacity',1); 
				$('img:eq('+ no +')', setting.thumb).css('opacity',0.7);
				$('li', self).stop().fadeOut(setting.speed);
				$('li:eq('+ no +')', self).stop().fadeIn(setting.speed);
			},setting.timeout);
		}
		function stopTimer() {
			clearInterval(timer);
		}
		if(setting.thumb){
			$('img', setting.thumb).hover(function() {
				var index = $('img', setting.thumb).index(this);
				$(this).css('opacity',0.7);
				hno = index;
			}, function () {
				var index = $('img', setting.thumb).index(this);
				if(index != no){
					$(this).css('opacity',1);
				}
				hno = -1;
			});
		}
	}
})(jQuery);
