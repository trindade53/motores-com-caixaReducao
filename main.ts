input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    robotbit.MotorStopAll()
})
input.onButtonPressed(Button.A, function () {
    robotbit.MotorRunDelay(robotbit.Motors.M1A, 150, 1)
})
input.onGesture(Gesture.Shake, function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M2A,
    255
    )
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRunDelay(robotbit.Motors.M2A, 150, 1)
})
robotbit.MotorRun(robotbit.Motors.M1A, 0)
robotbit.MotorRun(robotbit.Motors.M2A, 0)
