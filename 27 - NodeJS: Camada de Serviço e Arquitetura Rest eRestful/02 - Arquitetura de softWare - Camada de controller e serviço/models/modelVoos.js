// Busca todos os voos do banco.
const connection = require('./connection')
const { objectId } = require('mongodb')

const getAll = async () => {
  const db = await connection()
    return await db.collection('voos').find().limit(2).toArray()
}
// ...

const createVoos = async ({name , content}) => {
  const db = await connection();
  const resultCreate = await db.collection('voos').insert(name, content);

  return { id: resultCreate.insertedId, name, content }
}

const update = async ({ id, name, content }) => {
  if(! objectId.isValid(id)) return null;

  const db = await connection();
  const voosEdit = await db.collection('voos').updateOne(
    { id: objectId(id) },
    {$set:{ name, content }} );
    return voosEdit
}

const exclude = async (id) => {
  if (!objectId.isValid(id)) return null;
  const db = await connection();

  return  await db.collection('voos').deleteOne({ _id: objectId(id) });

}

module.exports = {getAll, createVoos, update, exclude }