<template>
	<view class="content">
		<view class="title">SIGN IN</view>
		<view class="email-box">
			<image class="icon" src="../../static/e-mail.png" mode=""></image>
			<input type="text" v-model="email" value="" placeholder="E-Mail"/>
		</view>
		<view class="password-box">
			<image class="icon" src="../../static/psw.png" mode=""></image>
			<input type="text" v-model="password" value="" placeholder="Password"/>
			<image class="psw-show" src="../../static/psw-show.png" mode=""></image>
		</view>
		<view class="forgot-psw">
			Forgot Password ?
		</view>
		<button @click="emailLogin(email,password)" class="sign-in">SIGN IN</button>
		<image class="bg-image" :src="backgroundUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				email: 'RicardoLe@yeah.net',
				password: 'qinqinqin753',
				backgroundUrl: ''
			}
		},
		methods: {
			emailLogin() {
				this.$api.postEmailLogin({
					email:this.email,
					password:this.password
				}).then(res => {
					if (res.data.code === 200) {
						
						this.backgroundUrl = res.data.profile.backgroundUrl;
						this.$store.state.userInfo = res.data.profile;
						this.$store.state.loginData = res.data;
						this.$store.state.isLogin = 1;
						console.log('res.data:',res.data);
						this.$api.getDetail({
							uid:this.$store.state.userInfo.userId
						}).then(res => {
							if (res.data.code === 200) {
								this.$store.state.detail = res.data;
								console.log('this.$store.state.detail:',this.$store.state.detail);
							}
						});
						console.log('this.$store.state.userInfo:',this.$store.state.userInfo);
						uni.switchTab({
							url:'../account/account'
						});
					}
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #0e0b1f;
	}
	.content {
		margin: 0 11vw;
	}
	.title {
		margin: 10vw 0 19vw 0;
		font-family: Helvetica;
		font-size: 10vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.email-box {
		display: flex;
		width: 79vw;
		height: 9vw;
		margin: 0 auto;
		margin-bottom: 10vw;
		border-bottom: solid 1px #9f9f9f;
	}
	.password-box {
		display: flex;
		width: 79vw;
		height: 9vw;
		margin: 0 auto;
		margin-bottom: 10vw;
		border-bottom: solid 1px #9f9f9f;
	}
	.icon {
		display: inline-flex;
		width: 5vw;
		height: 5vw;
	}
	.psw-show {
		float: right;
		right: 0;
		width: 5vw;
		height: 3.4vw;
	}
	input {
		display: inline-flex;
		color: #eeeeee;
		padding-left: 6vw;
		width: 100%;
	}
	.forgot-psw {
		float: right;
		right: 0;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.sign-in {
		width: 79vw;
		height: 12vw;
		margin-top: 33vw;
		line-height: 12vw;
		border-radius: 1vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
		background-color: #ef01a0;
	}
	.bg-image {
		width: 100%;
		height: 30vw;
	}
	
</style>