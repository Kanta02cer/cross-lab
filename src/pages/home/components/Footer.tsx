export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: '理念', href: '#domains' },
    { name: '注力領域', href: '#innovation' },
    { name: '施設紹介', href: '#facilities' },
    { name: 'コミュニティ', href: '#community' },
    { name: '会社概要', href: '#company' },
    { name: 'お問い合わせ', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://static.readdy.ai/image/b5df369270f37f8723a252918bb84c70/ccdca34590fd8e42b03b623ec963d49e.png" 
                alt="CROSS LAB" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              出会いからイノベーションを生み出すインキュベーション施設
            </p>
            <p className="text-white/60 text-xs">
              〒102-0083<br />
              東京都千代田区麹町6丁目2-1<br />
              麹町サイトビル 4階
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white active:text-white transition-colors text-sm inline-flex items-center group min-h-[44px] py-2 touch-manipulation"
                  >
                    <i className="ri-arrow-right-s-line mr-1 group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">施設サイト</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://crossoneoffice.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white active:text-white transition-colors text-sm inline-flex items-center group min-h-[44px] py-2 touch-manipulation"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  cross hub
                </a>
              </li>
              <li>
                <a
                  href="https://crossoneoffice.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white active:text-white transition-colors text-sm inline-flex items-center group min-h-[44px] py-2 touch-manipulation"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  cross one
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-xs sm:text-sm">
              © {currentYear} CROSS LAB Inc. All rights reserved.
            </p>
            <a
              href="https://readdy.ai/?ref=logo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
