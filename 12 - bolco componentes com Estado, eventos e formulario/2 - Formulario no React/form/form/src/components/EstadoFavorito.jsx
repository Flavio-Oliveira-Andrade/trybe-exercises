import React from "react";

class EstadoFavorito extends React.Component {
  render() {
    const {value, handleChange } = this.props;

    let error = undefined;
    if(value.length > 100) error = "Texto muito Grande"

    return (
      <label>
        Diga qual éo seu Estado favorito do Brasil ou do React , vocẽ quem sabe
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
        <sapn>{error ? error : "" } </sapn>
      </label>
    );
  }
}
export default EstadoFavorito;