import ekaterina from "../assets/images/ekaterina.png"
import maria from "../assets/images/Maria.png"
import ludmila from "../assets/images/Ludmila.png"
import kristina from "../assets/images/kristina.png"
export const Comand = () => {
    return(
        <section id="team" className="relative w-full py-20 overflow-hidden">
            {/* Свечение */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[#F8721F] opacity-30 blur-[100px] rounded-[100%] "></div>
            <div className="relative z-10 flex flex-col items-center gap-5">
                <div className="border-[#F8721F] w-[218px] h-[56px] rounded-[50px] border-[2px] ">
                    <p className="text-[24px] text-[#F8721F] font-sans font-bold text-center p-2">Наша команда</p>
                </div>
                <h1 className="text-[56px] text-[#02000F] font-sans font-semibold">Команда профессионалов</h1>
                {/* Карточки с ветеринарами */}
                <div className="grid grid-cols-4 gap-x-8 mt-6">
                    {/* 1 карточка */}
                    <div className="flex flex-col gap-2 h-[465px] w-[336px] p-2 bg-[#FFFFFF] rounded-[20px] border-[#C6C9D4] border-[1px]">
                        <img src={ekaterina} alt="Екатерина" className="object-contain w-[314px] h-[346px]"/>
                        <h3 className="text-[20px] text-[#02000F] font-sans font-semibold items-start">Петрова Екатерина Ивановна</h3>
                        <p className="text-[16px] text-[#74787C] font-sans font-normal">Опыт работы: 10 лет</p>
                    </div>
                    {/* 2 карточка */}
                    <div className="flex flex-col gap-2 h-[465px] w-[336px] p-2 bg-[#FFFFFF] rounded-[20px] border-[#C6C9D4] border-[1px]">
                        <img src={maria} alt="Мария" className="object-contain w-[314px] h-[346px]"/>
                        <h3 className="text-[20px] text-[#02000F] font-sans font-semibold items-start">Иванова Мария Сергеевна</h3>
                        <p className="text-[16px] text-[#74787C] font-sans font-normal">Опыт работы: 7 лет</p>
                    </div>
                    {/* 3 карточка */}
                    <div className="flex flex-col gap-2 h-[465px] w-[336px] p-2 bg-[#FFFFFF] rounded-[20px] border-[#C6C9D4] border-[1px]">
                        <img src={ludmila} alt="Людмила" className="object-contain w-[314px] h-[346px]"/>
                        <h3 className="text-[20px] text-[#02000F] font-sans font-semibold items-start">Павлова Людмила Фёдоровна</h3>
                        <p className="text-[16px] text-[#74787C] font-sans font-normal">Опыт работы: 12 лет</p>
                    </div>
                    {/* 4 карточка */}
                    <div className="flex flex-col gap-2 h-[465px] w-[336px] p-2 bg-[#FFFFFF] rounded-[20px] border-[#C6C9D4] border-[1px]">
                        <img src={kristina} alt="Кристина" className="object-contain w-[314px] h-[346px]"/>
                        <h3 className="text-[20px] text-[#02000F] font-sans font-semibold items-start">Козлова Кристина Николаевна</h3>
                        <p className="text-[16px] text-[#74787C] font-sans font-normal">Опыт работы: 5 лет</p>
                    </div>
                </div>
            </div>
        </section>
    )
}