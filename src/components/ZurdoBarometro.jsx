import { motion } from "motion/react";
import angry from "/angry.png"
const emojiNivel = (nivel) => {
  if (nivel <= 10) return "🧠";
  if (nivel <= 30) return "📢";
  if (nivel <= 50) return "🤔";
  if (nivel <= 70) return "😎";
  if (nivel <= 90) return "🛡️";
  return "💰";
};

const Zurdobarometro = ({ nivel }) => {
  return (
    <div className="w-full max-w-xl mx-auto p-4 rounded-xl ">
      <div className="flex justify-end mb-2 text-sm font-bold text-gray-600">
        
        <span className="flex items-center gap-1 text-white"><img className="w-8 h-8" src={angry} alt="" /></span>
      </div>

      <div className="relative h-6 bg-gray-200 rounded-full border-2 border-white overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-red-500 "
          initial={{ width: 0 }}
          animate={{ width: `${nivel}%` }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute top-0 -translate-y-2 text-xl"
          initial={{ x: 0 }}
          animate={{ x: `${nivel}%` }}
          transition={{ duration: 1 }}
        >
          {//emojiNivel(nivel)
          }
        </motion.div>
      </div>
<p className="text-center text-white font-bold">Zurdo extremo</p>
   
    </div>
  );
};

export default Zurdobarometro;
