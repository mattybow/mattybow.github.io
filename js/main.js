require.config({
	baseUrl:"/bower_components",
	paths:{
		jquery:"jquery/dist/jquery.min",
		bootstrap:"bootstrap-sass-official/assets/javascripts/bootstrap",
		imgloaded:"imagesloaded/imagesloaded",
		skrollr:"skrollr/dist/skrollr.min",
		fishbone:"fishbone.js/fishbone",
		BlurStack:"../js/blurstack"
	}
});

require(["jquery",
		"imgloaded",
		"skrollr",
		"fishbone",
		"BlurStack"],
	function($,
			imagesloaded,
			skrollr,
			Fishbone,
			blur){
	imagesloaded('body',function(){
		console.log('images have loaded sir');

		var drawBlur = function() {
			// Store the width and height of the canvas for below
			var w = canvas.width;
			var h = canvas.height;
			// This draws the image we just loaded to our canvas
			canvasContext.drawImage(canvasBG, 0, 0, 400, h);
			// This blurs the contents of the entire canvas
			blur("heroCanvas", 0, 0, w, h, 100);
		};

		var blurElements = {'heroCanvas':'/images/yosemiteColor.jpg'};
		for (var key in blurElements){
			var canvas = document.getElementById(key);
			var canvasContext = canvas.getContext('2d');
			var canvasBG = new Image();
			canvasBG.src=blurElements[key];
			canvasBG.onload = function() {
				drawBlur();
			};
		}
	
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
	window.onload=function(){
	};
});