import React from "react";
import { useParams, Navigate } from "react-router-dom";
import RegionLandingPage from "@/components/region/RegionLandingPage";
import { getRegionBySlug } from "@/lib/regions";

export default function Region() {
  const { slug } = useParams();
  const region = getRegionBySlug(slug);
  if (!region) return <Navigate to="/" replace />;
  return <RegionLandingPage region={region} />;
}