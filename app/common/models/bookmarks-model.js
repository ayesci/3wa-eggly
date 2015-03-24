
// fichier common/models/bookmarks-model.js
angular.module('models.bookmarks', [])
    .service('BookmarksModel', function($http, $q) {
        var model = this;
        var bookmarks;

        model.getBookmarks = function()
        {
            var deferred = $q.defer();
            if(bookmarks)
            {
                deferred.resolve(bookmarks);
            }
            else
            {
                $http.get("http://localhost/AngularJS/egglyAPI/index.php/bookmarks")
                .then(function(results)
                {
                    bookmarks = results.data;
                    deferred.resolve(bookmarks);
                })
            }
            return deferred.promise;
            //return $http.get("http://localhost/AngularJS/egglyAPI/index.php/bookmarks");
        }

        model.addBookmark = function(bookmark)
        {
            bookmarks.push(bookmark);
        }

        model.deleteCurrentBookmark = function (bookmark)
        {
            var i;
            for(i=0; i<bookmarks.length; i++)
            {
                if(bookmark.id == bookmarks[i].id)
                {
                    bookmarks.splice(i,1);
                    $http.delete("http://localhost/AngularJS/egglyAPI/index.php/bookmarks/"+bookmark.id);
                }
            }
        };



    });




