import { Footer } from "../components/Footer";
import { PatientHeader } from "../components/PatientHeader";
export const PatientPage = () => {
  return (
    <section className="min-h-screen bg-[#F6F2ED]">
      {/* Верхняя часть */}
        <PatientHeader />

      {/* Центральный блок */}
      <main className="flex flex-col items-center justify-center text-center min-h-[500px] px-4">
        <h1 className="text-[48px] font-sans font-bold text-[#02000F] leading-tight ">
          У вас пока нет записей на прием. <br />
          Давайте выберем подходящую услугу!
        </h1>

        <button className="mt-10 w-[220px] h-[56px] rounded-[50px] bg-[#F8721F] text-white font-sans font-normal text-[16px] hover:bg-[#f59a62] transition-colors duration-150">
          Записаться на прием
        </button>
      </main>

      <Footer />
    </section>
  );
};