# Info Quest

## general notes

this is a platformer that uses a platformer made using [phaser](https://phaser.io/) and it uses webRTC remote control the character on the screen, for which a turn server is needed, the trinn-remote-control package has it hardcoded to use [this turn server](https://www.metered.ca/), they have a free plan where you can use 500 mb per month which is plenty for this project. If you want to use another one you would need to clone it's [repository](https://github.com/MGelein/trinn-remote-control)

## flow

The projects starts from [main.ts](./src/main.ts), Which 'role' you are gets determent here (controller or screen) based on the url param route, it is done so because this is deployed to github pages as static files, so if you would actually want to route to /controller you would need to have a ngix configuration which to my knowladge isn't possible in github pages or you would need to build the project that a html file called controller is there, which is possible but more work that I think it is worth.

## the screen

In [screen.ts](./src/views/screen.ts) the game gets setup, it gets some settings from [const.ts](./src/core/const.ts), gets the screen html element and creates a canvas inside it, this is mostly done by Phaser.
The screen does have a local option (where you only need a keyboard) which can be enables by setting the url param "local" to anything (it needs to resolve to True)

## DATA

The data for the collectables and in game texts can be found in the [data.ts](./src/core/data.ts) file
