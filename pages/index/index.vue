<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="other-title">
			<view class="rling-radio-weekly">
				Rling Radio Weekly
			</view>
			<view class="rling-radio-weekly2">
				Rling Radio Weekly
			</view>
		</view>
		<music-swiper :img-urls="imgUrls"></music-swiper>
		<view class="popular">
			popular
		</view>
		<view class="music-box" v-for="item in popular">
			<image class="music-image" mode="aspectFill" :src="item"></image>
			<view class="text-box">
				<text class="text-box-title">
					Rling Radio Weekly
				</text>
				<text class="text-box-centent">
					Collection of the best Radio stations
					of RLING, constantly updated weekly.
				</text>
			</view>
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

<style>
	.content {
		background-color: #0e0b1f;
		height: 100%;
	}
	.title {
		height: 15vw;
		margin: 0 0 8vw 6vw;
		font-family: Helvetica;
		font-size: 13vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.other-title {
		height: 13vw;
		margin-bottom: 5vw;
	}
	.popular {
		margin-top: 7vw;
		margin-left: 6vw;
		font-family: Helvetica;
		font-size: 6vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.music-box {
		display: inline-flex;
		width: 100vw;
		height: 21vw;
		margin: 5vw 4vw 5vw 6vw;
	}
	.music-image {
		width: 21vw;
		height: 21vw;
		border-radius: 1vw;
	}
	.rling-radio-weekly {
		margin-left: 6vw;
		font-family: Helvetica;
		font-size: 6vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.rling-radio-weekly2 {
		margin-top: 1vw;
		margin-left: 6vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		line-height: 5vw;
		letter-spacing: 0vw;
		color: #817a7a;
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
