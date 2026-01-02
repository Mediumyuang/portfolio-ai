const Footer = () => {
  return (
    <footer className="border-t border-luxury-white/5 py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-luxury-white/40">
          <span>© {new Date().getFullYear()} All rights reserved</span>
          <span className="text-xs">AI Portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
