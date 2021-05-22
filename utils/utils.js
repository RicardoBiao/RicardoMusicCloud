import api from "./api.js"


const utils = {
	// api promise化
	promisify: function(apiFn, ...params) {
	  return new Promise((resolve, reject) => {
	    apiFn(...params).then((res) => {
	      resolve(res);
	    }).catch((err) => {
	
	      // 不显示默认错误提示，允许自定义处理
	      let notShowErrTip = params[1] && params[1].notShowErrTip;
	      if (notShowErrTip) {
	        resolve({
	          fail: true,
	          msg: err.msg || err.message,
	        });
	        return;
	      }
	
	      wx.showToast({
	        title: err.msg || err.message,
	        icon: 'none',
	        success() {
	          resolve(false);
	        }
	      })
	    })
	  })
	}
}

export default utils