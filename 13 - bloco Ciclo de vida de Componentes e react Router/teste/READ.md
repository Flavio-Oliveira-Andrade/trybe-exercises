Componentes com estados de Eventos
passando propiedades do pai para filho

## state
## event

react é um molde para criar aplicações  javascript mais complexa
com menos esforço

## Estado
informações que sua aplicação precisa guarda  para funcionar

sinataxe

class MeuBotaoDeCompras extends React.Component {
  construct(){
    super()

    this.state = {
      numerodeCliques: 0

    }
    this.handleClick = this.handleClick.bind(this)
  }

  hancleClick() {
    this.setState((estadoAnterios, _props) => {
      numerodeCliques: estadoAnterios.numeroDeCliques + 1
    })
  }

  render(){
    return(
      <span>hello</span>
      <botton onClick={this.handleCik}>
      {this.state.numeroDeCliques} </button>
    )
  }
}
export default MeuBotaoDeCompras;

omponente com Estado

Eventos em React
### onClick
### onChange

Componetes com estado e eventos
constuctors , this e funções de evento no
lugar certo
bind

### Formulario em React
form
input
textarea
select
validação
passar um estado de um componente filho para um componente pai

const eddevent(event) => {
  event.target.value
}

uma unica função para atualizar o state

handle ({target}) // fiz a discontrução para pegar os campos
const { name, value } = target    // refere-se as compos do furmulario para fazer a atualição do estado

this.setSatate
[name ] : value   / name e a chave so estado e value é o valor de cada estado a ser atualizado

para o campo de checkbox , preecisa se atentar que o value nao sera igual pois esse valor fica guardado no cheked
essa é a diferença podendo usar um ternario casa seja checkbox
exemplo
### cosnt value = target.type === 'checkbox' ? target.checked : target.value

passar uma pros para o formulario pai
estado fica no pai
componente tem que excherga o estado do pai para atualizar
no componente que esta no pai passaremos via props       value={this.state.estado}
teremos que passar a function por callbeck   hendleChang={this.handleChange}
no componente filho  recebemos esse value , podemos descontruir assim:
const { value, handleChange } = this.props


