<template>
	<view>
		<image class="ad-img" :src="adImgUrl"></image>
		<view class="text-box, tc-ee" style="margin: 50rpx 0;">
			<view class="fs-20, tc-ef">
				APP UI KIT
			</view>
			<view class="fs-56">
				<p>WELCOME TO</p>
				<p>Ricardo Music</p>
			</view>
			<view class="fs-28">
				<p>Make your design workflow easier and</p>
				<p>save your time</p>
			</view>
		</view>
		<button class="big-btn, footer" @tap="toHome()">GET STARTED</button>
		<!-- <button open-type="getUserInfo" @getuserinfo="getUserInfo" class="big-btn, footer">GET STARTED</button> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				adImgUrl: 'https://p4.music.126.net/9FRYTIkifMlk9q1EbvJGoQ==/109951164006503857.jpg',
			};
		},
		methods: {
			toHome() {
				uni.switchTab({
					url: '/pages/tabBar/home/home'
				})
			},
			getUserInfo() {
				let that = this
				wx.login({
					success(res) {
						console.log(res)
						wx.getUserInfo({
							success: function(res) {
							  console.log(res.userInfo)
							  that.adImgUrl = res.userInfo.avatarUrl
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ad-img {
		width: 100vw;
		height: 50vh;
	}
	.text-box {
		padding: 0 11vw;
	}
	.footer {
		position: fixed;
		bottom: 140rpx;
		left: 0;
		right: 0;
	}
</style>
