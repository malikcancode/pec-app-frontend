// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="text-sm text-gray-500 mb-6">
        Learn about our key terms and how we define important concepts within
        our service.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Key Terms</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Account:</strong> A unique account created for you to access
            our service or parts of it.
          </li>
          <li>
            <strong>Company:</strong> Refers to our organization, including our
            affiliates and subsidiaries.
          </li>
          <li>
            <strong>Cookies:</strong> Small files placed on your device by our
            website, containing browsing history and other information.
          </li>
          <li>
            <strong>Device:</strong> Any device that can access our service,
            such as:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Computers</li>
              <li>Cellphones</li>
              <li>Digital tablets</li>
            </ul>
          </li>
          <li>
            <strong>Personal Data:</strong> Any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service:</strong> Our website and services provided through
            it.
          </li>
          <li>
            <strong>Service Provider:</strong> Third-party companies or
            individuals who process data on our behalf to:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Facilitate our service</li>
              <li>Provide our service</li>
              <li>Analyze service usage</li>
            </ul>
          </li>
          <li>
            <strong>Usage Data:</strong> Data collected automatically through
            service use or infrastructure, including:
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Page visit duration</li>
              <li>Device information</li>
            </ul>
          </li>
          <li>
            <strong>Website:</strong> Our website, accessible at [insert URL].
          </li>
          <li>
            <strong>You:</strong> The individual accessing or using our service,
            or the company/legal entity on their behalf.
          </li>
        </ul>
      </section>
    </div>
  );
}
