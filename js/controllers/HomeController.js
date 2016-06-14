app.controller('HomeController', [
	'$scope', 
	'suggestions',

	function($scope, suggestions) {
	$scope.helloWorld = "Hello, Angular!";
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function() {
		
		//empty field
		if(!$scope.title || $scope.title == ""){
			console.log("empty suggestion");
			return;
		}

		//add suggestion to list
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
			comments: [],
		});

		//clear entry box
		$scope.title = '';
	};

	$scope.upVote = function(post) {
		post.upvotes += 1;
	}
}]);