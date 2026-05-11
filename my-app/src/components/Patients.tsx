import dog from "../assets/images/dog 1.png"
import cat from "../assets/images/cat 1.png"
import humster from "../assets/images/gr 1.png"
import parrot from "../assets/images/parrot 1.png"
import sled from "../assets/images/sled.png"
import friends from "../assets/images/friends.png"
import rabbit from "../assets/images/rabbit.png"
export const Patients = () => {
    return(
        <section className="relative mt-8 pb-50">
            <img src={sled} alt="след" className="absolute right-[28%] top-[5%]"/>
            <img src={sled} alt="след" className="absolute left-[28%] top-[5%] -scale-x-100"/> 
            <div className="flex flex-col items-center gap-5">
                <div className="border-[#F8721F] w-[220px] h-[65px] rounded-[50px] border-[2px]">
                    <p className="text-[24px] text-[#F8721F] font-sans font-bold text-center p-2">Пациенты</p>
                </div>
                <h1 className="text-[56px] text-[#02000F] font-sans font-semibold">Наши пациенты</h1>
                {/* Карточки с животными */}
                <div className="grid grid-cols-4 gap-x-8 mt-6">
                    {/* 1 карточка */}
                    <div className="flex flex-col gap-2 h-[429px] w-[335px] bg-[#F6F2ED] border-[#F8721F] border-[1px] rounded-[30px]">
                        <img src={dog} alt="собака" className="w-[333px] h-[222px] object-contain"/>
                        <h3 className="text-[24px] text-[#02000F] font-sans font-semibold text-center">Собаки</h3>
                        <div className="px-4 pb-4">
                            <p className="text-[15px] text-[#000000] font-sans font-normal text-justify mb-2">Здоровье собаки — основа ее активной и счастливой жизни.</p>
                            <p className="text-[15px] text-[#000000] font-sans font-normal text-justify">В клинике можно пройти осмотр, вакцинацию, диагностику и получить лечение в комфортных условиях.</p>
                        </div>
                    </div>
                    {/* 2 карточка */}
                    <div className="flex flex-col gap-2 h-[429px] w-[335px] bg-[#F6F2ED] border-[#F8721F] border-[1px] rounded-[30px]">
                        <img src={cat} alt="собака" className="w-[333px] h-[222px] object-contain"/>
                        <h3 className="text-[24px] text-[#02000F] font-sans font-semibold text-center">Кошки</h3>
                        <div className="px-4 pt-3">
                            <p className="text-[15px] text-[#000000] font-sans font-normal text-justify mb-2">Внимательное отношение к кошачьему здоровью требует особых знаний и бережных рук. Предлагаем полный спектр услуг.</p>
                        </div>
                    </div>
                    {/* 3 карточка */}
                    <div className="flex flex-col gap-2 h-[429px] w-[335px] bg-[#F6F2ED] border-[#F8721F] border-[1px] rounded-[30px]">
                        <img src={humster} alt="собака" className="w-[333px] h-[222px] object-contain"/>
                        <h3 className="text-[24px] text-[#02000F] font-sans font-semibold text-center">Грызуны</h3>
                        <div className="px-4 pt-3">
                            <p className="text-[15px] text-[#000000] font-sans font-normal text-justify mb-2">Маленький размер и хрупкая конституция грызунов требуют узкопрофильных знаний и деликатного обращения.</p>
                        </div>
                    </div>
                    {/* 4 карточка */}
                    <div className="flex flex-col gap-2 h-[429px] w-[335px] bg-[#F6F2ED] border-[#F8721F] border-[1px] rounded-[30px]">
                        <img src={parrot} alt="собака" className="w-[333px] h-[222px] object-contain"/>
                        <h3 className="text-[24px] text-[#02000F] font-sans font-semibold text-center">Птицы</h3>
                        <div className="px-4 pt-3">
                            <p className="text-[15px] text-[#000000] font-sans font-normal text-justify mb-2">Пернатые питомцы склонны до последнего скрывать свое недомогание, поэтому им нужен регулярный контроль профильного специалиста.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={friends} alt="животные" className="absolute bottom-[0%]"/>
            <img src={rabbit} alt="кролик" className="absolute bottom-[0%] right-[5%]"/>
        </section>
    )
}
