const mysql = require('mysql2/promise');

const connection = mysql.createPool(

  {
    Host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'sakila',
    port: 3306,
  }
)

const getAll = async () => {
  const [row, field] = await connection.execute('select * from actor')
  return row;
 // return res.status(200).json(result[0])
 // return await res.status(200).json({data: row})
}

const getById = async(id) => {
  const [row] = await connection.execute(
    'SELECT * FROM actor WHERE actor_id = ?',
    [id]
  )
}

const addOne = async (name, lastName) => {
  const [ row ] = await connection.execute(
    'INSERT INTO actor (first_name, last_name) VALUES(?,?)',
    [name,lastName])
    console.log(row)
    return{
      id:row.insertId,
      first_name: name,
      last_name:  lastName,

    }
}

const upDate = async (id, name, lastName) => {
 const result = await connection.execute(
    `UPDATE actor
     SET name = ?, last_name = ?
     WHERE id = ?`,[name, lastName, id])

     return {result}
}

const exclude = async(id) => {
 await connection.execute(
   `DELETE from actor
    WHERE id = ? `, [id] )
}


console.time("meuprojeto")
console.timeEnd("meuprojeto")

module.exports = {
  getAll,
  addOne,
  getById,
  upDate,
  exclude,
}