"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

const services = [
    {
        title: "Banho e Tosa",
        description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
        duration: "1h",
        price: "$50",
        icon: <Scissors />,
        linkText: "Olá vi no site sobre banho e tosa e gostaria de mais informações..."
    },
    {
        title: "Consulta veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnósticos de doenças, aplicação de vacinas obrigatórias.",
        duration: "1h",
        price: "$45",
        icon: <Syringe />,
        linkText: "Olá vi no site sobre a consulta veterinária e gostaria de mais informações..."
    },
    {
        title: "Táxi pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop, clínica veterinárias ou outro locais. Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais.",
        duration: "2h",
        price: "$80",
        icon: <CarTaxiFront />,
        linkText: "Olá vi no site sobre o táxi pet e gostaria de mais informações..."
    },
    {
        title: "Hotel para pets",
        description: "Serviços de hospedagem para animais de estimação ideal para quando o tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
        duration: "1h",
        price: "$60",
        icon: <Hotel />,
        linkText: "Olá vi no site sobre hotel para pets e gostaria de mais informações..."
    }
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev()
    }

    function scrollNext() {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12">
                    SERVIÇOS
                </h2>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3 select-none">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div className="">
                                                    <h3 className="font-bold text-xl mb-1 my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                            <div className="flex gap-2 text-sm">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>

                                            <a
                                                href="#"
                                                className="flex items-center justify-center gap-2"
                                            >
                                                <WhatsappLogoIcon className="w-6 h-6" color="#22c55e" />
                                                Entrar em contato
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollPrev}>
                        <ChevronLeft
                            className="w-6 h-6 text-gray-600"
                        />
                    </button>

                    <button
                        className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
                        onClick={scrollNext}>
                        <ChevronRight
                            className="w-6 h-6 text-gray-600"
                        />
                    </button>

                </div>
            </div>
        </section>
    )
}