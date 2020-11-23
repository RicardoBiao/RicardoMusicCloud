<template>
	<view class="content">
		<!-- swiper布局 -->
		<!-- <view class="dots">
			<block v-for="(item,index) in [0, 1, 2]" :index="index" :key="item"> 
				<view class="dot" :class="index == currentSwiper ? ' active' : '' "></view> 
			</block> 
		</view>
		<swiper class="swiper-box" 
		:autoplay="autoplay" 
		:interval="interval" 
		:duration="duration"
		current="1"
		easing-function="easeInOutCubic"
		@change="swiperChange"
		>
			<swiper-item class="swiper-item">
				
			</swiper-item>
			
			<swiper-item class="swiper-item">
				
			</swiper-item>
			
			<swiper-item class="swiper-item">
				
			</swiper-item>
		</swiper> -->
		
		<view class="py-msg-box" v-if="!lookLyric" @tap="this.lookLyric = !this.lookLyric">
			<image class="play-bar-support" src="../../static/play-bar-support.png" mode="aspectFit"></image>
			<image class="play-bar" :class="{bar: !isPlay}" src="../../static/play-bar.png" mode="aspectFit"></image>
			<view class="img-box">
				<image class="img turn" :style=" isPlay == true ? 'animation-play-state: running;' : 'animation-play-state: paused;' " :src="playList[currentIndex].pic" mode="aspectFit"></image>
			</view>
			<text class="song-name"> {{playList[currentIndex].title == undefined ? '' : playList[currentIndex].title}} </text>
			<text class="singer"> {{playList[currentIndex].artist == undefined ? '' : playList[currentIndex].artist}} </text>
			<!-- <text class="song-content">It is a long established fact that a reader</text> -->
			<text class="song-content">{{currentLyric.txt}}</text>
			
			<view class="btn-box">
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
		</view>
		
		<view class="py-msg-box" v-else @tap="this.lookLyric = !this.lookLyric">
			<!-- <bing-lyric :lyrics="lyric.lines"></bing-lyric> -->
			<scroll-view class="py-msg-box" scroll-y="true" >
				<view style="text-align: center; margin: 10rpx 0;" :style="index === currentLyric.lineNum ? 'current-lyric' : ''" v-for="(line, index) in lyric.lines" :key="line.key">
					{{line.txt}}
				</view>
			</scroll-view>
			
		</view>
		
		
		
		<view class="time">
			
			<bing-progress 
			handleWidth="14rpx"
			handleHeight="14rpx"
			handleColor="#7b0e62"
			handleBorderRadius="50%"
			strokeWidth="4rpx"
			backgroundColor="#0e0b1f"
			activeColor="#7b0e62"
			noActiveColor="#bdb9b9"
			width="88vw"
			:showInfo="false"
			:max="duration"
			:value="current"
			@change="progressChange()"
			@dragging="progressChange()"
			@dragend="progressHoldStop()"
			
			
			
			 ></bing-progress>
		</view>
		<view class="time-box">
			<view class="time-txt">
				{{ this.format(this.innerAudioContext.currentTime) }}
			</view>
			<view class="time-txt">
				{{ this.format(this.innerAudioContext.duration) }}
			</view>
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
	import bingProgress from '@/components/bing-progress/bing-progress.vue';
	import bingLyric from '@/components/bing-lyric/bing-lyric.vue';
	import Lyric from 'lyric-parser';
	export default {
		mixins: [playListMixin],
		data() {
			return {
				ids: '',
				audios: [],
				isLike: 0,
				music: {},
				musicUrl: '',
				lyric: {},
				currentSwiper: 1,
				swiperChange: function(e) {
					// console.log(e.detail.current);
					// console.log(this);
					this.currentSwiper = e.detail.current;
				},
				lookLyric: 0
			}
		},
		computed: {
			...mapGetters([
				'isPlay',
				'playList',
				'likeList',
				'currentIndex',
				'innerAudioContext',
				'currentLyric'
			])
		},
		components: {
			bingProgress,
			bingLyric
		},
		onLoad(option) {
			
			this.ids = option.ids;
			// console.log('option',option);
			this.getSongDetail();
			
			//判断该音乐是否已喜欢
			let id = parseInt(option.ids);
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
				let that = this;
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
						console.log('getLyric-res===>',res.data.lrc);
						this.lyric = new Lyric(res.data.lrc.lyric, that.handleLyric);
						console.log('this.lyric===>',this.lyric);
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
									// console.warn('AAAAAAAAAAA',this.playList)
									console.log('Aitem.id===>',item.id,'that.ids===>',that.ids)
									that.setAudioUrl(item.src);
									that.setCurrentIndex(item.index);
									return true
								} 
							});
							if (result == true) {
								return
							} else {
								that.playList[that.currentIndex].lyric.stop();
								// console.warn('BBBBBBBBBB',this.playList)
								that.setAudioUrl(that.musicUrl);
								let list = new playList(that.playList.length, that.song, that.musicUrl, that.lyric);
								that.playList.push(list);
								console.log('list1===>',list);
								that.setPlayList(that.playList);
								that.setCurrentIndex(that.playList.length - 1);
								that.musicPlay();
								that.playList[that.currentIndex].lyric.play();
							}
							
						} else {
							// console.warn('CCCCCCCCCC',this.playList)
							that.setAudioUrl(that.musicUrl);
							let list = new playList(that.playList.length,that.song,that.musicUrl, that.lyric);
							that.playList.push(list);
							console.log('list2===>',list);
							that.setPlayList(that.playList);
							that.setCurrentIndex(that.playList.length - 1);
							that.musicPlay();
							that.playList[that.currentIndex].lyric.play();
						}
						
					}
				});
			},
			progressChange(e) {
				// console.log('this.innerAudioContext.duration===>',this.innerAudioContext.duration)
				// console.log('progressChange-value===>',e.value)
			},
			progressHoldStop(e) {
				this.innerAudioContext.seek(e.value);
				this.playList[this.currentIndex].lyric.seek(e.value * 1000);
				// console.log('progressHoldStop-e===>',e)
				// console.log('progressHoldStop-e===>',e.value)
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
					console.log('like发生错误',err);
				});
			},
			handleLyric(e) {
				console.log('handleLyric===>',e)
				this.setCurrentLyric(e);
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
		height: 76vh;
		.current-lyric {
			color: red;
		}
		.play-bar-support {
			position: absolute;
			width: 5vw;
			height: 5vw;
			left: calc(50% - 3.2vw);
			top: -1vw;
			z-index: 2;
		}
		.play-bar {
		  width: 22vw;
		  height: 40vw;
		  position: absolute;
		  left: calc(50% - 1.7vw);
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
			width: 46vw;
			height: 46vw;
			background-color: #999999;
			border: 80rpx solid #0e0e11;
			border-radius: 50%;
			box-shadow: 0 0 10px #fff;
			margin: 22vw auto 6vw;
			z-index: -1;
			.img {
				width: 43.4vw;
				height: 43.4vw;
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
		margin: 4vh 8vw;
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
	.dots {
		display: flex;
		justify-content: center;
		flex-direction: row;
		position: absolute;
		top: 6vh;
		width: 100vw;
		/*未选中时的小圆点样式 */
		.dot {
			width: 42rpx;
			height: 6rpx;
			background-color: #605e63;
			border-radius: 3rpx;
			margin: 0 8rpx;
		}
		/*选中以后的小圆点样式 */
		.active {
			width: 40rpx;
			height: 6rpx;
			background-color: #ffffff;
			border-radius: 3rpx;
		}
	}
	
	.swiper-box {
		width: 100%;
		height: 75vh;
		/*用来包裹所有的小圆点 */
		.swiper-item{
			width: 100%;
			height: auto;
			.py-msg-box {
				display: flex;
				position: relative;
				justify-content: space-around;
				flex-direction: column;
				width: 100%;
				.play-bar-support {
					position: absolute;
					width: 5vw;
					height: 5vw;
					left: calc(50% - 3.2vw);
					top: -1vw;
					z-index: 2;
				}
				.play-bar {
				  width: 22vw;
				  height: 40vw;
				  position: absolute;
				  left: calc(50% - 1.7vw);
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
					width: 46vw;
					height: 46vw;
					background-color: #999999;
					border: 80rpx solid #0e0e11;
					border-radius: 50%;
					box-shadow: 0 0 10px #fff;
					margin: 22vw auto 6vw;
					z-index: -1;
					.img {
						width: 43.4vw;
						height: 43.4vw;
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
				margin: 4vh 8vw;
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
			
		}
	}
	
	
	.time {
		display: flex;
		justify-content: center;
	}
	.time-box {
		display: flex;
		justify-content: space-between;
		margin: 1vh 7vw 0 7vw;
		.time-txt {
			font-family: Helvetica;
			font-size: 28rpx;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0vh;
			color: #ffffff;
		}
	}
	.py-btn-box {
		display: flex;
		justify-content: space-between;
		margin: 10rpx 56rpx 44rpx 56rpx;
		.py-icon {
			width: 26rpx;
			height: 26rpx;
			padding: 26rpx;
			margin: auto 0;
		}
	}
	
	
</style>