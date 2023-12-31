import logo from '../../assets/icons/Group 1.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-[#151515] text-base-content">
  <aside>
    <img src={logo} alt="" />
    <p className=' text-white mt-4 text-start'>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
  <nav className=' text-white'>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className=' text-white'>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className=' text-white'>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  );
};

export default Footer;