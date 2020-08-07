<template>
	<view class="content">
		<view class="top-box">
			<text class="title"> Rling </text>
			<image @click="goToSearch()" src="../../../static/search.png" class="search"></image>
		</view>
		<view class="albums-title">
			<text > New Albums </text>
			<text style="font-size: 24rpx;" > View all </text>
		</view>
		<albums-view :img-urls="imgUrls"></albums-view>
		<text> Rling Weekly </text>
		<!-- video组件 -->
		<video 
		src="https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/video/6c974701358444789711847f5e5ebce7.mp4" 
		controls
		:enable-play-gesture = "true"
		:vslide-gesture-in-fullscreen = "true"
		
		>
		</video>
		<text> Recently Music </text>
		<!-- mini-music组件 -->
		<recently-music></recently-music>
		<recently-music></recently-music>
		
		<!-- <view class="mini-music2">
			
		</view> -->
		<!-- music-play组件 -->
		<!-- <view class="music-play">
			
		</view>
		<view class="music-play-bottom">
		
			
		</view> -->
	</view>
</template>

<script>
	import recentlyMusic from '@/components/recently-music/recently-music.vue';
	import albumsView from '@/components/albums-view/albums-view.vue';
	export default {
		data() {
			return {
				title: 'Radio',
				popular: [
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png',
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png'
				],
				imgUrls:[
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png',
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png',
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/204941-15776237817d95.png'
				]
			}
		},
		components: {
			recentlyMusic,
			albumsView
		},
		onLoad() {
			console.log("index:"+this.swiperData);
	
		},
		methods: {
			goToSearch() {
					uni.navigateTo({
						url:'../../search/search'
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
	.top-box {
		display: flex;
		justify-content: space-between;
		height: 15vw;
		.title {
			display: inline-flex;
			font-size: 13vw;
			// width: 40vw;
		}
		image {
			width: 7vw;
			height: 7vw;
			margin: auto 0;
			margin-right: 7vw;
		}
	}
	text {
		display: block;
		height: 12vw;
		line-height: 12vw;
		font-family: Helvetica;
		font-size: 6vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
		padding: 0 6vw;
	}
	.albums-title {
		display: flex;
		justify-content: space-between;
		
	}
	video {
		width: 654rpx;
		height: 376rpx;
		margin: 0 6vw;
	}
	
	.swiper-tranform {
		height: 53vw;
		background-color: #007AFF;
	}
	.video {
		height: 50vw;
		background-color: #007AFF;
	}
	.mini-music {
		height: 50vw;
		background-color: #007AFF;
	}
	.mini-music2 {
		height: 10vw;
		background-color: #ffba66;
	}
	.music-play {
		position: fixed;
		z-index: 100;
		bottom: 0;
		width: 100%;
		height: 19vw;
		background-color: #e149ff;
	}
	.music-play-bottom {
		width: 100%;
		height: 19vw;
	}
</style>
