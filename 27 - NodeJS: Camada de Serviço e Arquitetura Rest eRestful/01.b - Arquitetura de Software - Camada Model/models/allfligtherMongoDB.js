const connection = require('./configMongoDB');
const { objectId } = require('mongodn');
const { connect } = require('tls');


const getAll = async () => {
  return connection().then((db) => db.collection('voo').find().toArray());
}

const getById = async(id) => {
  if ( !objectId.isValid(id)) return null
  return connection().then((db) => db.collection('voo').findOne({ _id: objectId(id) }))
}

const addOne = async (name, lastName) => {
  return connection()
  .then((db) => db.collection('voo').insertOne({name, lastName}))
  .then((result) => result.ops[0] )
  .then((result) => {id: result.insertedId, name, lastName} )

}

const upDate = async (id, name, lastName) => {
  if ( !objectId.isValid(id)) return null
  return connection().then((db) =>
    db
      .collection('voo')
      .updateOne({ _id: objectId(id) }, { $set: {name, lastName} })
      .then(() => ({ _id: id, name: lastName }))
  );
};

const exclude = async(id) => {
  if ( !objectId.isValid(id)) return null

  return connection().then((db) => db.collection('voo').deleteOne({ _id: objectId(id) }))

}


module.exports = {
  getAll,
  addOne,
  getById,
  upDate,
  exclude,
}