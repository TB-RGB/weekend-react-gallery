const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let picId = [req.params.id]
  let queryText = `
  UPDATE "gallery"
  SET "likes" = "likes" + 1
  WHERE "id" = $1;
  `
  pool.query(queryText,picId)
    .then((response)=>{
      res.sendStatus(204)
    })
    .catch((err)=>{
      console.error('Error in PUT request', err)
      res.sendStatus(500)
    })
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT * FROM "gallery"
  ORDER BY "id";
  `
  pool.query(queryText)
    .then((response)=>{
      res.send(response.rows)
    })
    .catch((err)=>{
      console.error('Error in GET request', err)
      res.sendStatus(500)
    })
});

// POST /gallery
router.post('/', (req,res)=>{
  const valueArray = [req.body.url, req.body.title, req.body.description]

  const queryText = `
  INSERT INTO "gallery" ("url", "title", "description")
  VALUES ($1, $2, $3);
  `

  pool.query(queryText, valueArray)
    .then((response)=>{
      res.sendStatus(201)
    })
    .catch((err)=>{
      console.error('Error in POST request', err)
      res.sendStatus(500)
    })
})

// DELETE /gallery
router.delete('/remove/:id', (req, res)=>{
  const picId = [req.params.id]

  const queryText = `
  DELETE FROM "gallery"
  WHERE "id" = $1;
  `

  pool.query(queryText, picId)
    .then((response)=>{
      res.sendStatus(204)
    })
    .catch((err)=>{
      console.error('Error in DELETE request')
      res.sendStatus(500)
    })
})

module.exports = router;
