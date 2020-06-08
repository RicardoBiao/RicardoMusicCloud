<template>
	<view class="content">
		<view class="title-box">
			<view class="title">Account</view>
			<image class="setting" src="../../static/e-mail.png" mode=""></image>
		</view>
		<view class="user-info">
			<image class="user-image" :src="userInfo.profile.backgroundUrl" mode=""></image>
			<view class="info-right">
				<view>
					<view class="text-box" style="color: #FFFFFF">
						<view class="text"> {{playlist}} </view>
						<view class="text"> {{follower}} </view>
						<view class="text"> {{following}} </view>
					</view>
					<view class="text-box" style="color: #eeeeee">
						<view class="text"> Playlist </view>
						<view class="text"> Follower </view>
						<view class="text"> Following </view>
					</view>
				</view>
				<button class="edit">Edit</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:[],
				playlist:'20',
				follower:'360 K',
				following: '56'
			}
		},
		methods: {
			
		},
		onLoad() { 
			this.userInfo = this.$store.state.userInfo;
			console.log('this.userInfo');
			console.log(this.userInfo);
		},
		onUnload() {  
			
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