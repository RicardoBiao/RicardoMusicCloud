<template>
	<view class="uni-popup-share">
		<view class="uni-share-title"><text class="uni-share-title-text">{{title}}</text></view>
		<view class="uni-share-content">
			<view class="uni-share-content-box">
				<block v-for="(item,index) in bottomData" :key="index">
					<button class="uni-share-content-item" style="border: none; margin: 0 0 0 24rpx; line-height: 28rpx;" plain open-type="share" v-if="index==0">
						<image class="uni-share-image" :src="item.icon" mode="aspectFill"></image>
						<text class="uni-share-text">{{item.text}}</text>
					</button>
					<view class="uni-share-content-item" @click.stop="select(item,index)" v-else>
						<image class="uni-share-image" :src="item.icon" mode="aspectFill"></image>
						<text class="uni-share-text">{{item.text}}</text>
					</view>
				</block>
				
				

			</view>
		</view>
		<!-- <view class="uni-share-button-box">
			<button class="uni-share-button" @click="close">取消</button>
		</view> -->
	</view>
</template>

<script>
	export default {
		name: 'UniPopupShare',
		props: {
			title: {
				type: String,
				default: 'SHARE TO'
			}
		},
		inject: ['popup'],
		data() {
			return {
				bottomData: [
					{
						text: '微信',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						name: 'wx'
					},
					{
						text: 'QQ',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						name: 'qq'
					},
					{
						text: '其他',
						icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
						name: 'more'
					}
				]
			}
		},
		created() {},
		methods: {
			/**
			 * 选择内容
			 */
			select(item, index) {
				this.$emit('select', {
					item,
					index
				}, () => {
					this.popup.close()
				})
			},
			/**
			 * 关闭窗口
			 */
			close() {
				this.popup.close()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-popup-share {
		background-image: linear-gradient(96deg, 
			rgba(221, 19, 127, 0.9) 0%, 
			rgba(81, 0, 77, 0.9) 100%);
		border-top-left-radius: 60rpx;
		border-top-right-radius: 60rpx;
		padding: 18rpx 0 60rpx 0;
	}
	.uni-share-title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: left;
		margin-left: 48rpx;
		height: 40px;
	}
	.uni-share-title-text {
		font-size: 14px;
		color: #eeeeee;
	}
	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		padding-top: 10px;
	}
	
	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		flex-wrap: wrap;
		width: 100vw;
	}
	
	.uni-share-content-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: left;
		padding: 10px 24rpx;
		align-items: center;
		margin: 0 24rpx;
	}
	
	.uni-share-content-item:active {
		background-color: #0e0b1f;
		opacity: 0.2;
		border-radius: 12rpx;
	}
	
	.uni-share-image {
		width: 48rpx;
		height: 48rpx;
	}
	
	.uni-share-text {
		font-family: Helvetica;
		font-size: 28rpx;
		color: #eeeeee;
		margin-left: 44rpx;
	}
	
	.uni-share-button-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 10px 15px;
	}
	
	.uni-share-button {
		flex: 1;
		border-radius: 50px;
		color: #666;
		font-size: 16px;
	}
	
	.uni-share-button::after {
		border-radius: 50px;
	}
</style>
