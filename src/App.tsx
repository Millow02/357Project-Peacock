import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import ParkingMap from './components/ParkingMap';
import Popup from './components/Popup';
import Profile from './components/Profile';



function App() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [isFading, setIsFading] = useState(false);



  const handleOpenPopup = (popupName: string) => {
    setActivePopup(popupName);
    setIsFading(true);
  };


  const handleClosePopup = () => {
    setIsFading(false);
    setTimeout(() => setActivePopup(null), 300); 
  };

  const handleNavigateToProfile = () => {
    setActivePopup(null); 
    setIsFading(false);   
  };

  return (
    <Router>
      <main>
        <div className="app-container">
          <ConditionalSidebar onOpenPopup={handleOpenPopup} onNavigateToProfile={handleNavigateToProfile} />
          <Routes>
            <Route
              path="/"
              element={
                <div className="map-container">
                  <ParkingMap />
                </div>
              }
            />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Popup
          activePopup={activePopup}
          handleClosePopup={handleClosePopup}
          isFading={isFading}
        />
      </main>
    </Router>
  );
}

export default App;



// Helper component to render Sidebar conditionally
const ConditionalSidebar: React.FC<{
  onOpenPopup: (popupName: string) => void;
  onNavigateToProfile: () => void;
}> = ({ onOpenPopup, onNavigateToProfile }) => {
  const location = useLocation();

  // Do not render Sidebar on the Profile page
  if (location.pathname === '/profile') {
    return null;
  }

  return <Sidebar onOpenPopup={onOpenPopup} onNavigateToProfile={onNavigateToProfile} />;
};


//   return (
//     <Router>
//     <main>
//       <div className="app-container">
//         <Sidebar onOpenPopup={handleOpenPopup} />
//         <div className="map-container">
//           <ParkingMap />
//         </div>
//       </div>

 
 


//     </main>
//     </Router>
//   );
// }

