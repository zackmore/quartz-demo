// Mutations
import _ from 'lodash'

export default {
  CREATE_NODE (state, { node, followingId }) {
    if (_.isNull(followingId)) {
      state.nodes.push(node)
    } else {
      let following = _.find(state.nodes, { id: followingId })
      let index = _.findIndex(state.nodes, following)
      following.next = node.id
      state.nodes.splice(index, 1, following)
      state.nodes.push(node)
    }
  }
}
