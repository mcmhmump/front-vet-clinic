import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { registerUser, login } from "../features/auth/authSlice";
import logo from "../assets/icons/logoWindow.png";
import food from "../assets/images/foodDog.png";
import dog from "../assets/images/dog.png";
import wave from "../assets/images/greyWave.png";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  code?: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [role, setRole] = useState<"client" | "vet">("client");
  const [step, setStep] = useState<"register" | "confirm">("register");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [errors, setErrors] = useState<FormErrors>({});

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const isValidName = (value: string) => {
    return /^[А-Яа-яЁёA-Za-z-]{2,}$/.test(value.trim());
  };

  const validateRegisterForm = () => {
    const newErrors: FormErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = "Введите имя";
    } else if (!isValidName(firstName)) {
      newErrors.firstName = "Имя должно содержать только буквы и дефис";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Введите фамилию";
    } else if (!isValidName(lastName)) {
      newErrors.lastName = "Фамилия должна содержать только буквы и дефис";
    }

    if (!middleName.trim()) {
      newErrors.middleName = "Введите отчество";
    } else if (!isValidName(middleName)) {
      newErrors.middleName = "Отчество должно содержать только буквы и дефис";
    }

    if (!email.trim()) {
      newErrors.email = "Введите email";
    } else if (!isValidEmail(email)) {
      newErrors.email = "Введите корректный email";
    }

    if (!password.trim()) {
      newErrors.password = "Введите пароль";
    } else if (password.length < 6) {
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Подтвердите пароль";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateCodeForm = () => {
    const newErrors: FormErrors = {};
    const joinedCode = code.join("");

    if (joinedCode.length !== 6) {
      newErrors.code = "Введите шестизначный код";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = () => {
    if (!validateRegisterForm()) return;
    setStep("confirm");
  };

  const handleCodeChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setErrors((prev) => ({ ...prev, code: undefined }));
  };

  const handleFinishRegistration = () => {
    if (!validateCodeForm()) return;

    const newUser = {
      firstName,
      lastName,
      middleName,
      email,
      password,
      role,
    };

    dispatch(registerUser(newUser));
    dispatch(login({ email, role }));

    if (role === "client") {
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

      <div className="relative z-10 flex flex-col items-center pt-20">
        <div className="border-[#F8721F] w-[260px] h-[65px] rounded-[50px] border-[2px] flex items-center justify-center">
          <p className="text-[24px] text-[#F8721F] font-sans font-bold">
            {step === "register" ? "Регистрация" : "Подтверждение"}
          </p>
        </div>

        <h1 className="mt-6 text-[56px] text-[#02000F] font-sans font-semibold">
          Добро пожаловать!
        </h1>

        {step === "register" ? (
          <>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => setRole("client")}
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
                onClick={() => setRole("vet")}
                className={`w-[150px] h-[42px] rounded-[30px] border-[2px] text-[16px] font-medium transition-colors duration-150 ${
                  role === "vet"
                    ? "bg-[#F8721F] border-[#F8721F] text-white"
                    : "bg-white border-[#02000F] text-[#02000F]"
                }`}
              >
                Ветеринар
              </button>
            </div>

            <div className="flex gap-5 mt-6">
              <div>
                <input
                  type="text"
                  placeholder="Имя"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setErrors((prev) => ({ ...prev, firstName: undefined }));
                  }}
                  className="w-[180px] h-[44px] border-[2px] border-[#02000F] rounded-[20px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.firstName && (
                  <p className="mt-2 text-[14px] text-red-500">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Фамилия"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setErrors((prev) => ({ ...prev, lastName: undefined }));
                  }}
                  className="w-[180px] h-[44px] border-[2px] border-[#02000F] rounded-[20px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.lastName && (
                  <p className="mt-2 text-[14px] text-red-500">{errors.lastName}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Отчество"
                  value={middleName}
                  onChange={(e) => {
                    setMiddleName(e.target.value);
                    setErrors((prev) => ({ ...prev, middleName: undefined }));
                  }}
                  className="w-[180px] h-[44px] border-[2px] border-[#02000F] rounded-[20px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.middleName && (
                  <p className="mt-2 text-[14px] text-red-500">{errors.middleName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 mt-4 min-h-[220px] w-[560px] bg-[#EDEEF3] rounded-[20px] px-10 py-6">
              <div className="w-[260px]">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className="w-full h-[42px] border-[2px] border-[#02000F] rounded-[10px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.email && (
                  <p className="mt-2 text-[14px] text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="w-[260px]">
                <input
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  className="w-full h-[42px] border-[2px] border-[#02000F] rounded-[10px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.password && (
                  <p className="mt-2 text-[14px] text-red-500">{errors.password}</p>
                )}
              </div>

              <div className="w-[260px]">
                <input
                  type="password"
                  placeholder="Подтвердите пароль"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: undefined,
                    }));
                  }}
                  className="w-full h-[42px] border-[2px] border-[#02000F] rounded-[10px] bg-transparent px-4 text-[16px] outline-none placeholder:text-[#4F4F4F]"
                />
                {errors.confirmPassword && (
                  <p className="mt-2 text-[14px] text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={handleRegister}
              className="mt-8 w-[340px] h-[58px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-semibold hover:bg-[#f59a62] transition-colors duration-150"
            >
              Зарегистрироваться
            </button>
          </>
        ) : (
          <>
            <p className="mt-4 text-[24px] text-[#6C6D71] text-center">
              Мы отправили на Ваш email шестизначный код. Введите его
            </p>

            <div className="mt-8 w-[560px] h-[155px] bg-[#EDEEF3] rounded-[20px] border border-[#02000F] flex items-center justify-center gap-5">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(e.target.value, index)}
                  className="w-[64px] h-[96px] bg-[#EADBD2] border border-[#5A5A5A] text-center text-[32px] text-[#02000F] outline-none"
                />
              ))}
            </div>

            {errors.code && (
              <p className="mt-4 text-[14px] text-red-500">{errors.code}</p>
            )}

            <button
              type="button"
              onClick={handleFinishRegistration}
              className="mt-12 w-[560px] h-[58px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-semibold hover:bg-[#f59a62] transition-colors duration-150"
            >
              Завершить регистрацию
            </button>
          </>
        )}
      </div>
    </section>
  );
};