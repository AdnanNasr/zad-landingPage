import { colors, links, qrCodeSrc } from '../data/siteData';
import {FaGooglePlay} from "react-icons/fa"
export default function DownloadCTA() {
  return (
    <section
      className="relative overflow-hidden py-24 text-center"
      style={{ background: colors.primary }}
    >
      {/* Background Glow */}
      <div
        className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-20"
        style={{ background: colors.secondary }}
      />

      <div
        className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-10"
        style={{ background: colors.secondary }}
      />

      <div className="relative max-w-3xl mx-auto px-6">

        {/* Title */}
        <div className="mb-5">
          <span
            className="text-sm font-semibold"
            style={{ color: colors.secondary }}
          >
            ابدأ الآن
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-5 leading-tight">
            زادك اليومي على بُعد تحميل واحد
          </h2>

          <p
  className="mt-5 text-base leading-8 max-w-2xl mx-auto"
  style={{ color: 'rgba(255,255,255,0.8)' }}
>
  انضم إلى مستخدمي زاد المسلم، وابدأ رحلتك مع القرآن والذكر والصلاة اليوم.
</p>
        </div>

        {/* Download + QR */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

          {/* Download Button */}
          <a
            href={links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: colors.secondary,
              color: colors.primary,
              boxShadow:` 0 12px 35px ${colors.secondary}55`,
            }}
          >
            حمّل من Google Play {" "}
            <FaGooglePlay size={24}/>
          </a>

          {/* QR */}
          {qrCodeSrc && (
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-3xl p-3 shadow-xl">
                <img
                  src={qrCodeSrc}
                  alt="امسح لتحميل زاد المسلم"
                  className="w-28 h-28"
                />
              </div>

              <span className="text-white/60 text-sm mt-3">
                امسح للتحميل المباشر
              </span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}