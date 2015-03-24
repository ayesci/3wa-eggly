
// fichier app/categories/bookmarks/bookmarks.js

angular.module('categories.bookmarks',
    [
    'models.bookmarks',
    'categories.bookmarks.edit',
    'categories.bookmarks.create'
    ])


    .config(function($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks', {
                url : 'categories/:category',
                views : {
                    'bookmarks@' : {
                        controller: 'BookmarksCtrl as bookmarksCtrl',
                        templateUrl : 'app/categories/bookmarks/bookmarks.html'
                    }
                }
            });
    })

    .controller('BookmarksCtrl', function(BookmarksModel,
                                          CategoriesModel,
                                          $stateParams
                                          )
    {
        var bookmarksCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel
            .getBookmarks()
            .then(function(results)
            { bookmarksCtrl.bookmarks = results });

        bookmarksCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
        bookmarksCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
        bookmarksCtrl.deleteCurrentBookmark = BookmarksModel.deleteCurrentBookmark;

    });

