const getters = {
	isPlay: state => state.isPlay,
	musicList: state => state.musicList,
	playList: state => state.playList,
	likeList: state => state.likeList,
	cookie: state => state.cookie,
	innerAudioContext: state => state.innerAudioContext,
	currentIndex: state => state.currentIndex,
	currentLyric: state => state.currentLyric
}
export default getters