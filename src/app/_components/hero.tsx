import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import DogImg from "../../../public/hero-dog.webp"
import Image from 'next/image'

export function Hero() {
    return (
        <section className="bg-teal-600 text-white relative overflow-hidden">
            <div>
                <Image
                    src={DogImg}
                    alt='doguinho'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 relative'>
                    <div className='space-y-6'>
                        <h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
                            data-aos="fade-down"
                        >
                            Seu pet merece cuidado, carinho e atenção especial.
                        </h1>
                        <p
                            className="lg:text-lg"
                            data-aos="fade-right"
                        >
                            Oferecemos os melhores serviços para garantir o bem-estar e a flicidade do seu amigo de quatro patas.
                        </p>
                        <a
                            data-aos="flip-left"
                            target='_blank'
                            href={`https://wa.me/5521964916565?text=Olá, vim pelo site e gostaria de mais informações!`}
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                        <div
                            className="flex items-center justify-center mt-8"
                            data-aos="fade-right"
                        >
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={DogImg}
                            alt='hero-dog'
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vh, 50vw'
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}
