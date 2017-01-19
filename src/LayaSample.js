var LayaSample = (function(){
    (function(){
        // 初始化引擎
        Laya.init(800,600);
        // 设置satge背景色
        Laya.stage.bgColor = "#ffcccc";
        // 加载资源
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this, onLoaded),null,Laya.Loader.ATLAS);
    })();

    function onLoaded() {
        var game = new Game();
        Laya.stage.addChild(game);
    }
})();