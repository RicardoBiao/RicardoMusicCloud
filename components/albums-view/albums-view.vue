<template>
	<view class="swiper-wrap">
		<swiper class="swiper"
		previous-margin="110rpx" 
		next-margin="260rpx"
		:circular="circular"
		:indicator-dots="indicatorDots" 
		:autoplay="autoplay" 
		:interval="interval"
		:current="currentSwiper"
		:duration="duration"
		@change="swiperChange"
		easing-function="linear"
		>
			<block v-for="(item,index) in imgUrls" :index="index" :key="item" >
				<swiper-item class="swiper-item" @click="swiperClick(e)">
					<image 
					:src="item" 
					mode="aspectFill" 
					class="slide-image" 
					:class="index == currentSwiper ? 'active' : ''">
					</image>
					<image 
					style="position: fixed; left: 40rpx; top: 40rpx;" 
					:src="item"  
					mode="aspectFill" 
					class="slide-image" 
					:class="index == currentSwiper ? 'active' : ''">
					</image>
				</swiper-item>
			</block>		
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'albumsView',
		props:{
			imgUrls: {
				type:Array,
				default: function () {
							return [];
						}
				
			}
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 2000,
				circular: true,
				currentSwiper: 0,
				index: '',
				swiperChange: function(e) {
					console.log(e.detail.current);
					console.log(this.currentSwiper);
					this.currentSwiper = e.detail.current;
					console.log(this.currentSwiper);
				 }
				
			}
				
		},
		methods: {
			swiperClick(e) {
				// this.currentSwiper = e.detail.current;					
				console.log(this.current);				
				console.log(this.currentSwiper);
			}
		},
		onLoad() {
			console.log(imgUrls);
		}
	}
</script>

<style lang="less" scoped>
	page {
		width: 100%;
		height: 100%;
	}
	.swiper-wrap {
		width: 100%;
		height: auto;
		position: relative;
	}
	.swiper {
		width: 100%;
		height: 50vw;
	}
	.swiper-item {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10rpx;
	}
	.slide-image {
		width: 35vw;
		height: 35vw;
		z-index: 10;	
	}
	.active {
		transform: scale(1.2,1.2);
		z-index: 100;
	}
	image {
		border-radius: 10rpx;
	}

</style>
