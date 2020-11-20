import { mapGetters, mapActions } from 'vuex';

export const playListMixin = {
	data() {
		return {
			currentTime: 0,
			duration: 0,
			current: 0,
			duration2: 0,
			current2: 0
		}
	},
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
			'setCurrentIndex',
			'setCurrentTime'
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
			this.innerAudioContext.onEnded(() => {
				this.nextSong();
			});
			
			this.innerAudioContext.onCanplay(() =>{
				this.innerAudioContext.duration;
				this.innerAudioContext.currentTime;
			});
			
			this.innerAudioContext.onTimeUpdate(() => {
				//音频进度更新事件  
				this.current = this.innerAudioContext.currentTime;
				this.duration = this.innerAudioContext.duration;
				this.current2 = this.format(this.innerAudioContext.currentTime);
				this.duration2 = this.format(this.innerAudioContext.duration);
			});
		}
	}
}