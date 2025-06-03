import React from 'react';
import { motion } from 'framer-motion';

const MethodologySection = ({ methodology }) => {
  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Como fazemos</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Nossa metodologia Sprint Consultivo garante entregas rápidas e eficazes, com resultados mensuráveis em tempo recorde.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 opacity-50" style={{zIndex:0}}></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative" style={{zIndex:1}}>
            {methodology.map((step, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-2 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center">
               <p className="text-2xl text-blue-700 font-semibold p-8">Visualização Esquemática da Metodologia Ágil</p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MethodologySection;