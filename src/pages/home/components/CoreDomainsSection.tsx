export default function CoreDomainsSection() {
  const domains = [
    {
      title: 'イノベーション創出',
      description: 'DEEP TECHから社会課題解決まで、多様な領域で新たな価値を生み出します。知財戦略とテクノロジーを武器に、スタートアップの成長を加速させます。',
      icon: 'ri-lightbulb-flash-line',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      title: '次世代育成',
      description: '学生と起業家が出会い、学び合う環境を提供。実践的なメンタリングと交流を通じて、未来のイノベーターを育成します。',
      icon: 'ri-seedling-line',
      gradient: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section id="domains" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 observe-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
            CORE DOMAINS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            2つの理念
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            CROSS LABが大切にする2つの軸
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-gradient-to-br ${domain.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${domain.icon} text-3xl sm:text-4xl text-white`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {domain.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
