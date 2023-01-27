
export const ContactInfo = () => {


    return (
        <section className="p-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md">
                        <h2 className="text-center mb-4">Contact Info</h2>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">
                                <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Phone:</span> (333) 333-3333
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Email:</span> (555)
                                enroll@frontendbc.test
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Email:</span>
                                student@frontendbc.test
                            </li>
                        </ul>
                    </div>
                    <div class="col-md">
                        <div id="map" class="mapboxgl-map">
                            <div class="mapboxgl-canary" style="visibility: hidden;">
                            </div>
                            <div class="mapboxgl-canvas-container mapboxgl-interactive mapboxgl-touch-drag-pan mapboxgl-touch-zoom-rotate">
                                <canvas class="mapboxgl-canvas" tabindex="0" aria-label="Map" role="region" width="420" height="516" style="width: 336px; height: 413px;">
                                </canvas>
                            </div>
                            <div class="mapboxgl-control-container">
                                <div class="mapboxgl-ctrl-top-left">
                                </div>
                                <div class="mapboxgl-ctrl-top-right">
                                </div>
                                <div class="mapboxgl-ctrl-bottom-left">
                                    <div class="mapboxgl-ctrl" style="display: block;">
                                        <a class="mapboxgl-ctrl-logo" target="_blank" rel="noopener nofollow" href="https://www.mapbox.com/" aria-label="Mapbox logo"></a>
                                    </div>
                                </div>
                                <div class="mapboxgl-ctrl-bottom-right">
                                    <div class="mapboxgl-ctrl mapboxgl-ctrl-attrib mapboxgl-compact">
                                        <button class="mapboxgl-ctrl-attrib-button" title="Toggle attribution" aria-label="Toggle attribution">
                                        </button><div class="mapboxgl-ctrl-attrib-inner" role="list">
                                            <a href="https://www.mapbox.com/about/maps/" target="_blank" title="Mapbox" aria-label="Mapbox" role="listitem">© Mapbox</a>
                                            <a href="https://www.openstreetmap.org/about/" target="_blank" title="OpenStreetMap" aria-label="OpenStreetMap" role="listitem">© OpenStreetMap</a>
                                            <a class="mapbox-improve-map" href="https://apps.mapbox.com/feedback/?owner=mapbox&amp;id=streets-v11&amp;access_token=pk.eyJ1IjoiYnRyYXZlcnN5IiwiYSI6ImNrbmh0dXF1NzBtbnMyb3MzcTBpaG10eXcifQ.h5ZyYCglnMdOLAGGiL1Auw" target="_blank" title="Map feedback" aria-label="Map feedback" role="listitem" rel="noopener nofollow">Improve this map</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )

}