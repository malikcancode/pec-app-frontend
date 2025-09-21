// src/pages/Dashboard.jsx
import React from "react";
import BasicStatistics from "../components/BasicStatistics";
import TrendsSection from "../components/TrendsSection";

export default function Dashboard() {
  return (
    <>
      <BasicStatistics />
      <TrendsSection />
    </>
  );
}
