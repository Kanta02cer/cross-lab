export default function CommunitySection() {
  const communities = [
    {
      name: '入居者コミュニティ',
      description: '多様な業界・専門性を持つ起業家が集まり、知見を共有し合うネットワーク。定期的な交流イベントで新たなビジネス機会を創出します。',
      icon: 'ri-team-line'
    },
    {
      name: '学生コミュニティ',
      description: '起業に興味を持つ学生が集い、実践的に学べる環境。現役起業家からのメンタリングを受けながら、アイデアを形にしていきます。',
      icon: 'ri-graduation-cap-line'
    },
    {
      name: 'AI知財ラボ',
      description: '特許AIを活用した知財戦略の研究・実践コミュニティ。最新の知財トレンドを学び、自社の知的財産を戦略的に構築します。',
      icon: 'ri-brain-line'
    }
  ];

  return (
    <section id="community" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 observe-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cyan-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
            COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6 px-4">
            イノベーションを生むエコシステム
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto px-4">
            新たなイノベーションを生むべくコミュニティを運営しております
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {communities.map((community, index) => (
            <div
              key={community.name}
              className="group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-cyan-600 transition-all duration-300 group-hover:scale-110">
                <i className={`${community.icon} text-3xl sm:text-4xl text-white`}></i>
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {community.name}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 leading-relaxed text-sm mb-4 sm:mb-6 px-2">
                {community.description}
              </p>
              
              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-cyan-400 font-medium text-sm hover:text-cyan-300 transition-colors group/link whitespace-nowrap"
              >
                参加する
                <i className="ri-arrow-right-line ml-2 group-hover/link:translate-x-1 transition-transform"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Visual Element - Replace Stats */}
        <div className="mt-16 sm:mt-20 pt-16 sm:pt-20 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto px-4">
              起業家、学生、投資家が集まり、<br className="hidden sm:block" />
              新たな価値を共創するコミュニティ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
