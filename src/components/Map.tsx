import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      className="w-full h-full"
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#3c0896"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>

      <Annotation
        subject={[35.72, 51.33]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Tehran"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
