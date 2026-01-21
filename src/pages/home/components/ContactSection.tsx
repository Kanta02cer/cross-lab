export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 observe-fade opacity-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
            CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            お問い合わせ
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            入居相談や施設見学のご希望は、<br className="sm:hidden" />
            LINEからお気軽にお問い合わせください
          </p>
        </div>

        {/* CTA Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-100">
          <div className="mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
              <i className="ri-message-3-line text-3xl sm:text-4xl text-white"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              LINEで相談する
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              入居相談・内覧予約・その他お問い合わせ
            </p>
          </div>

          {/* LINE Button */}
          <a
            href="https://line.me/R/ti/p/@crosslab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:shadow-2xl transition-all hover:scale-105 group text-base sm:text-lg font-bold whitespace-nowrap cursor-pointer w-full sm:w-auto"
          >
            <i className="ri-line-fill text-2xl mr-3"></i>
            LINEで入居・内覧を相談する
            <i className="ri-arrow-right-line ml-3 group-hover:translate-x-1 transition-transform"></i>
          </a>

          {/* Additional Info */}
          <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-blue-100">
            <p className="text-xs sm:text-sm text-gray-500">
              受付時間：平日 10:00 - 18:00<br className="sm:hidden" />
              <span className="hidden sm:inline"> / </span>
              お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
