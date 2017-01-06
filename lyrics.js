var mongoose = require('mongoose');
var schema = mongoose.Schema;

var lyricsSchema = new schema({
    band_name: String,
    release_date: String,
    emotion_fear: String,
    emotion_joy: String,
    song_writer: String,
    album_name: String,
    emotion_anger: String,
    song_lyrics: String,  
    song_name: String,
    emotion_sadness: String
}, {collection: 'songs'});

var lyrics = mongoose.model('lyrics', lyricsSchema);

module.exports = lyrics;