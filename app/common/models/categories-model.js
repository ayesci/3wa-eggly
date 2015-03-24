
// fichier common/models/categories-model.js
angular.module('models.categories', [])
    .service('CategoriesModel', function($http, $q) {
        var model = this;
        var categories;
        var currentCategory;

        function findCategory(categoryName)
        {
            for(var i=0; i<categories.length; i++)
            {
                if(categories[i].name == categoryName)
                {
                    return categories[i];
                }
            }
        }

        model.setCurrentCategory = function(categoryName)
        {
            model.getCategoryByName(categoryName)
                .then(function(category)
                {
                    currentCategory = category;
                })
        };

        model.getCurrentCategory = function()
        {
            return currentCategory;
        };

        model.getCurrentCategoryName = function()
        {
            if(currentCategory)
            {
                return currentCategory.name;
            }
            else
            {
                return '';
            }
            // equivalent en ternaire :
            // return currentCategory ? currentCategory.name : "";
        };

        model.getCategoryByName = function(categoryName)
        {
            var deferred = $q.defer();
            if(categories)
            {
                deferred.resolve(findCategory(categoryName));
            }
            else
            {
                model.getCategories()
                    .then(function()
                    {
                        deferred.resolve(findCategory(categoryName));
                    })
            }
            return deferred.promise;
        };

        model.getCategories = function()
        {
            var deferred = $q.defer();
            if(categories)
            {
                deferred.resolve(categories);
            }
            else {
                $http.get("http://localhost/AngularJS/egglyAPI/index.php/categories")
                .then(function (results) {
                    categories = results.data;
                    deferred.resolve(categories);
                })
            }
            return deferred.promise;
            // return $http.get("http://localhost/AngularJS/egglyAPI/index.php/categories");
        }
    });




