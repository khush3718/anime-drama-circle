
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const isActive = (path: string) => location.pathname === path;
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Anime', path: '/anime' },
    { name: 'K-Drama', path: '/kdrama' },
    { name: 'Community', path: '/community' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-anime-dark/90 backdrop-blur-sm border-b border-anime-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="anime-title text-2xl font-bold">AnimeDrama</span>
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active-nav-link' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          
          {/* Search & User */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center rounded-full bg-anime-dark border border-anime-primary/20 px-3">
              <Search className="text-muted-foreground h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search..." 
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="text-anime-light">
              <User className="h-5 w-5" />
            </Button>
            
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden text-anime-light">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-3 pb-5">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md ${
                    isActive(link.path) 
                      ? 'bg-anime-primary/10 text-white' 
                      : 'text-anime-light hover:bg-anime-primary/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center rounded-md bg-anime-dark border border-anime-primary/20 px-3 py-2 mt-3">
                <Search className="text-muted-foreground h-4 w-4 mr-2" />
                <Input 
                  type="text" 
                  placeholder="Search..." 
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
