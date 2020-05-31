<template>
	<view class="box">
		<view class="music-box">
			<view class="image-box">
				<image v-if="musicPaused == 1" class="play-icon" @click="musicPlay(song.id)"></image>
				<image v-if="musicPaused == 0" class="pause-icon" @click="musicPause(song.id)"></image>
				<image  class="music-image" mode="aspectFill" :src="song.artists[0].img1v1Url"></image>
			</view>
			<view class="text-box">
				<text class="text-box-title">
					{{song.name}}
				</text>
				<text class="text-box-centent">
					{{song.artists[0].name}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
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
				musicId:'',
				keywords:'',
				musicPaused:1,
				innerAudioContext:''
			}
		},
		methods: {
			musicPlay(itemId) {
				this.$api.getMusicUrl({
					id: itemId
				}).then(res => {
					if (res.data.code === 200) {
						// var urlArr = [];
						// console.log(res.data);
						// console.log(res.data.data[0].url);
						let musicUrl = res.data.data[0].url;
						console.log(musicUrl);
						console.log(this.musicPaused);
						this.innerAudioContext = uni.createInnerAudioContext();
						this.innerAudioContext.autoplay = true;
						this.innerAudioContext.src = musicUrl;
						this.musicPaused = 0;
						console.log('musicPaused:'+this.musicPaused);
						// innerAudioContext.onPlay(() => {
						//   console.log('开始播放');
						// });
						// innerAudioContext.onError((res) => {
						//   console.log(res.errMsg);
						//   console.log(res.errCode);
						// });
						
						// for (var i=0,len=res.data.data.length; i<len; i++) {
						// 	urlArr.push(res.data.data[i].url);
						// }
					}
				});
			},
			musicPause() {
				console.log(this.innerAudioContext);
				this.innerAudioContext.pause();
				this.musicPaused = 1;
			}
		},
		onLoad (){
			// const innerAudioContext = uni.createInnerAudioContext();
			// innerAudioContext.autoplay = true;
			// innerAudioContext.src = 'http://m8.music.126.net/20200530204917/2e3ec5acb37c008b339841f332b8d956/ymusic/0758/550f/545f/028d3b9421be8425d60dc57735cf6ebc.mp3';
			// innerAudioContext.onPlay(() => {
			//   console.log('开始播放');
			// });
			// innerAudioContext.onError((res) => {
			//   console.log(res.errMsg);
			//   console.log(res.errCode);
			// });
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
		width: 100vw;
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
		background-color: #4CD964;
	}
	.pause-icon {
		position: absolute;
		width: 9vw;
		height: 9vw;
		z-index: 100;
		background-color: #d90003;
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
