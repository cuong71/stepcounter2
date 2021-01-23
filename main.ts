let steps = 0
basic.showNumber(0)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        let Schritte = 0
        steps += 1
        basic.showNumber(Schritte)
    }
})
