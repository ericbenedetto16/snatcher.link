import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Marker } from './marker';

export const Map = ({
    DEFAULT_CENTER, lat, lng, zoom, data,
}) => {
    const markers = data.map((item) => (
        <Marker key={item.id} lat={item.latitude} lng={item.longitude} />
    ));

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
            defaultCenter={DEFAULT_CENTER}
            center={[lat, lng]}
            zoom={zoom}
            yesIWantToUseGoogleMapApiInternals
        >
            {markers}
        </GoogleMapReact>
    );
};

Map.propTypes = {
    DEFAULT_CENTER: PropTypes.objectOf(PropTypes.any).isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array.isRequired,
};
