
//发布者
class Publisher{
    constructor(){
        this.observerList = []
        console.log("一个发布者被创建")
    }

    //添加订阅者
    addObserver(observer){
        this.observerList.push(observer)
    }

    //移除订阅者
    removeObserver(observer){
        const observerIndex = this.observerList.findIndex(item=>item == observer);
        this.observerList.splice(observerIndex,1);
    }

    //群发消息
    notify(){
        this.observerList.forEach(observer => {
            observer.update(this)
        })
    }
}

//订阅者

class Observer{
    constructor(){
        console.log("一个订阅者被创建")
    }

    update(){
        console.log("更新消息")
    }
}

// 创建实例
const publisher = new Publisher();  //一个发布者被创建
const observer1 = new Observer();  //一个订阅者被创建
const observer2 = new Observer();  //第二个订阅者被创建
publisher.addObserver(observer1) //[ Observer {} ]
publisher.addObserver(observer2) //[ Observer {},Observer {} ]
publisher.notify()  //更新消息  更新消息
publisher.removeObserver(observer2)  //[ Observer {} ]
