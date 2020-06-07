<template>
	<view class="content">
		<view class="user-info">
			<image :src="userInfo.profile.backgroundUrl" mode=""></image>
			<view class="info-right">
				
				<button class="edit">Edit</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.$on('login',(userInfo)=>{  
			        this.userInfo = userInfo;  
			});
			console.log(this.userInfo);
		},
		onUnload() {  
			uni.$off('login');  
		}
	}
</script>

<style lang="less">
	
</style>