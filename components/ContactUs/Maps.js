import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Maps = () => {
    const data={
        center: {
            lat: 59.95,
            lng: 30.33
          },
          zoom: 11
    }
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div className="md:w-[50%]">
    <div className='md:w-[90%] md:h-[36rem] w-[100%] h-[16rem]'>
        <GoogleMapReact
        //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={data.center}
          defaultZoom={data.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
  )
}

export default Maps