<template>
	<view class="content">
		<view class="title-box">
			<view class="title">{{ nickname == '' ? "Account" : nickname }}</view>
			<image v-if="nickname != ''" class="setting" src="../../../static/e-mail.png" mode=""></image>
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
				<button v-show="nickname" class="edit" @click="getWxUserInfo()">Edit</button>
				<button v-show="!nickname" class="edit" @click="goToLogin()">login</button>
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
			goToLogin() {
				if (this.nickname == undefined) {
					uni.navigateTo({
						url:'../../login/login'
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
				url:'../../login/login'
			})
		}
	}
</script>

<style lang="less">
	page {
		background-color: #0e0b1f;
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
	}
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
	.user-info {
		display: flex;
	}
	.info-right {
		display: flex;
		flex-direction: column;
	}
	.user-image {
		background-image: url(../../../static/logo.png);
		width: 21vw;
		height: 21vw;
		border-radius: 50%;
		margin-right: 3vw;
	}
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
	}
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
</style>