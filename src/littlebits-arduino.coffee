ArduinoFirmata  = require 'arduino-firmata'

module.exports = class LittleBitsArduino extends ArduinoFirmata

  constructor: ->
    super()

    @on 'connect', ->
      @pinMode 0, ArduinoFirmata.INPUT

    ## input pins
    @__defineGetter__ 'd0', -> @digitalRead 0
    @__defineGetter__ 'a0', -> @analogRead 0
    @__defineGetter__ 'a1', -> @analogRead 1

    ## output pins
    @__defineSetter__ 'd1', (value) ->
      @digitalWrite 1, value

    @__defineSetter__ 'd5', (value) ->
      if typeof value is 'number'
        @analogWrite 5, value
      else
        @digitalWrite 5, value

    @__defineSetter__ 'd9', (value) ->
      if typeof value is 'number'
        @analogWrite 9, value
      else
        @digitalWrite 9, value
