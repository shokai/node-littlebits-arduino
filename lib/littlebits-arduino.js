(function() {
  var ArduinoFirmata, LittleBitsArduino;

  ArduinoFirmata = require('arduino-firmata');

  module.exports = LittleBitsArduino = (function() {
    LittleBitsArduino.prototype.connect = function(port) {
      this.port = port != null ? port : null;
      return this.arduino.connect(this.port);
    };

    function LittleBitsArduino() {
      this.arduino = new ArduinoFirmata();
      this.on = this.arduino.on;
      this.reset = this.arduino.reset;
      this.close = this.arduino.close;
      this.on('connect', (function(_this) {
        return function() {
          return _this.arduino.pinMode(0, ArduinoFirmata.INPUT);
        };
      })(this));
      this.__defineGetter__('d0', (function(_this) {
        return function() {
          return _this.arduino.digitaRead(0);
        };
      })(this));
      this.__defineGetter__('a0', (function(_this) {
        return function() {
          return _this.arduino.analogRead(0);
        };
      })(this));
      this.__defineGetter__('a1', (function(_this) {
        return function() {
          return _this.arduino.analogRead(1);
        };
      })(this));
      this.__defineSetter__('d1', (function(_this) {
        return function(value) {
          return _this.arduino.digitalWrite(1, value);
        };
      })(this));
      this.__defineSetter__('d5', (function(_this) {
        return function(value) {
          return _this.arduino.digitalWrite(5, value);
        };
      })(this));
      this.__defineSetter__('d9', (function(_this) {
        return function(value) {
          return _this.arduino.digitalWrite(9, value);
        };
      })(this));
    }

    return LittleBitsArduino;

  })();

}).call(this);
