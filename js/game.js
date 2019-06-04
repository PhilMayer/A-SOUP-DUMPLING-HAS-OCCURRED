document.addEventListener('DOMContentLoaded', () => {
    const stage = new createjs.Stage("demoCanvas")
    stage.enableMouseOver();
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage)
    
    const hat = new createjs.Bitmap("./hat.png")
    hat.on("mousedown", function() {
        startGame();
    })
    hat.on("pressmove", function(evt) {
        evt.target.x = evt.stageX - 125;
        evt.target.y = evt.stageY - 125;
    });

    hat.x = 300;
    hat.y = 300;
    stage.addChild(hat);

    function startGame() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
    
        circle.on("pressmove", function(evt) {
            evt.target.x = evt.stageX;
            evt.target.y = evt.stageY;
        });
    
        stage.addChild(circle);

    }

    // stage.update();

  
})

