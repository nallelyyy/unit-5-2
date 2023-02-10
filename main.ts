controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    new_question = game.askForString("true or false? : the word is flat. ")
    while (new_question == "false") {
        mySprite.sayText("you are correct.")
        mySprite.sayText("Press \"A\"")
    }
    if (new_question == "true") {
        mySprite.sayText("the world is not flat, you are wrong.")
        mySprite.sayText("Press \"A\"")
    }
    game.splash("now use arrow controller and go up.")
})
let new_question = ""
let mySprite: Sprite = null
game.splash("press \"menu\" at the end when screen is just blizzards.")
