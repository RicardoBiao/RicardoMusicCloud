export class playList {
	constructor(index, song, url='', lrc='') {
	      this.index = index;
	      this.title = song.name;
	      this.artist = song.singer;
	      this.src = url;
	      this.pic = song.picUrl;
	      this.id = song.id; 
	    }
}

export class songs {
	constructor(songs) {
	    this.id = songs[0].id;
		this.name = songs[0].name;
		this.album = songs[0].al.name;
		this.picUrl = songs[0].al.picUrl;
		this.singer = songs[0].ar[0].name;
	}
}