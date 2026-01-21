export default function CompanySection() {
  const companyInfo = [
    { label: '会社名', value: '株式会社CROSS LAB' },
    { label: '代表取締役社長', value: '山野 礼真' },
    { label: '所在地', value: '〒102-0083 東京都千代田区麹町6丁目2-1 麹町サイトビル 4階' },
    { label: '設立', value: '2025年1月' },
    { label: '資本金', value: '100万円' }
  ];

  return (
    <section id="company" className="py-16 sm:py-20 md:py-24 bg-white observe-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
            COMPANY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            会社概要
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Company Info */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-100">
            <div className="space-y-6">
              {companyInfo.map((info) => (
                <div key={info.label} className="border-b border-blue-200 pb-4 last:border-0 last:pb-0">
                  <dt className="text-xs sm:text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider">
                    {info.label}
                  </dt>
                  <dd className="text-sm sm:text-base text-gray-900 font-medium">
                    {info.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3267891234567!2d139.73203!3d35.68501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c7c8c8c8c8d%3A0x1234567890abcdef!2z44CSMTAyLTAwODMg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy66bq555S677yW5LiB55uu77yS4oiS77yR!5e0!3m2!1sja!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CROSS LAB Location - 麹町サイトビル"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
