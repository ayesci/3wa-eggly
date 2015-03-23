/**
 * Created by wap21 on 20/03/15.
 */

// fichier common/models/bookmarks-model.js
angular.module('models.bookmarks', [])
    .service('BookmarksModel', function($http) {
        var model = this;

        model.getBookmarks = function()
        {
            return $http.get("http://localhost/AngularJS/egglyAPI/index.php/bookmarks");
        }
    });




