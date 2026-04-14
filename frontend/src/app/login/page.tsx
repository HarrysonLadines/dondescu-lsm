"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { GoogleIcon, FacebookIcon } from '../../components/icons/getIcons';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.9]
    }
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const formVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.4
    }
  }
};

export default function LoginPage() {
  return (
    <div className="relative flex flex-col min-h-screen font-sans bg-[#0b4f53] text-white selection:bg-white/20 overflow-x-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] bg-white/5 rounded-full blur-[100px]"
        />
      </div>

      <Header />

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 py-10 md:py-20 max-w-[1440px] mx-auto w-full gap-12 md:gap-20"
      >
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-10 text-center md:text-left">
          <motion.div variants={logoVariants} animate="float">
            <Image
              src="/dondescu-logo-blanco.png"
              alt="Don Descu Blanco"
              width={180}
              height={180}
              className="w-24 sm:w-32 md:w-48 lg:w-56 h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.8] tracking-tighter m-0 uppercase"
            >
              Don<br />Descu
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              className="h-[2px] bg-white/30 mt-4 md:mt-6 mb-2 max-w-[120px] md:max-w-none"
            />
            <motion.div
              variants={itemVariants}
              className="flex justify-between w-full max-w-[120px] md:max-w-none text-base md:text-xl font-light tracking-[0.4em] text-white/60 uppercase"
            >
              <span>L</span><span>S</span><span>M</span>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={formVariants}
          className="w-full max-w-sm flex flex-col bg-white/5 md:bg-white/3 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <motion.div
            initial={{ left: '-100%' }}
            animate={{ left: '100%' }}
            transition={{ delay: 1, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-25deg] pointer-events-none"
          />

          <motion.h2 variants={itemVariants} className="text-3xl font-black mb-10 tracking-tight text-white uppercase text-center md:text-left">
            Inicia sesión
          </motion.h2>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/60 ml-1">correo electrónico</label>
              <motion.input
                whileFocus={{ borderColor: "rgba(255,255,255,1)" }}
                type="email"
                className="bg-white/5 border-2 border-white/20 px-4 py-3 rounded-xl text-white outline-none transition-colors placeholder:text-white/20 focus:bg-white/10"
                placeholder=""
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/60 ml-1">contraseña</label>
              <motion.input
                whileFocus={{ borderColor: "rgba(255,255,255,1)" }}
                type="password"
                className="bg-white/5 border-2 border-white/20 px-4 py-3 rounded-xl text-white outline-none transition-colors focus:bg-white/10"
                placeholder=""
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)", color: "#0b4f53" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="cursor-pointer mt-4 bg-white/90 text-[#0b4f53] py-4 text-xs font-black rounded-xl uppercase tracking-[0.2em] transition-all shadow-lg"
            >
              iniciar sesión
            </motion.button>
          </form>

          <motion.div variants={itemVariants} className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-[9px] uppercase tracking-[0.2em] font-black text-white/40">
              <span className="bg-[#0b4f53] px-4 backdrop-blur-md rounded-full py-1">o continuar con</span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "rgba(255,255,255,1)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="cursor-pointer flex items-center justify-center gap-3 bg-white/95 text-[#0b4f53] py-3.5 text-xs font-black rounded-xl uppercase tracking-widest transition-all shadow-md group"
            >
              <GoogleIcon className="w-5 h-5 transition-transform group-hover:rotate-12" />
              google
            </motion.button>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2, backgroundColor: "#1c80ff" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="cursor-pointer flex items-center justify-center gap-3 bg-[#1877F2] text-white py-3.5 text-xs font-black rounded-xl uppercase tracking-widest transition-all shadow-md group"
            >
              <FacebookIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              facebook
            </motion.button>

            <motion.button
              variants={itemVariants}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="cursor-pointer mt-4 bg-transparent text-white border-2 border-white/20 py-3.5 text-xs font-black rounded-xl uppercase tracking-widest transition-all opacity-80 hover:opacity-100"
            >
              crear cuenta nueva
            </motion.button>
          </div>
        </motion.div>
      </motion.main>

      <Footer />
    </div>
  );
}