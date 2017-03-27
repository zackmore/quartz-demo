import Node from './BaseNode.js'

export default class NormalNode extends Node {
  constructor ({ text, link }) {
    super({ text, link })
    this.type = 'normal'
  }
}
