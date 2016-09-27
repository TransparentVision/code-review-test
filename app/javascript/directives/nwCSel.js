angular.module('NoteWrangler').directive("nwCategorySelector", function($resource){
  return {
    replace: true,
    restrict: "E",
    require: "?ngModel",
    templateUrl: '/templates/directives/nwCategorySelector.html',
    link: function(scope, element, attrs, ngModelCtrl){
        scope.getCategory = function() {
          return $resource('/categories/:id');
        };

      var activeCategory = {};
      scope.categories = scope.getCategory().query();

      scope.isActive = function(category){
        return activeCategory && activeCategory.id === category.id;
      }

      scope.toggleCategory = function(category){
        if(category === activeCategory) {
          activeCategory = {};
        } else {
          activeCategory = category;
        }

        ngModelCtrl.$setViewValue(activeCategory);
      }

      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      }
    }
  };
});
