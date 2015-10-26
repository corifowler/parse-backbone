// Template for how I want songs to be displayed 

function SongTemplate(data) {
  return `
  <ul class="song-info">
    <li>${data.Rank}</li>
    <li>${data.SongTitle}</li>
    <li>${data.Artist}</li>
    <li>${data.GoodSong}</li>
  </ul>`;
}

export default SongTemplate;