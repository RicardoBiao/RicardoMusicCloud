<template>
	<view class="box">
		<view class="music-box" name="audio">
			<view class="image-box">
				<image v-if="musicPaused == 1" src="../../static/play.png" mode="aspectFill" class="play-icon" @click="musicPlay()"></image>
				<image v-if="musicPaused == 0" src="../../static/stop.png" mode="aspectFill" class="pause-icon" @click="musicPause()"></image>
				<image  class="music-image" mode="aspectFill" :src="songImg"></image>
			</view>
			<view  class="text-box" @click="goToPlayer('/pages/player/player?ids=' + song.id)">
				<text class="text-box-title">
					{{song.name}}
				</text>
				<text class="text-box-centent">
					{{song.artists[0].name}}
				</text>
				<text class="text-box-centent">
					{{current}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'audioMini',
		props: {
			song: {
				type: Object,
				default: function () {
					return [];
				}
			}
		},
		data() {
			return {
				musicPaused: 1,
				innerAudioContext: '',
				audios: [],
				duration: '',
				current: '00:00',
				songImg: ''
			}
		},
		methods: {
			goToPlayer(url) {
				uni.navigateTo({
					url: url
				});
			},
			format(num) {  
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
			},
			musicPlay() {
					this.innerAudioContext.play();
					this.musicPaused = 0;
					let format = function(num) {
						return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
					};
					this.innerAudioContext.onTimeUpdate( () => {
						//音频进度更新事件  
						this.current = format(this.innerAudioContext.currentTime);
						// console.log('this.current:',this.current);
					});
					
			},
			musicPause() {
				this.innerAudioContext.pause();
				this.musicPaused = 1;
			}
		},
		onLoad (){
			
		},
		created () {
				this.$api.getMusicUrl({
					id: this.song.id
				}).then(res => {
					if (res.data.code === 200) {
						let musicUrl = res.data.data[0].url;
						// console.log(musicUrl);
						// console.log(this.musicPaused);
						this.innerAudioContext = uni.createInnerAudioContext();
						// console.log('innerAudioContext:',this.innerAudioContext);
						this.innerAudioContext.src = musicUrl;
						let format = function(num) {
							return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
						};
						this.innerAudioContext.onCanplay( ()=>{
							this.duration = format(this.innerAudioContext.duration);
							// console.log('this.duration:',this.duration);
						});
						
						this.musicPaused = 1;
						// console.log('musicPaused:'+this.musicPaused);
					}
				});
				this.$api.getSongDetail({
					ids: this.song.id
				}).then(res => {
					if (res.data.code === 200) {
						console.log('res.data:',res.data);
						this.songImg = res.data.songs[0].al.picUrl;
						console.log('this.songImg:',this.songImg);
					}
				});
				
		},
		watch: {
			//监听当前进度改变  
			// current(e) {  
			// 	this.currentTime = this.format(e);  
			// 	console.log('this.currentTime:',this.currentTime);
			// }
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background-color: #0e0b1f;
	}
	.music-box {
		display: inline-flex;
		height: 21vw;
		margin: 5vw 4vw 5vw 6vw;
	}
	.image-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 21vw;
		height: 21vw;
		border-radius: 1vw;
	}
	.play-icon {
		position: absolute;
		width: 9vw;
		height: 9vw;
		z-index: 100;
		// background-color: #4CD964;
	}
	.pause-icon {
		position: absolute;
		width: 9vw;
		height: 9vw;
		z-index: 100;
		// background-color: #d90003;
	}

	.music-image {
		width: 21vw;
		height: 21vw;
		border-radius: 1vw;
		z-index: 1;
	}
	.text-box {
		display: flex;
		flex-direction: column;
		width: 70vw;
	
	}
	.text-box-title {
		margin: 3vw 0 0 4vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.text-box-centent {
		margin: 2vw 0 0 4vw;
		font-family: Helvetica;
		font-size: 3vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #817a7a;
	}
</style>
