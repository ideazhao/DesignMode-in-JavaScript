//这里只是核心代码，更多细节还请查看vue源码

// 找到需要监听的数据
function observer(target){
    if(target && typeof target === 'object'){
        Object.keys(target).forEach(key => {
            addReactive(target,key,target[key])
        })
    }
}

//为数据添加getter、setter
function addReactive(target,key,val){
    //监听仍可能是对象的值
    observer(val)

    const dep = new Dep
    
    //因vue而走红的defineProperty
    Object.defineProperty(target,key,{
        enumerable:true,
        configurable:false,
        get(){
            console.log(val)
        },
        set(){
            dep.notify()
            console.log(`key的值从${val}变成了${value}`)
        }
    })
}
//订阅者，兼顾添加订阅和发布
class Dep{
    constructor(){
        //订阅者列表
        this.subscribe = []
    }
    addSub(sub){
        this.subscribe.push(sub)
    }
    notify(){
        this.subscribe.forEach(sub => {
            sub.update()
        })
    }
}