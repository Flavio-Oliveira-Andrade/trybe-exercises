import React from 'react';

class MyJockey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      piada: ''

    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return(
      <span>{this.state.piada} </span>
    )
  }
}
export default MyJockey;