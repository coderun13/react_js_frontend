import {useState} from "react";

export default function Counter() {

    let[count,setCount] = useState(0);// let [stateVariable,setStateVariable]= useState(10);
    
   let incCount = () => {
    setCount((currCount)=> {
        return currCount + 1; //increase by 3
    });
    setCount((currCount)=> {
        return currCount + 1;
    });
    setCount((currCount)=> {
        return currCount + 1;
    }); 

    //setCount(25); //fixed value

    //setCount(count+1);
    //console.log(count);
   };
  
//export default function Counter(){
    //let count = 0;

    //function incCount(){
      //  count += 1;
    //    console.log(count);
  //  }
    return (
        <div>
            <h3>Count = {count} </h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}