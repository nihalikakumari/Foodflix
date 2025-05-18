export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="parallax-section">
            <div className="parallax-content">
              <h3 className="text-lg font-bold mb-4">Food<span className="text-primary">Flix</span></h3>
              <p className="text-sm text-muted-foreground">
                Delicious food delivered right to your doorstep. Fast, fresh, and always on time.
              </p>
            </div>
          </div>
          
          <div className="parallax-section">
            <div className="parallax-content">
              <h3 className="text-md font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
                <li><a href="/cart" className="text-muted-foreground hover:text-primary transition-colors">Cart</a></li>
              </ul>
            </div>
          </div>
          
          <div className="contact-card p-6 rounded-xl">
            <h3 className="text-md font-semibold mb-6 flex items-center">
              <span className="bg-primary/10 p-2 rounded-lg mr-2">
                Contact Us
              </span>
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="contact-icon bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20">
                  📍
                </div>
                <div>
                  <p className="font-medium">Our Location</p>
                  <p className="text-sm text-muted-foreground">123 Food Street, Flavor City</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="contact-icon bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20">
                  📧
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <a href="mailto:info@foodflix.com" className="text-sm text-primary hover:underline">
                    info@foodflix.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="contact-icon bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20">
                  📞
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <a href="tel:+919876543210" className="text-sm text-primary hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="contact-icon bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary/20">
                  ⏰
                </div>
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sun: 10 AM - 10 PM</p>
                </div>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} FoodFlix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}