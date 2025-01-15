import React, { useState } from "react";
import AccountButton from "../buttons/AccountButton";
import { useNavigate } from "react-router";

export function RegisterForm() {
  /* eslint-disable no-unused-vars */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [policy, setPolicy] = useState(false);

  const navigate = useNavigate();
  const handlePolicyChange = () => {
    setPolicy(!policy);
  };

  const validatePassword = async (e) => {
    const minLength = 8;
    if (password.length < minLength) {
      return `Пароль должен содержать не менее ${minLength} символов.`;
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError("");

    try {
      const response = await fetch(`${process.env.REACT_APP_AUTH}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Ошибка регистрации");
        return;
      }

      setSuccess("Вы успешно зарегистрированы.");
      setUsername("");
      setPassword("");
    } catch (error) {
      setError("Произошла ошибка при регистрации.");
    }
  };

  return (
    <form className="flex flex-col self-stretch my-auto w-full text-2xl text-white max-md:mt-10 max-md:max-w-full">
      <h1 className="self-center font-bold leading-none text-center">
        Регистрация
      </h1>

      <div className="mt-10">
        <label htmlFor="login" className="sr-only">
          Логин
        </label>
        <input
          id="login"
          type="text"
          className="w-full overflow-hidden self-stretch px-4 py-5 text-xl leading-tight text-gray-500 whitespace-nowrap bg-gray-100 rounded-3xl min-h-[60px]"
          placeholder="Логин"
        />
      </div>

      <div className="mt-10">
        <label htmlFor="login" className="sr-only">
          Логин
        </label>
        <input
          id="login"
          type="text"
          className="w-full overflow-hidden self-stretch px-4 py-5 text-xl leading-tight text-gray-500 whitespace-nowrap bg-gray-100 rounded-3xl min-h-[60px]"
          placeholder="Почта"
        />
      </div>

      <div className="mt-11 max-md:mt-10">
        <label htmlFor="password" className="sr-only">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          className="w-full overflow-hidden self-stretch px-4 py-5 text-xl leading-tight text-gray-500 whitespace-nowrap bg-gray-100 rounded-3xl min-h-[60px]"
          placeholder="Пароль"
        />
      </div>
      <label className="mt-10 text-base bottom-[0.08em]">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="accent-[#A04CFF] h-5 w-5 rounded-2xl mr-5 "
            onChange={handlePolicyChange}
          />
          Я согласен на обработку персональных данных
        </span>
      </label>
      <AccountButton text={"Зарегистрироваться"} />
      <div className="flex gap-2 self-start mt-7 text-base">
        <div className="grow">У вас уже есть учётная запись?</div>
        <button
          type="button"
          className="basis-auto underline"
          onClick={() => navigate("/login")}
        >
          Войти
        </button>
        {error}
      </div>
    </form>
  );
}
