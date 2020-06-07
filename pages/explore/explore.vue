<template>
	<view class="">
		<input type="text" placeholder="请输入搜索内容" v-model="keywords"/>
		<button class="button1"  @click="searchMusic()">搜索</button>
		<button class="button1" @click="goToLogin()">去登录</button>
		<audio-mini v-for="song in songs" :song="song" ></audio-mini>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				songs:[]
			}
		},
		methods: {
			searchMusic() {
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
			},
			goToLogin() {
				uni.navigateTo({
					url:'../login/login'
				})
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
</style>