routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
	.state('floor-home.tasks', {
		url: '/tasks',
		template: require('./tasks.html'),
		controller: 'TasksController',
		controllerAs: 'tasks'
	});
}