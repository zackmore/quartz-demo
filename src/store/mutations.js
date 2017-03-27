// Mutations
import _ from 'lodash'

export default {
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
  },

  CREATE_ANSWER_NODES (state, { nodes, followingId }) {
    let question = _.find(state.nodes, { id: followingId })
    let index = _.findIndex(state.nodes, question)
    question.next = nodes.map(n => n.id)
    state.nodes.splice(index, 1, question)
    nodes.map(n => state.nodes.push(n))
  }
}
