<template>
	<view class="content">
		<view class="py-msg-box">
			<image class="play-bar-support" src="../../static/play-bar-support.png" mode="aspectFit"></image>
			<image class="play-bar" :class="{bar: !isPlay}" src="../../static/play-bar.png" mode="aspectFit"></image>
			<view class="img-box">
				<image class="img turn" :style=" isPlay == true ? 'animation-play-state: running;' : 'animation-play-state: paused;' " :src="playList[currentIndex].pic" mode="aspectFit"></image>
			</view>
			<text class="song-name"> {{playList[currentIndex].title}} </text>
			<text class="singer"> {{playList[currentIndex].artist}} </text>
			<text class="song-content">It is a long established fact that a reader</text>
		</view>
		
		<view class="btn-box">
			<!-- <button type="default" plain="true" open-type="share" style="margin: 0; padding: 0; border: none; width: 40rpx; height: 40rpx;">
				<image class="btn-icon" src="../../static/Shape.png" mode="aspectFit"></image>
			</button> -->
			<button class="icon-btn" open-type="share" type="default">
				<image class="btn-icon" src="../../static/Shape.png" mode="aspectFit"></image>
			</button>
			<button class="icon-btn" type="default">
				<image class="btn-icon" src="../../static/addtolist.png" mode="aspectFit"></image>
			</button>
			<button v-if="!isLike"  @click="like()"  class="icon-btn" type="default">
				<image class="btn-icon" src="../../static/like.png" mode="aspectFit"></image>
			</button>
			<button v-else @click="unlike()" class="icon-btn" type="default">
				<image class="btn-icon" src="../../static/islike.png" mode="aspectFit"></image>
			</button>
			<button class="icon-btn" type="default">
				<image class="btn-icon" src="../../static/download.png" mode="aspectFit"></image>
			</button>
		</view>
		
		<view class="time">
			
		</view>
		<view class="py-btn-box">
			<image class="py-icon" src="../../static/mix.png" mode="aspectFit"></image>
			<image @tap="preSong()" class="py-icon" src="../../static/upsong.png" mode="aspectFit"></image>
			<image 
			v-if="isPlay == false" 
			style="width: 146rpx; height: 146rpx;" 
			class="py-icon" 
			src="../../static/playbig.png"
			mode="aspectFit"
			@click="musicPlay()"
			></image>
			<image 
			v-else 
			style="width: 146rpx; height: 146rpx;" 
			class="py-icon" src="../../static/pausebig.png" 
			mode="aspectFit"
			@click="musicPause()"
			></image>
			<image @tap="nextSong()" class="py-icon" src="../../static/nextsong.png" mode="aspectFit"></image>
			<image style="width: 34rpx; height: 34rpx;" class="py-icon" src="../../static/changetype.png" mode="aspectFit"></image>
		</view>
		
	</view>
	
</template>

<script>
	import {songs, playList} from '../../utils/class.js';
	import { mapGetters, mapActions } from 'vuex';
	import {playListMixin} from '@/utils/mixin.js';
	export default {
		mixins: [playListMixin],
		data() {
			return {
				ids: '',
				audios: [],
				duration: '',
				current: '00:00',
				isLike: 0,
				music: {},
				musicUrl: '',
				lyric: ''
			}
		},
		onShow() {
			
		},
		onLoad(option) {
			
			this.ids = option.ids;
			// console.log('option',option);
			this.getSongDetail();
			
			//判断该音乐是否已喜欢
			let id = parseInt(option.ids);
			// console.log('id==>',id);
			// console.log('likeList.indexOf(id)==>',likeList.indexOf(id));
			if (this.likeList.indexOf(id) != -1 ) {
				this.isLike = 1;
				console.log('我执行了isLike==>');
			}
			
			wx.showShareMenu({
			  withShareTicket: true,
			  menus: ['shareAppMessage', 'shareTimeline']
			});
		},
		methods: {
			getSongDetail() {
				this.$api.getSongDetail({
					ids: this.ids
				}).then( res => {
					if (res.data.code === 200) {
						this.song = new songs(res.data.songs);
						// console.log('song:',song);
					}
				});
				this.$api.getLyric({
					id: this.ids
				}).then( res => {
					if (res.data.code === 200) {
						console.log('getLyric-res===>',res);
						this.lyric = res.data.lrc.lyric;
					}
				});
				this.getMusicUrl();
				this.initMusic();
				
			},
			getMusicUrl() {
				this.$api.getMusicUrl({
					id: this.ids
				}).then(res => {
					if (res.data.code === 200) {
						this.musicUrl = res.data.data[0].url;
						let that = this;
						if (that.playList.length > 0) {
							let result = that.playList.some(item => {
								if(item.id == that.ids) {
									console.warn('AAAAAAAAAAA',this.playList)
									console.log('Aitem.id===>',item.id,'that.ids===>',that.ids)
									that.setAudioUrl(item.src);
									that.musicPlay();
									that.setCurrentIndex(item.index);
									return true
								} 
							});
							if (result == true) {
								return
							} else {
								console.warn('BBBBBBBBBB',this.playList)
								that.setAudioUrl(that.musicUrl);
								let list = new playList(that.playList.length, that.song, that.musicUrl, that.lyric);
								that.playList.push(list);
								that.setPlayList(that.playList);
								that.setCurrentIndex(that.playList.length - 1);
								that.musicPlay();
							}
							
						} else {
							console.warn('CCCCCCCCCC',this.playList)
							that.setAudioUrl(that.musicUrl);
							let list = new playList(that.playList.length,that.song,that.musicUrl);
							that.playList.push(list);
							that.setPlayList(that.playList);
							that.setCurrentIndex(that.playList.length - 1);
							that.musicPlay();
						}
						
						
					}
				});
			},
			onPlay() {
				this.musicPlay();
			},
			onPause() {
				this.musicPause();
			},
			preSong() {
				this.preMusic();
			},
			nextSong() {
				this.nextMusic();
			},
			onShareAppMessage(res) {
				    if (res.from === 'button') {
				      // 来自页面内转发按钮
				      console.log(res.target)
				    }
				    return {
				      title: '这首歌超好听，快来听听~',
				      path: '/page/player/player'
				    }
			},
			like() {
				this.$api.likeMusic({
					id: this.song.id,
					like: true,
					cookie: this.$store.state.cookie
				})
				.then(res => {
					if(res.data.code === 200) {
						console.log('like-res==>',res);
						this.isLike = 1;
					} else {
						// uni.showToast({
						// 	icon: 'none',
						// 	title: res.data.msg
						// })
					}
				})
				.catch(err => {
					uni.showToast({
						icon: 'none',
						duration: 2000,
						title: err.response.data.msg
					});
					uni.reLaunch({
						url: "/pages/login/login"
					});
					console.log('like发生错误',err);
				});
			},
			unlike() {
				this.$api.likeMusic({
					id: this.song.id,
					like: false,
					cookie: this.$store.state.cookie
				})
				.then(res => {
					if(res.data.code === 200) {
						console.log('unlike-res==>',res);
						this.isLike = 0;
					} else {
						// uni.showToast({
						// 	icon: 'none',
						// 	title: res.data.msg
						// });
					}
				})
				.catch(err => {
					uni.showToast({
						icon: 'none',
						duration: 2000,
						title: err.response.data.msg
					});
					uni.reLaunch({
						url: "/pages/login/login"
					});
					console.log('like发生错误',err);
				});
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
	//定义动画
	@keyframes turn{
	  0%{-webkit-transform:rotate(0deg);}
	  25%{-webkit-transform:rotate(90deg);}
	  50%{-webkit-transform:rotate(180deg);}
	  75%{-webkit-transform:rotate(270deg);}
	  100%{-webkit-transform:rotate(360deg);}
	}
	.turn {
		animation:turn 10s linear infinite;
	}
	.py-msg-box {
		display: flex;
		position: relative;
		justify-content: space-around;
		flex-direction: column;
		width: 100%;
		.play-bar-support {
			position: absolute;
			width: 50rpx;
			height: 50rpx;
			left: calc(50% - 29rpx);
			top: -7rpx;
			z-index: 2;
		}
		.play-bar {
		  width: 160rpx;
		  height: 300rpx;
		  position: absolute;
		  left: calc(50% - 18rpx);
		  top: -5rpx;
		  z-index: 1;
		}
		.bar {
		  top: -5rpx;
		  transform-origin: 0 0;
		  transform: rotate(-25deg);
		  // transition: all 0.1s;
		}
		.img-box {
			left: 0;
			right: 0;
			width: 420rpx;
			height: 420rpx;
			background-color: #999999;
			border: 80rpx solid #0e0e11;
			border-radius: 50%;
			box-shadow: 0 0 10px #fff;
			margin: 180rpx auto 44rpx;
			z-index: -1;
			.img {
				width: 400rpx;
				height: 400rpx;
				border: 10rpx solid #fff;
				border-radius: 50%;
				z-index: 0;
			}
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
		justify-content: space-around;
		margin: 10vw 8vw;
		.icon-btn {
			display: flex;
			justify-content: center;
			background-color: #0e0b1f;
			// margin: 0;
			// padding: 0;
			.btn-icon {
				width: 40rpx;
				height: 40rpx;
			}
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
			padding: 26rpx;
			margin: auto 0;
		}
	}
	
	
</style>