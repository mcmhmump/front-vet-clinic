import wave from '../assets/images/wave.png'
export const AboutUs = () => {
    return (
        <section className="relative bg-[#F6F2ED] mt-13">
            <img src={wave} alt="волна" className='absolute top-[-1%] rotate-180 object-contain w-[1550px] '/>
            <div className="flex flex-col items-start ">
                <div className="border-[#F8721F] rounded-[50px] border-[2px] mt-100 ml-15">
                    <p className="text-[24px] text-[#F8721F] text-center p-2 w-[190px] h-[50px]">О нас</p>
                </div>
            </div>
        </section>
    )
    
}