import GlobalStyles from "./global-styles";

import NavigationBar from "./components/navigation-bar/NavigationBar";
import HeroImage from "./components/ui/HeroImage";
import Products from "./components/home/Products";
import Footer from "./components/ui/Footer";
import FooterCopyright from "./components/ui/FooterCopyright";
import GoogleMap from "./components/ui/GoogleMap";

function App() {
  return (
    <>
      <GlobalStyles />

      <NavigationBar />
      <HeroImage />
      <Products />
      <GoogleMap />
      <Footer />
      <FooterCopyright />
    </>
  );
}

export default App;
