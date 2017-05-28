import Ember from 'ember';

export default Ember.Controller.extend({
	counter: 0,
	nodes: 0,
	checked:0,
	nodeall:0,
	removeid: [],
	actions: {
	    togglebox(slot) {
	      //this.toggleProperty('isWide');
	      this.get('store').findRecord('list', slot.id).then(function(tyrion) {
		  // ...after the record has loaded
		  		tyrion.set('title', 'false');
			});

	    },

	    pushvalue(value) {
	    	if(value!='') {
				this.incrementProperty('counter');
				this.incrementProperty('nodes');
				this.incrementProperty('nodeall');
				/*var idslot =this.get('counter');
				var names = [];
				names[idslot] = {
					id: idslot,
				  	title: value,
				  	done: false
				};
				localStorage.setItem("names", JSON.stringify(names));
				this.send('reload');*/
		    	this.get('store').createRecord('list', {
					id: this.get('counter'),
				  	title: value,
				  	done: false
				});	
				document.getElementsByClassName('main-input')[0].value = '';
			}
	    },

	    delete(slot, id) {
	    	if(document.getElementsByClassName(id)[0].style.textDecoration == "line-through") {
	    		this.decrementProperty('checked');
			} else {
				this.decrementProperty('nodes');
	    		this.decrementProperty('nodeall');
			}
			this.store.findRecord('list', slot.id).then(function(post) {
				post.deleteRecord();

			});
	    },

	    deleteAll() {
	    	//this.decrementProperty('nodes');
			var k = this.get('counter');
			this.set('checked', 0);
			while(k>0) {
				try {
					this.get('store').findRecord('list', k).then(function(post) {
						var id = post.get('id');
						if(document.getElementsByClassName(id)[0].style.textDecoration == "line-through") {
							post.deleteRecord();		
						}
					});
				}
				catch(e) {

				}
				k--;
			}
	    },

	    display(slot, title) {
	    	console.log(slot.id);
			console.log(title);
	    	document.getElementById(slot.id).value = title; 
	    	document.getElementById(slot.id).style.display = "block";
	    	document.getElementById(slot.id).focus();
	      //this.toggleProperty('isWide');
	      /*var input = document.createElement("input");
	      var node = document.createElement("<input {{action}}>")
	      input.setAttribute('enter',"{{action kek}}");
	      document.getElementById(slot.id).appendChild(node);
	      this.get('store').findRecord('list', slot.id).then(function(tyrion) {
		  // ...after the record has loaded
		  		//tyrion.set('title', 'false');
			});*/
	    },

	    changetitle(slot, value) {
	    	console.log(slot.id);
	    	console.log(value);
	      //this.toggleProperty('isWide');
	      this.get('store').findRecord('list', slot.id).then(function(tyrion) {
		  // ...after the record has loaded
		  		tyrion.set('title', value);
			});
	      document.getElementById(slot.id).style.display = "none";
	    },

	    hideinput(slot, value) {
			console.log(slot.id);
	    	console.log(value);
	    	document.getElementById(slot.id).style.display = "none";
		},

		toggletitle(id) {

			console.log(id);
			if(document.getElementsByClassName(id)[0].style.textDecoration == "line-through") {
				document.getElementsByClassName(id)[0].style.textDecoration="none";
				this.decrementProperty('checked');
				this.incrementProperty('nodes');
			}
			else {
				document.getElementsByClassName(id)[0].style.textDecoration="line-through";
				this.incrementProperty('checked');
				this.decrementProperty('nodes');
			}	
		},
 	}
});
