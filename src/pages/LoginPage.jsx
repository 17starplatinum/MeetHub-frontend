import * as React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { LoginForm } from "../components/auth/LoginForm";

export function LoginPage() {
  return (
    <div className="flex overflow-clip flex-col bg-white">
      <div className="flex relative flex-col w-full min-h-[1024px] max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa48a06fd7a21c7e91fb6f01e0fc3aff7b5473134099d3de3c83c34b24f88a8b?placeholderIfAbsent=true&apiKey=889eb349157947aaa492252e943a294a"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex sticky top-0 flex-col text-4xl bg-white max-md:max-w-full z-10">
          <Header />
        </div>
        <div className="relative self-center mt-32 w-full max-w-[1143px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/980a98736b1151b84997d94846f01ebf0a8744b15230e9714fe3b1311723dcce?placeholderIfAbsent=true&apiKey=889eb349157947aaa492252e943a294a"
                alt="Login illustration"
                className="object-contain grow w-full aspect-[0.85] rounded-[35px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <LoginForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
