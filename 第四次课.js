const person = {
  name: 'Boson',
  age: 20,
  address: {
    city: 'Chongqing',
    area: 'Nanan'
  }
};
// 通过解构赋值的方式获取对象中所有属性
let {name,age,address:{city,area}}=person;
console.log(name+age+city+area+"\n");
function fiBo(n){
	if(n==1||n==2)
	{
		return 1;
	}
	else{
		return fiBo(n-1)+fiBo(n-2);
	}
}
console.log("斐波拉契数列:"+fiBo(9));
function add(){
	let sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	console.log('sum='+sum);
}
add(1,2,3,4,5,6,8);
// 对于浅拷贝
let obj1={
	name:"iron man",
	age:18,
	birth:{
		year:2019,
		month:2,
		day:23
	}
}
let obj2=Object.assign({},obj1);
console.log(obj2);
//深拷贝的初见识
// 1.使用递归的方式来进行遍历进行拷贝
let obj11={
	a:1,
	b:2,
	c:3,
	d:{
		x:"x",
		y:"y"
	},
	e:[1,2,3,4]
}
function clone(item){
	if(typeof item=="object")
	{
		let clone_target=Array.isArray(item)?[]:{};
		for(var i in item)
		{
			clone_target[i]=clone(item[i]);
		}
		return clone_target;
	}
	else{
		return item;
	}
}
let obj22=clone(obj11);
console.log(obj22);
//使用Map来解决循环递归的错误
//多使用一个Map映射来判断
var obj4={
	name:"A",
	age:16,
	sex:"wo"
}
obj4.heself=obj4;
let map=new Map();
function clone_2(item,map)
{
	if(typeof item=="object")
	{
		let new_target=Array.isArray(item)?[]:{};
		if(map.get(item)){
			return map.get(item);
		}
		map.set(item,new_target);
		for(var i in item){
			new_target[i]=clone_2(item[i],map);
		}
		return new_target;
	}
	else{
		return item;
	}
}
var obj6=clone_2(obj4,map);
console.log(obj6);