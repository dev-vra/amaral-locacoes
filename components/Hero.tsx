import React from "react";

interface HeroProps {
  whatsappLink: string;
}

const Hero: React.FC<HeroProps> = ({ whatsappLink }) => {
  return (
    <section
      id="home"
      className="relative pt-20 h-[600px] md:h-[750px] flex items-center bg-slate-900 overflow-hidden group"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
          alt="Maquinário pesado Amaral Locações"
          className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Força que move, <br />
            tecnologia que{" "}
            <span className="text-amaral-yellow underline decoration-4 underline-offset-8">
              entrega.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium leading-relaxed max-w-2xl italic opacity-90">
            "Potência e Eficiência em cada Movimento."
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-amaral-yellow hover:bg-white text-slate-900 px-10 py-5 rounded-sm font-black text-lg transition-all shadow-xl transform hover:-translate-y-1"
            >
              SOLICITAR ORÇAMENTO
              <i className="fa-solid fa-chevron-right text-sm"></i>
            </a>

            <a
              href="#sobre"
              className="flex items-center justify-center gap-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 px-10 py-5 rounded-sm font-bold text-lg transition-all"
            >
              CONHEÇA A EMPRESA
            </a>
          </div>

          {/* Experience Badge */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-amaral-yellow">
                19+
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-tighter font-bold">
                Anos de Experiência
              </span>
            </div>
            <div className="h-10 w-px bg-gray-700"></div>
            <p className="text-sm text-gray-400 max-w-[200px] leading-tight">
              Referência em infraestrutura industrial em Rondonópolis e região.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
