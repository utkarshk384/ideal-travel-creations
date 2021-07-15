///<----Global Imports--->
import React, { useState } from "react";
import ReactMapGL from "react-mapbox-gl";

const Map: React.FC<{
  accessToken: string;
  lat: number;
  lng: number;
  zoom: number;
  className?: string;
}> = (props) => {
  ///<----States--->

  const ReactMap = React.useMemo(
    () =>
      ReactMapGL({
        accessToken: props.accessToken,
        attributionControl: false,
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }),
    []
  );

  const [lat, setLat] = useState(props.lat);
  const [lng, setLng] = useState(props.lng);
  const [zoom, setZoom] = useState(props.zoom);

  return (
    <div>
      <ReactMap
        center={[lng, lat]}
        className={`map-container ${props.className || ""}`}
        onMove={(map) => {
          setLng((map.getCenter().lng.toFixed(4) as unknown) as number);
          setLat((map.getCenter().lat.toFixed(4) as unknown) as number);
          setZoom((map.getZoom().toFixed(2) as unknown) as number);
        }}
        zoom={[zoom]}
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v11"
      />
    </div>
  );
};

export default Map;
