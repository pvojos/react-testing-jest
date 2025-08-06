import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import { AppContainer, FooterContainer, SocialMediaIcon } from "./appStyles";
import igIcon from "../../assets/instagram-icon.svg"
import fbIcon from "../../assets/facebook-icon.svg"
import ybIcon from "../../assets/youtube-icon.svg"
import Products from "../Products/Products";
import Cart from "./Cart/Cart";
import { getProductsList } from "../../actions";
import useAxios from "../../hooks/useAxios";

const socialMedia = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
    icon: igIcon
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    icon: fbIcon
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/",
    icon: ybIcon
  }
]

const App = () => {

  const dispatch = useDispatch()
  const {products} = useAxios("https://6882c56f21fa24876a9bb010.mockapi.io/pigmentolab/tshirt")
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    dispatch(getProductsList(products))
  }, [products, dispatch])

  return (
    <AppContainer>
      <Header 
        setIsCartOpen={setIsCartOpen}
      />

      <Cart 
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />

      <Products 
        isCartOpen={isCartOpen}
      />

      <FooterContainer>
        {socialMedia.map(sm => (
          <SocialMediaIcon href={sm.link} target="_blank" rel="noopener noreferrer" key={sm.name}>
              <img src={sm.icon} alt={`Icono de ${sm.name}`} />
          </SocialMediaIcon>
        ))}
      </FooterContainer>
    </AppContainer>
  );
}

export default App;
