import { NutriWorkLogo } from "./NutriWorkLogo";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-10 mt-auto">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex flex-col items-start">
            <NutriWorkLogo className="mb-3" />
            <p className="text-muted-foreground mt-1 max-w-sm text-sm">
              Premium healthy workplace food subscription service in Tbilisi, Georgia. Fresh, healthy, delivered to your desk.
            </p>
            <div className="flex space-x-4 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NutriWork. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Made with ❤️ in Tbilisi</p>
        </div>
      </div>
    </footer>
  );
}
