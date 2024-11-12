import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@billu123/common-medium";
import axios from "axios";
import { BACKEND_URL } from "./../../config";
export const Auth = function ({ type }: { type: "signup" | "signin" }) {
  const navigate = useNavigate();
  const [postsInput, setPostsInput] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type}`,
        JSON.stringify(postsInput)
      );

      const jwt = await response.data.token;

      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err: any) {
      alert("Error");
    }
  }
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Create an Account</h1>
      <h2 className="">
        {type === "signup"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link
          to={type === "signup" ? "/signin" : "/signup"}
          className="underline"
        >
          {type === "signup" ? "login" : "sign up"}
        </Link>
      </h2>
      <div className="border border-slate-400 p-5  w-96 rounded-md flex flex-col gap-5 shadow-md">
        <LabeledInput
          label="Email"
          placeholder="email"
          onChange={(e) =>
            setPostsInput((c) => ({ ...c, email: e.target.value }))
          }
          type="text"
        />
        <LabeledInput
          label="Password"
          placeholder="password"
          onChange={(e) =>
            setPostsInput((c) => ({ ...c, password: e.target.value }))
          }
          type="password"
        />
        {type === "signup" ? (
          <LabeledInput
            label="Name"
            placeholder="name"
            type="text"
            onChange={(e) =>
              setPostsInput((c) => ({ ...c, name: e.target.value }))
            }
          />
        ) : (
          ""
        )}
      </div>
      <button
        onClick={sendRequest}
        className="bg-slate-950 text-slate-300 p-2 rounded-md w-40"
      >
        {type === "signup" ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
};
interface labeledInputType {
  label: string;
  placeholder: string;
  onChange: (e: any) => void;
  type?: string;
}
function LabeledInput({
  label,
  placeholder,
  onChange,
  type,
}: labeledInputType) {
  return (
    <div>
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}
