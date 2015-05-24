'use strict'

var path = require('path');

// var LittleBitsArduino = require('littlebits-arduino');
var LittleBitsArduino = require(path.resolve())

var arduino = new LittleBitsArduino();
arduino.connect();

arduino.on('connect', function(){
  setInterval(function(){
    var d0 = arduino.d0; // true or false
    var a0 = arduino.a0; // 0~1023 analog input
    var a1 = arduino.a1; // 0~1023 analog input

    console.log([d0, a0, a1]);

    arduino.d1 = d0;   // digital out
    arduino.d5 = a0/4; // 0~255 analog out
    arduino.d9 = a1/4; // 0~255 analog out
  }, 100);
});
