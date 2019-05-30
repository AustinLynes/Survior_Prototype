var ctx, _input, loop;

ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.height = 600;
ctx.canvas.width = 1280;

var width = 1280;
var height = 600;

_input = {

    left: false,
    right: false,
    jump: false,
    keyListener: function (event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 65:// a key
                _input.left = key_state;
                break;
            case 32:// space key
                _input.up = key_state;
                break;
            case 68:// d key
                _input.right = key_state;
                break;

        }

    }

};

const _player = new GameObject({
    height: 32,
    jump: true,
    width: 32,
    x: 1184,
    x_velocity: 0,
    y: 0,
    y_velocity: 0
});

loop = function () {

    if (_input.up && _player._jumping == false) {

        _player._y_velocity -= 40;
        if (_input.left) {
            _player._x_velocity -= 10;
        } else if (_input.right) {
            _player._x_velocity += 10;
        }
        else {
            _player._x_velocity = _player._x_velocity;
        }
        _player._jumping = true;

    }

    if (_input.left) {

        _player._x_velocity -= 0.5;

    }

    if (_input.right) {

        _player._x_velocity += 0.5;

    }

    _player._y_velocity += 1.5;// gravity
    _player._x += _player._x_velocity;
    _player._y += _player._y_velocity;
    _player._x_velocity *= 0.9;// friction
    _player._y_velocity *= 0.9;// friction

    // if rectangle is falling below floor line
    if (_player._y > height - 16 - 32) {

        _player._jumping = false;
        _player._y = height - 16 - 32;
        _player._y_velocity = 0;

    }

    // if rectangle is going off the left of the screen
    if (_player._x < -32) {

        _player._x = width;

    } else if (_player._x > width) {// if rectangle goes past right boundary

        _player._x = -32;

    }

    ctx.fillStyle = "#202020";
    ctx.fillRect(0, 0, width, height);// x, y, width, height
    ctx.fillStyle = "#ff0000";// hex for red
    ctx.beginPath();
    ctx.rect(_player._x, _player._y, _player._width, _player._height);
    ctx.fill();
    const line_ground = new _Debugger(ctx, 0, 164, width, 164, '#202830', 4);
    line_ground.DrawLine(ctx);

    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", _input.keyListener)
window.addEventListener("keyup", _input.keyListener);
window.requestAnimationFrame(loop);


