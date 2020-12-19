const request = require("supertest");
const router = require("express").Router();
const Smurfs = require("./smurfs-model");

router.get("/", (req, res) => {
  Smurfs.getAll()
    .then(smurfs => {
      res.status(200).json(smurfs);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", async (req, res) => {
  const smurf = await Smurfs.getById(req.params.id)
  if (!smurf) {
    res.status(404).end()
  } else {
    res.json(smurf)
  }
});

router.post("/", async (req, res) => {
  const newSmurf = await Smurfs.insert(req.body)
  res.json(newSmurf)
});

router.delete("/:id", (req, res) => {
  res.end()
});

router.put("/:id", (req, res) => {
  res.end()
});

module.exports = router;