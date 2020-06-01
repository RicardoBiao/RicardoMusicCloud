<template>
	<view class="content">
		<view class="top-box">
			<text class="title"> Rling </text>
			<button class="search"></button>
		</view>
		<albums-view :img-urls="imgUrls"></albums-view>
		<text> Rling Weekly </text>
		<!-- video组件 -->
		<view class="video">
			
		</view>
		<text> Recently Music </text>
		<!-- mini-music组件 -->
		<view class="mini-music">
			
		</view>
		<view class="mini-music">
			
		</view>
		<view class="mini-music2">
			
		</view>
		<!-- music-play组件 -->
		<view class="music-play">
			
		</view>
		<view class="music-play-bottom">
			
		</view>
	</view>
</template>

<script>
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
		onLoad() {
			console.log("index:"+this.swiperData)
	
		},
		methods: {
			
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
		width: 100%;
		height: 15vw;
	}
	text {
		display: block;
		width: 100%;
		height: 12vw;
		line-height: 12vw;
		font-family: Helvetica;
		font-size: 6vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.title {
		padding-left: 6vw;
		font-size: 13vw;
	}
	
	.swiper-tranform {
		width: 100%;
		height: 53vw;
		background-color: #007AFF;
	}
	.video {
		width: 100%;
		height: 50vw;
		background-color: #007AFF;
	}
	.mini-music {
		width: 100%;
		height: 50vw;
		background-color: #007AFF;
	}
	.mini-music2 {
		width: 100%;
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
