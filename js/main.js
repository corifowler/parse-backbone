import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import SongModel from './song_model';
import SongCollection from './song_collection';
import SongTemplate from './song_template';

const APP_ID = 'Y954L4tr9ymGcvFM00lyUiprW9BGK77hrEjXZKL5';
const API_KEY = 'JsdNtIMcCcHOkxXUWS1QM0cE3u0ANjtfaK0xS6qr';

$.ajaxSetup({

  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }

});

let songs = new SongCollection();

function renderSongs() {

  let $ul = $('<ul></ul>');

  songs.each(function(song) {

    let data = song.toJSON();
    console.log('data', data);

    let $li = $(SongTemplate(data));  

    $ul.append($li);

  });

  $('.container').html($ul);
}

songs.fetch().then(renderSongs);



