
angular.module('categories.bookmarks.create', [])

.config(function($stateProvider){
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url : "/bookmarks/create",
                templateUrl : "app/categories/bookmarks/create/bookmarks_create.html",
                controller : "CreateBookmarkCtrl as createBookmarkCtrl"
        });
    })

.controller("CreateBookmarkCtrl", function($state, $stateParams, $http, CategoriesModel, BookmarksModel) {
        var createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go("eggly.categories.bookmarks",
                {
                category: $stateParams.category
                }
            );
        }

        createBookmarkCtrl.cancelCreating = function()
        {
            returnToBookmarks();
        }

        createBookmarkCtrl.createBookmark = function(newBookmark)
        {
            newBookmark.id_category = CategoriesModel.getCurrentCategory().id;

            $http.post("http://localhost/AngularJS/egglyAPI/index.php/bookmarks", newBookmark)
                .then(function(results){

                    BookmarksModel.addBookmark(results.data);
                    returnToBookmarks();
                })
        }

    });



