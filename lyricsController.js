var mongoose = require('mongoose');
var Lyrics = require('./lyrics');
var async = require('async');
var lyricsJson = require('./songEmotions.json')
mongoose.Promise = global.Promise;
var song;

var i = 0;
async.each(lyricsJson, function (song, callback){
	var newSong = new Lyrics({
		band_name: song.band_name,
		release_date: song.release_date,
		emotion_fear: song.emotion_fear,
		emotion_joy: song.emotion_joy,
		song_writer: song.song_writer,
		album_name: song.album_name,
		emotion_anger: song.emotion_anger,
		song_lyrics: song.song_lyrics,
		song_name: song.song_name,
		emotion_sadness: song.emotion_sadness	
	}); 
	newSong.save();
	i++;
});

console.log(i + "songs saved to DB");
