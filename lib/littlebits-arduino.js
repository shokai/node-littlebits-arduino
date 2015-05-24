(function() {
  var ArduinoFirmata, LittleBitsArduino,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ArduinoFirmata = require('arduino-firmata');

  module.exports = LittleBitsArduino = (function(superClass) {
    extend(LittleBitsArduino, superClass);

    function LittleBitsArduino() {
      LittleBitsArduino.__super__.constructor.call(this);
      this.on('connect', function() {
        return this.pinMode(0, ArduinoFirmata.INPUT);
      });
      this.__defineGetter__('d0', function() {
        return this.digitalRead(0);
      });
      this.__defineGetter__('a0', function() {
        return this.analogRead(0);
      });
      this.__defineGetter__('a1', function() {
        return this.analogRead(1);
      });
      this.__defineSetter__('d1', function(value) {
        return this.digitalWrite(1, value);
      });
      this.__defineSetter__('d5', function(value) {
        if (typeof value === 'number') {
          return this.analogWrite(5, value);
        } else {
          return this.digitalWrite(5, value);
        }
      });
      this.__defineSetter__('d9', function(value) {
        if (typeof value === 'number') {
          return this.analogWrite(9, value);
        } else {
          return this.digitalWrite(9, value);
        }
      });
    }

    return LittleBitsArduino;

  })(ArduinoFirmata);

}).call(this);
