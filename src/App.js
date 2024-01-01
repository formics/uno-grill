import GlobalStyles from "./global-styles";

import NavigationBar from "./components/navigation-bar/NavigationBar";
import HeroImage from "./components/ui/HeroImage";
import Products from "./components/home/Products";

function App() {
  return (
    <>
      <GlobalStyles />

      <NavigationBar />
      <HeroImage />
      <Products />
    </>
  );
}

export default App;
