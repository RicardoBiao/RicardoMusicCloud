<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: #0e0b1f;
	}
	.big-btn {
		width: 79vw;
		height: 12vw;
		line-height: 12vw;
		border-radius: 1vw;
		font-family: Helvetica;
		font-size: 4vw;
		font-weight: normal;
		font-stretch: normal;
		letter-spacing: 0vw;
		color: #eeeeee;
		background-color: #ef01a0;
	}
	
	/************ 文字颜色 start ************/
	.tc-ee {
		color: #EEEEEE;
	}
	.tc-ef {
		color: #ef01a0;
	}
	/************ 文字颜色 end ************/
	
	/************ 文字大小 start ************/
	.fs-20 {
		font-size: 20rpx;
	}
	.fs-28 {
		font-size: 28rpx;
	}
	.fs-56 {
		font-size: 56rpx;
	}
	/************ 文字大小 end ************/
	
</style>
