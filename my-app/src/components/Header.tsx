import logo from '../assets/icons/logo.png'
import call from '../assets/icons/call orange.png'

export const Header = () => {
    return(
        <header className="flex items-start gap-2 px-8 py-3 ml-1">
            <div className="flex flex-col gap-2">
                <img src={logo} alt="Лого" className="h-[90px] object-contain"/>
                <div className='flex items-center gap-3 ml-6'>
                    <img src={call} alt="телефон" className="w-[48px] h-[48px]" />
                    <div className="flex flex-col leading-tight">
                        <span className="text-[24px] text-[#FF803B] font-medium">Телефон</span>
                        <a href="tel:+001203456789" className="text-[#FF803B] text-[18px]">+00-(120) 3456 789</a>
                    </div>
                </div>
            </div>
            <nav className='flex items-center gap-15 text-[20px] text-[#02000F] font-sans font-medium mt-6'>
                <a href="#about" className='hover:text-[#F37E36] transition-colors duration-150'>О нас</a>
                <a href="#team" className='hover:text-[#F37E36] transition-colors duration-150'>Наша команда</a>
                <a href="#patients" className='hover:text-[#F37E36] transition-colors duration-150'>Пациенты</a>
                <a href="#services" className='hover:text-[#F37E36] transition-colors duration-150'>Услуги</a>
                <a href="#reviews" className='hover:text-[#F37E36] transition-colors duration-150'>Отзывы</a>
            </nav>
        </header>
    )
}