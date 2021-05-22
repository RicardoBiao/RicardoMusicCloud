<template>
	<view class="content">
		<text style="font-size: 28rpx; height: 28rpx;  line-height: 28rpx; margin: auto 0; color: #eeeeee;"> 01 </text>
		<image class="picture" :mode="aspectFit" src="https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png" mode=""></image>
		<view class="title-box">
			<text style="font-size: 32rpx; margin: auto 0; height: 32rpx; line-height: 32rpx; color: #eeeeee;"> Nice For What </text>
			<text style="font-size: 24rpx; margin: auto 0; height: 24rpx; line-height: 24rpx; color: #817a7a;"> Avinci John </text>
		</view>
		<image class="setting" src="../../static/ellipsis.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		name: 'recentlyMusic',
		props: {
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		width: 646rpx;
		height: 78rpx;
		background-color: #0e0b1f;
		margin-bottom: 20rpx;
	}
	.title-box {
		// width: 430rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.picture {
		display: inline-flex;
		width: 64rpx;
		height: 64rpx;
		margin: auto 0;
	}
	.setting {
		position: absolute;
		right: 6vw;
		width: 50rpx;
		height: 50rpx;
		margin: auto 0;
	}
	

</style>
