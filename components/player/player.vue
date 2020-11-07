<template>
	<view class="player-box">
		<view class="box-left">
			<view class="song-img">
				<image style="width: 100rpx;height: 100rpx;" src="../../static/github.png" mode=""></image>
			</view>
			<view class="song-name">
				 Come Back Home Come Back Home 
			</view>
		</view>
		<view class="box-right">
			<image class="btn" src="../../static/upsong.png" mode=""></image>
			<image style="width: 66rpx; height: 66rpx;" class="btn" src="../../static/play.png" mode=""></image>
			<image class="btn" src="../../static/nextsong.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'player',
		props: {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less">
	.player-box {
		width: 100vw;
		height: 150rpx;
		display: flex;
		background-image: linear-gradient(144deg, rgba(221, 19, 127, 0.9) 0%, rgba(81, 0, 77, 0.9) 100%);
		.box-left {
			width: 60vw;
			height: 150rpx;
			line-height: 150rpx;
			display: flex;
			.song-img {
				width: 100rpx;
				height: 100rpx;
				margin: auto 25rpx;
			}
			.song-name {
				max-width: 300rpx;
				height: 150rpx;
				line-height: 150rpx;
				display: inline-flex;
				font-family: Helvetica;
				font-size: 32rpx;
				font-weight: normal;
				font-stretch: normal;
				letter-spacing: 0rpx;
				color: #eeeeee;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		.box-right {
			width: 40vw;
			height: 150rpx;
			display: flex;
			justify-content: space-around;
			.btn {
				width: 30rpx;
				height: 30rpx;
				margin: auto 0;
				padding: 10rpx;
			}
		}
	}
	
</style>
