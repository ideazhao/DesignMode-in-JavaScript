class User{
  constructor(name,score){
    this.name = name;
    this.score = score;
  }
  getScore(){
    let score = this.score.getScore();
    this.setLevel(score);
  }
  setLevel(score){
    if( score < 10){
      identity.Common();
    } else if(score > 10 && score <50){
      identity.Vip();
    } else {
      identity.SuperVip();
    }
  }
}

//分数类
class Score{
  constructor(score){
    this.score = score;
  }
  getScore(){
    return this.score;
  }
}

const identity = {
  //普通用户
  Common(){
    console.log("可正常浏览");
  },
  //vip
  Vip(){
    console.log("可以免广告");
  },

  SuperVip(){
    console.log("可以看NBA");
  }
}

let weiwei = new User('威威',new Score(8));
weiwei.getScore()

let lili = new User('丽丽',new Score(20));
lili.getScore()

let wangwu = new User('王五',new Score(60));
wangwu.getScore()