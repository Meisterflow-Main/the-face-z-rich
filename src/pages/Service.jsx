import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceDetail from "@/components/service/ServiceDetail";
import { getServiceBySlug } from "@/lib/services";

export default function Service() {
  const { service } = useParams();
  const svc = getServiceBySlug(service);
  if (!svc) return <Navigate to="/behandlungen" replace />;
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ServiceDetail service={svc} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}