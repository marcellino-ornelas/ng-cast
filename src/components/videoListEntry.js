angular.module('video-player')
  .component('videoListEntry', {
    // TODO
    bindings: {
      video: '<',
      onClick: '&'
    },
    templateUrl: 'src/templates/videoListEntry.html',
    controller: videoListEntryController
  });


function videoListEntryController($scope) {
  var ctrl = this;
  // $scope.click = function(){
  //   console.log('click')
  //   ctrl.onClick({video: ctrl.video})
  // }
}    
 