import { useNavigate } from "react-router-dom";
import AccountButton from "../buttons/AccountButton";
import "./form.css";

export function LoginForm() {
  let navigate = useNavigate();

  return (
    <form className="flex flex-col self-stretch my-auto w-full text-2xl text-white max-md:mt-10 max-md:max-w-full">
      <h1 className="main self-center font-bold leading-none text-center">
        Вход
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

      <AccountButton text={"Войти"} />

      <div className="flex gap-2 self-start mt-7 text-base">
        <div className="auxiliary grow">Ещё не зарегистрированы?</div>
        <button
          type="button"
          className="basis-auto underline auxiliary"
          onClick={() => navigate("/register")}
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}
