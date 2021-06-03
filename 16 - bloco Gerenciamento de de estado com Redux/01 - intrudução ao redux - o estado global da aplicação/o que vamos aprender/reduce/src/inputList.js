import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addAssingnmrnt from './actions'

class inputList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: ''
    };
  }

  render() {
    const { add } = this.props;
    const { textValue } = this.state;
    return (
      <div>
        <input
          type='text'
          placeholder="Digite a tarefa"
          onChange={ (e) => this.setState({ textValue: e.target.value})}
        />
        <button
          type='button'
          onClick={ () => add(textValue) }>
          Adicionar tarefa
        </button>
      </div>
    )
  }
}

inputList.prototype = {
  add: PropTypes.function().isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addAssingnmrnt(value))
});

export default connect(null, mapDispatchToProps) (inputList);

