<template>
	<view class="content">
		<view class="title-box">
			<view class="title">{{ nickname == '' ? "Account" : nickname }}</view>
			<image v-if="nickname != ''" @click="getWxUserInfo()" class="setting" src="../../../static/setting.png" mode=""></image>
		</view>
		<view class="user-info">
			<image class="user-image" :src="userInfo.avatarUrl" mode="aspectFill"></image>
			<view class="info-right">
				<view>
					<view class="text-box" style="color: #FFFFFF">
						<view class="text"> {{ playlist == '' ? 0 : playlist }} </view>
						<view class="text"> {{ follower == '' ? 0 : follower }} </view>
						<view class="text"> {{ following == '' ? 0 : following }} </view>
					</view>
					<view class="text-box" style="color: #eeeeee">
						<view class="text"> Playlist </view>
						<view class="text"> Follower </view>
						<view class="text"> Following </view>
					</view>
				</view>
				<button v-show="nickname" class="edit" @click="goToEdit()">Edit</button>
				<button v-show="!nickname" class="edit" @click="goToLogin()">login</button>
			</view>
		</view>
		<view class="library-box">
			<view style="margin: 60rpx 0 40rpx">Library</view>
			<view class="library-item">
				<view class="library-left">
					<image class="library-img" src="../../../static/Myplaylist.png" mode="aspectFit"></image>
					<view class="library-txt">My playlist</view>
				</view>
				<image class="library-right" src="../../../static/right.png" mode="aspectFit"></image>
			</view>
			<view class="library-item">
				<view class="library-left">
					<image class="library-img" src="../../../static/Album.png" mode="aspectFit"></image>
					<view class="library-txt">Album</view>
				</view>
				<image class="library-right" src="../../../static/right.png" mode="aspectFit"></image>
			</view>
			<view class="library-item">
				<view class="library-left">
					<image class="library-img" src="../../../static/MV.png" mode="aspectFit"></image>
					<view class="library-txt">MV</view>
				</view>
				<image class="library-right" src="../../../static/right.png" mode="aspectFit"></image>
			</view>
			<view class="library-item">
				<view class="library-left">
					<image class="library-img" src="../../../static/Artist.png" mode="aspectFit"></image>
					<view class="library-txt">Artist</view>
				</view>
				<image class="library-right" src="../../../static/right.png" mode="aspectFit"></image>
			</view>
			<view class="library-item">
				<view class="library-left">
					<image class="library-img" src="../../../static/Download2.png" mode="aspectFit"></image>
					<view class="library-txt">Download</view>
				</view>
				<image class="library-right" src="../../../static/right.png" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:[],
				playlist:'',
				follower:'',
				following: '',
				nickname: ''
			}
		},
		methods: {
			goToEdit() {
				uni.navigateTo({
					url:'/pages/tabBar/account/edit'
				});
			},
			goToLogin() {
				if (this.nickname == undefined) {
					uni.navigateTo({
						url:'/pages/login/login'
					});
				};
			},
			getWxUserInfo() {
				uni.authorize({
				    scope: 'scope.userLocation',
				    success() {
				        uni.getLocation();
				    }
				});
				uni.authorize({
				    scope: 'scope.userInfo',
				    success() {
				        uni.getUserInfo();
				    }
				});
				uni.getSetting({
				   success(res) {
				      console.log("res.authSetting",res.authSetting);
				   }
				});
				uni.openSetting({
				  success(res) {
				    console.log(res.authSetting);
				  }
				});
			},
			getLikeMusic() {
				this.$api.getLikeMusic({
					uid:this.$store.state.userInfo.userId,
					cookie:this.$store.state.loginData.cookie
				}).then(res => {
					if (res.data.code === 200) {
						console.log('res.data:',res.data);
					}
				});
			}
		},
		onShow() { 
			this.userInfo = this.$store.state.userInfo;
			this.following = this.userInfo.follows;
			this.follower = this.userInfo.followeds;
			this.playlist = this.userInfo.playlistCount;
			this.nickname = this.userInfo.nickname;
			console.log(this.userInfo);
			console.log(this.following);
		},
		goToLogin() {
			uni.navigateTo({
				url:'/pages/login/login'
			})
		}
	}
</script>

<style lang="less">
	page {
		background-color: #0e0b1f;
		// background-image: url('http://p1.music.126.net/9FRYTIkifMlk9q1EbvJGoQ==/109951164006503857.jpg');
	}
	.content {
		margin: 0 6vw;
	}
	.title-box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 15vw;
		margin-bottom: 9vw;
		.title {
			height: 15vw;
			line-height: 15vw;
			font-family: Helvetica;
			font-size: 13vw;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0vw;
			color: #eeeeee;
		}
		.setting {
			width: 5vw;
			height: 5vw;
			margin: auto 0;
		}
	}
	
	
	.user-info {
		display: flex;
		.info-right {
			display: flex;
			flex-direction: column;
			.edit {
				width: 21vw;
				height: 7vw;
				background-image: linear-gradient(111deg, 
					#dd137f 0%, 
					#51004d 100%);
				border-radius: 1vw;
				color: #eeeeee;
				line-height: 7vw;
				margin: 3vw 0 0 4vw;
			}
			.text-box {
				display: flex;
				.text {
					width: 21vw;
					text-align: center;
					font-family: Helvetica;
					font-size: 4vw;
					font-weight: normal;
					font-stretch: normal;
					letter-spacing: 0vw;
					margin-bottom: 2vw;
				}
			}
		}
		.user-image {
			background-image: url(../../../static/logo.png);
			width: 21vw;
			height: 21vw;
			border-radius: 50%;
			margin-right: 3vw;
		}
	}
	
	.library-box {
		font-family: Helvetica;
		font-size: 44rpx;
		color: #eeeeee;
		.library-item {
			height: 110rpx;
			line-height: 110rpx;
			width: 100%;
			border-bottom: 2rpx solid #a8acac;
			display: flex;
			justify-content: space-between;
			.library-left {
				position: relative;
				.library-img {
					width: 44rpx;
					height: 40rpx;
					margin: auto 0;
					position: absolute;  
					top: 0;  
					bottom: 0;  
					left: 0;  
					right: 0;  
				}
				.library-txt {
					display: inline-flex;
					font-family: Helvetica;
					font-size: 28rpx;
					color: #eeeeee;
					margin-left: 90rpx;
				}
			}
			
			.library-right {
				width: 16rpx;
				height: 24rpx;
				margin: auto 2vw;
			}
		}
	}
	
	
</style>