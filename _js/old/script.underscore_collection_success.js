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

var PeopleView = Backbone.View.extend({

	tagName: 'ul',

	

	render: function () {

		this.collection.each(function (person) {
			console.log(person);
			var personView = new PersonView({ model: person});
			console.log(personView.el);
		});

	},

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

// var person = new Person;
// var personView = new PersonView({ model: person });

var peopleCollection = new PeopleCollection([
	{
		name: 'shourav0',
		age: 40,
		occupation: 'web designer'
	},
	{
		name: 'shourav1',
		age: 401,
		occupation: 'web developer'
	},
	{
		name: 'shourav2',
		age: 430,
		occupation: 'web fucker'
	},
	{
		name: 'shourav3',
		age: 4220,
		occupation: 'web junky'
	}
]);

var peopleView = new PeopleView({ collection: peopleCollection });
