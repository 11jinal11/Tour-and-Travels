// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';
// import Home from './pages/Home';

// import Card from './componants/Card';
// import Activities from './pages/Activities';
// import ReviewPage from './pages/ReviewPage';
// import ContactPage from './pages/ContactPage';
// import MainPage from './pages/MainPage';
// import Login from './pages/Login';
// import DestinationPage from './pages/DestinationPage';
// import GalleryPage from './pages/GalleryPage';
// import Highlight from './pages/Highlights';
// import VisA from './pages/Visa';
// import TravelTips from './pages/TravelTips';
// import ItineraryPage from './pages/ItineraryPage';

// // Admin Pages
// // import AdminVisa from './admin-page/Visa';
// import Tips from './admin-page/Tips';
// import Gallery from './admin-page/Gallery';
// import Experience from './admin-page/Experience';
// import Activity from './admin-page/Activity';
// import AddDestination from './admin-page/AddDestination';
// import Itinerary from './admin-page/Itinerary';
// import Highlights from './admin-page/Highlights';
// import Visa from './admin-page/Visa';
// import Dashboard from './admin-page/Dashboard'; // ✅ Dashboard import
// import Signup from './pages/Signup';
// import BookingPage from './pages/BookingPage';
// import FreeConsultList from './admin-page/FreeConsultList';
// import Bookinglist from './admin-page/Bookinglist';


// function App() {
//   return (
//     <Router>
//       <Switch>

//         {/* Admin Pages */}
//         <Route path="/add-destination"> <AddDestination /> </Route>
//         <Route path="/activity"> <Activity /> </Route>
//         <Route path="/experience"> <Experience /> </Route>
//         <Route path="/itinerary"> <Itinerary /> </Route>
//         <Route path="/highlightsUiOnly"> <Highlights /> </Route>
//         <Route path="/gallery"> <Gallery /> </Route>
//         <Route path="/tips"> <Tips /> </Route>
//         <Route path="/adminvisa"> <Visa /> </Route>
//         <Route path="/freeConsultList"> <FreeConsultList /> </Route>
//          <Route path="/bookinglist"> <Bookinglist /> </Route>

        
      
//         {/* Public Pages */}
//          <Route path="/BookingPage"> <BookingPage /> </Route>
//          <Route path="/visa"> <VisA /> </Route>
//           <Route path="/traveltips"> <TravelTips /> </Route>
//         <Route path="/itineraryPage"> <ItineraryPage /> </Route>
//         <Route path="/highlights"> <Highlight /> </Route>
//         <Route path="/galleryPage"> <GalleryPage /> </Route>
//         <Route path="/contactPage"> <ContactPage /> </Route>
//         <Route path="/reviewPage"> <ReviewPage /> </Route>
//         <Route path="/activities"> <Activities /> </Route>
//         <Route path="/card"> <Card /> </Route>
//        <Route path="/destinationPage/:id">  <DestinationPage />   </Route>


//         {/* Login & Dashboard */}
//         <Route path="/login"> <Login /> </Route>
//         <Route path="/signup"> <Signup /> </Route>
//         <Route path="/dashboard"> <Dashboard /> </Route>
        
//         {/* Main Page (Home) - Always last */}
//         <Route exact path="/"> <MainPage /> </Route>

//       </Switch>
//     </Router>
//     // <BookingPage/>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';

import Card from './componants/Card';
import Activities from './pages/Activities';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import DestinationPage from './pages/DestinationPage';
import GalleryPage from './pages/GalleryPage';
import Highlight from './pages/Highlights';
import VisA from './pages/Visa';
import TravelTips from './pages/TravelTips';
import ItineraryPage from './pages/ItineraryPage';

import Tips from './admin-page/Tips';
import Gallery from './admin-page/Gallery';
import Experience from './admin-page/Experience';
import Activity from './admin-page/Activity';
import AddDestination from './admin-page/AddDestination';
import Itinerary from './admin-page/Itinerary';
import Highlights from './admin-page/Highlights';
import Visa from './admin-page/Visa';
import Dashboard from './admin-page/Dashboard';
import Signup from './pages/Signup';
import BookingPage from './pages/BookingPage';
import FreeConsultList from './admin-page/FreeConsultList';
import Bookinglist from './admin-page/Bookinglist';

// ✅ PROTECTED ROUTE
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Redirect to="/login" />;
};

function App() {
  return (
    <Router>
      <Switch>

        {/* ✅ ADMIN PAGES with PROTECTED ROUTE */}
        <Route path="/add-destination">
          <ProtectedRoute>
            <AddDestination />
          </ProtectedRoute>
        </Route>

        <Route path="/activity">
          <ProtectedRoute>
            <Activity />
          </ProtectedRoute>
        </Route>

        <Route path="/experience">
          <ProtectedRoute>
            <Experience />
          </ProtectedRoute>
        </Route>

        <Route path="/itinerary">
          <ProtectedRoute>
            <Itinerary />
          </ProtectedRoute>
        </Route>

        <Route path="/highlightsUiOnly">
          <ProtectedRoute>
            <Highlights />
          </ProtectedRoute>
        </Route>

        <Route path="/gallery">
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        </Route>

        <Route path="/tips">
          <ProtectedRoute>
            <Tips />
          </ProtectedRoute>
        </Route>

        <Route path="/adminvisa">
          <ProtectedRoute>
            <Visa />
          </ProtectedRoute>
        </Route>

        <Route path="/freeConsultList">
          <ProtectedRoute>
            <FreeConsultList />
          </ProtectedRoute>
        </Route>

        <Route path="/bookinglist">
          <ProtectedRoute>
            <Bookinglist />
          </ProtectedRoute>
        </Route>

        <Route path="/dashboard">
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        </Route>

        {/* ✅ PUBLIC PAGES */}
        <Route path="/BookingPage"> <BookingPage /> </Route>
        <Route path="/visa"> <VisA /> </Route>
        <Route path="/traveltips"> <TravelTips /> </Route>
        <Route path="/itineraryPage"> <ItineraryPage /> </Route>
        <Route path="/highlights"> <Highlight /> </Route>
        <Route path="/galleryPage"> <GalleryPage /> </Route>
        <Route path="/contactPage"> <ContactPage /> </Route>
        <Route path="/reviewPage"> <ReviewPage /> </Route>
        <Route path="/activities"> <Activities /> </Route>
        <Route path="/card"> <Card /> </Route>
        <Route path="/destinationPage/:id"> <DestinationPage /> </Route>

        {/* ✅ LOGIN & SIGNUP */}
        <Route path="/login"> <Login /> </Route>
        <Route path="/signup"> <Signup /> </Route>

        {/* ✅ HOME */}
        <Route exact path="/"> <MainPage /> </Route>

      </Switch>
    </Router>
  );
}

export default App;
