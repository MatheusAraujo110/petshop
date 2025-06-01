import Image from "next/image"
import golden from "../../../public/golden.png"
import natural from "../../../public/natural.png"
import primier from "../../../public/primier.png"
import royal from "../../../public/royal.png"
import whiskas from "../../../public/whiskas.png"
import { FacebookLogoIcon, InstagramLogoIcon, TwitterLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

const brands = [
    { name: "Golden", logo: golden },
    { name: "Formula Natural", logo: natural },
    { name: "Primier", logo: primier },
    { name: "Royal Canin", logo: royal },
    { name: "Whiskas", logo: whiskas },
    { name: "Golden", logo: golden },
]

export function Footer() {
    return (
        <section className="bg-[#04201e] py-16 text-white">
            <div className="container mx-auto px-4">
                <div className="border-b border-white/20 pb-8">
                    <h4 className="text-3xl font-semibold mb-8 text-center">Marca que trabalhamos</h4>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                        {brands.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                                <Image
                                    src={item.logo}
                                    alt="logo"
                                    width={200}
                                    height={100}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>

                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Pet Shop</h3>
                        <p className="mb-4">Cuidando do seu melhor amigo com amore e dedicação.</p>
                        <a
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogoIcon className="w-5 h-5" />
                            Contato via WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contato</h3>
                        <p className="mb-4">Rua dos Pets, 123</p>
                        <p>Cidade, Estado, CEP: 12345-678</p>
                        <p>Tel: (11) 1234-5678</p>
                        <p>Email: contato@petshop.com</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-3">Redes Sociais</h3>
                        <div className="flex gap-5">
                            <a href="#">
                                <FacebookLogoIcon className="w-8 h-8" color="#0000ff"/>
                            </a>
                            <InstagramLogoIcon className="w-8 h-8" color="#fff"/>
                            <TwitterLogoIcon className="w-8 h-8" color="#006aff"/>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}