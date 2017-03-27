import uuid from './uuid.js'

export default class Node {
  constructor ({ text, link }) {
    this.id = uuid()
    this.type = null

    this.text = text
    this.link = link
    this.next = null
  }
}
