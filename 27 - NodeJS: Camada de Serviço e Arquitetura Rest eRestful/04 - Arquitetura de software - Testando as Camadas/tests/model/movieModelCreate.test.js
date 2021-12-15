const { expect } = require( 'chai')

const MoviesModel = require('../../models/movieModel');

// const MoviesModel = {
//   create: () => {}
// };


  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
    id: 74
  }


describe('quando é enserido com sucesso', () => {

  it('retorna um objeto', async () => {
    const response = await MoviesModel.create(payloadMovie);

    expect(response).to.be.a('object')
  })

  it('object possui o ID do novo filme inserido', async () => {
    const response = await MoviesModel.create(payloadMovie);

    expect(response).to.have.a.property('id')
  })

})
