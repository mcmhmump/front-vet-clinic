import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { PatientHeader } from "../components/PatientHeader";
import bonya from "../assets/images/bonya.png"
export const PatientPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appointment = location.state?.appointment;

  return (
    <section className="min-h-screen bg-[#F6F2ED]">
      <PatientHeader />

      {!appointment ? (
        <main className="flex flex-col items-center justify-center text-center min-h-[500px] px-4">
          <h1 className="text-[48px] font-sans font-bold text-[#02000F] leading-tight">У вас пока нет записей на прием. <br />Давайте выберем подходящую услугу!</h1>
          <button onClick={() => navigate("/appointment")} className="mt-10 w-[220px] h-[56px] rounded-[50px] bg-[#F8721F] text-white font-sans font-normal text-[16px] hover:bg-[#f59a62] transition-colors duration-150">
              Записаться на прием
          </button>
        </main>
        ) : (
        <main className="px-4 pb-16 pt-6">
          <div className="w-full border border-[#E3A178] rounded-[20px] px-4 py-8">
            <div className="flex items-center gap-8">
              {/* <div className="w-[340px] h-[170px] rounded-[16px] bg-[#D9D9D9] flex items-center justify-center text-[#666] text-[18px]">
                <img src={bonya} alt="боня" className=""/>
              </div> */}
              <img src={bonya} alt="боня" className=" h-[300px] object-contain"/>

              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] font-sans font-bold text-[#02000F]">{appointment.service}</h2>
                <div className="flex flex-col gap-2 text-[24px] text-[#02000F] font-sans">
                  <p>Питомец: {appointment.petName}</p>
                  <p>Вид: {appointment.petType}</p>
                  <p>Дата: {appointment.date}</p>
                  <p>Время: {appointment.time}</p>
                </div>

                <p className="max-w-[520px] text-[16px] text-[#6C6D71] font-sans leading-relaxed">
                  Ждем вас и вашего питомца в назначенное время! Если вы
                  задерживаетесь или ваши планы изменились, пожалуйста,
                  сообщите нам.
                </p>
              </div>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </section>
  );
};