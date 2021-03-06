import { mapGetters, mapActions } from 'vuex';

export const playListMixin = {
	data() {
		return {
			currentTime: 0,
			duration: 0,
			current: 0,
			duration2: '00:00',
			current2: '00:00',
			lyric: [],
		}
	},
	computed: {
		...mapGetters([
			'isPlay',
			'playList',
			'likeList',
			'currentIndex',
			'currentLyric',
			'innerAudioContext',
			'playProgress',
		])
	},
	methods: {
		...mapActions([
			'setIsPlay',
			'setAudioUrl',
			'setPlayList',
			'setCurrentIndex',
			'setCurrentTime',
			'setCurrentLyric',
			'setPlayProgress',
		]),
		musicPause() {
			console.log('music-onPause')
			this.innerAudioContext.pause();
			this.playList[this.currentIndex].lyric.togglePlay();
			this.setIsPlay(false);
		},
		musicPlay() {
			console.log('music-onPlay')
			console.log('this==>', this)
			this.innerAudioContext.play();
			this.playList[this.currentIndex].lyric.togglePlay();
			this.setIsPlay(true);
			console.log('playList====>',this.playList)
		},
		preMusic() {
			if (this.playList.length > 1) {
				this.playList[this.currentIndex].lyric.stop();
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
				this.playList[this.currentIndex].lyric.play();
				console.log('this.currentIndex====33>',this.currentIndex)
			} else {
				uni.showToast({
					icon: 'none',
					title: '没有更多音乐了~'
				})
			}
			
		},
		nextMusic() {
			if (this.playList.length > 1) {
				this.playList[this.currentIndex].lyric.stop();
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
				this.playList[this.currentIndex].lyric.play();
				console.log('this.currentIndex====66>',this.currentIndex)
			} else {
				uni.showToast({
					icon: 'none',
					title: '没有更多音乐了~'
				})
			}
		},
		format(num) {
			return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
		},
		initMusic() {
			this.innerAudioContext.onEnded(() => {
				this.nextSong();
				if (this.playList.length == 1) {
					this.musicPlay();
					this.playList[this.currentIndex].lyric.play();
				}
				
				// this.playList[this.currentIndex].lyric.seek(0);
			});
			
			this.innerAudioContext.onCanplay(() =>{
				this.innerAudioContext.duration;
				this.innerAudioContext.currentTime;
			});
			
			this.innerAudioContext.onTimeUpdate(() => {
				//音频进度更新事件  
				this.current = this.innerAudioContext.currentTime;
				// this.playList[this.currentIndex].lyric.seek(this.current * 1000);
				this.duration = this.innerAudioContext.duration;
				let progressWidth =  (this.innerAudioContext.currentTime/this.innerAudioContext.duration) * 100;
				this.setPlayProgress(progressWidth);
			});
		}
	}
}