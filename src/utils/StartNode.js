import Node from './BaseNode.js'

export default class StartNode extends Node {
  constructor ({ text, link }) {
    super({ text, link })
    this.type = 'start'
  }
}
