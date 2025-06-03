import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ formData, setFormData, handleSubmit, MailIcon, PhoneIcon, SendIcon, ButtonComponent }) => {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Vamos conversar</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Pronto para transformar sua empresa? Entre em contato e descubra como podemos acelerar seus resultados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                  placeholder="Conte-nos sobre seu desafio..."
                  required
                />
              </div>
              
              <ButtonComponent
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Enviar Mensagem
                <SendIcon className="ml-2 w-5 h-5" />
              </ButtonComponent>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gradient-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contato Direto</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MailIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">solutions.pitchlab@gmail.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">WhatsApp: (11) 99999-9999</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <ButtonComponent
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  WhatsApp
                </ButtonComponent>
                
                <ButtonComponent
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  onClick={() => window.open('https://calendly.com/pitchlab', '_blank')}
                >
                  Agendar Reunião
                </ButtonComponent>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 max-w-full mx-auto rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center">
               <p className="text-xl text-blue-700 font-semibold p-8">Construindo o Futuro, Juntos.</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;