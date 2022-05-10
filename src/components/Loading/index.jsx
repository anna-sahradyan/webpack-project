import React from 'react';
import * as Loader from "react-loader-spinner";

const Loading = () => {
    return (
        <>

                <Loader.Watch
                    height={100}
                    width={100}
                />

        </>
    );
};

export default Loading;