import { Header } from './Header';
import { Link } from "react-router-dom";
import background from '../assets/images/background.png'
import bant from '../assets/images/bant.png'
import line from '../assets/images/line.png'
import klubok from '../assets/images/klubok.png'
export const Banner = () =>{
    return(
        <section 
        style={{backgroundImage: `url(${background})`}}
        className='relative w-full min-h-screen bg-no-repeat bg-bottom bg-[length:100%_auto] overflow-hidden'>
            <div className='max-w-[1440px]'>
                <Header />
                <img src={bant} alt="бант" className='absolute w-[137px] object-contain left-[4%] top-[20%]'/>
                <img src={klubok} alt="клубок" className='absolute w-[220px] object-contain right-[3%] top-[15%]'/>
                <img src={line} alt="линия" className='absolute w-[321px] object-contain right-[2%] top-[50%]'/>
                <div className='relative flex items-start flex-col z-10 max-w-[800px] ml-[3%]'>
                    <h1 className='text-[84px] text-[#02000F] font-sans font-bold leading-tight'>Добро пожаловать <br/>в <span className='text-[#F8721F]'>ВетСферу</span></h1>
                    <ul className='list-disc list-inside mt-2 text-[18px] text-[#02000F] ml-[4%] space-y-2'>
                        <li>Мы заботимся о здоровье ваших питомцев</li>
                        <li>Предоставляем полный спектр ветеринарных услуг </li>
                        <li>В нашей клинике создана спокойная атмосфера</li>
                    </ul>
                    <div className='flex items-start px-5 gap-5 mt-4 ml-25'>
                        
                        <a href="#" className='bg-[#F8721F] text-[#FFFFFF] text-[16px] w-[146px] h-[56px] rounded-[50px] text-center p-3.5 hover:bg-[#f2a982] transition-colors duration-150'>Подробнее</a>
                        <Link to="/auth" className="bg-[#02000F] text-[#FFFFFF] text-[16px] w-[235px] h-[56px] rounded-[50px] text-center p-3.5 hover:bg-[#5f5d5c] transition-colors duration-150 inline-flex items-center justify-center">Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}