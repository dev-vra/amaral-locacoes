import React from "react";

interface FleetProps {
  whatsappLink: string;
}

const Fleet: React.FC<FleetProps> = ({ whatsappLink }) => {
  const categories = [
    {
      title: "Empilhadeiras",
      specs: "Disponível em 3.5, 4.5 e 7.0 toneladas",
      desc: "Locação estratégica para movimentação de materiais pesados com tecnologia e robustez.",
      image: "/empilhadeira.png",
    },
    {
      title: "Pás Carregadeiras",
      specs: "Disponível em 11, 12, 14 e 18 toneladas",
      desc: "Líderes em economia de combustível e capacidade de levantamento para fluxo de carga.",
      image: "/pa.png",
    },
    {
      title: "Mini Reto Escavadeiras",
      specs: "Equipamento Compacto",
      desc: "Projetado para máxima eficiência em espaços confinados e movimentação ágil.",
      image: "/mini.png",
    },
    {
      title: "Escavadeiras Hidráulicas",
      specs: "Disponível em 13, 20 e 22 toneladas",
      desc: "Escavação de alto volume e precisão técnica para infraestrutura pesada.",
      image: "/retrocat2.png",
    },
  ];

  return (
    <section id="maquinas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">
            Alta Performance
          </h2>
          <p className="text-xl text-gray-600 border-l-8 border-amaral-yellow pl-6">
            Dispomos de uma frota moderna e diversificada para atender grandes
            demandas industriais e de infraestrutura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col md:flex-row rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-center">
                <h4 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">
                  {cat.title}
                </h4>
                <p className="text-amaral-yellow text-xs font-bold uppercase mb-4 tracking-widest">
                  {cat.specs}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {cat.desc}
                </p>
                <a
                  href={whatsappLink}
                  className="inline-flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-amaral-yellow transition-colors"
                >
                  Consultar Disponibilidade
                  <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
