// Styles
import * as S from "./styles";

// Social icons
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

// Components
import Logo from "../Logo";

const Footer = () => {
  return (
    <S.Footer>
      <div className="container">
        <Logo />
        <S.Social>
          <span><FaInstagram/></span>
          <span><FaFacebookF/></span>
          <span><FaTwitter/></span>
        </S.Social>
        <S.Disclaimer>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
          estabelecimento contratado.
        </S.Disclaimer>
      </div>
    </S.Footer>
  );
};

export default Footer;
