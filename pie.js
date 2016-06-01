var Pie = function(args){

	var isAnimate = args.animite;

	function _appendSpan(me,percent){
		me.text((percent * 100).toFixed() + '%');
		$('<span/>',{
			'class' : 'span_1'
        }).appendTo(me);

		$('<span/>',{
			'class' : 'span_2'
        }).appendTo(me);
	}

	this.showPie = function(me,percent){
		_appendSpan(me,percent);

		setTimeout(function(){
			if (percent > 0.5) {
				$(me).children('.span_1').css({
					'transform':'rotate(0.5turn)'
				});
				$(me).children('.span_2').css({
					'opacity':1,
					'transform':'rotate('+ (percent-0.5) +'turn)'
				});
			}else{
				$(me).children('.span_1').css({
					'transform':'rotate('+ percent +'turn)'
				});
			}
		},0)


	}

	this.init = function(){
		var self = this;
		$(args.el).each(function(){
			var me = $(this);
			var percent = me.attr('data-value');
			self.showPie(me,percent);
		});
	},
	this.loading = function(){
		var self = this;
		// $(args.el).each(function(){
		// 	var me = $(this);
		// 	var percent = parseInt(me.attr('data-value'));
		// 	setInterval(function(){
		// 		me.attr('data-value',percent+=0.01);
		// 		self.init();
		// 	},100)
		// });

		
	}
};



