<template>
	<view>
		<view class="user-image">
			<view class="img">
				<image :src="userImg" mode="aspectFill"></image>
			</view>
			<view class="edit-img">
				<image src="../../../static/edit-img.png" mode=""></image>
			</view>
		</view>
		<view class="user-info">
			<view style="width: 100%; height: 24vw;"></view>
			<form @submit="formSubmit()" @reset="formReset()">
				<view class="form-item">
					<view class="item-left">
						Username
					</view>
					<view class="item-right">
						<input type="text" v-model="form.user_name" />
					</view>
				</view>
				<view class="form-item">
					<view class="item-left">
						Email
					</view>
					<view class="item-right">
						{{ form.email }}
					</view>
				</view>
				<view class="form-item">
					<view class="item-left">
						Phone
					</view>
					<view class="item-right">
						{{ form.phone }}
					</view>
				</view>
				<view class="form-item">
					<view class="item-left">
						Gender
					</view>
					<view class="item-right">
						{{ form.gender }}
					</view>
				</view>
				<view class="form-item">
					<view class="item-left">
						Data of birth
					</view>
					<view class="item-right">
						{{ form.birthday }}
					</view>
				</view>
			</form>
		</view>
		<view class="change-pw" @click="goToResetPsw()"> Change password </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					user_name: this.$store.state.detail.profile.nickname,
					email: 'Muffiluma@gmail.com',
					phone: '+ 65 3658 9211',
					gender: 'Male',
					birthday: '10/09/1995'
				},
				userInfo: {},
				// userImg: 'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png'
				userImg: this.$store.state.detail.profile.avatarUrl
			}
		},
		created() {
			this.userInfo = this.$store.state.detail;
			console.warn('this.userInfo===>',this.userInfo);
		},
		methods: {
			formSubmit() {
				console.log('form====>',this.form)
			},
			formReset() {
				this.form = {
					user_name: '',
					email: '',
					phone: '',
					gender: '',
					birthday: ''
				}
				console.log('form====>',this.form)
			},
			goToResetPsw() {
				uni.navigateTo({
					url:'/pages/tabBar/account/edit'
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		display: flex;
		justify-content: center;
	}
	input {
		text-align: right;
	}
	.user-image {
		width: 38vw;
		height: 38vw;
		background-color: #6d6d6d;
		border-radius: 19vw;
		margin: 0 auto;
		z-index: 100;
		position: relative;
		border: 3px solid #adb0c0;
		.img {
			width: 38vw;
			height: 38vw;
			image {
				width: 38vw;
				height: 38vw;
				border-radius: 19vw;
			}
		}
		.edit-img {
			width: 11vw;
			height: 11vw;
			position: absolute;
			bottom: 0;
			right: 0;
			image {
				width: 11vw;
				height: 11vw;
			}
		}
	}
	.user-info {
		width: 87vw;
		height: 120vw;
		background-color: #363942;
		border-radius: 3vw;
		position: relative;
		top: -21vw;
		z-index: 50;
		.form-item {
			margin: 12vw 4vw;
			display: flex;
			justify-content: space-between;
			height: 40rpx;
			line-height: 40rpx;
			.item-left {
				font-family: Helvetica;
				font-size: 28rpx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0vw;
				color: #7a7c81;
			}
			.item-right {
				font-family: Helvetica;
				font-size: 32rpx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0rpx;
				color: #ffffff;
			}
		}
	}
	.change-pw {
		height: 38rpx;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		line-height: 38rpx;
		letter-spacing: 0vw;
		color: #ef01a0;
		text-align: center;
		text-align: center;
		width: 300rpx;
		margin: 0 auto;
		padding: 20rpx;
	}
</style>