import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Flame, Calendar } from 'lucide-react';
import { summerCampData } from '../lib/mockData';

export default function HeroSection() {
  const { hero } = summerCampData;

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Elements - More angular/sharp for "strict" feel */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-bl-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-50/50 rounded-tr-[80px] -z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-dark text-white font-bold text-sm mb-6 tracking-wide shadow-md">
              <Flame className="w-4 h-4 text-primary" />
              {hero.badge}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-dark leading-[1.15] mb-6 tracking-tight">
              {hero.title}
              <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-primary">{hero.highlight}</span>
                <span className="absolute bottom-1 left-0 w-full h-4 bg-black/5 -z-0 transform -skew-x-12"></span>
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-6">
              {hero.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl font-bold text-primary font-mono">{stat.value}</p>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                {hero.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-dark border-2 border-gray-100 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5 text-gray-400" />
                查看課表
              </button>
            </div>
          </motion.div>

          {/* Image Content - More focused/serious image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Student studying hard"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 filter saturate-[0.85] contrast-[1.1]"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Urgent Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-dark text-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">嚴格管理</h3>
                    <p className="text-sm text-gray-300 leading-snug">
                      手機統一保管，杜絕分心。
                      <br/>
                      今日事今日畢，沒做完不准回家。
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
