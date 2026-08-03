import { motion } from 'framer-motion';
import { features } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function Features() {
  const { colors } = useTheme();
  return (
    <section id="features" className="py-20" style={{ background: colors.pageBg }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span
            className="text-sm font-bold"
            style={{ color: colors.secondary }}
          >
            المزايا
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mt-3"
            style={{ color: colors.primary }}
          >
            كل ما تحتاجه في مكان واحد
          </h2>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-lg cursor-default"
              style={{
                background: colors.cardBg,
                border: `1px solid ${colors.primary}20`,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: colors.primary }}
              >
                <f.icon size={33} color="#fff" />
              </div>

              <h3
                className="font-bold mb-2"
                style={{ color: colors.primary }}
              >
                {f.title}
              </h3>

              <p className="text-sm" style={{ color: colors.textMuted }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}