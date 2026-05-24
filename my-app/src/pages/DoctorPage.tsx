import { DoctorHeader } from "../components/DoctorHeader";
export const DoctorPage = () => {
  const appointments = [
    {
      owner: "Иванов И.И",
      pet: "Боня",
      type: "Хомяк",
      service: "Осмотр",
      date: "28.04.26",
      time: "13:00",
      phone: "+79172456789",
    },
    {
      owner: "Иванов И.И",
      pet: "Боня",
      type: "Хомяк",
      service: "Осмотр",
      date: "28.04.26",
      time: "13:00",
      phone: "+79172456789",
    },
    {
      owner: "Иванов И.И",
      pet: "Боня",
      type: "Хомяк",
      service: "Осмотр",
      date: "28.04.26",
      time: "13:00",
      phone: "+79172456789",
    },
  ];

  return (
    <section className="min-h-screen bg-[#F6F2ED] px-4 pb-10">
      <DoctorHeader />

      <main className="mt-8">
        {/* Заголовок таблицы */}
        <div className="grid grid-cols-7 items-center bg-[#EDC3A9] rounded-[8px] px-8 py-5 text-[20px] font-bold text-[#02000F]">
          <p>Пациент</p>
          <p>Питомец</p>
          <p>Вид</p>
          <p>Услуга</p>
          <p>Дата</p>
          <p>Время</p>
          <p>Телефон</p>
        </div>

        {/* Строки */}
        <div className="mt-8">
          {appointments.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-7 items-center px-8 py-12 text-[18px] text-[#02000F]">
                <p>{item.owner}</p>
                <p>{item.pet}</p>
                <p>{item.type}</p>
                <p>{item.service}</p>
                <p>{item.date}</p>
                <p>{item.time}</p>
                <p>{item.phone}</p>
              </div>

              <div className="h-[4px] bg-[#7C7B82] mx-4 rounded-full"></div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};