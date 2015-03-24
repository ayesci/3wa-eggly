
// fichier app/categories/categories.js

angular.module('categories', ['models.categories', 'models.bookmarks'])

    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url : '/',
                views : {
                    'categories@' : {
                        controller: 'CategoriesCtrl as categoriesCtrl',
                        templateUrl: 'app/categories/categories.html'
                    },
                    'bookmarks@' : {
                        controller: 'BookmarksCtrl as bookmarksCtrl' ,
                        templateUrl : 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })
    .controller('CategoriesCtrl', function(CategoriesModel, $stateParams) {
        var categoriesCtrl = this;

        CategoriesModel.getCategories().then(function(results)
        {
            categoriesCtrl.categories = results;
        })
    });


