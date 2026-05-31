import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { cancelAppointment } from "../features/appointments/appointmentsSlice";
import { Footer } from "../components/Footer";
import { PatientHeader } from "../components/PatientHeader";
import bonya from "../assets/images/bonya.png";

export const PatientPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const email = useAppSelector((state) => state.auth.email);
  const role = useAppSelector((state) => state.auth.role);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const appointments = useAppSelector((state) => state.appointments.items);

  const handleCancelAppointment = (id: string) => {
    dispatch(cancelAppointment(id));
  };

  return (
    <section className="min-h-screen bg-[#F6F2ED]">
      <PatientHeader />

      {appointments.length === 0 ? (
        <main className="flex flex-col items-center justify-center text-center min-h-[500px] px-4">
          <h1 className="text-[48px] font-sans font-bold text-[#02000F] leading-tight">
            У вас пока нет записей на прием. <br />
            Давайте выберем подходящую услугу!
          </h1>

          <button
            onClick={() => navigate("/appointment")}
            className="mt-10 w-[220px] h-[56px] rounded-[50px] bg-[#F8721F] text-white font-sans font-normal text-[16px] hover:bg-[#f59a62] transition-colors duration-150"
          >
            Записаться на прием
          </button>
        </main>
      ) : (
        <main className="px-4 pb-16 pt-6">
          <div className="flex flex-col gap-8">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="w-full border border-[#E3A178] rounded-[20px] px-4 py-8"
              >
                <div className="flex items-center gap-8">
                  <img
                    src={bonya}
                    alt="боня"
                    className="h-[300px] object-contain"
                  />

                  <div className="flex flex-col gap-4">
                    <h2 className="text-[32px] font-sans font-bold text-[#02000F]">
                      {appointment.service}
                    </h2>

                    <div className="flex flex-col gap-2 text-[24px] text-[#02000F] font-sans">
                      <p>Питомец: {appointment.petName}</p>
                      <p>Вид: {appointment.petType}</p>
                      <p>Дата: {appointment.date}</p>
                      <p>Время: {appointment.time}</p>
                      <p>
                        Статус:{" "}
                        {appointment.status === "planned"
                          ? "Запланирована"
                          : appointment.status === "completed"
                          ? "Завершена"
                          : "Отменена"}
                      </p>
                    </div>

                    <p className="max-w-[520px] text-[16px] text-[#6C6D71] font-sans leading-relaxed">
                      Ждем вас и вашего питомца в назначенное время! Если вы
                      задерживаетесь или ваши планы изменились, пожалуйста,
                      сообщите нам.
                    </p>

                    {appointment.status === "planned" && (
                      <button
                        onClick={() => handleCancelAppointment(appointment.id)}
                        className="mt-4 w-[220px] h-[52px] rounded-[50px] bg-[#02000F] text-white text-[16px] font-sans hover:bg-[#5f5d5c] transition-colors duration-150"
                      >
                        Отменить запись
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/appointment")}
              className="w-[240px] h-[56px] rounded-[50px] bg-[#F8721F] text-white font-sans font-normal text-[16px] hover:bg-[#f59a62] transition-colors duration-150"
            >
              Новая запись
            </button>
          </div>
        </main>
      )}

      <Footer />
    </section>
  );
};