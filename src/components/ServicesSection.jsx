import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = ({ services }) => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">O que fazemos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transformamos desafios complexos em oportunidades de crescimento através de soluções inteligentes e resultados mensuráveis.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="gradient-card rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-red-500">Problema:</span>
                  <p className="text-gray-600">{service.problem}</p>
                </div>
                <div>
                  <span className="font-semibold text-blue-500">Solução:</span>
                  <p className="text-gray-600">{service.solution}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-500">Resultado:</span>
                  <p className="text-gray-600">{service.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;