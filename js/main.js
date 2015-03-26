require.config({
	baseUrl:"/bower_components",
	paths:{
		jquery:"jquery/dist/jquery.min",
		bootstrap:"bootstrap-sass-official/assets/javascripts/bootstrap",
		imgloaded:"imagesloaded/imagesloaded",
		skrollr:"skrollr/dist/skrollr.min",
		fishbone:"fishbone.js/fishbone",
		particlesJS:"particles.js/particles.min"
	}
});

require(["jquery",
		"imgloaded",
		"skrollr",
		"fishbone",
		"particlesJS"],
	function($,
			imagesloaded,
			skrollr,
			Fishbone,
			blur){
	imagesloaded('body',function(){
		console.log('images have loaded sir');

		particlesJS('particles-js', {
			particles: {
				color: '#eee',
				shape: 'circle', // "circle", "edge" or "triangle"
				opacity: 0.5,
				size: 2,
				size_random: true,
				nb: 150,
				line_linked: {
					enable_auto: true,
					distance: 100,
					color: '#eee',
					opacity: 0.7,
					width: 1,
					condensed_mode: {
						enable: false,
						rotateX: 600,
						rotateY: 600
					}
				},
				anim: {
					enable: true,
					speed: 2
				}
			},
			interactivity: {
				enable: true,
				mouse: {
					distance: 250
				},
				detect_on: 'canvas', // "canvas" or "window"
				mode: 'grab',
				line_linked: {
					opacity: .3
				},
				events: {
					onclick: {
						enable: true,
						mode: 'push', // "push" or "remove" (particles)
						nb: 4
					}
				}
			},
			/* Retina Display Support */
			retina_detect: true
		});
	
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