(global.webpackJsonp=global.webpackJsonp||[]).push([["components/audio-mini/audio-mini"],{100:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={props:{song:{type:Object,default:function(){return[]}}},data:function(){return{musicPaused:1,innerAudioContext:"",audios:[],duration:"",current:"00:00",songImg:""}},methods:{goToPlayer:function(t){n.navigateTo({url:t})},format:function(n){return"0".repeat(2-String(Math.floor(n/60)).length)+Math.floor(n/60)+":"+"0".repeat(2-String(Math.floor(n%60)).length)+Math.floor(n%60)},musicPlay:function(){var n=this;this.innerAudioContext.play(),this.musicPaused=0;this.innerAudioContext.onTimeUpdate(function(){var t;n.current=(t=n.innerAudioContext.currentTime,"0".repeat(2-String(Math.floor(t/60)).length)+Math.floor(t/60)+":"+"0".repeat(2-String(Math.floor(t%60)).length)+Math.floor(t%60))})},musicPause:function(){this.innerAudioContext.pause(),this.musicPaused=1}},onLoad:function(){},created:function(){var t=this;this.$api.getMusicUrl({id:this.song.id}).then(function(e){if(200===e.data.code){var o=e.data.data[0].url;t.innerAudioContext=n.createInnerAudioContext(),t.innerAudioContext.src=o;t.innerAudioContext.onCanplay(function(){var n;t.duration=(n=t.innerAudioContext.duration,"0".repeat(2-String(Math.floor(n/60)).length)+Math.floor(n/60)+":"+"0".repeat(2-String(Math.floor(n%60)).length)+Math.floor(n%60))}),t.musicPaused=1}}),this.$api.getSongDetail({ids:this.song.id}).then(function(n){200===n.data.code&&(console.log("res.data:",n.data),t.songImg=n.data.songs[0].al.picUrl,console.log("this.songImg:",t.songImg))})},watch:{}};t.default=e}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},101:
/*!**************************************************************************************************************************!*\
  !*** /Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio-mini.vue?vue&type=style&index=0&lang=less& */102),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t.default=r.a},102:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){},96:
/*!****************************************************************************************!*\
  !*** /Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue ***!
  \****************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! ./audio-mini.vue?vue&type=template&id=51e86303& */97),r=e(/*! ./audio-mini.vue?vue&type=script&lang=js& */99);for(var i in r)"default"!==i&&function(n){e.d(t,n,function(){return r[n]})}(i);e(/*! ./audio-mini.vue?vue&type=style&index=0&lang=less& */101);var a=e(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */14),u=Object(a.default)(r.default,o.render,o.staticRenderFns,!1,null,null,null,!1,o.components,void 0);u.options.__file="Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue",t.default=u.exports},97:
/*!***********************************************************************************************************************!*\
  !*** /Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=template&id=51e86303& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio-mini.vue?vue&type=template&id=51e86303& */98);e.d(t,"render",function(){return o.render}),e.d(t,"staticRenderFns",function(){return o.staticRenderFns}),e.d(t,"recyclableRender",function(){return o.recyclableRender}),e.d(t,"components",function(){return o.components})},98:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=template&id=51e86303& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(n,t,e){"use strict";e.r(t),e.d(t,"render",function(){return o}),e.d(t,"staticRenderFns",function(){return i}),e.d(t,"recyclableRender",function(){return r}),e.d(t,"components",function(){});var o=function(){var n=this.$createElement;this._self._c},r=!1,i=[];o._withStripped=!0},99:
/*!*****************************************************************************************************************!*\
  !*** /Volumes/Mac Data/project/RicardoMusicCloud/components/audio-mini/audio-mini.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var o=e(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./audio-mini.vue?vue&type=script&lang=js& */100),r=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t.default=r.a}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/audio-mini/audio-mini.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/audio-mini/audio-mini-create-component',
    {
        'components/audio-mini/audio-mini-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(96))
        })
    },
    [['components/audio-mini/audio-mini-create-component']]
]);
