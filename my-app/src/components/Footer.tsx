// import wave from "../assets/images/footer-shape.png"
// import logo from "../assets/images/logo.png"
// import pets from "../assets/images/pets.png"
// import doctor from "../assets/images/doctor.png"
// import lapka from "../assets/images/lapka2.png"
// export const Footer = () =>{
//     return(
//         <section className="relative pt-2">
//             <img src={wave} alt="волна" className="absolute top-0 left-0 w-full object-cover z-10"/>
//             {/* Основной подвал */}
//             <div className="relative bg-[#02000F] min-h-[650px] pt-[300px] px-[60px] z-0">
//                 <img src={logo} alt="логотип" className="absolute h-[80px] object-contain top-60"/>
//                 <img src={pets} alt="питомцы" className="absolute w-[215px] h-[312px] bottom-[0%] left-[0%]"/>
//                 <img src={doctor} alt="доктор" className="absolute w-[371px] h-[360px] right-[0%] bottom-[0%]"/>
//                 <img src={lapka} alt="лапка" className="absolute w-[66px] h-[70px] bottom-[50%] right-[25%]"/>
//                 <img src={lapka} alt="лапка" className="absolute w-[66px] h-[70px] bottom-[65%] right-[23%]"/>
//                 <img src={lapka} alt="лапка" className="absolute w-[66px] h-[70px] bottom-[65%] right-[30%]"/>
//             </div>
//         </section>
//     )
// }
import wave from "../assets/images/footer-shape.png"
import logo from "../assets/images/logo.png"
import pets from "../assets/images/pets.png"
import doctor from "../assets/images/doctor.png"
import phoneIcon from "../assets/icons/phone.png"
import locationIcon from "../assets/icons/map.png"
import telegramIcon from "../assets/icons/tg.png"
import paw from "../assets/images/lapka2.png"

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden pt-[90px]">
      {/* Волна сверху */}
      <img
        src={wave}
        alt="волна"
        className="absolute top-0 left-0 w-full object-cover z-10"
      />

      {/* Основной подвал */}
      <div className="relative bg-[#1f1f1f] min-h-[540px] pt-[120px] px-[60px] z-0">
        <div className="relative flex justify-between">
          
          {/* Левая часть */}
          <div className="relative w-[320px]">
            <img
              src={logo}
              alt="ВетСфера"
              className="w-[180px] mb-[40px] ml-[40px]"
            />

            <img
              src={pets}
              alt="кот"
              className="absolute left-[-62px] bottom-[-200px] w-[250px] object-contain"
            />
          </div>

          {/* Линия */}
          <div className="w-px h-[220px] bg-white/10 mt-[20px]"></div>

          {/* Контакты */}
          <div className="flex flex-col gap-[28px] mt-[20px]">
            <div className="flex items-center gap-[18px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={phoneIcon} alt="телефон" className="w-[20px] h-[20px]" />
              </div>
              <div>
                <p className="text-white text-[14px] uppercase font-medium">Контакты</p>
                <p className="text-white text-[22px] font-semibold">+07-528-5698-58</p>
              </div>
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={locationIcon} alt="адрес" className="w-[20px] h-[20px]" />
              </div>
              <div>
                <p className="text-white text-[14px] uppercase font-medium">Адрес</p>
                <p className="text-white text-[22px] font-semibold">Вольская 24</p>
              </div>
            </div>

            <div className="flex items-center gap-[18px]">
              <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shrink-0">
                <img src={telegramIcon} alt="telegram" className="w-[20px] h-[20px]" />
              </div>
              <div>
                <p className="text-white text-[14px] uppercase font-medium">Telegram</p>
                <p className="text-white text-[22px] font-semibold">+07-528-5698-58</p>
              </div>
            </div>
          </div>

          {/* Линия */}
          <div className="w-px h-[220px] bg-white/10 mt-[20px]"></div>

          {/* Правая часть */}
          <div className="relative w-[420px]">
            {/* Лапки */}
            <img src={paw} alt="лапка" className="absolute top-[0px] left-[40px] w-[60px] opacity-90" />
            <img src={paw} alt="лапка" className="absolute top-[10px] left-[140px] w-[60px] opacity-90" />
            <img src={paw} alt="лапка" className="absolute top-[110px] left-[120px] w-[60px] opacity-90" />

            {/* Человек с собакой */}
            <img
              src={doctor}
              alt="человек с собакой"
              className="absolute right-[-55px] bottom-[-180px] w-[360px] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}