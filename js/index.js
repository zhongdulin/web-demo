/*
* @Author: Administrator
* @Date:   2017-03-16 22:18:55
* @Last Modified by:   Administrator
* @Last Modified time: 2017-03-16 22:26:38
*/

'use strict';
(function(window,document){
	function $(id){
		return document.getElementById(id);
	}
	function TabChange(option) {
		this._init(option);
		this.init();
	}
	TabChange.prototype = {
		_init:function(option) {
			this.dts = $(option.dt).children;
			this.contents = $(option.contents).children;
		},
		init:function(){
			var _this = this;
			var timer = null;
			for(var i = 0,len = this.dts.length; i<len ; i++ ){
				this.dts[i].addEventListener('mouseover',function(num,time){
					return function(){
						clearTimeout(timer);
						timer = setTimeout(function(){
							for(var x = 0;x<len;x++) {
								_this.dts[x].className = '';
								_this.contents[x].style.display = 'none';
							}
								_this.dts[num].className = 'current';
								_this.contents[num].style.display = 'block';
						},time)
					}
				}(i,500));
				this.dts[i].addEventListener('mouseout', function(){
					clearTimeout(timer);
				});
			}
		}
	}
	var demo = new TabChange({
		dt:'dt',
		contents:'content'
	});
})(window,document);