
angular.module("myapp",[])
	
	.controller("RepeatCtrl",function($scope)
	{
		$scope.categories = [
			{"id": 0, "name": "Development"},
        	{"id": 1, "name": "Design"},
        	{"id": 2, "name": "Exercise"},
        	{"id": 3, "name": "Humor"}
		];

		$scope.bookmarks = [
		        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
		        {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
		        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
		        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
		        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
		        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
		        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
		        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
		        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
		    ];

		$scope.currentCategory = null;

		$scope.setCurrentCategory = function(category)
		{
			$scope.currentCategory = category;
			$scope.stopCreating();
			$scope.stopEditing();
		}

		$scope.isCurrentCategory = function(category)
		{
			return $scope.currentCategory != null 
			&& $scope.currentCategory == category;
		}

		$scope.states = {
			isEditing : false,
			isCreating: false
		}
		   
		$scope.shouldShowCreating = function()
		{
			if($scope.currentCategory != null)
				return true;
			else 
				return false;
		}

		$scope.startCreating = function()
		{
			$scope.states.isCreating = true;
			$scope.states.isEditing = false;
		}

		$scope.stopCreating = function ()
		{
			$scope.states.isCreating = false;
		}


		$scope.shouldShowEditing = function()
		{
			if($scope.currentCategory == null)
				return true;
			else 
				return true;
		}

		$scope.startEditing = function (bookmark)
		{
			$scope.states.isCreating = false;
			$scope.states.isEditing = true;
			$scope.editedBookmark = bookmark;
		}

		$scope.stopEditing = function()
		{
			$scope.states.isEditing = false;
		}

		$scope.createBookmark = function (newBookmark)
		{
			newBookmark.category = $scope.currentCategory.name;
			newBookmark.id = $scope.bookmarks.length;
			$scope.bookmarks.push(newBookmark); 
			console.log(newBookmark);
		} 

		$scope.deleteBookmark = function (bookmark)
		{
			var i;
			for(i=0; i<$scope.bookmarks.length; i++)
			{
				if(bookmark.id == $scope.bookmarks[i].id)
				{
					$scope.bookmarks.splice(i,1);
				}
			}
		}



		$scope.TriggerAlert=function()
		{
			alert("true");
		}
	});
