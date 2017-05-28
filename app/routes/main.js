import Ember from 'ember';

export default Ember.Route.extend({
	//store: his.get('store'),
	model() {
		/*this.get('store').createRecord('list', {
			id: 5,
		  	title: 'Rails is Omakase',
		  	done: true
		});
		this.get('store').createRecord('list', {
			id: 4,
		  	title: 'Kek',
		  	done: false
		});*/

		/*this.get('store').findRecord('list', 5).then(function(tyrion) {
		  // ...after the record has loaded
		  tyrion.set('done', "true");
		});*/
		/*var names = [];
		names[1] = {
			id: 1,
		  	title: 'kek',
		  	done: false
		};
		localStorage.setItem("names", JSON.stringify(names));*/

		//return JSON.parse(localStorage.getItem("names"));
		return this.get('store').findAll('list');
		
		/*return [{
	      title: 'buy milk',
	      done: false
	    }, {
	      title: 'do home',
		  done: false
	    }, {
	      title: 'make bread',
	      done: true
	    }]*/
	},
	
});
