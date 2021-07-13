///<----Global Imports--->
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/";

//Mapbox Token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API as string;

const Map: React.FC<{
  lat: number;
  lng: number;
  zoom: number;
  className?: string;
}> = (props) => {
  ///<----States--->
  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [zoom, setZoom] = useState(props.zoom);

  ///<----Refs--->
  const mapContainer = useRef<HTMLDivElement | null>(null);

  ///<----Use Effects--->
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className={`map-container ${props.className || ""}`}
        ref={mapContainer}
      />
    </div>
  );
};

export default Map;
