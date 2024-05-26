function make_artist(artist_name:string,album_title:string,tracks?:number){
    let album:{artist:String,title:string,tracks?:number}={
        artist:artist_name,
        title:album_title
    }
    if(tracks!==undefined){
        album.tracks=tracks;
    }
    return album
}
let album1=make_artist("Hummad","Album 1");
let album2=make_artist("Bazil","Album 2");
let album3=make_artist("Ubait","Album 3",10);

console.log(album1);
console.log(album2);
console.log(album3);