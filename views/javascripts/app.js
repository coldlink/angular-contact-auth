var app = angular.module('angularContactList', []);

//main controller
app.controller('MainCtrl', [
'$scope', '$http',
function($scope, $http){
	//refresh contacts list on an post/put
	$scope.refreshContacts = function(){
			$http.get('/contacts').success(function(res){
			$scope.contacts = res;
			$scope.contact = "";
		})
	};

	//populate contacts on page load
	$scope.refreshContacts();

	//add contact form
	$scope.addContact = function(){
		//set contact object from form and post to database using http request
  		$http.post('/contacts/post', $scope.contact).success(function(res){
  			$scope.refreshContacts();
  		});
  	};

  	//get single contact using id when edit row is visible
  	$scope.getContact = function(id){
  		$http.get('/contacts/' + id).success(function(res){
  			$scope.tempcontact = res;
  		});
  	};

  	//update contact and refresh contacts list
  	$scope.editContact = function(){
		$http.put('/contacts/put/' + $scope.tempcontact._id, $scope.tempcontact).success(function(res){
			$scope.contact = $scope.tempcontact;
			$scope.refreshContacts();
		});
  	};

  	//enables/diables editing row on edit button
  	$scope.showEditRow = function(_id){
		if ($scope.editorEnabled != _id) {
			$scope.editorEnabled = _id;
			$scope.getContact(_id);
		}
		else
		{
			$scope.editorEnabled = null;
			$scope.tempcontact = "";
		}
	};

	$scope.deleteContact = function(id){
		$http.delete('/contacts/delete/' + id).success(function(res){
			$scope.refreshContacts();
		});
	};
}]);