import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {list.map((element, index)=> <p key={index}>{element}</p>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer,
})

List.prototype = {
  list: PropTypes.shape.isRequired,
}

export default connect(mapStateToProps, null) (List);
