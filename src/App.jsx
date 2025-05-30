
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import './App.css';
// import Navbar from './componants/Navbar';
// import Footer from './componants/Footer';

// import Home from './pages/Home';
// import Card from './componants/Card';

// import Activities from './pages/Activities';
// import ReviewPage from './pages/ReviewPage';
// import ContactPage from './pages/ContactPage';
// import MainPage from './pages/MainPage'
// import Visa from './admin-page/Visa';
// import Tips from './admin-page/Tips';
// import Gallery from './admin-page/Gallery';
// import Experience from './admin-page/Experience';
// import Activity from './admin-page/Activity';
// import AddDestination from './admin-page/AddDestination';
// import Itinerary from './admin-page/Itinerary';
// import Highlights from './admin-page/Highlights';
// import Login from './pages/Login'
// // import  Dashboard  from '/admin-page/Dashboard';
// function App() {
//   return (
   
// <>
//     <Router>
//     <Switch>
  

//           <Route  path="/add-destination"> <AddDestination></AddDestination> </Route>
//           <Route path="/activity"> <Activity></Activity> </Route>
//           <Route  path="/experience"> <Experience></Experience> </Route>
//           <Route  path="/itinerary"> <Itinerary></Itinerary> </Route>
//           <Route  path="/highlights"> <Highlights></Highlights> </Route>
//           <Route  path="/gallery"> <Gallery></Gallery> </Route>
//           <Route  path="/tips"> <Tips></Tips> </Route>
//           <Route  path="/visa"> <Visa></Visa> </Route>
//           <Route path="/contactPage"> <ContactPage></ContactPage> </Route>
//           {/* <Route path="/">  <Dashboard/> </Route> */}
   
//           {/* <Route path="/">   <Login/></Route> */}
     
//     <Route path="/reviewPage"> <ReviewPage></ReviewPage> </Route>
   
//     {/* <Route path="/reviewPage"><ReviewPage></ReviewPage></Route> */}
//     <Route path="/activities"><Activities></Activities></Route>
    
      
//       <Route path="/card"><Card/> </Route>
      
     
    
//       <Route path="/">   <MainPage/></Route>
      
  
   
//     </Switch>
//   </Router>

  
//   </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';

// Pages
import Home from './pages/Home';
import Card from './componants/Card';
import Activities from './pages/Activities';
import ReviewPage from './pages/ReviewPage';
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import Login from './pages/Login';

// Admin Pages
import Visa from './admin-page/Visa';
import Tips from './admin-page/Tips';
import Gallery from './admin-page/Gallery';
import Experience from './admin-page/Experience';
import Activity from './admin-page/Activity';
import AddDestination from './admin-page/AddDestination';
import Itinerary from './admin-page/Itinerary';
import Highlights from './admin-page/Highlights';
import Dashboard from './admin-page/Dashboard'; // ✅ Dashboard import
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Switch>

        {/* Admin Pages */}
        <Route path="/add-destination"> <AddDestination /> </Route>
        <Route path="/activity"> <Activity /> </Route>
        <Route path="/experience"> <Experience /> </Route>
        <Route path="/itinerary"> <Itinerary /> </Route>
        <Route path="/highlightsUiOnly"> <Highlights /> </Route>
        <Route path="/gallery"> <Gallery /> </Route>
        <Route path="/tips"> <Tips /> </Route>
        <Route path="/visa"> <Visa /> </Route>

        {/* Public Pages */}
        <Route path="/contactPage"> <ContactPage /> </Route>
        <Route path="/reviewPage"> <ReviewPage /> </Route>
        <Route path="/activities"> <Activities /> </Route>
        <Route path="/card"> <Card /> </Route>

        {/* Login & Dashboard */}
        <Route path="/login"> <Login /> </Route>
        <Route path="/signup"> <Signup /> </Route>
        <Route path="/dashboard"> <Dashboard /> </Route>

        {/* Main Page (Home) - Always last */}
        <Route exact path="/"> <MainPage /> </Route>

      </Switch>
    </Router>
  );
}

export default App;
