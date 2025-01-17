// components/Login.js
import React from 'react';
import '../styles/globals.css'; 


const Login = () => {
  return (
    <div className="w-[454px] h-[449px] bg-[#F1F1F1] p-8 rounded-[10px] flex flex-col items-center">
      <input
        type="text"
        placeholder="Phone number"
        className="border-2 text-[12px] border-gray-400 h-[35px] w-[373px] mb-4 px-4 rounded-[10px] place-holder-black"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 text-[12px] border-gray-400 h-[35px] w-[373px] mb-1 px-4 rounded-[10px] text-black"
      />
      <a href="#" className="text-black text-[11px] mb-4 font-regular font-inter self-start ml-8">Forget your password?</a>
      <button className="bg-[#21B6A8] text-white w-[218px] h-[36px] mb-4 rounded-[10px] text-[12px] font-regular font-inter">
        Login
      </button>
      <a href="#" className="mb-4 text-[12px] font-semibold text-black font-inter">Sign Up</a>
      <div className="mb-4 text-[12px] font-regular font-inter">Login with social accounts</div>
      <div className="flex space-x-4">
        <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center">
          <svg className="w-[36px] h-[36px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
              <g transform="scale(5.33333,5.33333)">
                <path d="M24,5c-10.49341,0 -19,8.50659 -19,19c0,10.49341 8.50659,19 19,19c10.49341,0 19,-8.50659 19,-19c0,-10.49341 -8.50659,-19 -19,-19z" fill="#00acff"></path>
                <path d="M26.572,29.036h4.917l0.772,-4.995h-5.69v-2.73c0,-2.075 0.678,-3.915 2.619,-3.915h3.119v-4.359c-0.548,-0.074 -1.707,-0.236 -3.897,-0.236c-4.573,0 -7.254,2.415 -7.254,7.917v3.323h-4.701v4.995h4.701v13.729c0.931,0.14 1.874,0.235 2.842,0.235c0.875,0 1.729,-0.08 2.572,-0.194z" fill="#ffffff"></path>
              </g>
            </g>
          </svg>
        </button>
        <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center">
          <svg className="w-[36px] h-[36px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
            <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
        </button>
        <button className="w-[36px] h-[36px] rounded-full flex items-center justify-center">
          <svg className="w-[36px] h-[36px] text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;





