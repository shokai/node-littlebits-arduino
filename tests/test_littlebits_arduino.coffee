'use strict'

process.env.NODE_ENV = 'test'

path   = require 'path'
assert = require 'assert'

LittleBitsArduino = require path.resolve()

describe 'instance of LittleBitsArduino', ->

  arduino = new LittleBitsArduino()

  it 'should have getter "d0"', ->
    assert.equal typeof arduino.__lookupGetter__('d0'), 'function'

  it 'should have getter "a0"', ->
    assert.equal typeof arduino.__lookupGetter__('a0'), 'function'

  it 'should have getter "a1"', ->
    assert.equal typeof arduino.__lookupGetter__('a1'), 'function'

  it 'should have setter "d1"', ->
    assert.equal typeof arduino.__lookupSetter__('d1'), 'function'

  it 'should have setter "d5"', ->
    assert.equal typeof arduino.__lookupSetter__('d5'), 'function'

  it 'should have setter "d9"', ->
    assert.equal typeof arduino.__lookupSetter__('d9'), 'function'
