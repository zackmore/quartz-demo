// Actions
import _ from 'lodash'

export default {
  CREATE_NODE (context, { node, followingId=null }) {
    switch (node.type) {
      case 'start':
        context.commit('CREATE_START_NODE', { node })
        break
      case 'normal':
        context.commit('CREATE_NORMAL_NODE', { node, followingId })
        break
      case 'end':
        context.commit('CREATE_END_NODE', { node, followingId })
        break
      case 'question':
        context.commit('CREATE_QUESTION_NODE', { node, followingId })
        break
      default:
        break
    }
  },

  CREATE_ANSWER_NODES (context, { nodes, followingId }) {
    context.commit('CREATE_ANSWER_NODES', { nodes, followingId })
  }
}
