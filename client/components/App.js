class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hexCode: '#000',
      width: 0,
      height: 0
    };
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
