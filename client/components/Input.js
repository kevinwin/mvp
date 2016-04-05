var Input = (props) => {
  var handleColorChange = (event) => {
    props.onHexInput(event.target.value)
    document.body.style.backgroundColor = '#'+event.target.value;
  };

  var handleWidthChange = (event) => {
    props.onWidthInput(event.target.value);
  };

  var handleHeightChange = (event) => {
    props.onHeightInput(event.target.value);
  };

  var handleCreate = (event) => {
    event.preventDefault();
    var width = props.pngVal.width, height = props.pngVal.height;
    var color = props.pngVal.hexCode[0] === '#' ? props.pngVal.hexCode : '#' + props.pngVal.hexCode;
    var canvas = document.getElementById("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    var canvas = document.getElementById("canvas");
    var img = canvas.toDataURL("image/png");
    window.open(img, "_blank");
    $('input[type="text"]').val(''); // clears the input fields
  };

  return (
    <form className="background-form" onSubmit={handleCreate}>
        <div className="input-group"><input type="text" id="color" className="hex" onChange={handleColorChange} /><label>Hex Code</label></div>
        <div className="input-group"><input type="text" onChange={handleWidthChange} /><label>Width</label></div>
        <div className="input-group"><input type="text" onChange={handleHeightChange} /><label>Height</label></div>
        <input type="submit" value="Create Background"/>
        <canvas id="canvas" style={{'display':'none'}}></canvas>
    </form>
  );
};

window.Input = Input;

    
