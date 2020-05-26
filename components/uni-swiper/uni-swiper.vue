<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" next-margin="50px" previous-margin="27px" :circular="circular" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" >
						<swiper-item>
							<view class="swiper-item">A</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">B</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">C</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true
			};
		},
		methods: {
		
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
	}
	.swiper {
		width: 100vw;
		height: 50vw;
	}
	.swiper-item {
		width: 75vw;
		height: 50vw;
		border-radius: 2vw;
		background-color: #6d6d6d;
	}
</style>
