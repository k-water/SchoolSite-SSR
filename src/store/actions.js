import Vue from 'vue'
import axios from '../utils/http'
import * as types from './mutation-types.js'

// profession
export const getProfessionList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.professionList, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getProfessionDetails = ({ commit }) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      page: 0,
      size: 9999,
      type: 1
    }
  }).then((res) => {
    commit(types.professionList, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/subjects/' + objID.id,
  }).then((res) => {
    commit(types.professionDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getDetailsID = ({ commit }, id) => {
  commit(types.getCurrentID, id)
}

// college
export const getInfoFive = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.getInfo, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getArtDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/informations/' + objID.id
  }).then((res) => {
    commit(types.getArtDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getArtId = ({ commit }, id) => {
  commit(types.getArtId, id)
}

// home
export const getMoreInfo = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.getMoreInfo, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

// 就业信息
export const getJobInfo = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/informations',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.getJobInfo, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getJobInfoDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/informations/' + objID.id
  }).then((res) => {
    commit(types.getJobInfoDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getJobId = ({ commit }, id) => {
  commit(types.getJobId, id)
}

// 学历提升improve
export const getImproveList = ({ commit }, params) => {
  axios({
    method: 'get',
    url: '/subjects',
    params: {
      page: params.page,
      size: params.size,
      type: params.type
    }
  }).then((res) => {
    commit(types.improveList, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}
export const getImproveDetails = ({ commit }, objID) => {
  axios({
    method: 'get',
    url: '/subjects/' + objID.id
  }).then((res) => {
    commit(types.getImproveDetails, res.data.data)
  }).catch((err) => {
    return console.log(err)
  })
}

export const getImproveId = ({ commit }, id) => {
  commit(types.getImproveId, id)
}