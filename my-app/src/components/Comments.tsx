import prize from "../assets/images/prize.png"
import lapka from "../assets/images/lapka.png"
import women from "../assets/images/Juliya.png"
import men from "../assets/images/Artem.png"
import rabbit from "../assets/images/rabbit.png"
export const Comments = () =>{
    return(
        <section className="relative pt-30 pb-90">
            <img src={prize} alt="кубок" className="absolute w-[81px] h-[92px] top-50 left-30"/>
            <img src={lapka} alt="лапка" className="absolute w-[66px] h-[70px] top-50 right-30"/>
            <div className="flex flex-col items-center gap-5">
                <div className="border-[#F8721F] w-[220px] h-[65px] rounded-[50px] border-[2px]">
                    <p className="text-[24px] text-[#F8721F] font-sans font-bold text-center p-2">Отзывы</p>
                </div>
                <h1 className="text-[56px] text-[#02000F] font-sans font-semibold">Клиенты о нас</h1>
                <div className="content-center">
                    <p className="text-[18px] text-[#6C6D71] font-sans font-normal text-center">
                        Самая ценная награда для нашей клиники — это здоровые питомцы и искренняя
                        <br />
                        <span className="block">благодарность их спокойных владельцев</span>
                    </p>
                </div>
                {/* Блок с отзывами */}
                <div className="flex justify-center gap-8 flex-wrap">
                {/* 1 карточка */}
                    <div className="relative w-[648px] h-[325px] bg-[#F6F2ED] rounded-[30px] px-[34px] py-[30px]">
                        {/* Верх карточки */}
                        <div className="flex items-center gap-5 mb-8">
                            <img src={women} alt="Юлия" className="w-[70px] h-[70px] rounded-full object-cover"/>
                            <div>
                                <h3 className="text-[24px] text-black font-medium">Юлия</h3>
                                <p className="text-[18px] text-[#6C6D71] font-normal">Клиент</p>
                            </div>
                        </div>

                        {/* Звезды */}
                        <div className="flex gap-2 mb-6 text-[#F8721F] text-[22px]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>

                        {/* Текст */}
                        <p className="text-[18px] text-[#6C6D71] leading-[1.5] max-w-[530px]">
                        “Очень понравилась клиника! Врач внимательно осмотрел моего питомца,
                        всё спокойно объяснил и сразу назначил лечение. Видно, что здесь
                        действительно любят животных и относятся к ним с заботой.”
                        </p>
                    </div>

                    {/* 2 карточка */}
                    <div className="relative w-[648px] h-[325px] bg-[#F6F2ED] rounded-[30px] px-[34px] py-[30px]">
                        {/* Верх карточки */}
                        <div className="flex items-center gap-5 mb-8">
                            <img src={men} alt="Артём" className="w-[70px] h-[70px] rounded-full object-cover"/>
                            <div>
                                <h3 className="text-[24px] text-black font-medium">Артём</h3>
                                <p className="text-[18px] text-[#6C6D71] font-normal">Клиент</p>
                            </div>
                        </div>

                        {/* Звезды */}
                        <div className="flex gap-2 mb-6 text-[#F8721F] text-[22px]">
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                        </div>

                        {/* Текст */}
                        <p className="text-[18px] text-[#6C6D71] leading-[1.5] max-w-[530px]">
                        “Обращались в ветклинику на вакцинацию и остались очень довольны.
                        Всё прошло быстро, аккуратно и без стресса для питомца. Персонал
                        вежливый, в клинике чисто и уютно — теперь будем ходить только сюда.”
                        </p>

                    </div>
                </div>
            </div>
            <img src={rabbit} alt="кролик" className="absolute w-[136px] h-[206px] mt-10 ml-20"/>
        </section>
    )
}