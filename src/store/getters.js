// Getters
import _ from 'lodash'

export default {
  nodes: state => state.nodes,
  startNode: state => _.find(state.nodes, { type: 'start' })
}
