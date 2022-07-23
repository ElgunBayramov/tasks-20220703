//customMap
Array.prototype.customMap=function(callback){
    let num=[];
    for(let i=0;i<this.length;i++)
    {
       num.push(callback(this[i]));
    }
    return num;
};
const a=[2,4,5,10];
const b=a.customMap(element=>element*2);
console.log(b);


//customReduce
Array.prototype.customReduce=function(callback){
    let num=0;
    for(let i=0;i<this.length;i++)
    {
       callback(num=num+this[i]);
    }
    return num;
}

const arr=[1,2,3,4,5];
const sum=arr.customReduce((sum,current)=>sum+current);
console.log(sum);


//customFilter
Array.prototype.customFilter=function(callback){
    let numbers=[];
    for(let i=0;i<this.length;i++)
    {
        if(callback(this[i]) == true)
        {
            numbers.push(this[i]);
        }
    }
    return numbers;
}

const array=[6,99,54,51,13];
const result=array.customFilter(i => i>50);
console.log(result);


//customSome
Array.prototype.customSome=function(callback){
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))
        {
            return true;
        }
    }
    return false;
}

const someArr=[2,4,5,9];

console.log(someArr.customSome(element=>element%2==0));


//customEvery
Array.prototype.customEvery=function(callback){
    for(let i=0;i<this.length;i++){
        if(!callback(this[i]))
        {
            return false;
        }
    }
    return true;
}

const everyArr=[2,4,6,8];

console.log(everyArr.customEvery(element=>element%2==0));


//customForEach
Array.prototype.customForeach = function (callback)
{
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]))
        {
            console.log(this[i]);                
        }
    }
}
const words=['Fullstack developer','Backend developer','Frontend developer'];
words.customForeach((element) => {
    console.log(`${element}`);
  });
