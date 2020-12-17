		function makeClosures(arr, fn) {
		    var result = new Array();
		    for(let i=0;i<arr.length;i++)
			{
				result.push(()=>{fn(arr[i])});
			}
		    return result;
		}
		let array = [1, 2, 3]
		let foo = (x) => {
		    console.log(x)
		}
		let fun = makeClosures(array, foo);
		fun[1]() //2
		
		/* lv2 */
		Function.prototype.call2=function(another,...params)
		{
			another.fn=this;
			eval("another.fn("+params.join(",")+")");
			delete another.fn;
		}
		function sayInfo(age) {
		  console.log("name:"+this.name)
		  console.log("age:"+age)
		}
		var user = {
		  name: "zzx"
		}
		sayInfo.call2(user,100);