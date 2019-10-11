var home = document.querySelector('#home')
class home {
    constructor(x, y) { // 定义构造方法
        this.x = x; // this指向实例对象
        this.y = y;
    }
    toString() { // 定义一个方法，注意这里没有function关键字
        return '(' + this.x + ', ' + this.y + ')'; // this指向实例对象
    }

}