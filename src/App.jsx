import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./contexts/theme-context";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./pages/layout";

// Lazy-loaded pages (dynamically imported for better performance)
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const SigninPage = lazy(() => import("./pages/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const TransactionPage = lazy(() => import("./pages/TransactionPage"));
const AffiliateUpgradePage = lazy(() => import("./pages/AffiliateUpgradePage"));
const AffiliatePage = lazy(() => import("./pages/AffiliatePage"));
const ContactVendorPage = lazy(() => import("./pages/ContactVendorPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const PaymentPage = lazy(() => import("./pages/PaymentPage"));
const UpdateProfilePage = lazy(() => import("./pages/UpdateProfilePage"));

function App() {
  const router = createHashRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <DashboardPage /> },
          { path: "transactions", element: <TransactionPage /> },
          { path: "affiliates", element: <AffiliatePage /> },
          { path: "affiliates-upgrade", element: <AffiliateUpgradePage /> },
          { path: "support", element: <SupportPage /> },
          { path: "payments", element: <PaymentPage /> },
        ],
      },
      { path: "/signin", element: <SigninPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/contact-vendor", element: <ContactVendorPage /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
    {
      basename: "/",
    }
  );

  return (
    <ThemeProvider storageKey="theme">
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
