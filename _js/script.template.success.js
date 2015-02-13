var template = function (id) {
	var source =  $('#' + id).html();
	var template = Handlebars.compile(source);
	return template;
}

var Person = Backbone.Model.extend({

	defaults: {
		name: 'shourav',
		age: 40,
		occupation: 'web developer'
	}

});

var PeopleCollection = Backbone.Collection.extend({

	model: Person
});

var PeopleView = Backbone.View.extend({

	tagName: 'ul',

	

	render: function () {

		this.collection.each(function (person) {
			// console.log(person);
			var personView = new PersonView({ model: person});
			// console.log(personView.el);
			this.$el.append(personView.render().el);
		}, this);

		return this;

	},

});

var PersonView = Backbone.View.extend({
	
	tagName: 'a',
	className: 'list-group-item',
	href: '#',

	template: template('personTemplate'),

	// initialize: function () {

	// 	this.render();
	// },

	render: function () {

		var compiledHandlebar = this.template;
		var html = compiledHandlebar(this.model.toJSON());
		
		this.$el.html(html);
		return this;


	}

});

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

// Creating New Collection
var peopleView = new PeopleView({ collection: peopleCollection });
// Appending to DOM 
$(document.body).append(peopleView.render().el);



