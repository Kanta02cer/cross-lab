export default function FacilitiesSection() {
  const facilities = [
    {
      name: 'cross hub',
      floor: '6F / 7F',
      description: '起業家が集まるシェアオフィス/コワーキング',
      features: ['24時間利用可能', 'ドリンク飲み放題', '高速Wi-Fi完備', '会議室利用可'],
      image: 'https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/98e424273a26f65f60417be57d81db92.jpeg',
      link: 'https://crossoneoffice.site/',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Event Space',
      floor: '5F',
      description: 'ピッチイベントやセミナーに最適なプレゼンテーション設備完備のスペース',
      features: ['フレキシブルレイアウト', 'プロジェクター完備', '音響設備', '最大50名収容'],
      image: 'https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/49dd550db94b164553339fd61a480ea7.jpeg',
      link: 'https://crossoneoffice.site/plan/',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'cross one',
      floor: '3F',
      description: '学生間交流や起業家との連携が可能な学生無料オフィス',
      features: ['学生無料利用', 'リラックスソファエリア', '起業家交流機会', 'オープンスペース'],
      image: 'https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/22189e30d349b0bd01b239e9c6c0d128.jpeg',
      link: 'https://crossoneoffice.com/',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  return (
    <section id="facilities" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 observe-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-widest uppercase">
            FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            3つの施設
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            麹町サイトビルの3F/5F/6F/7Fの4フロア500㎡の広々空間で<br className="hidden sm:block" />
            3つの施設を運営しています
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-8 sm:space-y-12">
          {facilities.map((facility, index) => (
            <div
              key={facility.name}
              className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className={`absolute top-4 left-4 sm:top-6 sm:left-6 bg-gradient-to-r ${facility.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold`}>
                    {facility.floor}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {facility.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {facility.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {facility.features.map((feature) => (
                    <div key={feature} className="flex items-center text-xs sm:text-sm text-gray-700">
                      <i className="ri-check-line text-blue-600 mr-2 text-base sm:text-lg flex-shrink-0"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={facility.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center bg-gradient-to-r ${facility.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all hover:scale-105 group/btn text-sm sm:text-base font-medium whitespace-nowrap cursor-pointer`}
                >
                  詳細を見る
                  <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
