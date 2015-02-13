(function () {
	
	// Main Object Constructor
	window.App = {

		Models: {},
		Collections: {},
		Views: {}
	};

	// The Handlebars Templating Global Function
	window.template = function (id) {
		var source =  $('#' + id).html();
		var template = Handlebars.compile(source);
		return template;
	};

	// Person Model
	App.Models.Person = Backbone.Model.extend({

		defaults: {
			name: 'shourav',
			age: 40,
			occupation: 'web developer'
		}

	});

	// People Collection
	App.Collections.People = Backbone.Collection.extend({

		model: App.Models.Person

	});

	// People View
	App.Views.People = Backbone.View.extend({

		tagName: 'ul',

		render: function () {

			this.collection.each(function (person) {
				// console.log(person);
				var personView = new App.Views.Person({ model: person});
				// console.log(personView.el);
				this.$el.append(personView.render().el);
			}, this);

			return this;

		},

	});

	// Person View
	App.Views.Person = Backbone.View.extend({
	
		tagName: 'a',
		className: 'list-group-item',
		href: '#',

		template: template('personTemplate'),

		render: function () {

			var compiledHandlebar = this.template;
			var html = compiledHandlebar(this.model.toJSON());
			
			this.$el.html(html);
			return this;
		}

	});

	// People Collection
	peopleCollection = new App.Collections.People([
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
	var peopleView = new App.Views.People({ collection: peopleCollection });
	// Appending to DOM 
	$(document.body).append(peopleView.render().el);




})();

























