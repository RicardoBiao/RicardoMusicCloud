<template>
	<music-swiper :img-urls="imgUrls"></music-swiper>
</template>

<script>
	export default {
		data() {
			return {
				imgUrls:[
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png',
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/202028-1578486028afb2.png',
					'https://ricardo-bucket.oss-cn-hangzhou.aliyuncs.com/RicardoMusicCloud/images/235000-1584114600db79.png'
				]
			}
		}
	}
</script>

<style lang="less">
	page {
		background-color: #0e0b1f;
	}
</style>
