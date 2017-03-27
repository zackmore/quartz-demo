// Mutations
import _ from 'lodash'

export default {
  /*
  CREATE_NODE (state, { node, followingId }) {
    console.log(followingId)
    console.log(node)

    if (node.type == 'start') {
      state.nodes.push(node)
    }

    if (_.isNull(followingId)) {
      // Usually for init put a start node
      state.nodes.push(node)
    } else {
      let following = _.find(state.nodes, { id: followingId })
      let index = _.findIndex(state.nodes, following)
      following.next = node.id
      state.nodes.splice(index, 1, following)
      state.nodes.push(node)
    }
  }
  */

  CREATE_START_NODE (state, { node }) {
    state.nodes.push(node)
  },

  CREATE_NORMAL_NODE (state, { node, followingId }) {
    let following = _.find(state.nodes, { id: followingId })
    let index = _.findIndex(state.nodes, following)
    following.next = node.id
    state.nodes.splice(index, 1, following)
    state.nodes.push(node)
  },

  CREATE_END_NODE (state, { node, followingId }) {
    let following = _.find(state.nodes, { id: followingId })
    let index = _.findIndex(state.nodes, following)
    following.next = node.id
    state.nodes.splice(index, 1, following)
    state.nodes.push(node)
  },

  CREATE_QUESTION_NODE (state, { node, followingId }) {
    let following = _.find(state.nodes, { id: followingId })
    let index = _.findIndex(state.nodes, following)
    following.next = node.id
    state.nodes.splice(index, 1, following)
    state.nodes.push(node)
  }
}
