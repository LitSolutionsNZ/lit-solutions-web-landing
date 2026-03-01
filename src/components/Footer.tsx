const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto flex flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
      <div className="text-center sm:text-left">
        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
          <span className="text-sm font-bold tracking-wide text-primary">LIT</span>
          <span className="text-sm font-medium tracking-[0.15em] text-muted-foreground">SOLUTIONS</span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground/60">Christchurch, New Zealand</p>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground">Privacy</a>
        <a href="#contact" className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground">Contact</a>
        <a href="#projects" className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground">Projects</a>
      </div>
    </div>
  </footer>
);

export default Footer;
