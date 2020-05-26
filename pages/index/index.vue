<template>
	<view class="content">
		<view class="title">
			{{title}}
		</view>
		<view class="other-title">
			
		</view>
		<uni-swiper>

		</uni-swiper>
		<view class="popular">
			popular
		</view>
		<view class="music-box" v-for="item in popular">
			<image class="music-image"  :src="item"></image>
			<view class="text-box">
				<text class="text-box-title"></text>
				<text class="text-box-centent"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Radio',
				popular: ['../../static/logo.png','../../static/logo.png']
			}
		},
		onLoad() {

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
		background-color: #3F536E;
	}
	.popular {
		margin-top: 11vw;
		margin-left: 6vw;
		font-family: Helvetica;
		font-size: 6vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.music-box {
		width: 100vw;
		height: 21vw;
		margin: 5vw 4vw 5vw 6vw;
	}
	.music-image {
		width: 21vw;
		height: 21vw;
		background-color: #6d6d6d;
		border-radius: 1vw;
	}
</style>
