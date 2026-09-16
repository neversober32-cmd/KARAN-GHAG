import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { ArrowLeft, PawPrint } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { InquiryProvider } from "./context/InquiryContext";
import HomePage from "./pages/HomePage";
import DogsPage from "./pages/DogsPage";
import DogProfilePage from "./pages/DogProfilePage";
import ProcessPage from "./pages/ProcessPage";
import HealthPage from "./pages/HealthPage";
import LegalPage from "./pages/LegalPage";
import ApplyPage from "./pages/ApplyPage";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import OverviewPage from "./pages/dashboard/OverviewPage";
import DogsInventoryPage from "./pages/dashboard/DogsInventoryPage";
import PipelinePage from "./pages/dashboard/PipelinePage";
import BoardingPage from "./pages/dashboard/BoardingPage";
import ServicesPage from "./pages/dashboard/ServicesPage";
import EnquiriesPage from "./pages/dashboard/EnquiriesPage";

function NotFoundPage() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-5 py-28 text-center sm:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-mint text-sage-deep">
        <PawPrint size={30} />
      </span>
      <h1 className="font-display mt-6 text-[36px] font-bold">This page wandered off</h1>
      <p className="mt-2 max-w-[360px] text-[15px] text-muted">
        Like a beagle on a scent trail, the page you wanted has disappeared.
        Let&rsquo;s get you back.
      </p>
      <Link to="/" className="btn btn-primary mt-8">
        <ArrowLeft size={15} /> Back home
      </Link>
    </div>
  );
}

function Shell() {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return (
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="dogs" element={<DogsInventoryPage />} />
          <Route path="pipeline" element={<PipelinePage />} />
          <Route path="boarding" element={<BoardingPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="enquiries" element={<EnquiriesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/dogs/:dogId" element={<DogProfilePage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <InquiryProvider>
        <ScrollToTop />
        <Shell />
      </InquiryProvider>
    </HashRouter>
  );
}
