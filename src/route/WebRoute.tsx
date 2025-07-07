import {Routes, Route} from "react-router-dom";
import Home from "../page/Home";
import AboutUs from "../page/AboutUs";
import Registration from "../page/Registration";
import AdminLayout from "../components/layout/AdminLayout";
import StatisticsDashboard from "../page/RegistrationStatistics";
import {useAuthProvider} from "../config/providers/AuthProvider";
import NotFoundPage from "../config/providers/NotFoundPage";

export default function WebRoute() {
  const {authenticated} = useAuthProvider();

  return (
    <>
      <Routes>
        {authenticated ? (
          <>
            {/* PRIVATE ROUTES */}
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="events" element={<StatisticsDashboard />} />
            </Route>
          </>
        )}

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
