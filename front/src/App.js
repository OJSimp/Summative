import "./App.scss";

import FooterNav from "./components/navigation/FooterNav";

import AppRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <FooterNav />
    </div>
  );
}

export default App;
