
import './App.scss';

import HeaderNav from "./components/navigation/HeaderNav"
import FooterNav from "./components/navigation/FooterNav"


import AppRoutes from "./Routes"



function App() {
  return (
    <div className="App" >
      < HeaderNav />
      <div className='app-wrapper'>
      < AppRoutes />
      </div>
      < FooterNav />
    </div>
  );
}

export default App;
