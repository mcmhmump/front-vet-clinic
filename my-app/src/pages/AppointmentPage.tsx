import logo from "../assets/icons/logoWindow.png";
import women from "../assets/images/women.png";
import wave from "../assets/images/shape.png";
import sym from "../assets/icons/appointment icon 1 2.png"
import ukol from "../assets/icons/ukol.png"
export const AppointmentPage = () => {
  return (
    <section className="relative px-12 py-6 pb-30">
        <img src={logo} alt="лого" className="h-[80px]" />
        <img src={wave} alt="волна" className="absolute top-0 right-0 h-[170px] opacity-90"/>
        <h1 className="mt-6 text-[68px] font-sans font-semibold text-[#02000F]">Запишитесь на приём</h1>
        <p className="mt-4 text-[18px] text-[#6C6D71] font-sans font-normal">Если у вас остались вопросы - свяжитесь с нами</p>
        <img src={women} alt="женщина и собака" className="absolute h-[624px] mt-20 left-[0%]"/>
        <div className="flex flex-col mt-20 w-[755px] h-[615px] bg-[#F6F2ED] rounded-[24px] ml-[45%] p-15">
            <div className="grid grid-cols-3 gap-5">
                <div className="h-[112px] w-[200px] bg-[#FFFFFF] rounded-[16px] relative">
                    <img src={sym} alt="стрижка" className="absolute pl-20 pt-5"/>
                    <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">Стрижка</p>
                </div>
                <div className="h-[112px] w-[200px] bg-[#FFFFFF] rounded-[16px] relative">
                    <img src={sym} alt="стрижка" className="absolute pl-20 pt-5"/>
                    <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">Осмотр</p>
                </div>
                <div className="h-[112px] w-[200px] bg-[#FFFFFF] rounded-[16px] relative">
                    <img src={ukol} alt="стрижка" className="absolute pl-20 pt-5"/>
                    <p className="text-[18px] font-sans font-semibold text-[#02000F] text-center pt-15">Вакцинация</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-15">
                <input
                    type="text"
                    placeholder="ФИО"
                    className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <input
                    type="text"
                    placeholder="Номер телефона"
                    className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <input
                    type="text"
                    placeholder="Имя питомца"
                    className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <select className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]">
                    <option>Выберите услугу</option>
                    <option>Стрижка</option>
                    <option>Осмотр</option>
                    <option>Вакцинация</option>
                    </select>

                    <input
                    type="text"
                    placeholder="месяц/день/год"
                    className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <select className="h-[75px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]">
                    <option>Выберите время</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    </select>
            </div>
            <div className="flex justify-center mt-10">
                <button className="w-[320px] h-[58px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-sans font-medium hover:bg-[#f59a62] transition-colors duration-150">Записаться</button>
            </div>

        </div>
        {/* <div className="mt-10 flex items-end justify-between gap-10">
           

           
            <div className="w-[58%] bg-[#F0ECE7] rounded-[28px] px-10 py-10">
            <div className="grid grid-cols-3 gap-5">
                    <div className="h-[110px] rounded-[18px] bg-white flex flex-col items-center justify-center text-center">
                    <p className="text-[32px]">✂️</p>
                    <p className="text-[28px] font-sans font-semibold text-[#02000F]">
                        Стрижка
                    </p>
                    </div>

                    <div className="h-[110px] rounded-[18px] bg-white flex flex-col items-center justify-center text-center">
                    <p className="text-[32px]">📋</p>
                    <p className="text-[28px] font-sans font-semibold text-[#02000F]">
                        Осмотр
                    </p>
                    </div>

                    <div className="h-[110px] rounded-[18px] bg-white flex flex-col items-center justify-center text-center">
                    <p className="text-[32px]">💉</p>
                    <p className="text-[28px] font-sans font-semibold text-[#02000F]">
                        Вакцинация
                    </p>
                    </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">
                    <input
                    type="text"
                    placeholder="ФИО"
                    className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <input
                    type="text"
                    placeholder="Номер телефона"
                    className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <input
                    type="text"
                    placeholder="Имя питомца"
                    className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <select className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]">
                    <option>Выберите услугу</option>
                    <option>Стрижка</option>
                    <option>Осмотр</option>
                    <option>Вакцинация</option>
                    </select>

                    <input
                    type="text"
                    placeholder="месяц/день/год"
                    className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC]"
                    />

                    <select className="h-[62px] rounded-[16px] bg-white px-6 text-[18px] outline-none border border-[#E7E2DC] text-[#7A7A7A]">
                    <option>Выберите время</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    </select>
            </div>

            <div className="flex justify-center mt-10">
                    <button className="w-[320px] h-[58px] rounded-[50px] bg-[#F8721F] text-white text-[18px] font-sans font-medium hover:bg-[#f59a62] transition-colors duration-150">
                    Записаться
                    </button>
            </div>
            </div>
        </div> */}
    </section>
  );
};