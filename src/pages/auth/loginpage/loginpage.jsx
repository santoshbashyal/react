




// Life cycle of component : 3 Stages

// Stage1: 
// a. Mounting Phase : 
        // constructor()=> render() => componentDidMount => (State update:)=> render()
// b. Updating Phase: 
    // 
// c. Unmounting Phase: 






// import './../../../assets/css/main.css'
import React from "react";
import "flowbite";

// import { DarkThemeToggle } from 'flowbite-react';


// className LoginPage extends React.Component{

//     constructor(){
//         super() //parent ko constructor lai call garchha
//         console.log("im in constructor")
//         // initialization block : state preperation jasto kaam hunchha yaha
//         this.state = {
//             email: "",
//             password: "",
//             PageTitle: "LoginPage this.state"
//         }
//     }

//     componentDidMount=()=>{
//         console.log("Im in componentDidMount")
//         // networkCall, Api call 
//         // stateUpdate
//         this.setState((prev)=>{
//             console.log(prev)
//             return{
//                 ...prev,
//                 PageTitle: "Updated Login Page"
//             }
//         })
//     }

//     componentDidUpdate(){
//         console.log("Im after each renders, ComponentDidUpdate")
//     }

//     componentWillUnmount(){
//         console.log("IM in componentWillUnmount")
//     }

//     render = ()=>{
//         console.log("Im in render")
//         return(
//     //    fragment
//             <>
//             <div>
//                 <h1>{this.state.PageTitle}</h1>
//                 <form >
//                     username: <input type="email" />
//                 </form>
//             </div>
//             </>
//      )
//     }
// }
const LoginPage = ()=>{
    // data store state
    // state create by using hook 
    // effect hook

    return(
      <h1>s</h1>
    ) 
}
export default LoginPage