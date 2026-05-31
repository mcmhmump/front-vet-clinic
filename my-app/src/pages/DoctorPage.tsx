import { DoctorHeader } from "../components/DoctorHeader";
import { useAppSelector } from "../app/hooks";

export const DoctorPage = () => {
  const registeredUser = useAppSelector((state) => state.auth.registeredUser);
  const appointments = useAppSelector((state) => state.appointments.items);

  const fullName = registeredUser
    ? `${registeredUser.lastName} ${registeredUser.firstName} ${registeredUser.middleName}`
    : "";

  return (
    <section className="min-h-screen bg-[#F6F2ED] px-4 pb-10">
      <DoctorHeader />

      <main className="mt-8">
        {registeredUser && registeredUser.role === "vet" && (
          <div className="mb-8 rounded-[20px] bg-[#EDEEF3] px-8 py-6">
            <h2 className="text-[28px] font-bold text-[#02000F]">
              Данные ветеринара
            </h2>

            <div className="mt-4 flex flex-col gap-2 text-[20px] text-[#02000F]">
              <p>ФИО: {fullName}</p>
              <p>Email: {registeredUser.email}</p>
              <p>Роль: Ветеринар</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-8 items-center bg-[#EDC3A9] rounded-[8px] px-8 py-5 text-[20px] font-bold text-[#02000F]">
          <p>Клиент</p>
          <p>Телефон</p>
          <p>Питомец</p>
          <p>Вид</p>
          <p>Услуга</p>
          <p>Дата</p>
          <p>Время</p>
          <p>Статус</p>
        </div>

        <div className="mt-8">
          {appointments.length === 0 ? (
            <p className="px-8 py-6 text-[18px] text-[#6C6D71]">
              Записей пока нет
            </p>
          ) : (
            appointments.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-8 items-center px-8 py-12 text-[18px] text-[#02000F]">
                  <p>{item.ownerFullName}</p>
                  <p>{item.phone}</p>
                  <p>{item.petName}</p>
                  <p>{item.petType}</p>
                  <p>{item.service}</p>
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                  <p>
                    {item.status === "planned"
                      ? "Запланировано"
                      : item.status === "completed"
                      ? "Завершено"
                      : "Отменено"}
                  </p>
                </div>

                <div className="h-[4px] bg-[#7C7B82] mx-4 rounded-full"></div>
              </div>
            ))
          )}
        </div>
      </main>
    </section>
  );
};