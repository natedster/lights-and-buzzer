input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.On)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 60)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.soundSiren(Kitronik_Move_Motor.OnOffSelection.Off)
    Kitronik_Move_Motor.beepHorn()
    Kitronik_Move_Motor.stop()
})
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
moveMotorZIP.rotate(1)
moveMotorZIP.show()
basic.pause(100)
basic.forever(function () {
    moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
    moveMotorZIP.setZipLedColor(0, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
    moveMotorZIP.setZipLedColor(1, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Yellow))
    moveMotorZIP.setZipLedColor(2, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green))
    moveMotorZIP.setZipLedColor(3, Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
    moveMotorZIP.show()
})
