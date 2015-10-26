// Template for how I want songs to be displayed 

function SongTemplate(data) {

  if (data.GoodSong === true) {
    data.GoodSong = 'Awesome Song';
  } else {
    data.GoodSong = 'Bad Song';
  }

  return `
  <ul class="song-info">
    <li class="rank">${data.Rank} |</li>
    <li>${data.SongTitle} |</li>
    <li>${data.Artist} |</li>
    <li>${data.GoodSong} |</li>
  </ul>`;
}

export default SongTemplate;