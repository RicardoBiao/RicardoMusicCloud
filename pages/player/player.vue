<template>
	<view class="content">
		<view class="img-box">
			<image class="img" :class="musicPaused == 0 ? 'turn' : '' " :src="picUrl" mode="aspectFit"></image>
			<!-- <view class="img"></view> -->
			<text class="song-name"> {{songName}} </text>
			<text class="singer"> {{singer}} </text>
			<text class="song-content">It is a long established fact that a reader</text>
		</view>
		
		<view class="btn-box">
			<image class="btn-icon" src="../../static/Shape.png" mode="aspectFit"></image>
			<image class="btn-icon" src="../../static/addtolist.png" mode="aspectFit"></image>
			<image v-if="!isLike" @click="isLike = !isLike" class="btn-icon" src="../../static/like.png" mode="aspectFit"></image>
			<image v-if="isLike" @click="isLike = !isLike" class="btn-icon" src="../../static/islike.png" mode="aspectFit"></image>
			<image class="btn-icon" src="../../static/download.png" mode="aspectFit"></image>
		</view>
		
		<view class="time">
			
		</view>
		<view class="py-btn-box">
			<image class="py-icon" src="../../static/mix.png" mode="aspectFit"></image>
			<image class="py-icon" src="../../static/upsong.png" mode="aspectFit"></image>
			<image 
			v-if="musicPaused == 1" 
			style="width: 146rpx; height: 146rpx;" 
			class="py-icon" 
			src="../../static/playbig.png"
			mode="aspectFit"
			@click="musicPlay()"
			></image>
			<image 
			v-if="musicPaused == 0" 
			style="width: 146rpx; height: 146rpx;" 
			class="py-icon" src="../../static/pausebig.png" 
			mode="aspectFit"
			@click="musicPause()"
			></image>
			<image class="py-icon" src="../../static/nextsong.png" mode="aspectFit"></image>
			<image style="width: 34rpx; height: 34rpx;" class="py-icon" src="../../static/changetype.png" mode="aspectFit"></image>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				ids: '',
				songName: '',
				songUrl: '',
				singer: '',
				picUrl: '',
				musicPaused: 1,
				innerAudioContext: '',
				audios: [],
				duration: '',
				current: '00:00',
				isLike: 0
			}
		},
		onLoad: function(option) {
			this.ids = option.ids;
			console.log('option',option);
			this.getSongDetail();
		},
		methods: {
			getSongDetail() {
				this.$api.getSongDetail({
					ids: this.ids
				}).then( res => {
					if ( res.data.code === 200) {
						let song = res.data.songs[0];
						console.log('song:',song);
						this.songName = song.name;
						console.log('songname:',this.songName);
						this.singer = song.ar[0].name;
						console.log('singer:',this.singer);
						this.picUrl = song.al.picUrl;
					}
				});
				this.$api.getMusicUrl({
					id: this.ids
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
		}
		
	}
	
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background-color: #0e0b1f;
	}
	
	.img-box {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 100%;
		.img {
			display: flex;
			width: 414rpx;
			height: 414rpx;
			background-color: #999999;
			border-radius: 50%;
			margin: 300rpx auto 44rpx;
		}
		.turn {
			transform: rotate(360deg);
			-webkit-transform:rotate(360deg);
			-webkit-transition:-webkit-transform 1s linear;
			translate: transform 5s linear 0.2s infinite;
		}
		text {
			font-family: Helvetica;
			font-weight: normal;
			font-stretch: normal;
			color: #ffffff;
			margin: 0 auto;
		}
		.song-name {
			font-size: 48rpx;
		}
		.singer {
			margin: 7rpx auto 62rpx;
			font-size: 24rpx;
		}
		.song-content {
			font-size: 28rpx;
			color: #7b0e62;
		}
		
	}
	.btn-box {
		display: flex;
		justify-content: space-between;
		margin: 80rpx 110rpx;
		.btn-icon {
			width: 40rpx;
			height: 40rpx;
		}
	}
	.time {
	}
	.py-btn-box {
		display: flex;
		justify-content: space-between;
		margin: 44rpx 56rpx;
		.py-icon {
			width: 26rpx;
			height: 26rpx;
			margin: auto 0;
		}
	}
	
</style>