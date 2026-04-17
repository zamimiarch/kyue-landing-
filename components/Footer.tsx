import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-3">
              <Image
                src="/logo/echoed_curves_lockup_v2.png"
                alt="Kyue"
                width={100}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              A phase-aware copilot for women. Connects your cycle to your
              wearable data so you stop wondering why some weeks you can do
              anything and other weeks you can barely function.
            </p>
            <p className="font-body text-xs text-muted mt-4 italic">
              Built by someone who got a red recovery score on day 26 one too many times.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-muted mb-4">Product</p>
            <ul className="space-y-2">
              {[
                ['Features', '#features'],
                ['Science', '#science'],
                ['FAQ', '#faq'],
                ['Join Beta', '#beta'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-muted mb-4">Connect</p>
            <ul className="space-y-2">
              {[
                ['@kyueapp', 'https://twitter.com/kyueapp'],
                ['Instagram', 'https://instagram.com/kyueapp'],
                ['hello@kyueapp.com', 'mailto:hello@kyueapp.com'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="font-body text-sm text-cream-muted hover:text-coral transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-body text-muted">
          <p>© {new Date().getFullYear()} Kyue. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-cream-muted transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
