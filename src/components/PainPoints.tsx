import React from 'react';
import { motion } from 'motion/react';
import { summerCampData } from '../lib/mockData';

export default function PainPoints() {
  const { painPoints } = summerCampData;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            您的孩子，是否也面臨這些
            <span className="text-primary mx-2">暑假危機</span>？
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            國二升國三是成績分水嶺，別讓寶貴的暑假在混亂中度過。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
