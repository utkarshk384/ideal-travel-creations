import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_API as string;

const Map: React.FC<{
  lat: number;
  lng: number;
  zoom: number;
  className?: string;
}> = (props) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [zoom, setZoom] = useState(props.zoom);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: (mapContainer.current as unknown) as HTMLElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    map.on("move", () => {
      setLng((map.getCenter().lng.toFixed(4) as unknown) as number);
      setLat((map.getCenter().lat.toFixed(4) as unknown) as number);
      setZoom((map.getZoom().toFixed(2) as unknown) as number);
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className={`map-container ${props.className}`} ref={mapContainer} />
    </div>
  );
};

export default Map;
