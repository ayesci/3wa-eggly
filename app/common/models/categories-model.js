
// fichier common/models/categories-model.js
angular.module('models.categories', [])
    .service('CategoriesModel', function($http) {
        var model = this;

        model.getCategories = function()
        {
            return $http.get("http://localhost/AngularJS/egglyAPI/index.php/categories");
        }
    });




