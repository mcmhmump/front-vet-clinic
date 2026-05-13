import sled from "../assets/images/sled.png"
import cost1 from "../assets/images/41.png"
import cost2 from "../assets/images/43.png"
import symbol from "../assets/icons/Symbol.png"
export const Services = () => {
    return(
        <section className="relative bg-[#F6F2ED]">
            <img src={sled} alt="след" className="absolute mt-25 ml-90"/>
            <div className="flex flex-col items-start ml-10">
                {/* Услуги и заголовок */}
                <div className="border-[#F8721F] rounded-[50px] border-[2px] mt-30 ">
                    <p className="text-[24px] text-[#F8721F] font-bold text-center p-2 w-[190px] h-[50px]">Услуги</p>
                </div>
                <h1 className='text-[56px] text-[#02000F] font-sans font-semibold leading-tight'>Пакеты услуг</h1>
            </div>
            <main className="grid grid-cols-3 gap-x-8 mt-20 ml-10">
                {/* Вакцинация */}
                <div className="flex flex-col gap-6 w-[424px] h-[456px] bg-[#FFFFFF] rounded-[30px] items-start pt-5 pl-6">
                    <h3 className="text-[#02000F] text-[30px] font-sans font-bold">Вакцинация</h3>
                    <p className="text-[#6C6D71] text-[16px] font-sans font-normal">Профилактика и защита питомца</p>
                    {/* Стоимость */}
                    <div className="flex flex-inline gap-20 text-center p-10 border-b border-[#4E4E4E40] items-center">
                        <p className="text-[16px] text-[#02000F] font-sans font-medium">Стоимость</p>
                        <img src={cost1} alt="1500" className="w-[116px] h-[40px]"/>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <div className="flex flex-inline gap-4">
                                <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                <li>Осмотр перед прививкой</li>
                            </div>
                            <div className="flex flex-inline gap-4">
                                <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                <li>Консультация врача</li>
                            </div>
                            <div className="flex flex-inline gap-4">
                                <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                <li>Введение вакцины</li>
                            </div>
                            <div className="flex flex-inline gap-4">
                                <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                <li>Отметка в ветпаспорте</li>
                            </div>
                        </ul>
                    </div>
                </div>
                {/* Осмотр+лечение */}
                <div className="w-[424px] h-[495px] bg-[#F8721F] rounded-[30px] p-2.5">
                    <p className="text-[16px] text-[#FFFFFF] font-sans font-bold text-center mb-3">ЛУЧШИЙ ВАРИАНТ</p>
                    <div className="flex flex-col gap-6 w-[404px] h-[440px] bg-[#FFFFFF] rounded-[30px] items-start pt-5 pl-6">
                        <h3 className="text-[#02000F] text-[30px] font-sans font-bold">Осмотр + лечение</h3>
                        <p className="text-[#6C6D71] text-[16px] font-sans font-normal">Когда питомец плохо себя чувствует</p>
                        {/* Стоимость */}
                        <div className="flex flex-inline gap-20 text-center p-10 border-b border-[#4E4E4E40] items-center">
                            <p className="text-[16px] text-[#02000F] font-sans font-medium">Стоимость</p>
                            <img src={cost2} alt="2500" className="w-[116px] h-[40px]"/>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <div className="flex flex-inline gap-4">
                                    <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                    <li>Первичный осмотр</li>
                                </div>
                                <div className="flex flex-inline gap-4">
                                    <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                    <li>Постановка диагноза</li>
                                </div>
                                <div className="flex flex-inline gap-4">
                                    <img src={symbol} alt="галочка" className="w-[16.5px] h-[16px] object-contain"/>
                                    <li>Базовые лечебные манипуляции</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}