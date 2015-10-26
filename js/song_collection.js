import Backbone from 'backbone';
import SongModel from './song_model';

let SongCollection = Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/top40songs',

  model: SongModel,

  parse: function(data) {
    return data.results;
  }

});

export default SongCollection;