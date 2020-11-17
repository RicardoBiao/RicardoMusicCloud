<template>
	<view class="player-box" v-if="playList.length > 0">
		<view class="box-left" @click="goPlayer(playList[currentIndex].id)">
			<view class="song-img">
				<image style="width: 100rpx;height: 100rpx; border-radius: 50%;" :src="playList[currentIndex].pic" mode=""></image>
			</view>
			<view class="song-name">
				 {{playList[currentIndex].title}}
			</view>
		</view>
		<view class="box-right">
			<image @click="preSong()" class="btn" src="../../static/upsong.png" mode=""></image>
			<image v-if="!isPlay" @click="onPlay()" style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/play2.png" mode=""></image>
			<image v-else @click="onPause()" style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/pause2.png" mode=""></image>
			<image @click="nextSong()" class="btn" src="../../static/nextsong.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import {playListMixin} from '@/utils/mixin.js'
	export default {
		mixins: [playListMixin],
		name: 'playerBox',
		props: {
			
		},
		data() {
			return {
				song: {},
			};
		},
		computed:{
			...mapGetters([
				'isPlay',
				'playList',
				'currentIndex',
				'innerAudioContext'
			])
		},
		onLoad() {
			console.log('box-playList===>',this.playList)
		},
		methods: {
			onPause() {
				this.musicPause();
			},
			onPlay() {
				this.musicPlay();
			},
			preSong() {
				this.preMusic();
			},
			nextSong() {
				this.nextMusic();
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
