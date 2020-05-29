<template>
	<view class="wrap">
		<swiper class="swiper" 
		next-margin="50px" 
		previous-margin="27px" 
		:circular="circular" 
		:indicator-dots="indicatorDots" 
		:autoplay="autoplay" 
		:interval="interval"
		:current="currentSwiper"
		:duration="duration"
		@change="swiperChange">
			<block>
				<swiper-item v-for="item in imgUrls" class="swiper-item" >
					<image :src="item" mode="aspectFill"></image>
				</swiper-item>
			</block>		
		</swiper>
		<!-- 重置小圆点的样式 -->
		<view class="dots"> 
			<block v-for="(item,index) in imgUrls.length" :index="index" :key="item"> 
				<view class="dot" :class="index == currentSwiper ? ' active' : '' "></view> 
			</block> 
		</view> 
	</view>
</template>

<script>
	export default {
		name:'MusicSwiper',	
		props: {
			imgUrls: []
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
		width: 100%;
		height: 100%;
	}
	.wrap {
		width: 100%;
		height: auto;
		position: relative;
	}
	.swiper {
		width: 100%;
		height: 50vw;
	}
	.swiper-item {
		// width: 75vw;
		// height: 50vw;
		// border-radius: 2vw;
		image {
			width: 75vw;
			height: 50vw;
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
	 width: 2vw;
	 height: 2vw;
	 margin-top: 2vw;
	 border-radius: 50%;
	 margin-right: 2vw;
	 background-color: #FFFFFF;
	}
	/*选中以后的小圆点样式 */
	.active {
	 width: 2vw;
	 height: 2vw;
	 background-color: #ef01a0;
	}
	
</style>
