(function () {
	//Task.js
	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};

	//The Handlebars Templating Global Function
	window.template = function (id) {
		var source =  $('#' + id).html();
		// console.log(source);
		var template = Handlebars.compile(source);
		return template;
	};	

	//Task Model
	App.Models.Task = Backbone.Model.extend({

		defaults: {
			title: 'Looking for Job',
			priority: 4
		}, 

		validate: function (attrs) {

			if( ! $.trim(attrs.title) ) {

				return 'A task is required';
				// return false;
			}
		}

	});

	//Tasks Collection
	App.Collections.Tasks = Backbone.Collection.extend({

		model: App.Models.Task

	});
	
	//Tasks Collections View 
	App.Views.Tasks = Backbone.View.extend({

		tagName: 'ul',

		render: function () {
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function (task) {
			
			//creating a child view 
			var taskView = new App.Views.Task({ model: task });
			this.$el.append(taskView.render().el);
		}

	});

	//Task View 
	App.Views.Task = Backbone.View.extend({

		tagName: 'li',
		className: 'list-group-item',
		template: template('taskTemplate'),

		initialize: function () {
			// _.bindAll(this, 'editTask', 'render'); [Didn't work!!] 
			this.model.on('change', this.render, this);
			this.model.on('destroy', this.removeFromDOM, this);
		},

		events: {
			'click .edit': 'editTask',
			'click .delete': 'destroyTask'
		},

		editTask: function () {
			// alert('There is nothing devine ...');
			var newTitle = prompt('What Title You Want?', this.model.get('title'));

			// if( !newTitle )  return; 

			this.model.set({ 'title': newTitle }, { 'validate': true });
			// console.log(this.model);

		},

		destroyTask: function () {
			// alert('Ready to delete');
			this.model.destroy();
			// console.log(tasksCollection);
		},

		removeFromDOM: function () {
			this.$el.remove();
		},

		render: function () {
			
			var compiledHandlebar = this.template;
			var html = compiledHandlebar(this.model.toJSON());
			
			this.$el.html( html );
			// this.$el.html( this.model.get('title') );
			return this;
		}

	});

	App.Views.AddTask = Backbone.View.extend({

		el: '#addTaskForm',

		events: {

			'submit': 'submit'
		},

		initialize: function () {
			
			// console.log(this.el.innerHTML);
		},

		submit: function (event) {
			event.preventDefault();

			// console.log('submitted ...');
			var newTaskTitle = $(event.currentTarget).find('input[type=text]').val();
			// console.log(newTaskTitle);
			var task = new App.Models.Task({ title: newTaskTitle });
			// console.log(task);
			this.collection.add(task);
			// console.log(this.collection);
		}

	});

	// var task = new App.Models.Task({
	// 	title: 'Learn Backbone.js',
	// 	priority: 1
	// });

	// var taskView = new App.Views.Task({ model: task });
	
	// var tasksCollection = new App.Collections.Tasks([
	window.tasksCollection = new App.Collections.Tasks([
		{
			title: 'Learn Backbone.js',
			priority: 1
		},
		{
			title: 'Learn Underscore.js',
			priority: 2
		},
		{
			title: 'Learn jQuery Mobile',
			priority: 3
		},
		{
			title: 'Learn Google Chart',
			priority: 4
		},
		{
			title: 'Learn jQuery Plugin Dev',
			priority: 1
		}
	]);


	var addTaskView = new App.Views.AddTask({ collection: tasksCollection });

	var tasksView = new App.Views.Tasks({ collection: tasksCollection });
	// $(document.body).append(tasksView.el);
	$('.tasks').html(tasksView.render().el);


})();































