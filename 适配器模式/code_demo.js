//定义两个游戏类型

class Game1 {
  run(){
    console.log("Game1开始");
  }
}

class Game2 {
  run(){
    console.log("Game2开始");
  }
}

function playGame(game){
  if(game.run instanceof Function){
    game.run()
  }
}

let Game1_1 = new Game1();
let Game2_1 = new Game2();

playGame(Game2_1)

//以上代码能够正常运行的前提是两个游戏都具有“run”方法。
//但是，如果再有一个游戏Game3，它的方法不叫“run”，叫“play”

class Game3 {
  play(){
    console.log("Game3开始");
  }
}

//提供一个用于play方法的适配器
class playType{
  run(){
    let Game3_1 = new Game3();
    return Game3_1.play();
  }
}

let Game3_1 = new playType();

playGame(Game3_1)