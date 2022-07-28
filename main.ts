radio.onReceivedNumber(function (receivedNumber) {
    XY = Math.round(receivedNumber / 100)
    if (XY == 1) {
        pins.analogWritePin(AnalogPin.P13, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
        basic.pause(200)
        pins.analogWritePin(AnalogPin.P13, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else {
        if (XY == 2) {
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, 1023)
            basic.pause(200)
            pins.analogWritePin(AnalogPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, 0)
        } else {
            if (XY == 10) {
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, 1023)
                basic.pause(100)
                pins.analogWritePin(AnalogPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, 0)
            } else {
                if (XY == 20) {
                    pins.analogWritePin(AnalogPin.P15, 1023)
                    pins.analogWritePin(AnalogPin.P16, 0)
                    basic.pause(100)
                    pins.analogWritePin(AnalogPin.P15, 0)
                    pins.analogWritePin(AnalogPin.P16, 0)
                } else {
                	
                }
            }
        }
    }
})
let XY = 0
radio.setGroup(1)
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . # . #
    . # . # .
    `)
basic.forever(function () {
	
})
