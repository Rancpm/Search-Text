angular.module('Demo', [])
  .controller('Demo', function($scope) {
    $scope.data = [
      { text: "Highlighting search result improves the user experience and makes the search process less time consuming compare to showing the search result only.We are very familiar with this feature, it is available in almost every browser, rich text editors and document processor like Google docs.In this tutorial i am going to explain you how to develop the highlight feature using AngularJs filter module." }
    ]
  })
  .filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
  })
