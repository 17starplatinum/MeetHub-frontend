import * as React from "react";
import { Route, Routes, useLocation /*, useParams */ } from "react-router";
import "./App.css";
import { useContext, useEffect } from "react";
import { HelloPage } from "./pages/HelloPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { FAQPage } from "./pages/FAQPage";
import { ControlPage } from "./pages/ControlPage";
import { DetailsPage } from "./pages/DetailsPage";
import { AccountPage } from "./pages/AccountPage";
import { LocationPage } from "./pages/LocationPage";
import { UserContext } from "./UserContext";
import EventPage from "./pages/EventPage";
import { FoodPage } from "./pages/FoodPage";
import { ReviewPage } from "./pages/ReviewPage";

function App() {
  const { saveCurrentPath } = useContext(UserContext);
  const location = useLocation();

  useEffect(() => {
    if (saveCurrentPath) {
      saveCurrentPath(location.pathname);
    }
  }, [location, saveCurrentPath]);

  return (
    <div className="meet-hub">
      <Routes>
        <Route path="/" element={<HelloPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/events">
          <Route index path="" element={<EventPage type={"Мероприятия"} />} />
          <Route path="current" element={<EventPage type={"Мероприятия"} />} />
          <Route path=":my">
            <Route path="" element={<EventPage type={"Мои мероприятия"} />} />
            <Route
              path="future"
              element={<EventPage type={"Будущие мероприятия"} />}
            />
            <Route
              path="history"
              element={<EventPage type={"История мероприятии"} />}
            />
          </Route>
          <Route path="event">
            <Route path="add">
              <Route path="" element={<ControlPage action={"add"} />} />
              <Route
                path="location"
                element={<LocationPage action={"add"} />}
              />
              <Route path="food" element={<FoodPage action={"add"} />} />
            </Route>
            <Route path="edit">
              <Route path="" element={<ControlPage action={"edit"} />} />
              <Route
                path="location"
                element={<LocationPage action={"edit"} />}
              />
              <Route path="food" element={<FoodPage action={"edit"} />} />
            </Route>
            <Route path="details" element={<DetailsPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>
        </Route>
        <Route path="/accounts">
          <Route path="{id}" element={<AccountPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
