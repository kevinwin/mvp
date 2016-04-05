class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hexCode: Math.floor(Math.random()*16777215).toString(16),
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#'+this.state.hexCode;
  }

  handleHexChange(hexCode) {
    this.setState({
      hexCode: hexCode,
    });
  }

  handleWidthChange(width) {
    this.setState({
      width: width
    });
    console.log(this.state.width);
  }

  handleHeightChange(height) {
    this.setState({
      height: height
    });
  }

  render() {
    return (
      <div>
        <Input onHexInput={ this.handleHexChange.bind(this) } onWidthInput={ this.handleWidthChange.bind(this)} onHeightInput={ this.handleHeightChange.bind(this) } pngVal={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<App style={{backgroundColor: '#abc'}}/>, document.getElementById('app'));
