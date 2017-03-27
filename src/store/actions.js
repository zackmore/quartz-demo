// Actions

export default {
  CREATE_NODE (context, { node, followingId=null }) {
    context.commit('CREATE_NODE', { node, followingId })
  }
}
