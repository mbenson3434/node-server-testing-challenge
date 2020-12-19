const db = require("../../data/dbConfig");
const Smurfs = require("./smurfs-model");

const smurf1 = { name: "Smurfette"}
const smurf2 = { name: "Brainy Smurf"}
const smurf3 = { name: "Papa Smurf"}

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  beforeEach(async () => {
    await db('smurfs').truncate()
  })
  afterAll(async () => {
    await db.destroy()
  })

  describe('Smurfs model', () => {
    it('Smurfs.getAll returns empty array if no smurfs', async () => {
        const result = await Smurfs.getAll()
        expect(result).toHaveLength(0)
      })
      it('Smurf.getAll returns smurfs', async () => {
        await db('smurfs').insert(smurf1)
        const result = await Smurfs.getAll()
        expect(result).toHaveLength(1)
        expect(result[0]).toHaveProperty('id')
        expect(result[0]).toHaveProperty('name', 'Smurfette')
      })
  })