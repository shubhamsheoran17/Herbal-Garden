import React from 'react';

const Image3D = ({ source }) => {
    return (
        <div className="sketchfab-embed-wrapper">
            <iframe
                title="3D Model"
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src={source}
                style={{ width: '100%', height: '300px' }}
            ></iframe>
            <p
                style={{
                    fontSize: '13px',
                    fontWeight: 'normal',
                    margin: '5px',
                    color: '#4a4a4a',
                }}
            >
                <a
                    href="https://sketchfab.com/3d-models/redwort-12d005bd42de4329854e2864b070d799?utm_medium=embed&utm_campaign=share-popup&utm_content=12d005bd42de4329854e2864b070d799"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1caad9' }}
                >
                    Redwort
                </a>
                by
                <a
                    href="https://sketchfab.com/gavinpgamer1?utm_medium=embed&utm_campaign=share-popup&utm_content=12d005bd42de4329854e2864b070d799"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1caad9' }}
                >
                    gavinpgamer1
                </a>
                on
                <a
                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=12d005bd42de4329854e2864b070d799"
                    target="_blank"
                    rel="nofollow"
                    style={{ fontWeight: 'bold', color: '#1caad9' }}
                >
                    Sketchfab
                </a>
            </p>
        </div>
    );
};

export default Image3D;
