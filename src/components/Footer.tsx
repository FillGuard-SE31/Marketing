
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-[#00563B] text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-white md:text-left">
            © {currentYear} FillGuard Technologies. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-sm text-white hover:text-foreground">
            Terms
          </a>
          <a href="#" className="text-sm text-white hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="text-sm text-white hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
