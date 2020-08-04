<template>
	<view class="center">
		<!-- <image class="mv-box" :src="mv.cover" mode="aspectFit"></image> -->
		<video :poster="mv.cover" class="mv-box" :src="mvurl" controls></video>
		
		<view class="comment">
			<view class="comment-item" v-for="(item, index) in comment" :key="index">
				<view class="item-member">
					<image class="item-avatar" :src="item.user.avatarUrl"></image>
					<text class="item-name">{{ item.user.nickname }}</text>
					<!-- <view class="star-wrp">
						<rate :value="item.point"></rate> -->
						<!-- <image class="item-star" src="https://cjbcdn.superchic.com.cn/miniapp/static/images/icon-star_filled.png" v-for="num in Number(item.point)" :key="num"></image> -->
					<!-- </view> -->
				</view>
				<view class="item-date">{{ item.date_comment }}</view>
				<view class="item-content">{{ item.content }}</view>
				<!-- <view class="item-pics">
					<view class="images" v-for="(image,index2) in item.images" :key="image"  @click="picOn(index,index2)">
						<image class="item-pic" :src="image" mode="widthFix"></image>
					</view>
				</view> -->
			</view>
			<!-- 点击预览大图并可以切换 -->
			<!-- <view class="preview" v-if="previewActive">
				<uni-icon class="preview-left" size="78" v-if="previewNum>0" @click="setPreviewNum(0)" type="back" color="#ffffff"></uni-icon>
				<view class="preview-content" @click="previewNum=0,previewActive=false">
					<image class="preview-con" :src="comment[nums].images[previewNum]" mode="widthFix"></image>
				</view>
				 <uni-icon class="preview-right" size="78" v-if="previewNum<(comment[nums].images.length-1)" @click="setPreviewNum(1)" type="forward" color="#ffffff"></uni-icon>
			</view>
			<loading :loadingType="loadingType"></loading> -->
			<!-- 新人弹窗 -->
			<!-- <newUserPop :showNew="showNew" @onclose="closeNewMask" @onGetCoupon="getCoupon"></newUserPop> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid: '',
				mv: [],
				mvurl: '',
				comment: []
			}
		},
		created: function () {
			
		},
		onLoad: function (option) {
			this.mvid = option.mvid;
		    console.log('mvid:',this.mvid); //打印出上个页面传递的参数。
			this.getMvDetail();
			this.getMvUrl();
			this.getMvComment();
		},
		methods: {
			getMvDetail() {
				this.$api.getMvDetail({
					mvid: this.mvid
				}).then( res => {
					if (res.data.code === 200) {
						this.mv = res.data.data;
						this.mvimg = res.data.data.cover;
						console.log('this.mv:',this.mv);
					}
				});
			},
			getMvUrl() {
				this.$api.getMvUrl({
					id: this.mvid
				}).then( res => {
					if (res.data.code === 200) {
						this.mvurl = res.data.data.url;
						console.log('mvUrl:',res);
					}
				});
			},
			getMvComment() {
				this.$api.getMvComment({
					id: this.mvid
				}).then( res => {
					if (res.data.code === 200) {
						this.comment = res.data.hotComments;
						console.log('mvComment:',res);
					}
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #0e0b1f;
		height: 100%;
	}
	.mv-box {
		height: 30vh;
		width: 100vw;
	}
	
	.comment {
		.comment-item {
			margin-bottom: 18rpx;
			padding: 32rpx 24rpx 30rpx 24rpx;
			font-size: 28rpx;
			color: #FFFFFF;
			background-color: #0e0b1f;
			.item-member {
				display: flex;
				align-items: center;
			}
			.item-avatar {
				width: 60rpx;
				height: 60rpx;
				margin-right: 24rpx;
				border-radius: 60rpx;
			}
			.item-name {
				color: #FFFFFF;
				line-height: 60rpx;
				line-height: 1;
			}
			.star-wrp {
				margin-left: 30rpx;
				align-items: center;
			}
			.item-star {
				width: 24rpx;
				height: 24rpx;
			}
			.item-content {
				margin: 24rpx 0 18rpx 0;
				font-size: 28rpx;
				line-height: 40rpx;
			}
			.item-pics {
				white-space: nowrap;
				overflow: auto;
				margin-bottom: 24rpx;
				.images{
					display: inline-block;
					width: 186rpx;
					height: 186rpx;
					overflow: hidden;
					.item-pic {
						width: 186rpx;
						vertical-align: bottom;
						display: inline-block;
						margin-right: 18rpx;
						background-size: cover;
					}
				}
				
			}
			.item-date {
				font-size: 24rpx;
				color: #FFFFFF;
				vertical-align: top;
				margin-top: 20rpx;
			}
		}
	}	
</style>