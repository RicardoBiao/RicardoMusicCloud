<template>
	<view class="swiper-wrap">
		<swiper class="swiper"
		previous-margin="45px" 
		next-margin="130px"
		:circular="circular"
		:indicator-dots="indicatorDots" 
		:autoplay="autoplay" 
		:interval="interval"
		:current="currentSwiper"
		:duration="duration"
		@change="swiperChange"
		>
			<block v-for="(item,index) in imgUrls" :index="index" :key="item" >
				<swiper-item class="swiper-item" >
					<image :src="item" mode="aspectFill" class="slide-image" :class="index == currentSwiper ? 'active' : ''"></image>
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
				}
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

</style>
