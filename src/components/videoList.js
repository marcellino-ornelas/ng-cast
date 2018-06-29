angular.module('video-player')
  .component('videoList', {
    // TODO
    bindings: {
      changeVideo: '&',
      videos: '<'
    },
    templateUrl: 'src/templates/videoList.html',
    controller: videoListController
  });


function videoListController($scope) {
  var ctrl = this;

  // $scope.handleVideoSelect = function(video){
  //   ctrl.changeVideo({video: video});
  // }
  // console.log(this)
}