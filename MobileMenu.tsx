import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileMenu = ({ activeSection, scrollToSection }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Hero', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

  const handleItemClick = (item: string) => {
    scrollToSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="glass glass-hover p-2"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-glass-border backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors hover:bg-glass-hover ${
                    activeSection === item.toLowerCase() ? 'text-primary bg-glass-hover' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;