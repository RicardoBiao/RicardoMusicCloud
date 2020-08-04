<template>
	<view class="center">
		<!-- <image class="mv-box" :src="mv.cover" mode="aspectFit"></image> -->
		<video :poster="mv.cover" class="mv-box" :src="mvurl" controls></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mvid: '',
				mv: [],
				mvurl: ''
			}
		},
		created: function () {
			
		},
		onLoad: function (option) {
			this.mvid = option.mvid;
		    console.log('mvid:',this.mvid); //打印出上个页面传递的参数。
			this.getMvDetail();
			this.getMvUrl();
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
</style>