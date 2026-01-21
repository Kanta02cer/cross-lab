export default function InnovationAreasSection() {
  const areas = [
    {
      title: '発明創出',
      description: 'AI時代のスタートアップ知財戦略支援。特許AIによる高速な権利化',
      icon: 'ri-lightbulb-line',
      gradient: 'from-blue-600 to-indigo-700'
    },
    {
      title: '先端医療',
      description: 'iPS細胞を活用した再生医療及びオンライン診療の社会実装拠点',
      icon: 'ri-heart-pulse-line',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: '街づくり',
      description: '不動産再活用×蓄電所設置。地域課題をテクノロジーで解決',
      icon: 'ri-building-line',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: '創業支援',
      description: '銀行出身者による資金調達支援。ファイナンス戦略から事業スケールまで伴走',
      icon: 'ri-rocket-line',
      gradient: 'from-blue-700 to-indigo-800'
    },
    {
      title: 'メディア',
      description: '情報発信とコミュニティ形成を通じて、イノベーションエコシステムを構築',
      icon: 'ri-team-line',
      gradient: 'from-cyan-600 to-blue-700'
    },
    {
      title: 'グローカル展開',
      description: '地方から世界へ直結するビジネスラインの創出',
      icon: 'ri-global-line',
      gradient: 'from-indigo-700 to-blue-800'
    }
  ];

  return (
    <section id="innovation" className="py-16 sm:py-20 md:py-24 bg-white observe-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
            INNOVATION AREAS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            注力する6つの領域
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            多様な分野でイノベーションを創出し、社会に新たな価値を提供します
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br ${area.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${area.icon} text-2xl sm:text-3xl text-white`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {area.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
