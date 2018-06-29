angular.module('video-player')

  .component('videoPlayer', {
    // TODO
    bindings:{
      video: '<'
    },
    controller: videoPlayerController,
    templateUrl: 'src/templates/videoPlayer.html'
  });

function videoPlayerController() {
  var ctrl = this;
  this.youTubeUrl = 'https://www.youtube.com/embed/';
}