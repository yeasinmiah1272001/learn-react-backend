import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../component/Provider/AuthProvider";
import Swal from "sweetalert2";


const Registration = () => {
       const { createUser} = useContext(AuthContext)
       const navigate = useNavigate();
       const location = useLocation()
       const from = location.state?.from?.pathname || "/";
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
        const onSubmit = data =>{

              createUser(data.email, data.password)
              .then(result =>{
                     const logInUser = result.user;
                     console.log(logInUser)
                     Swal.fire({
                       position: "top-end",
                       icon: "success",
                       title: "Registration successfull",
                       showConfirmButton: false,
                       timer: 1500,
                     });
                     navigate(from, { replace: true });
              })
              .catch(error => {
                     console.error(error)
              })

              
              
        }


       return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
           <div className="max-w-md w-full space-y-8">
             <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                 Sign up in to your account
               </h2>
             </div>
             <form
               onSubmit={handleSubmit(onSubmit)}
               className="mt-8 space-y-6"
               action="#"
               method="POST"
             >
               <input type="hidden" name="remember" value="true" />
               <div className="rounded-md shadow-sm -space-y-px">
                 <div>
                   <label htmlFor="email-address" className="sr-only">
                     Email address
                   </label>
                   <input
                     {...register("email")}
                     id="email-address"
                     name="email"
                     type="email"
                     autoComplete="email"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Email address"
                   />
                 </div>
                 <div>
                   <label htmlFor="password" className="sr-only">
                     Password
                   </label>
                   <input
                     id="password"
                     {...register("password")}
                     name="password"
                     type="password"
                     autoComplete="current-password"
                     required
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                     placeholder="Password"
                   />
                 </div>
               </div>

               <div className="flex items-center justify-between">
                 <div className="flex items-center">
                   <Link className="text-red-600" to="/login">
                     already have an account pleace login
                   </Link>
                 </div>

                 <div className="text-sm">
                   <a
                     href="#"
                     className="font-medium text-indigo-600 hover:text-indigo-500"
                   >
                     Forgot your password?
                   </a>
                 </div>
               </div>

               <div>
                 <input
                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   type="submit"
                   value="Sign Up"
                 />
                 {/* <button type="submit">Register</button> */}
               </div>
             </form>
           </div>
         </div>
       );
};

export default Registration;