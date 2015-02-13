var Person = Backbone.Model.extend({

	defaults: {
		name: 'shourav',
		age: 40,
		occupation: 'web developer',
	}

});

var PeopleCollection = Backbone.Collection.extend({

	model: Person
});

var PersonView = Backbone.View.extend({
	
	tagName: 'a',
	className: 'list-group-item',
	href: '#',

	template: '#personTemplate',

	initialize: function () {

		this.render();
	},

	render: function () {

		var source = $(this.template).html();
		// var source = $('#personTemplate').html();
		var template = Handlebars.compile(source);
		var html = template(this.model.toJSON());
		
		this.$el.html(html);
	}

});

var person = new Person;
var personView = new PersonView({ model: person });

var person2 = new Person;
var personView2 = new PersonView({ model: person2 });

var peopleCollection = new PeopleCollection;
peopleCollection.add(person);

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
