import wave from '../assets/images/wave.png'
import mission from '../assets/images/Our Mission.png'
import yes from '../assets/icons/yes.png'
import shape from '../assets/images/shape.png'
import bone from '../assets/images/bone.png'
export const AboutUs = () => {
    return (
        <section className="relative bg-[#F6F2ED] mt-13">
            <img src={wave} alt="волна" className='absolute top-[-0.2%] rotate-180 object-contain w-[1550px] '/>
            <img src={shape} alt="фигура" className='absolute top-[18%] object-contain w-[433px] right-[0%]'/>
            <img src={bone} alt="кость" className='absolute top-[25%] object-contain right-[35%] w-[116px]'/>
            {/* О нас и заголовок */}
            <div className="flex flex-col items-start ml-10">
                <div className="border-[#F8721F] rounded-[50px] border-[2px] mt-40 ">
                    <p className="text-[24px] text-[#F8721F] font-bold text-center p-2 w-[190px] h-[50px]">О нас</p>
                </div>
                <h1 className='text-[56px] text-[#02000F] font-sans font-semibold leading-tight'>Мы заботимся о <br />наших пациентах</h1>
            </div>
            {/* Основной контент */}
            <main className='flex justify-between mt-10 ml-8'>
                {/* Картинка */}
                <div>
                    <img src={mission} alt="миссия" className='w-[677px] object-contain rounded-[4%]'/>
                </div>
                {/* Блок с текстом */}
                <div className='flex flex-col items-start gap-3 w-[688px]'>
                    <h3 className='text-[28px] text-[#02000F] font-sans font-semibold'>Наша цель</h3>
                    <p className='text-[16px] text-[#02000F] font-sans font-normal'>Мы верим, что питомцы — это не просто животные, а полноправные члены вашей семьи. Наша ветеринарная клиника создана с безграничной любовью к животным и стремлением оказывать медицинскую помощь высочайшего уровня.</p>
                    <div className='flex flex-inline gap-3'>
                        <img src={yes} alt="галочка" className='w-[35px] h-[35px]'/>
                        <p className='text-[16px] text-[#02000F] font-sans font-normal'> <span className='font-sans font-semibold'>Индивидуальный подход</span> – Каждое животное уникально. Мы разрабатываем индивидуальные схемы лечения, реабилитации и диетического питания</p>
                    </div>
                    <div className='flex flex-inline gap-3'>
                        <img src={yes} alt="галочка" className='w-[35px] h-[35px]'/>
                        <p className='text-[16px] text-[#02000F] font-sans'> <span className='font-sans font-semibold'>Безопасность и контроль</span> – Мы обеспечиваем высшие стандарты ветеринарной помощи. Все помещения клиники строго соответствуют медицинским нормам стерильности и находятся под постоянным наблюдением врачей.</p>
                    </div>
                </div>
            </main>
        </section>
    )
    
}