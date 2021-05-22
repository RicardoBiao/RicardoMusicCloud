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
		<music-swiper :banners="banners"></music-swiper>
		<view class="popular">
			popular
		</view>
		<view class="music-box" v-for="item in mvs" @tap="goToMv('/pages/movie/movie?mvid=' + item.id)">
			<image class="music-image" mode="aspectFit" :src="item.cover"></image>
			<view class="text-box">
				<text class="text-box-title">
					{{item.name}}
				</text>
				<text class="text-box-centent">
					{{item.artistName}}
				</text>
			</view>
		</view>
		<!-- <player-box ref="player" @click="this.$refs.player.goPlayer()" style="position: fixed; bottom: 0;"></player-box> -->
	</view>
</template>

<script>
	import musicSwiper from '@/components/music-swiper/music-swiper.vue';
	import playerBox from '@/components/player-box/player-box.vue';
	export default {
		data() {
			return {
				title: 'Radio',
				mvs: [],
				// 'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png',
				// 'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png',
				// 'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/204941-15776237817d95.png'
				banners:[],
				limit: 10
			}
		},
		components: {
			musicSwiper,
			playerBox
		},
		created() {
			this.getBaners();
			this.getTopMv();
			console.log("index:"+this.swiperData);

		},
		methods: {
			getBaners() {
				this.$api.getBanner({
					type: 2
				}).then( res => {
					if (res.data.code === 200) {
						this.banners = res.data.banners;
					}
				});
			},
			getTopMv() {
				this.$api.getTopMv({
					limit: this.limit
				}).then( res => {
					if (res.data.code === 200) {
						this.mvs = res.data.data;
						
					}
				});
			},
			goToMv(url) {
				uni.navigateTo({
					url: url
				});
				console.log("url:",url);
			}
			
		}	
	}
</script>

<style lang="less" scoped>
	page {
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
		width: 90vw;
		margin: 15rpx 30rpx 15rpx 30rpx;
		.music-image {
			width: 400rpx;
			height: 230rpx;
			border-radius: 10rpx;
		}
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
		width: 35vw;
	}
	.text-box-title {
		height: auto;
		width: auto;
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
