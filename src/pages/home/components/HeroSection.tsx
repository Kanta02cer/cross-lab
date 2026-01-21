import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/d0dae334af5731e3f87b51d2fd5a4164.jpeg"
          alt="CROSS LAB Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Blue Filter */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/25 via-blue-800/20 via-indigo-900/25 to-blue-900/30"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center group">
              <img 
                src="https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/ccdca34590fd8e42b03b623ec963d49e.png" 
                alt="CROSS LAB" 
                className="h-16 sm:h-20 md:h-24 w-auto transition-transform group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#domains"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                理念
              </a>
              <a
                href="#innovation"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                注力領域
              </a>
              <a
                href="#facilities"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                施設紹介
              </a>
              <a
                href="#community"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                コミュニティ
              </a>
              <a
                href="#company"
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                会社概要
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all hover:scale-105 text-sm font-medium whitespace-nowrap cursor-pointer"
              >
                お問い合わせ
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="メニュー"
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full pt-20">
        <div className="observe-fade opacity-0">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
            <span className="text-white text-xs sm:text-sm font-medium">
              東京・麹町のインキュベーション施設
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
            出会いからイノベーションを<br />
            生み出すインキュベーション施設
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            CROSS LABは、若手起業家や学生の間でイノベーションが生まれ、<br className="hidden sm:block" />
            育て上げる拠点としてスタートアップを支えます
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-gray-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 group text-base sm:text-lg font-medium whitespace-nowrap cursor-pointer"
            >
              入居相談をする
              <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
            <a
              href="#facilities"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-white/20 transition-all hover:scale-105 text-base sm:text-lg font-medium whitespace-nowrap cursor-pointer"
            >
              施設を見る
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/70 text-xs mb-2">SCROLL</span>
          <i className="ri-arrow-down-line text-white/70 text-xl"></i>
        </div>
      </div>
    </section>
  );
}
