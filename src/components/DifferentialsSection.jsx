import React from 'react';
import { motion } from 'framer-motion';

const DifferentialsSection = ({ differentials }) => {
  const stats = [
    { title: "Agilidade", description: "Projetos concluídos com rapidez e eficiência." },
    { title: "Impacto", description: "Resultados significativos para nossos clientes." },
    { title: "Inovação", description: "Soluções criativas e à frente do mercado." },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Por que a Pitchlab</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Combinamos a experiência acadêmica de elite com metodologias inovadoras para entregar resultados excepcionais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-md">
                {differential.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{differential.title}</h3>
              <p className="text-gray-600">{differential.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
              <h4 className="text-2xl font-bold gradient-text mb-2">{stat.title}</h4>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DifferentialsSection;