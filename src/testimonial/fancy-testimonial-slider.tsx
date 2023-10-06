'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router';
import { Background } from '@/background/Background';


interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

export default function FancyTestimonialsSlider({  }: { }) {
  const testimonials: Testimonial[] = [
    {
      img: "/assets/images/PabloGodoy.webp",
      quote: "Es muy importante acceder a la trazabilidad de las órdenes, como a una información clara y transparente de las liquidaciones. Los años de experiencia que están detrás de Huaquen Export y sus personas, me dan esa confianza.",
      name: 'R. Cortés',
      role: ''
    },
    {
      img: "/assets/images/PabloGodoy.webp",
      quote: "Es muy importante que la fruta sea procesada de forma adecuada para que llegue a destino según las características y exigencias del consumidor local y los respectivos distribuidores. Esa preocupación caracteriza a Huaquen Export, lo cual hace que la exportadora esté al servicio de productores, comercializadores y consumidor final.",
      name: 'K. Rodríguez',
      role: ''
    },
    {
      img: "/assets/images/PabloGodoy.webp",
      quote: "Es importante que una empresa exportadora no sólo lleve tu fruta a destino, sino que además se preocupe de estar en la recepción de la misma en el destino, velando para que las condiciones planificadas se cumplan, o bien reaccionando de inmediato ante algún inconveniente. Por eso destaco a Huaquen Export y su gestión de intermediación.",
      name: 'E. Jiménez',
      role: ''
    }
  ]
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const autorotateTiming: number = 7000

  const router = useRouter();

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : active => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement) testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])  

  return (
    <Background color="bg-gray-100">
    <div className="w-full max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900">Testimonios</h2>
      {/* Testimonial image */}
      <div className="relative h-32 my-n2 py-n2">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 ">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 h-full -z-10"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <Image className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={`${router.basePath}${testimonial.img}`} width={56} height={56} alt={testimonial.name} />
              </Transition>
            ))}
            
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-9 transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>

          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</div>
            </Transition>
          ))}

        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap justify-center -m-1.5 mb-5">

        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index ? 'bg-green-500 text-white shadow-green-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
            onClick={() => { setActive(index); setAutorotate(false); }}
          >
            <span>{testimonial.name}</span> <span className={`${active === index ? 'text-indigo-200' : 'text-slate-300'}`}></span> <span>{testimonial.role}</span>
          </button>
        ))}

      </div>
    </div>
    </Background>
  )
}