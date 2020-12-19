const request = require('supertest')
const router = require('./smurfs-router')
const db = require("../../data/dbConfig");

const smurf1 = { name: "Smurfette" }
const smurf2 = { name: "Brainy Smurf" }
const smurf3 = { name: "Papa Smurf" }

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

describe('endpoints', () => {
    describe('[GET] /smurfs', () => {
        
        it('responds with 200 OK', async () => {
            const res = await request(router).get('/')
            expect(res.status).toBe(200)
        })
        it('responds with empty array if no smurfs', async () => {
            const res = await request(router).get('/smurfs')
            expect(res.body).toHaveLength(0)
        })
        it('responds with smurfs if smurfs', async () => {
            await db('smurfs').insert(smurf1)
            let res = await request(router).get('/smurfs')
            expect(res.body).toHaveLength(1)
            await db('smurfs').insert(smurf2)
            res = await request(router).get('/smurfs')
            expect(res.body).toHaveLength(2)
            expect(res.body[0]).toMatchObject(smurf1)
            expect(res.body[1]).toMatchObject(smurf2)
        })
    })
})
