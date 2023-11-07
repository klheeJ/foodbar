const Footer = () => {
  return (
    <div className="flex bg-[#3E3D3D] text-white">
      <div className="w-1/2">
        <img src="./public/logo.png" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div>
          <h4>Follow Us:</h4>
          <ul>
            <li>FB</li>
            <li>Twitter</li>
            <li>IG</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>
      <div className="flex w-1/2">
        <div className="col">
          Quick Links
          <hr />
          <ul>
            <li>About Us</li>
            <li>Faq</li>
            <li>Help</li>
            <li>My Account</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="col">
          Categories
          <hr />
          <ul>
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Bugers</li>
            <li>French Fries</li>
            <li>Bread</li>
            <li>Macaroni</li>
          </ul>
        </div>
        <div className="col">
          Contact Info
          <hr />
          House no 35, Palmall Stree, London, England
          <p>Email:</p>
          <p>info@contact.com</p>
          <p>Support:</p>
          <p>+1 325 562 3265</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
