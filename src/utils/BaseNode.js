import uuid from './uuid.js'

export default class Node {
  constructor ({ type, text, link }) {
    this.id = uuid()
    this.type = type
    this.text = text
    this.link = link
    this.next = null
  }
}
