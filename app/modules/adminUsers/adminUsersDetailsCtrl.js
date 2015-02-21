'use strict';
angular.module('jhApp')
.controller('adminUsersDetailsCtrl', function($stateParams, $location, users, jhNotifier) {

	var _updateUser,
        adminUsersDetails = this;

	users.get({id:$stateParams.id}).$promise.then(function(obj) {
        console.log(obj);
		adminUsersDetails.user = obj;
	});

	adminUsersDetails.saveForm = function(isValid) {
		if (!isValid) return;
		_updateUser();
	};

	_updateUser = function() {
		users.update({id:user._id}, user).$promise.then(function(responceData) {
			if(responceData.message === 'Success') {
				jhNotifier.notify('Updated user');
			}
		});
	}

});