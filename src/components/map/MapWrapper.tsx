import React from "react";
import {Resizable} from "re-resizable";
import {MapContainer, TileLayer, Marker, Polyline} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {CustomMarker} from "../";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const MapWrapper: React.FC = () => {
    const {items, mapsPoints, currentIndexItem} = useTypedSelector(
        ({points}) => points
    );

    const mapRef = React.createRef<any>();

    return (
        <Resizable
            defaultSize={{width: "50%", height: "100%"}}
            minWidth="40%"
            maxWidth="80%"
            minHeight="100%"
            maxHeight="100%"
            onResize={() => {
                mapRef.current.invalidateSize();
            }}
        >
            <div className="map">
                <MapContainer
                    center={
                        mapsPoints[items[currentIndexItem].indexFrom].position
                    }
                    zoom={12}
                    scrollWheelZoom={true}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                    ref={mapRef}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <Marker
                        position={
                            mapsPoints[items[currentIndexItem].indexFrom]
                                .position
                        }
                        icon={CustomMarker}
                    />
                    <Marker
                        position={
                            mapsPoints[items[currentIndexItem].indexTo].position
                        }
                        icon={CustomMarker}
                    />

                    <Polyline
                        positions={[
                            mapsPoints[items[currentIndexItem].indexFrom]
                                .position,
                            mapsPoints[items[currentIndexItem].indexTo]
                                .position,
                        ]}
                        color="#2624A6"
                    />
                </MapContainer>
            </div>
        </Resizable>
    );
};

export default MapWrapper;
