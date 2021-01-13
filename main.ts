let colorbit2 = colorbit.initColorBit(DigitalPin.P0, BitColorMode.RGB)
basic.forever(function () {
    colorbit2.plotNeoBarGraph(
    input.soundLevel(),
    100
    )
})
