let mode = 0  // 0 = out, 1 = in

input.onButtonPressed(Button.A, function () {
    mode = 0
    basic.showString("OUT")
})

input.onButtonPressed(Button.B, function () {
    mode = 1
    basic.showString("IN")
})

function openBlinds() {
    pins.servoWritePin(AnalogPin.P0, 0)   // open
}

function closeBlinds() {
    pins.servoWritePin(AnalogPin.P0, 180) // close
}

basic.forever(function () {
    let light = input.lightLevel()  // 0–255

    if (mode == 0) {
        // out logic
        if (light > 150) {
            closeBlinds()
        } else if (light < 50) {
            openBlinds()
        }
    } else {
        // in logic
        if (light < 50) {
            openBlinds()
        } else if (light > 150) {
            closeBlinds()
        }
    }

    basic.pause(1000)
})
