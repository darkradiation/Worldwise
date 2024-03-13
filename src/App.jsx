import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "./contexts/CitiesProvider";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Login from "./pages/Login";
// import PageNotFound from "./pages/PageNotFound";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";

// dist/index.html                   0.50 kB │ gzip:   0.32 kB
// dist/assets/icon-C76IL8ru.png    20.20 kB
// dist/assets/index-BKmud2dx.css   13.49 kB │ gzip:   3.27 kB
// dist/assets/index-Cx4znmyJ.js   408.75 kB │ gzip: 124.88 kB
// ✓ built in 1.52s

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

// dist/index.html                           0.50 kB │ gzip:  0.32 kB
// dist/assets/icon-C76IL8ru.png            20.20 kB
// dist/assets/Logo-CtfPMVPO.css             0.03 kB │ gzip:  0.05 kB
// dist/assets/Login-fP6ipu4U.css            0.35 kB │ gzip:  0.22 kB
// dist/assets/Product-CX3p79nw.css          0.47 kB │ gzip:  0.27 kB
// dist/assets/Homepage-DKp2I-AC.css         0.50 kB │ gzip:  0.30 kB
// dist/assets/PageNav-C2lIXkPA.css          0.51 kB │ gzip:  0.28 kB
// dist/assets/AppLayout-4Qagfjbt.css        1.91 kB │ gzip:  0.70 kB
// dist/assets/index-46Tf2-3a.css            9.83 kB │ gzip:  2.57 kB
// dist/assets/Product.module-DpVUF5Lu.js    0.06 kB │ gzip:  0.07 kB
// dist/assets/PageNotFound-CGz9WuMK.js      0.15 kB │ gzip:  0.15 kB
// dist/assets/Logo-_2RVElmG.js              0.22 kB │ gzip:  0.20 kB
// dist/assets/PageNav-2aUnc5S0.js           0.49 kB │ gzip:  0.27 kB
// dist/assets/Pricing-B7SvicFe.js           0.65 kB │ gzip:  0.42 kB
// dist/assets/Homepage-td5wtZWk.js          0.71 kB │ gzip:  0.45 kB
// dist/assets/Product-BzAmwtsq.js           0.86 kB │ gzip:  0.49 kB
// dist/assets/Login-D7YlJAGv.js             1.01 kB │ gzip:  0.54 kB
// dist/assets/AppLayout-CfYCIEy4.js       157.11 kB │ gzip: 46.22 kB
// dist/assets/index-BaIkolVb.js           250.00 kB │ gzip: 78.22 kB
// ✓ built in 1.55s

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate to="cities" replace={true} />}
                />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
