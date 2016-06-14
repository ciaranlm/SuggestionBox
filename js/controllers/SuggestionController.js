app.controller('SuggestionController', ['$scope',
	'$routeParams',
	'suggestions', function($scope, $routeParams, suggestions){

		$scope.post = suggestions.posts[$routeParams.id];

		$scope.addComment = function(){
			$scope.post.comments.push({
				body: "this is a body",
				upvotes: 0,
			});
		}

		$scope.upVote = function(comment){
			comment.upvotes += 1;
		}
	}]);