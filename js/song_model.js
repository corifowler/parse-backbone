import Backbone from 'backbone';

let SongModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/top40songs',

  idAttribute: 'objectId'

});

export default SongModel;