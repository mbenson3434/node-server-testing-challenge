const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('smurfs')
}

function getById(id) {
  return db('smurfs').where('id', id).first()
}

async function insert(smurf) {
  const [id] = await db('smurfs').insert(smurf)
  return db('smurfs').where({ id }).first()
}

async function update(id, changes) {
  return null
}

function remove(id) {
  return null
}

