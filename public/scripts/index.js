$(function(){
	var hasGetUserMedia = function(){
		return !!(navigator.webkitGetUserMedia);
	};

	var Camera = function(){
		if (hasGetUserMedia()){
			// good to go
			navigator.webkitGetUserMedia({ "audio" : true },
				this.loadMediaStream,
				this.onUserMediaFail);
		} else {
			alert("navigator.getUserMedia not supported in your browser!");
		}
	};

	Camera.prototype.loadMediaStream = function(stream) {
		var audio = document.querySelector("audio");
		audio.src = window.URL.createObjectURL(stream);

		audio.onloadedmetadata = function(e){
			// start streaming of audio to server here?
		};
	};

	Camera.prototype.onUserMediaFail = function(){
		console.log("denied!");
	};

	var cam  = new Camera();
}());