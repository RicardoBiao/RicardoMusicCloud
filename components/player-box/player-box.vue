<template>
	<view class="player-box" v-if="song.name != undefined">
		<view class="box-left" @click="goPlayer(song.id)">
			<view class="song-img">
				<image style="width: 100rpx;height: 100rpx; border-radius: 50%;" :src="song.picUrl" mode=""></image>
			</view>
			<view class="song-name">
				 {{song.name}}
			</view>
		</view>
		<view class="box-right">
			<image @click="preSong()" class="btn" src="../../static/upsong.png" mode=""></image>
			<image v-if="musicPause" @click="onPlay()" style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/play.png" mode=""></image>
			<image v-else @click="onPause()" style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/stop.png" mode=""></image>
			<image @click="nextSong()" class="btn" src="../../static/nextsong.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'playerBox',
		props: {
			
		},
		data() {
			return {
				musicPause: 1,
				song: {},
				musicUrl: {},
				playlist: []
			};
		},
		created() {
			this.$bus.on('song',song => {
				console.log('bus-song==>',song)
				this.song = song;
			})
			this.$bus.on('playList',playList => {
				console.log('playList==>',playList)
				this.playList = [];
				this.playList = playList;
			})
			console.log('this.playList==>',this.playList)
		},
		beforeDestroy() {
			this.$bus.off('song')
			this.$bus.off('playList')
		},
		methods: {
			onPause() {
				console.log('music-onPause')
				this.innerAudioContext.pause();
				this.musicPause = 1;
			},
			onPlay() {
				console.log('music-onPlay')
				this.innerAudioContext.play();
				this.musicPause = 0;
			},
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
			},
			presong() {
				// this.innerAudioContext.src = 
			},
			nextSong() {
				// this.innerAudioContext.src = 			
				console.log('this.innerAudioContext.src',this.innerAudioContext.src)
			},
			goPlayer(id) {
				uni.navigateTo({
					url: '/pages/player/player?ids=' + id
				});
			},
		}
	}
</script>

<style lang="less">
	.player-box {
		width: 100vw;
		height: 150rpx;
		display: flex;
		background-image: linear-gradient(144deg, rgba(221, 19, 127, 0.9) 0%, rgba(81, 0, 77, 0.9) 100%);
		.box-left {
			width: 60vw;
			height: 150rpx;
			line-height: 150rpx;
			display: flex;
			.song-img {
				width: 100rpx;
				height: 100rpx;
				margin: auto 25rpx;
			}
			.song-name {
				max-width: 300rpx;
				height: 150rpx;
				line-height: 150rpx;
				display: inline-flex;
				font-family: Helvetica;
				font-size: 32rpx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0rpx;
				color: #eeeeee;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.box-right {
			width: 40vw;
			height: 150rpx;
			display: flex;
			justify-content: space-around;
			.btn {
				width: 30rpx;
				height: 30rpx;
				margin: auto 0;
				padding: 10rpx;
			}
		}
	}
	
</style>
