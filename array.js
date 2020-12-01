class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index];
        this.shift(index);
        delete this.data[this.length-1];
        this.length--;
        return item;
    }
    shift(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
    }
    show(){
        let op=this.data[0];
        for(let i=1;i<this.length;i++){
            op=op+" "+this.data[i];
        }
        console.log(op);
        return null;
    }
}
//optional to give our own inputs to get output
/*
const arr = new Array();
arr.push('hi');
arr.push('santhosh');
arr.push('sandy');
arr.push('name');
arr.show();
console.log(arr);*/