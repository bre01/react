function myHigh(){
    myLow({hello:"what",what:"this"});
    myLow("what");
    myDes({fieldOne:"one","fieldTwo":"two"});
}
function myLow(props){
    console.log(props.hello);
}
function myDes({fieldOne,fieldTwo}){
    console.log(fieldOne,fieldTwo);
}
myHigh();