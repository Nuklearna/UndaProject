const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get
router.get('/', async (req, res) => {
  const contact = await loadConectCollection();
  res.send(await contact.find({}).toArray());
});

//Add some contact msgs
router.post('/', async (req, res) => {
  const contact = await loadConectCollection();
  await contact.insertOne({
    email: req.body.email,
    text: req.body.text
  });
  res.status(200).send()
});

async function loadConectCollection() {
  const client = await mongodb.MongoClient.connect
  ('mongodb://vue123:vue123@ds057847.mlab.com:57847/db_vue_express_unda', {
    useNewUrlParser: true
  });

  return client.db('db_vue_express_unda').collection('contact')
}

module.exports = router;
