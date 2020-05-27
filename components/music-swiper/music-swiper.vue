<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" 
				indicator-color="#ffffff"
				indicator-active-color="#ef01a0"
				next-margin="50px" 
				previous-margin="27px" 
				:circular="circular" 
				:indicator-dots="indicatorDots" 
				:autoplay="autoplay" 
				:interval="interval" 
				:duration="duration" >
						<swiper-item>
							<view class="swiper-item">
								<image src="https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png" mode="aspectFill"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/173018-15818454187775.png" mode="aspectFill"></image>
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item">
								<image src="https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'MusicSwiper',	
		props: {
			swiperData: {
				type: Array,
				default() {
					return [];
				}
			}
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true
			};
		},
		methods: {
		
		},
		onLoad() {
			console.log(swiperData);
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
		image {
			width: 75vw;
			height: 50vw;
			border-radius: 2vw;
		}
	}
</style>
