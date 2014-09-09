require.config({
	baseUrl:"/bower_components",
	paths:{
		jquery:"jquery/dist/jquery.min",
		bootstrap:"bootstrap-sass-official/assets/javascripts/bootstrap",
		imgloaded:"imagesloaded/imagesloaded",
		skrollr:"skrollr/dist/skrollr.min",
		fishbone:"fishbone.js/fishbone"
	}
});

require(["jquery",
		"imgloaded",
		"skrollr",
		"fishbone"],
	function($,
			imagesloaded,
			skrollr,
			Fishbone){
	imagesloaded('body',function(){
		console.log('images have loaded sir');
		skrollr.init();
		/*window.App={};

		var Worker = Fishbone({
			init:function(name){
				this.name = name;
				console.log(this.name);
			}
		});
		var Machine = Worker.extend({
			message:'i am a robot',
			dance:function(){
				console.log('i am doing the robot');
			}
		});
		App.robot = new Machine('wall-e');
		App.human = new Worker('mattbow');*/
	});
});