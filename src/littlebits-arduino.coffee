ArduinoFirmata = require 'arduino-firmata'

module.exports = class LittleBitsArduino

  connect: (@port = null) ->
    @arduino.connect @port

  constructor: ->
    @arduino = new ArduinoFirmata()
    @on = @arduino.on
    @reset = @arduino.reset
    @close = @arduino.close

    @on 'connect', =>
      @arduino.pinMode 0, ArduinoFirmata.INPUT

    ## input pins
    @__defineGetter__ 'd0', =>
      @arduino.digitaRead 0

    @__defineGetter__ 'a0', =>
      @arduino.analogRead 0

    @__defineGetter__ 'a1', =>
      @arduino.analogRead 1

    ## output pins
    @__defineSetter__ 'd1', (value) =>
      @arduino.digitalWrite 1, value

    @__defineSetter__ 'd5', (value) =>
      @arduino.digitalWrite 5, value

    @__defineSetter__ 'd9', (value) =>
      @arduino.digitalWrite 9, value
