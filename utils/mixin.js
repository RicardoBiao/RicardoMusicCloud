import { mapGetters, mapActions } from 'vuex';

export const playListMixin = {
	computed: {
		...mapGetters([
			'isPlay',
			'playList',
			'likeList',
			'currentIndex',
			'innerAudioContext'
		])
	},
	methods: {
		...mapActions([
			'setIsPlay',
			'setAudioUrl',
			'setPlayList',
			'setCurrentIndex'
		]),
		musicPause() {
			console.log('music-onPause')
			this.innerAudioContext.pause();
			this.setIsPlay(false);
		},
		musicPlay() {
			console.log('music-onPlay')
			this.innerAudioContext.play();
			this.setIsPlay(true);
			console.log('playList====>',this.playList)
		},
		preMusic() {
			if (this.currentIndex == 0) {
				let current = this.playList.length - 1;
				this.setCurrentIndex(current);
				this.setAudioUrl(this.playList[current].src);
				console.log('this.currentIndex====11>',this.currentIndex)
			} else {
				let current = this.currentIndex - 1;
				this.setCurrentIndex(current);
				this.setAudioUrl(this.playList[current].src);
				console.log('this.currentIndex====22>',this.currentIndex)
			}
			this.musicPlay();
			console.log('this.currentIndex====33>',this.currentIndex)
		},
		nextMusic() {
			if (this.currentIndex == this.playList.length - 1) {
				this.setCurrentIndex(0);
				this.setAudioUrl(this.playList[0].src);
				console.log('this.currentIndex====44>',this.currentIndex)
			} else {
				let current = this.currentIndex + 1;
				this.setCurrentIndex(current);
				this.setAudioUrl(this.playList[current].src);
				console.log('this.currentIndex====55>',this.currentIndex)
			}
			this.musicPlay();
			console.log('this.currentIndex====66>',this.currentIndex)
		},
		format(num) {
			return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
		},
		initMusic() {
			this.innerAudioContext.onEnded((e) => {
				this.nextSong();
			});
			this.innerAudioContext.onCanplay((e)=>{
				
				this.duration = this.format(this.innerAudioContext.duration);
				
				console.warn('this.innerAudioContext-onCanplay===>',this.innerAudioContext)
				console.log('this.innerAudioContext.duration====>',this.innerAudioContext.duration);
				console.log('this.duration====>',this.duration);
			});
			this.innerAudioContext.onTimeUpdate((e) => {
				//音频进度更新事件  
				this.current = this.format(this.innerAudioContext.currentTime);
				// if(this.duration == '00:00') {
				// 	this.duration = this.format(this.innerAudioContext.duration);
				// 	// this.innerAudioContext.aaa = this.innerAudioContext.duration;
				// }
				// console.log('this.innerAudioContext.currentTime====>',this.innerAudioContext.currentTime);
				// console.log('this.innerAudioContext.duration====>',this.innerAudioContext.duration);
				// console.log('this.innerAudioContext.currentTime====>',this.innerAudioContext.currentTime);
			});
		}
	}
}