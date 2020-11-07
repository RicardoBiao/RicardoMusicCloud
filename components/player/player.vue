<template>
	<view class="player-box" v-if="song.al.name != undefined">
		<view class="box-left" @click="goPlayer(song.id)">
			<view class="song-img">
				<image style="width: 100rpx;height: 100rpx; border-radius: 50%;" :src="song.al.picUrl" mode=""></image>
			</view>
			<view class="song-name">
				 {{song.al.name}}
			</view>
		</view>
		<view class="box-right">
			<image @click="nextSong()" class="btn" src="../../static/upsong.png" mode=""></image>
			<image @click="onPause()" style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/play.png" mode=""></image>
			<image @click="onPlay()" class="btn" src="../../static/nextsong.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'player',
		props: {
			
		},
		data() {
			return {
				song: {},
				music: {}
			};
		},
		created() {
			this.$bus.on('song',song => {
				console.log('bus-song==>',song)
				this.song = song;
			})
			this.$bus.on('music',music => {
				console.log('bus-music1==>',music)
				this.music = {};
				this.music = music;
			})
			console.log('this.music1==>',this.music)
		},
		beforeDestroy() {
			this.$bus.off('song',song)
			this.$bus.off('music',music)
		},
		methods: {
			onPause() {
				console.log('music-onPause')
				this.music.pause();
			},
			onPlay() {
				console.log('music-onPlay')
				this.music.play();
			},
			format(num) {
				return '0'.repeat(2 - String(Math.floor(num / 60)).length) + Math.floor(num / 60) + ':' + '0'.repeat(2 - String(Math.floor(num % 60)).length) + Math.floor(num % 60)  
			},
			nextSong() {
				this.music.src = 'http://m8.music.126.net/20201107183404/adda5d922c50e642d6a184e9ab990b3f/ymusic/4afa/0216/a89f/c9941d4ebd3f829a9a3b3a52a8d738ce.mp3'
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
