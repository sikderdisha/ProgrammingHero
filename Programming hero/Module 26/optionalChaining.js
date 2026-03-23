let me = {
    name : 'Minar',
    age : 22,

    sister:{
        s_name : 'Anto',
        children : 2
        
    }



};
console.log(me);
console.log(me.age);
console.log(me.sister);
console.log(me.sister?.s_name);//? means if the value is exists
console.log(me.sister.saraly);//undefined
console.log(me.sister?.saraly);