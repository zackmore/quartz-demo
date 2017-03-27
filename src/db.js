const db = window.localStorage

export function save (id, data) {
  db.setItem(id, JSON.stringify(data))
}

export function get (id) {
  return JSON.parse(db.getItem(id))
}
