
angular.module("myapp",["ui.router", "categories", "categories.bookmarks"])

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('eggly', {
				url : '',
				abstract : true
			});


		$urlRouterProvider.otherwise('/');
	})


	.controller('ProfileCtrl', function($scope, $stateParams) {
		$scope.name = $stateParams.name;
	})


	.controller("RepeatCtrl",function($scope)
	{
		$scope.currentCategory = null;


		$scope.setCurrentCategory = function(category)
		{
			$scope.currentCategory = category;
			$scope.stopCreating();
			$scope.stopEditing();
		};

		$scope.isCurrentCategory = function(category)
		{
			return $scope.currentCategory != null 
			&& $scope.currentCategory == category;
		};

		$scope.states = {
			isEditing : false,
			isCreating: false
		};
		   
		$scope.shouldShowCreating = function()
		{
			if($scope.currentCategory != null)
				return true;
			else 
				return false;
		};

		$scope.startCreating = function()
		{
			$scope.states.isCreating = true;
			$scope.states.isEditing = false;
		};

		$scope.stopCreating = function ()
		{
			$scope.states.isCreating = false;
		};

		$scope.shouldShowEditing = function()
		{
			if($scope.currentCategory == null)
				return true;
			else 
				return true;
		};

		$scope.startEditing = function (bookmark)
		{
			$scope.states.isCreating = false;
			$scope.states.isEditing = true;
			$scope.editedBookmark = bookmark;
		};

		$scope.stopEditing = function()
		{
			$scope.states.isEditing = false;
		};

		$scope.createBookmark = function (newBookmark)
		{
			newBookmark.category = $scope.currentCategory.name;
			newBookmark.id = $scope.bookmarks.length;
			$scope.bookmarks.push(newBookmark); 
			console.log(newBookmark);
		};

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
		};

		$scope.TriggerAlert=function()
		{
			alert("true");
		}
	});
