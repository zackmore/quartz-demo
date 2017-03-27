import Node from './BaseNode.js'

export default class QuestionNode extends Node {
  constructor ({ text, link }) {
    super({ text, link })
    this.type = 'question'
    this.next = []
  }
}
