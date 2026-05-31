import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { login } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/icons/logoWindow.png";
import food from "../assets/images/foodDog.png";
import dog from "../assets/images/dog.png";
import wave from "../assets/images/greyWave.png";

interface FormErrors {
  email?: string;
  password?: string;
  auth?: string;
}

export const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registeredUser = useAppSelector((state) => state.auth.registeredUser);

  const [role, setRole] = useState<"client" | "vet">("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!email.trim()) {
      newErrors.email = "Введите email";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!password.trim()) {
      newErrors.password = "Введите пароль";
    } else if (password.trim().length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    if (!registeredUser) {
      setErrors({ auth: "Сначала зарегистрируйтесь" });
      return;
    }

    const isEmailMatch = registeredUser.email === email.trim();
    const isPasswordMatch = registeredUser.password === password;
    const isRoleMatch = registeredUser.role === role;

    if (!isEmailMatch || !isPasswordMatch || !isRoleMatch) {
      setErrors({ auth: "Неверный email, пароль или роль" });
      return;
    }

    dispatch(login({ email: registeredUser.email, role: registeredUser.role }));

    if (registeredUser.role === "client") {
      navigate("/patient");
    } else {
      navigate("/doctor");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F5F5F5]">
      <img src={logo} alt="лого" className="absolute h-[97px] m-3 z-20" />
      <img
        src={food}
        alt="корм"
        className="absolute h-[147px] mt-[18%] ml-[10%] z-0 opacity-40"
      />
      <img
        src={wave}
        alt="волна"
        className="absolute h-[193px] right-[0%] top-[0%] z-0"
      />
      <img
        src={dog}
        alt="собака"
        className="absolute h-[638px] right-[0%] mt-[5%] z-0"
      />

      <div className="relative z-10 flex flex-col items-center gap-5 pt-30">
        <div className="border-[#F8721F] w-[220px] h-[65px] rounded-[50px] border-[2px] flex items-center justify-center">
          <p className="text-[24px] text-[#F8721F] font-sans font-bold">Вход</p>
        </div>

        <h1 className="text-[56px] text-[#02000F] font-sans font-semibold">
          Добро пожаловать
        </h1>

        <div className="flex flex-col items-center justify-center gap-5 min-h-[280px] w-[662px] bg-[#EFF0F4] rounded-[20px] px-10 py-8">
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setRole("client");
                setErrors((prev) => ({ ...prev, auth: undefined }));
              }}
              className={`w-[150px] h-[42px] rounded-[30px] border-[2px] text-[16px] font-medium transition-colors duration-150 ${
                role === "client"
                  ? "bg-[#F8721F] border-[#F8721F] text-white"
                  : "bg-white border-[#02000F] text-[#02000F]"
              }`}
            >
              Клиент
            </button>

            <button
              type="button"
              onClick={() => {
                setRole("vet");
                setErrors((prev) => ({ ...prev, auth: undefined }));
              }}
              className={`w-[150px] h-[42px] rounded-[30px] border-[2px] text-[16px] font-medium transition-colors duration-150 ${
                role === "vet"
                  ? "bg-[#F8721F] border-[#F8721F] text-white"
                  : "bg-white border-[#02000F] text-[#02000F]"
              }`}
            >
              Ветеринар
            </button>
          </div>

          <div className="w-[245px]">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  email: undefined,
                  auth: undefined,
                }));
              }}
              className="w-full h-[42px] border-[2px] border-[#02000F] rounded-[10px] bg-transparent px-4 text-[16px] text-[#02000F] outline-none placeholder:text-[#6C6D71]"
            />
            {errors.email && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.email}
              </p>
            )}
          </div>

          <div className="w-[245px]">
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({
                  ...prev,
                  password: undefined,
                  auth: undefined,
                }));
              }}
              className="w-full h-[42px] border-[2px] border-[#02000F] rounded-[10px] bg-transparent px-4 text-[16px] text-[#02000F] outline-none placeholder:text-[#6C6D71]"
            />
            {errors.password && (
              <p className="mt-2 text-[14px] text-red-500 font-sans">
                {errors.password}
              </p>
            )}
          </div>

          {errors.auth && (
            <p className="text-[14px] text-red-500 font-sans">{errors.auth}</p>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 mt-8">
          <button
            type="button"
            onClick={handleLogin}
            className="w-[320px] h-[56px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-semibold hover:bg-[#f59a62] transition-colors duration-150"
          >
            Войти
          </button>

          <Link
            to="/register"
            className="w-[320px] h-[56px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-semibold hover:bg-[#f59a62] transition-colors duration-150 inline-flex items-center justify-center"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </section>
  );
};