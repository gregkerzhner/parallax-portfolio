window.Cloud = function(parentEl){
	this.parentEl = parentEl;
	this.top = 0;
	this.left = 0;
}

Cloud.prototype.render = function(){
	$(this.parentEl).append("<img id='cloud'src='/images/cloud.png'></img>")
}

