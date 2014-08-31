var Person = Backbone.Model.extend({
    defaults: {
        name : "Sasha",
        age : 24,
        job : "Web developer"
    },

    validate : function(attrs, options){
        if ( attrs.age <= 0 ) {
            return 'Возраст должен быть положительным!';
        }
    },

    work: function() {
        return this.get('name') + ' is working.';
    }
});

var PersonView = Backbone.View.extend({
    initialize : function(){
        console.log(this.model);
    },
    tagName : "li",
    render : function(){
        this.$el.html(this.model.get('name') + " (" + this.model.get('age') + ") - " + this.model.get('job'));
    }
});

var person = new Person({name: 'Николай', job: 'Веб-разработчик'});
person.on('invalid', function(model, error){
    console.log(error);
});
var personView = new PersonView({model : person});
personView.render();