import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	articleList:[]
}

const mutations = {
	setArticles(state, data) {
		Object.assign(state.articleList, data);
	}
}

export default new Vuex.Store({
	state,
	mutations
})