<template>
	<view class="content">
		<view class="title">SIGN IN</view>
		<view class="email-box">
			<image class="icon" src="../../static/e-mail.png" mode=""></image>
			<input type="text" v-model="email" value="" placeholder="E-Mail"/>
		</view>
		
		<view class="password-box">
			<image class="icon" src="../../static/psw.png" mode=""></image>
			<input class="uni-input" :password="pswShow" type="text" v-model="password" value="" placeholder="Password"/>
			<image v-if="pswShow" class="psw-show" src="../../static/notVisible.png" @tap="pswShow = !pswShow" mode=""></image>
			<image v-else class="psw-show"  src="../../static/notVisible_forbid.png"  @tap="pswShow = !pswShow" mode=""></image>
		</view>
		
		<view class="forgot-psw" @tap="forgotPwd()">
			Forgot Password ?
		</view>
		
		<button @click="emailLogin(email,password)" class="sign-in">SIGN IN</button>
		
		<view class="bl-box">
			<view class="bl"></view>
			<text> Or connect with </text>
			<view class="bl"></view>
		</view>
		
		<view class="otherlogin">
			<button type="default" class="ot-login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
				<image @click="wxLogin()" class="ot-login-img" src="../../static/WeChat.png" mode="aspectFill"></image>
			</button>
			<button type="default" class="ot-login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
				<image class="ot-login-img" src="../../static/weibo.png" mode="aspectFill"></image>
			</button>
			<button type="default" class="ot-login-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">
				<image class="ot-login-img" src="../../static/github.png" mode="aspectFill"></image>
			</button>
		</view>
		
		<view class="footer">
			<text> Don't hava an account ? </text>
			<text style="color: #ef01a0; margin-left: 2vw;" > Sign Up </text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '',
				email: 'RicardoLe@yeah.net',
				password: 'qinqinqin753',
				backgroundUrl: '',
				pswShow: true
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
						this.$store.state.cookie = res.data.cookie;
						this.$api.getDetail({
							uid:this.$store.state.userInfo.userId
						}).then(res => {
							if (res.data.code === 200) {
								this.$store.state.detail = res.data;
								console.log('this.$store.state.detail:',this.$store.state.detail);
							}
						});
						this.$api.getLikeList({
							uid: this.$store.state.userInfo.userId,
							cookie: this.$store.state.cookie
						}).then(res => {
							if (res.data.code === 200) {
								console.log('getLikeList-res==>',res);
								this.$store.state.likeList = res.data.ids;
								console.log('this.$store.state.likeList==>',this.$store.state.likeList);
							}
						});
						console.log('this.$store.state.userInfo:',this.$store.state.userInfo);
						uni.switchTab({
							url:'/pages/tabBar/account/account'
						});
					}
				});
			},
			wxLogin() {
				wx.login({
					success (res) {
						if (res.code) {
							console.log('res===>',res);
						} else {
							console.log('登录失败！' + res.errMsg)
						}
					}
				})
			},
			getUserInfo(e) {
				if(e.detail.errMsg == "getUserInfo:fail auth deny"){       //用户决绝授权	
					console.log('用户拒绝了授权');
				} else {
					console.log('用户确认了授权');
				}
			}
			// ,
			// goForgotPwd() {
			// 	uni.navigateTo({
					
			// 	});
			// }
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
		width: 6vw;
		height: 5vw;
	}
	.psw-show {
		float: right;
		right: 0;
		width: 9vw;
		height: 6.4vw;
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
		margin-bottom: 25vw;
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
	
	.bl-box {
		display: flex;
		flex-direction: row;
		color: #FFFFFF;
		justify-content: center;
		.bl {
			height: 2vw;
			width: 22vw;
			border-bottom: solid 1px #808080; 
		}
		text {
			width: 25vw;
			height: 4vw;
			line-height: 4vw;
			font-family: Helvetica;
			font-size: 3vw;
			font-weight: normal;
			font-stretch: normal;
			letter-spacing: 0vw;
			color: #8d92a3;
			text-align: center;
		}
	}
	
	.otherlogin {
		display: flex;
		justify-content: center;
		margin-top: 5vw;
		.ot-login-btn {
			width: 11vw;
			height: 11vw;
			margin: 0 1.5vw;
			padding: 0;
			background-color: #ffffff;
			border-radius: 50%;
			.ot-login-img {
				width: 11vw;
				height: 11vw;
			}
		}
	}
	
	.footer {
		display: flex;
		justify-content: center;
		margin-top: 10vw;
		height: 5vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #ffffff;
	}
	
</style>