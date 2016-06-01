(function pie(){
	$('.pie').each(function(){
		var me = $(this);
		var percent = me.attr('data-value');
		me.text((percent * 100) + '%');
		if (percent > 0.5) {
			$('<span/>',{
				'class' : 'span_1',
				'style' : 'transform:rotate(0.5turn)'
	        }).appendTo(me);

			$('<span/>',{
				'class' : 'span_2',
				'style' : 'display:block;transform:rotate('+ (percent-1) +'turn)'
	        }).appendTo(me);
		}else{
			$('<span/>',{
				'class' : 'span_1',
				'style' : 'transform:rotate('+ percent +'turn)'
	        }).appendTo(me);
		}
	});
})();