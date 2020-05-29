<template>
	<view class="box">
		<input type="text" placeholder="请输入搜索内容" v-model="keywords"/>
		<button class="button1"  @click="SearchMusic()">搜索</button>
		<view class="music-box" v-for="item in songs" @click="getMusicUrl(item.id)">
			<image class="music-image" mode="aspectFill" :src="item.artists[0].img1v1Url"></image>
			<view class="text-box">
				<text class="text-box-title">
					{{item.artists[0].name}}
				</text>
				<text class="text-box-centent">
					{{item.id}}
				</text>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				musicId:'',
				keywords:'',
				songs:[]
			}
		},
		methods: {
			getMusicUrl(itemId) {
				this.$api.getMusicUrl({
					id: itemId
				}).then(res => {
					if (res.data.code === 200) {
						// var urlArr = [];
						console.log(res.data);
						console.log(res.data.data[0].url);
						let musicUrl = res.data.data[0].url;
						
						const innerAudioContext = uni.createInnerAudioContext();
						innerAudioContext.autoplay = true;
						innerAudioContext.src = 'musicUrl';
						innerAudioContext.onPlay(() => {
						  console.log('开始播放');
						});
						innerAudioContext.onError((res) => {
						  console.log(res.errMsg);
						  console.log(res.errCode);
						});
						// for (var i=0,len=res.data.data.length; i<len; i++) {
						// 	urlArr.push(res.data.data[i].url);
						// }
					}
				});
			},
			SearchMusic() {
				this.$api.getSearch({
					keywords: this.keywords
				}).then(res => {
					if (res.data.code === 200) {
						console.log(res.data);
						console.log(res.data.result);
						console.log(res.data.result.songs);
						this.songs = res.data.result.songs;
						// console.log(res.data.data[0].url);
						// for (var i=0,len=res.data.data.length; i<len; i++) {
						// 	urlArr.push(res.data.data[i].url);
						// }
					}
				});
			}
		}
	}
</script>

<style lang="less">
	page {
		width: 100%;
		height: 100%;
		background-color: #0e0b1f;
	}
	input {
		color: #FFFFFF;
	}
	.button1 {
		width: 90px;
		height: 40px;
		line-height: 40px;
	}
	.music-box {
		display: inline-flex;
		width: 100vw;
		height: 21vw;
		margin: 5vw 4vw 5vw 6vw;
	}
	.music-image {
		width: 21vw;
		height: 21vw;
		border-radius: 1vw;
	}
	.text-box {
		display: flex;
		flex-direction: column;
	}
	.text-box-title {
		margin: 3vw 0 0 4vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
	}
	.text-box-centent {
		margin: 2vw 0 0 4vw;
		font-family: Helvetica;
		font-size: 3vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #817a7a;
	}
</style>
