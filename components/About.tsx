import React from "react";

const About: React.FC = () => {
  const dna = [
    {
      title: "Segurança",
      desc: "Prioridade absoluta em nossas operações e com nossos colaboradores.",
    },
    {
      title: "Agilidade",
      desc: "Rapidez na entrega e execução para que sua obra ou indústria nunca pare.",
    },
    {
      title: "Qualidade Técnica",
      desc: "Equipamentos revisados e tecnologia de ponta em hidrojateamento e elevação.",
    },
    {
      title: "Comprometimento",
      desc: "Foco total na satisfação do cliente e no cumprimento de prazos.",
    },
  ];

  const clients = [
    "EUROCHEM",
    "INPASA",
    "DUO",
    "FERTILIZANTES TOCANTINS",
    "BROOKFIELD ENERGIA",
    "PACAEMBU",
  ];

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amaral-yellow/10 rounded-full -z-10"></div>
            <div className="rounded-lg shadow-2xl border-b-8 border-amaral-yellow overflow-hidden">
              <img
                src="/seguranca.png"
                alt="Operação Amaral Locações"
                className="w-full h-auto object-cover transform scale-125"
              />
            </div>
          </div>

          <div>
            <h2 className="text-slate-900 text-4xl md:text-5xl font-black mb-8 leading-tight">
              SOBRE A <span className="text-amaral-yellow">EMPRESA</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Com mais de <strong>19 anos de experiência</strong>, a AMARAL
                LOCAÇÕES consolidou-se como referência em Rondonópolis e região.
                Unimos tradição e expertise técnica para oferecer soluções
                completas em infraestrutura industrial.
              </p>
              <p>
                Somos parceiros de confiança de grandes empresas em setores
                estratégicos como construção civil, agro, mineração, energia e
                indústria. Nosso compromisso é com a eficiência operacional,
                garantindo equipamentos de última geração e uma equipe técnica
                rigorosamente treinada.
              </p>
            </div>
          </div>
        </div>

        {/* DNA Section */}
        <div className="mb-24">
          <h3 className="text-center text-2xl font-black text-slate-900 mb-12 uppercase tracking-widest">
            ESTÁ EM NOSSO DNA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dna.map((item, idx) => (
              <div
                key={idx}
                className="border-l-4 border-amaral-yellow pl-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diferencial Operacional */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden mb-24 border border-slate-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amaral-yellow/10 rounded-full -mr-32 -mt-32"></div>

          <div className="relative z-10 flex flex-col gap-16">
            {/* Linha 1: Nosso Diferencial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black mb-6 text-slate-900 uppercase">
                  Nosso <span className="text-amaral-yellow">Diferencial</span>
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  Seguimos um cronograma rigoroso de manutenções preventivas
                  baseadas em telemetria e normas dos fabricantes, o que reduz
                  em até <strong>90%</strong> as paradas não planejadas.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amaral-yellow/20 flex items-center justify-center text-amaral-yellow">
                      <i className="fa-solid fa-bolt text-xl"></i>
                    </div>
                    <span className="text-sm font-bold uppercase text-slate-800">
                      Suporte de Proximidade
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-amaral-yellow/20 flex items-center justify-center text-amaral-yellow">
                      <i className="fa-solid fa-gears text-xl"></i>
                    </div>
                    <span className="text-sm font-bold uppercase text-slate-800">
                      Peças Críticas em Estoque
                    </span>
                  </div>
                </div>
              </div>

              {/* Imagem ou Elemento Decorativo (opcional, mantendo layout equilibrado) */}
              <div className="hidden lg:flex justify-end relative">
                <div className="w-full max-w-sm bg-slate-50 rounded-2xl p-8 border-l-4 border-amaral-yellow">
                  <p className="text-slate-900 font-bold text-lg italic">
                    "A máquina parada custa mais do que o reparo. Por isso, a
                    Amaral Locações investe em prevenção."
                  </p>
                </div>
              </div>
            </div>

            {/* Linha 2: Quem confia em nossa força */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gray-200 flex-1"></div>
                <h4 className="text-center text-slate-900 font-black uppercase tracking-widest text-sm">
                  Quem confia em nossa força
                </h4>
                <div className="h-px bg-gray-200 flex-1"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                {[
                  { name: "Eurochem", logo: "/eurochemlogo.webp" },
                  { name: "Inpasa", logo: "/inpasa.png" },
                  { name: "Duo", logo: "/duo.png" },
                  {
                    name: "Fertilizantes Tocantins",
                    logo: "/Fertilizantes-Tocantins-logo.jpg",
                  },
                  { name: "Brookfield Energia", logo: "/brookfield.png" },
                  {
                    name: "Pacaembu",
                    logo: "/construtora pacaembu engenharia.jpg",
                  },
                ].map((client, idx) => (
                  <div
                    key={idx}
                    className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
                  >
                    <img
                      src={client.logo}
                      alt={`Parceiro ${client.name}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PDF CTA */}
        <div className="text-center">
          <a
            href="/apresentacao-amaral.pdf"
            download
            className="inline-flex items-center gap-4 bg-slate-900 text-white hover:bg-amaral-yellow hover:text-slate-900 px-12 py-5 rounded font-black transition-all shadow-2xl group"
          >
            <i className="fa-solid fa-file-pdf text-2xl group-hover:scale-110 transition-transform"></i>
            BAIXAR PORTFÓLIO CORPORATIVO 2026
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
