function make_artist(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_artist("Hummad", "Album 1");
var album2 = make_artist("Bazil", "Album 2");
var album3 = make_artist("Ubait", "Album 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
