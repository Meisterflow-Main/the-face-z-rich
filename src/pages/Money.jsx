import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MoneyDetail from "@/components/service/MoneyDetail";
import { getServiceBySlug } from "@/lib/services";
import { getRegionBySlug } from "@/lib/regions";

export default function Money() {
  const { service, region } = useParams();
  const svc = getServiceBySlug(service);
  const reg = getRegionBySlug(region);
  if (!svc || !reg) return <Navigate to="/behandlungen" replace />;
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MoneyDetail service={svc} region={reg} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}