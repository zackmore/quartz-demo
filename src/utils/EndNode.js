import Node from './BaseNode.js'

export default class EndNode extends Node {
  constructor ({ text, link }) {
    super({ text, link })
    this.type = 'end'
    delete this.next
  }
}
