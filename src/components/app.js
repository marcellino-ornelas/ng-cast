angular.module('video-player')

  .component('app', {
    // TODO
    templateUrl: 'src/templates/app.html',
    controller: appController
  });


function appController($scope, $element, $attrs) {
  var ctrl = this;
  ctrl.videos = window.exampleVideoData;
  ctrl.currentVideo = ctrl.videos[0];

  ctrl.selectVideo = function(video) {
    ctrl.currentVideo = video;
  }

  ctrl.searchResults = function() {};
}