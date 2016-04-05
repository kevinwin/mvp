var Input = (props) => {
  var handleColorChange = (event) => {
    var hex = event.target.value;
    hex = hex[0] === '#' ? hex : '#' + hex;
    props.onHexInput(hex);
    document.body.style.backgroundColor = hex;
  };

  var handleWidthChange = (event) => {
    // strip px if any
    var width = event.target.value;
    width = /px$/.test(width) ? width.replace(/px/, '') : width;
    props.onWidthInput(width);
  };

  var handleHeightChange = (event) => {
    var height = event.target.value;
    height = /px$/.test(height) ? height.replace(/px/, '') : height;
    props.onHeightInput(height);
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
    <div className="form-wrapper">
      <form className="background-form" onSubmit={handleCreate}>
          <div className="input-group"><input type="text" id="color" className="hex" onChange={handleColorChange} /><label>Hex Code</label></div>
          <div className="input-group"><input type="text" className="dimension" onChange={handleWidthChange} /><label>Width</label></div>
          <div className="input-group"><input type="text" className="dimension" onChange={handleHeightChange} /><label>Height</label></div>
          <input type="submit" value="Create Background"/>
          <canvas id="canvas" style={{'display':'none'}}></canvas>
      </form>
    </div>
  );
};

window.Input = Input;

    
