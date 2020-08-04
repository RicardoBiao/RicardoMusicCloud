<template>
	<view class="wrap">
		<swiper class="swiper" 
		next-margin="55px" 
		previous-margin="25px" 
		:circular="circular" 
		:indicator-dots="indicatorDots" 
		:autoplay="autoplay" 
		:interval="interval"
		:current="currentSwiper"
		:duration="duration"
		@change="swiperChange">
			<block v-for="item in banners" >
				<swiper-item class="swiper-item" >
					<image :src="item.pic" mode="aspectFit"></image>
				</swiper-item>
			</block>		
		</swiper>
		<!-- 重置小圆点的样式 -->
		<!-- <view class="dots"> 
			<block v-for="(item,index) in banners.length" :index="index" :key="item"> 
				<view class="dot" :class="index == currentSwiper ? ' active' : '' "></view> 
			</block> 
		</view> -->
	</view>
</template>

<script>
	export default {
		name:'MusicSwiper',	
		props: {
			banners: {
				type: Array,
				default: function () {
					return [];
				}
			}	
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				circular: true,
				currentSwiper: 0,
				swiperChange: function(e) {
					// console.log(e.detail.current);
					// console.log(this);
					this.currentSwiper = e.detail.current;
				 }
			};
		},
		methods: {
			
		},
		onLoad() {
			console.log(imgUrls);
		}
	}
</script>

<style lang="less">
	page {
		// width: 100%;
		// height: 100%;
	}
	.wrap {
		width: 100%;
		// height: auto;
		position: relative;
	}
	.swiper {
		width: 100%;
		height: 218rpx;
	}
	.swiper-item {
		width: 75vw;
		height: 218rpx;
		image {
			width: 75vw;
			height: 218rpx;
			border-radius: 2vw;
		}
	}
	/*用来包裹所有的小圆点 */
	.dots {
	 display: flex;
	 justify-content: center;
	 flex-direction: row;
	}
	/*未选中时的小圆点样式 */
	.dot {
	 width: 20rpx;
	 height: 4rpx;
	 margin-top: 2vw;
	 // border-radius: 50%;
	 // margin-right: 2vw;
	 background-color: #FFFFFF;
	}
	/*选中以后的小圆点样式 */
	.active {
	width: 20rpx;
	height: 4rpx;
	 background-color: #ef01a0;
	}
	
	
</style>
