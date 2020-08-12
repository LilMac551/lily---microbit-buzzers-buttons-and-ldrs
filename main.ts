input.onButtonPressed(Button.A, function () {
    AlarmOn = false
    AlarmOff = true
})
input.onButtonPressed(Button.B, function () {
    if (AlarmOff) {
        Lightlevel = input.lightLevel()
        AlarmOn = true
        Alarm()
    }
})
function Alarm () {
    while (AlarmOn) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
}
let AlarmOff = false
let AlarmOn = false
let Lightlevel = 0
Lightlevel = input.lightLevel()
if (input.lightLevel() > 20) {
    Lightlevel = 0
    AlarmOn = true
    Alarm()
}
basic.forever(function () {
	
})
