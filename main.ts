input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(humedad)
})
let humedad = 0
humedad = radio.receivedPacket(RadioPacketProperty.SignalStrength)
