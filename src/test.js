// функциональный компонент
function Welcome(props) {
  return <h1>Привет, {props.name}</h1>;
}
// классовый компонент
class Welcome extends React.Component {
  render() {
    return <h1>Привет, {this.props.name}</h1>;
  }
}