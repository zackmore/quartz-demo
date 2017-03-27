import Node from './BaseNode.js'

export default class AnswerNode extends Node {
  constructor ({ text, link }) {
    super({ text, link })
    this.type = 'answer'
  }
}
