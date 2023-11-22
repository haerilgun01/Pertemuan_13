import styled from "styled-components";

function Footer() {
  return (
     
    <FooterStyle>
      <div className="container">
        <footer className="footer">
          <h2 className="footer__title">NetflixAl</h2>
          <p className="footer__author">Cread by Haeril Gunadi</p>
        </footer>
      </div>
    </FooterStyle>
  );
}

  const FooterStyle = styled.div`
    .container {
      background: radial-gradient(circle, rgba(43,43,214,0.7517401392111369) 0%, rgba(28,57,83,1) 0%);
      color: #fff;
      padding: 1rem;
      text-align: center;
    }

  .footer__title{
      margin-bottom: 1rem;
    }

  .footer__author {
      margin-bottom: 1rem;
    }

  @media (min-width: 768px) {

    }

  @media (min-width: 992px) {
      
   }
`
export default Footer;
