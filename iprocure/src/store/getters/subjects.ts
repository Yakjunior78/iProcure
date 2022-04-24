const state = {
	subjects: {},
	fetchingSubjects: false
}

const getters = {
	subjects: ( state: any ) => state.subjects,
	fetchingSubjects: ( state: any ) => state.fetchingSubjects
}

export default {
	state,
	getters
}
