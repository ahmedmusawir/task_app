var Person = Backbone.Model.extend({

	defaults: {
		name: 'shourav',
		age: 40,
		occupation: 'web developer',
	}

});

var PersonView = Backbone.View.extend({
	
	tagName: 'a',
	className: 'list-group-item',
	href: '#',

	// template: _.template("<%= name %> (<%= age %>) - <%= occupation %>"),
	template: _.template( $('#personTemplate').html() ),

	initialize: function () {
		// console.log(this.model);
		this.render();
	},

	render: function () {

		// this.$el.html( this.model.get('name') + '(' + this.model.get('age') + ')' );
		this.$el.html( this.template(this.model.toJSON()) );

		//TYPE THE FOLLOWING IN console
		// $('body').html(personView.el);
	}

});

var person = new Person;
var personView = new PersonView({ model: person });

// var Person = Backbone.Model.extend({

// 	defaults: {
// 		name: 'shourav',
// 		age: 40,
// 		occupation: 'web developer',
// 	},

// 	validate: function(attrs){
		
// 		if (attrs.age < 0 ){

// 			// console.log(attrs.age + " Cannot be Negative");
// 			return "Age Cannot Be Negative";
// 		}

// 		if (! attrs.name ) {
			
// 			return 'Every person must have a name fool';
// 		}

// 	},

// 	work: function() {
// 		return this.get('name') + 'is working his nasass off ...';
// 	}
// });

/*=============================================
=       Chrome Console Output             =
=============================================*/
// var person = new Person({ name: 'shourav', age: 50});
// person.set({'age': -27}, {validate: true});
// Output: false

// person.on('invalid', function(model, error){ console.log(error); });
// person.set({'age': -27}, {validate: true});
// Output: Age Cannot Be Negative 
// Output: false

// /*-----  End of Section comment block  ------*/

/**
*
* 
// var Person = function(config) {
	
// 	this.name = config.name;
// 	this.age = config.age;
// 	this.occupation = config.occupation;

// };

// Person.prototype.work = function() {

// 	return this.name + ' is working.';
// };
*
**/
