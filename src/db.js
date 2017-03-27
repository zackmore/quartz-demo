import _ from 'lodash'

export default {
  nodes: [],

  upsert (id, data) {
    let node = this.get(id)
    if (node) {
      let index = _.findIndex(this.nodes, node)
      let newnode = _.assign(node, data)
      this.nodes.splice(index, 1, newnode)
    } else {
      this.nodes.push(data)
    }
  },

  get (id) {
    return _.find(this.nodes, { id })
  }
}

