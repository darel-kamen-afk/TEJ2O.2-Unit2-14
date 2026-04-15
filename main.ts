/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Grace
 * Created on: April 2026
 * This program moving pixel!!!
*/

//variables 
let sprite: game.LedSprite = null
let loopCounter = 0

basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    loopCounter = 4
    sprite = game.createSprite(4, 4)

    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})