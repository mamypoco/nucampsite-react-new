import "./App.css";
import CampsiteDirectoryPage from "./pages/CampsitesDirectoryPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="App">
         <Header />
         <CampsiteDirectoryPage />
         <Footer />
      </div>
   );
}

export default App;
