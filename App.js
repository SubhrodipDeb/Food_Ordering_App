import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import About from "./src/About";
import Error from "./src/Error";
import Contact from "./src/Contact";
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo


// Header component for header section: Logo, Nav Items

// RestaurantList is JSON Data for displaying cards


// Restaurant card component: Image, name, cuisine


// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


// Footer component for footer section


// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet/>
      <Footer />
    </React.Fragment>
  );
};
 const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
  {
    path:"/contact",
    element:<Contact />,
  },
  {
    path:"/",
    element:<Body />,
  },
  {
    path:"/about",
    element:<About />,
  },
    ]
  },
  
 ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/> );