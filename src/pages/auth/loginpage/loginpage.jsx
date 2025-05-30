// Life cycle of component : 3 Stages

// Stage1:
// a. Mounting Phase :
// constructor()=> render() => componentDidMount => (State update:)=> render()
// b. Updating Phase:
//
// c. Unmounting Phase:

// import './../../../assets/css/main.css'
import React, { useState } from "react";
import "flowbite";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {
  InputLabel,
  TextInputField,
} from "../../../components/form/input.component";

// import { DarkThemeToggle } from 'flowbite-react';

// classNameName LoginPage extends React.Component{

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
const LoginPage = () => {
  // // data store state
  // // state create by using hook
  // // effect hook

  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  // const [credentials, setCredentials] = useState();

  // const inputChangeEvent = (e) => {
  //   const { value, name } = e.target;
  //   console.log(e.target);

  //   console.log({ value, name });

  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });

  //   // console.log(name);
  // };
  // console.log(credentials);
  const submitEvent = (data) => {
    //api call submit
    // e.preventDefault()
    console.log(data);
  };

  return (
    <>
      {/* <section classNameName="bg-gray-50 py-8 antialiased dark:bg-primary-900 md:py-16">
        <div classNameName="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div classNameName="mb-4 items-center justify-between gap-4 md:mb-8">
            <h2 classNameName="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Sign In
            </h2>
            <hr classNameName="w-full bg-gray-50 dark:bg-gray-100"></hr>
          </div>

          <div classNameName="mb-4 text-gray-800 dark:text-gray-100 ">
            <form action="">
              <div classNameName="flex mb-5">
                <label htmlhtmlFor="username" classNameName="w-1/3">
                  Username:{" "}
                </label>
                <input
                  classNameName="text-gray-800 w-2/3 rounded-2xl"
                  type="email"
                  name="email"
                  id="username"
                  placeholder="Enter your email...."
                  required={true}
                />
              </div>
              <div classNameName="flex">
                <label htmlhtmlFor="password" classNameName="w-1/3">
                  Password:{" "}
                </label>
                <input
                  classNameName="text-gray-800 w-2/3 rounded-2xl"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password...."
                  required={true}
                />
              </div>
            </form>
          </div>
        </div>
      </section> */}

      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSubmit(submitEvent)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <InputLabel field={"email"} labelTxt={"Your email"} />
                  <TextInputField
                    control={control}
                    name={"email"}
                    type="email"
                    errMsg={errors?.email ? "Email is required" : ""}
                    placeholder="name@company.com"
                  />
                  {/* <Controller
                    name="email"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => (
                      <input
                        type="email"
                        {...field}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        // required={true}
                      />
                    )}
                  ></Controller> */}

                  {/* <input
                    type="email"
                    id="email"
                    // name="email"
                    // onChange={inputChangeEvent}

                    {...register("email", { required: true })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    // required={true}
                  /> */}
                </div>
                <div>
                  <InputLabel field={"password"} labelTxt={"Password"} />

                  <TextInputField
                    name="password"
                    type="password"
                    control={control}
                    errMsg={errors?.password ? "Password is required" : ""}
                    placeholder="••••••••"
                  />
                  {/* <input
                    type="password"
                    id="password"
                    // name="password"
                    // onChange={inputChangeEvent}

                    {...register("password", { required: true })}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  /> */}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
