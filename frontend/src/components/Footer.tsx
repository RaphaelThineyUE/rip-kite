import { Link } from 'react-router-dom'
import { Mail, Github, Twitter, Instagram } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal border-t border-slate/20 mt-20">
      <div className="container-full py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-fujin-orange mb-4">Fujin</h3>
            <p className="text-slate text-sm">
              Premium kiteboard harness engineered for performance and comfort.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-cloud mb-4">Product</h4>
            <ul className="space-y-2 text-slate text-sm">
              <li><Link to="/specs" className="hover:text-fujin-orange">Specifications</Link></li>
              <li><Link to="/technology" className="hover:text-fujin-orange">Technology</Link></li>
              <li><Link to="/compare" className="hover:text-fujin-orange">Compare</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-cloud mb-4">Support</h4>
            <ul className="space-y-2 text-slate text-sm">
              <li><Link to="/faq" className="hover:text-fujin-orange">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-fujin-orange">Contact</Link></li>
              <li><a href="mailto:support@fujin.com" className="hover:text-fujin-orange">Email Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-cloud mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="https://twitter.com" className="text-slate hover:text-fujin-orange">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-slate hover:text-fujin-orange">
                <Instagram size={20} />
              </a>
              <a href="https://github.com" className="text-slate hover:text-fujin-orange">
                <Github size={20} />
              </a>
              <a href="mailto:hello@fujin.com" className="text-slate hover:text-fujin-orange">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate/20 pt-8 text-center text-slate text-sm">
          <p>&copy; {currentYear} Fujin Kiteboard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
