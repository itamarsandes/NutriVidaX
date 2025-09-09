import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GtmRouteListener() {
  const location = useLocation();

  useEffect(() => {
    // Garante o dataLayer e envia pageview a cada mudança de rota
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: location.pathname + location.search + location.hash,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location]);

  return null;
}
