littlebits-arduino
==================
control LittleBits [Arduino module](http://littlebits.cc/kits/arduino-coding-kit) with Firmata protocol. Extended [arduino-firmata](https://www.npmjs.com/package/arduino-firmata).

- https://github.com/shokai/node-littlebits-arduino
- https://npmjs.org/package/littlebits-arduino


Install
-------

    % npm install littlebits-arduino


Requirements
------------

* LittleBits Arduino module
* Install Standard Firmata
  * Arduino IDE -> [File] -> [Examples] -> [Firmata] -> [StandardFirmata]
  * set board-type `Arduino Leonardo`


Usage
-----

![littlebits](http://gyazo.com/a1b2c1c6fda692469fe72cb9dd77517e.png)

### Setup

Connect, Read and Write

```javascript
var LittleBitsArduino = require('littlebits-arduino');

var arduino = new LittleBitsArduino();
arduino.connect(); // use default Arduino
// arduino.connect('/dev/tty.usb-device-name');

arduino.on('connect', function(){
  setInterval(function(){
    var d0 = arduino.d0; // true or false
    var a0 = arduino.a0; // 0~1023 analog input
    var a1 = arduino.a1; // 0~1023 analog input

    console.log([d0, a0, a1]);

    arduino.d1 = d0;   // digital output
    arduino.d5 = a0/4; // 0~255 analog output
    arduino.d9 = a1/4; // 0~255 analog output
  }, 100);
});
```


Reset

```javascript
arduino.reset(callback);
```

Close

```javascript
arduino.close(callback);
```

Also `digitalRead`, `analogRead`, `sysex` and `on "analogChange"`, `on "digitalChange"` are available.


Test
----

    % npm install
    % npm test
