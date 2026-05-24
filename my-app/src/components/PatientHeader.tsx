import { Link } from "react-router-dom";
import logo from "../assets/icons/logoWindow.png";
import call from "../assets/icons/call orange.png";
import profile from "../assets/icons/profile.png";
export const PatientHeader = () => {
  return (
    <header className="px-6 pt-6">
      {/* Верхняя строка */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Лого */}
          <img
            src={logo}
            alt="ВетСфера"
            className="h-[80px] object-contain"
          />

          {/* Навигация */}
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-[26px] text-[#02000F] font-sans font-medium hover:text-[#F8721F] transition-colors duration-150"
            >
              Главная
            </Link>

          </nav>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-4">
          <div className="w-[280px] h-[52px] bg-white rounded-[12px] border border-[#E6E6E6] flex items-center px-4">
            <input
              type="text"
              placeholder="Поиск"
              className="w-full bg-transparent outline-none text-[16px] text-[#02000F] placeholder:text-[#B0B0B0]"
            />
          </div>

          <div className="h-[52px] px-5 bg-white rounded-[12px] border border-[#E6E6E6] flex items-center gap-3">
            <img src={profile} alt="профиль" className="w-[32px] h-[29px]"/>
            <p className="text-[17px] text-[#02000F] font-sans font-medium">
              Иванова М.С
            </p>
          </div>
        </div>
      </div>

      {/* Нижняя левая часть */}
      <div className="mt-6 flex flex-col items-start gap-5">
        <div className="flex items-start gap-3">
          <img src={call} alt="телефон" className="w-[48px] h-[48px]"/>
          <div>
            <p className="text-[34px] leading-none text-[#F8721F] font-sans font-semibold">
              Телефон
            </p>
            <p className="text-[18px] text-[#FF803B] mt-1 font-sans font-normal">
              +00-(120) 3456 789
            </p>
          </div>
        </div>

        <button className="w-[260px] h-[58px] rounded-[50px] border-[2px] border-[#F8721F] text-[#F8721F] text-[24px] font-sans font-semibold hover:bg-[#fff3eb] transition-colors duration-150">
          Прием пациента
        </button>
      </div>
    </header>
  );
};