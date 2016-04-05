class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hexCode: randomColor({luminosity: 'light'}),
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    document.body.style.backgroundColor = this.state.hexCode;
    
    // add setCursorPositon to jQuery
    $.fn.setCursorPosition = function (pos) {
        this.each(function (index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };

    // add selectRange to jQuery
    $.fn.selectRange = function(start, end) {
    return this.each(function() {
        if (this.setSelectionRange) {
            this.focus();
            this.setSelectionRange(start, end);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
    });
};

    // Manages labels based on input value
    $('.background-form .input-group input').focusout(function() {
      var text_val = $(this).val();
      if (text_val === '') {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });

    // Add a '#'' for the user upon focus if empty
    $('.background-form .input-group input[type="text"].hex').focusin(function(event) {
      var prefix = '#';

      if (!($(this).hasClass('has-value'))) {
        $(this).val(prefix+event.target.value);
      }
    });

    $('.hex').click(function() {
      $(this).selectRange(1, $(this).val().length);
    })

    // Add 'px' for the user upon focus if empty
    $('.background-form .input-group input[type="text"].dimension').on('focusin click', function(event) {
      var suffix = 'px';

      if (!($(this).hasClass('has-value'))) {
        $(this).val(suffix);
        $(this).setCursorPosition(0);
      } else {
        $(this).selectRange(0, $(this).val().length-2);
      }
    });
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
