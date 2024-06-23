input.onButtonPressed(Button.A, function () {
    if (robot >= 1) {
        robot += -1
        basic.showNumber(robot)
    } else {
        robot = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    robot = 0
    basic.showNumber(robot)
    radio.sendNumber(robot)
})
input.onButtonPressed(Button.B, function () {
    if (robot <= 4) {
        robot += 1
        basic.showNumber(robot)
    } else {
        robot = 0
    }
})
let robot = 0
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
robot = 0
basic.forever(function () {
    if (robot == 0) {
        if (input.rotation(Rotation.Roll) < -20) {
            radio.sendNumber(14)
            basic.pause(2000)
        }
        if (input.rotation(Rotation.Roll) > 20) {
            radio.sendNumber(13)
            basic.pause(2000)
        }
    }
    if (robot == 1) {
        if (input.rotation(Rotation.Roll) < -20) {
            radio.sendNumber(14)
            basic.pause(2000)
        }
        if (input.rotation(Rotation.Roll) > 20) {
            radio.sendNumber(13)
            basic.pause(2000)
        }
    }
    if (robot == 2) {
        if (input.rotation(Rotation.Roll) < -20) {
            radio.sendNumber(15)
            basic.pause(2000)
        }
        if (input.rotation(Rotation.Roll) > 20) {
            radio.sendNumber(16)
            basic.pause(2000)
        }
    }
    if (robot == 3) {
        if (input.rotation(Rotation.Roll) < -20) {
            radio.sendNumber(8)
            basic.pause(2000)
        }
        if (input.rotation(Rotation.Roll) > 20) {
            radio.sendNumber(12)
            basic.pause(2000)
        }
    }
    if (robot == 4) {
        if (input.rotation(Rotation.Roll) < -20) {
            radio.sendNumber(2)
            basic.pause(2000)
        }
        if (input.rotation(Rotation.Roll) > 20) {
            radio.sendNumber(1)
            basic.pause(2000)
        }
    }
})
