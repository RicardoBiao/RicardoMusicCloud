<template>
	<view class="">
		<input type="text" placeholder="请输入搜索内容"  v-model="keywords"/>
		<button class="button1"  @click="searchMusic()">搜索</button>
		<button class="button1" @click="goToPlayer()">去登录</button>
		<audio-mini v-for="song in songs" :key="song" :song="song"  ></audio-mini>
		<view class="show-log" v-show="showLog">
			<image src="../../../static/loading.gif" mode=""></image>
		</view>
		<player-box ref="player" @click="this.$refs.player.goPlayer()" style="position: fixed; bottom: 0;"></player-box>
		
	</view>
	
</template>

<script>
	import playerBox from '@/components/player-box/player-box.vue';
	import audioMini from '@/components/audio-mini/audio-mini.vue';
	export default {
		data() {
			return {
				songs: [],
				limit: 10,
				page: 0,
				showLog: false,
				isLoading: false,
				total: 0
			}
		},
		components: {
			audioMini,
			playerBox
		},
		methods: {
			searchMusic() {
				this.$api.getSearch({
					// keywords: this.keywords,
					keywords: "起风了",
					limit: this.limit,
					offset:this.page*30
				}).then(res => {
					if (res.data.code === 200) {
						console.log('res.data:',res.data);
						console.log(res.data.result);
						console.log(res.data.result.songs);
						this.songs = this.songs.concat(res.data.result.songs);
						this.total = res.data.result.songCount;
						this.showLog = false;
						this.isLoading = false;
						// console.log(res.data.data[0].url);
						// for (var i=0,len=res.data.data.length; i<len; i++) {
						// 	urlArr.push(res.data.data[i].url);
						// }
					}
				});
			},
			onReachBottom() {
			    let that = this;
					if (that.limit * that.page < that.total && !that.isLoading) { 
						that.page++;
						that.showLog = true;
						that.isLoading = true;
						console.log('onReachBottomonReachBottomonReachBottom');
						setTimeout(function() {
							that.searchMusic();
						}, 1500);
					}
			},
			goToPlayer(url) {
				uni.navigateTo({
					url: url
				});
			}
		},
		onLoad() {
			// var audios = document.getElementsByName("audio");
			// console.log("Audio",audios);
		}
	}
</script>

<style lang="less" scoped>
	.swiper {
		background-color: #007AFF;
	}
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
	.show-log {
		width: 100%;
		text-align: center;
		image {
			width: 20px;
			height: 20px;
		}
	}
	
</style>