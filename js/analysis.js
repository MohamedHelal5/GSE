require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Search",
    "esri/widgets/Fullscreen",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Sketch",
    "esri/widgets/Legend",
    "esri/widgets/AreaMeasurement2D",
    "esri/widgets/LayerList",
    "esri/widgets/ScaleBar",
    "esri/geometry/geometryEngine",
    "esri/layers/GeoJSONLayer",
    "esri/widgets/Expand",
    "esri/Graphic"
], function (
    Map,
    MapView,
    Home,
    GraphicsLayer,
    Search,
    Fullscreen,
    BasemapGallery,
    Sketch,
    Legend,
    AreaMeasurement2D,
    LayerList,
    ScaleBar,
    geometryEngine,
    GeoJSONLayer,
    Expand,
    Graphic
) {
    // Create a map and view
    const map = new Map({
        basemap: "streets-navigation-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [30.062, 31.249],
        zoom: 5
    });

    // Add graphicsLayer to map
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    // إضافة طبقة لوضع العلامات
    const markerLayer = new GraphicsLayer();
    map.add(markerLayer);

    // Home Widget
    const home = new Home({
        view: view,
    });
    view.ui.add(home, "top-left");

    // Search widget
    const searchWidget = new Search({
        view: view
    });
    const searchExpand = new Expand({
        view: view,
        content: searchWidget,
        expanded: false
    });
    view.ui.add(searchExpand, {
        position: "top-right",
        index: 2
    });

    // basemapGallery widget
    const basemapGallery = new BasemapGallery({
        view: view,
    });
    const basemapGalleryExpand = new Expand({
        view: view,
        content: basemapGallery,
        expanded: false
    });
    view.ui.add(basemapGalleryExpand, "top-right");

    // Sketch widget
    const sketch = new Sketch({
        layer: graphicsLayer,
        view: view,
    });
    const sketchExpand = new Expand({
        view: view,
        content: sketch,
        expanded: false
    });
    view.ui.add(sketchExpand, "top-right");

    // AreaMeasurement2D widget
    const measurement2DWidget = new AreaMeasurement2D({
        view: view
    });
    const AreaMeasurement2DExpand = new Expand({
        view: view,
        content: measurement2DWidget,
        expanded: false
    });
    view.ui.add(AreaMeasurement2DExpand, "top-right");

    // Fullscreen widget
    const fullscreen = new Fullscreen({
        view: view
    });
    view.ui.add(fullscreen, "top-right");

    // Legend widget
    const legend = new Legend({
        view: view
    });
    const legendExpand = new Expand({
        view: view,
        content: legend,
        expanded: false
    });
    view.ui.add(legendExpand, "bottom-right");

    // Create a Layer List widget
    const layerList = new LayerList({
        view: view
    });
    const layerListExpand = new Expand({
        view: view,
        content: layerList,
        expanded: false
    });
    view.ui.add(layerListExpand, "top-left");

    // إضافة ScaleBar widget
    const scaleBar = new ScaleBar({
        view: view,
        unit: "dual",
    });
    view.ui.add(scaleBar, "bottom-left");

    const geojsonUrlInput = document.getElementById('geojsonUrl');
    const loadButton = document.getElementById('loadButton');
    const result1 = document.getElementById("result1");
    const result2 = document.getElementById("result2");
    const result3 = document.getElementById("result3");

    // Function to load GeoJSON from URL
    function loadGeoJSONFromURL(url) {
        // Create a GeoJSON layer
        const geojsonLayer = new GeoJSONLayer({
            url: url,
            renderer: {
                type: "simple",
                symbol: {
                    type: "simple-marker",
                    color: "blue",
                    size: 6,
                    outline: {
                        color: "white",
                        width: 1
                    }
                }
            }
        });

        // Remove the previous layer if it exists
        const existingLayer = map.findLayerById("loadedGeoJSON");
        if (existingLayer) {
            map.remove(existingLayer);
        }

        // Add the new layer to the map
        geojsonLayer.id = "loadedGeoJSON";
        map.add(geojsonLayer);

        // Return the GeoJSON layer for spatial analysis
        return geojsonLayer;
    }

    // Event listener for the Load button
    loadButton.addEventListener("click", function () {
        const url = geojsonUrlInput.value.trim();
        if (url) {
            const loadedGeoJSONLayer = loadGeoJSONFromURL(url);

            // Event handler for sketch completion
            sketch.on("create", function (event) {
                if (event.state === "complete") {
                    // Get the drawn geometry
                    const drawnGeometry = event.graphic.geometry;
                    // Perform spatial analysis
                    performSpatialAnalysis(drawnGeometry, loadedGeoJSONLayer);
                }
            });
        } else {
            alert("Please enter a valid GeoJSON URL.");
        }
    });

    // ################################################ Intersect Analysis #####################################

    // Function to perform Intersect analysis using drawn shapes
    function performSpatialAnalysisWithDrawnShapes() {
        // Calculate intersections between drawn shapes
        const drawnShapes = graphicsLayer.graphics.toArray();
        const intersectingGraphics = [];
        const nonIntersectingGraphics = [];
        const result = [];

        for (let i = 0; i < drawnShapes.length; i++) {
            const shape1 = drawnShapes[i];
            const geometry1 = shape1.geometry;

            let intersects = false;

            for (let j = i + 1; j < drawnShapes.length; j++) {
                const shape2 = drawnShapes[j];
                const geometry2 = shape2.geometry;

                if (geometryEngine.intersects(geometry1, geometry2)) {
                    // Green Point for Intersecting
                    result.push(`Shape ${i + 1} intersects with Shape ${j + 1}`);
                    const intersection = geometryEngine.intersect(geometry1, geometry2);
                    markerLayer.add(new Graphic({
                        geometry: intersection,
                        symbol: {
                            type: "simple-marker",
                            color: "green",
                            size: "12px",
                            outline: {
                                color: "white",
                                width: 2
                            }
                        }
                    }));
                    intersects = true;
                    break;
                }
            }
            if (intersects) {
                intersectingGraphics.push(shape1);
            } else {
                nonIntersectingGraphics.push(shape1);
            }
        }

        result1.innerHTML = `
        <span style="text-decoration: underline; font-weight: bold;">Spatial Analysis :</span> 
        <br>
        عدد الأشكال التي تتقاطع مع بعضها <span style="color:blue">(زرقاء)</span>: <br> 
        ${intersectingGraphics.length}`;
        result2.innerHTML = `
        عدد الأشكال التي لا تتقاطع مع بعضها <span style="color:#d50b0b">(حمراء)</span>: <br>
        ${nonIntersectingGraphics.length}`;

        // Display the results in the resultsDiv
        if (result.length > 0) {
            result.forEach((message) => {
                result3.innerHTML = `<span style="text-decoration: underline; font-weight: bold;">Intersections :</span> <br> 
                ${message}`;
            });
        } else {
            result3.innerHTML = `No intersections between drawn shapes.`;
        }
        // Blue for Intersecting
        intersectingGraphics.forEach((graphic) => {
            graphic.symbol = {
                type: "simple-fill",
                color: [0, 0, 255, 0.5], // Blue + opacity
                outline: {
                    color: "blue",
                    width: 1,
                },
            };
            graphicsLayer.remove(graphic);
            graphicsLayer.add(graphic);
        });

        // Red for non-Intersecting
        nonIntersectingGraphics.forEach((graphic) => {
            graphic.symbol = {
                type: "simple-fill",
                color: [255, 0, 0, 0.5], // Red + opacity
                outline: {
                    color: "red",
                    width: 1,
                },
            };
            graphicsLayer.remove(graphic);
            graphicsLayer.add(graphic);
        });
    }

    const analysisButton = document.getElementById("intersect-analysis-Button");
    analysisButton.addEventListener("click", performSpatialAnalysisWithDrawnShapes);

    // ################################################ Contains Analysis #####################################
    // Event listener for the Contains Analysis button
    function performContainsAnalysis(drawnShapes) {
        const containsResults = [];
        let containingShapesCount = 0; // عدد الأشكال التي تحتوي على أشكال أخرى
        let nonContainingShapesCount = 0; // عدد الأشكال التي لا تحتوي على أشكال أخرى

        // تجميع النقاط والأشكال الداخلية والخارجية
        const points = [];
        const innerShapes = [];
        const outerShapes = [];

        for (let i = 0; i < drawnShapes.length; i++) {
            const shape1 = drawnShapes[i];
            const geometry1 = shape1.geometry;
            const shapeType = shape1.geometry.type;

            if (shapeType === "point") {
                points.push(shape1);
            } else if (geometry1.type === "point") {
                points.push(shape1);
            } else if (geometry1.type === "polygon" || geometry1.type === "polyline") {
                outerShapes.push(shape1);
            }

            let contains = false;

            for (let j = 0; j < drawnShapes.length; j++) {
                if (i !== j) {
                    const shape2 = drawnShapes[j];
                    const geometry2 = shape2.geometry;

                    if (geometryEngine.contains(geometry1, geometry2)) {
                        containsResults.push(`Shape 
                        <span style="font-weight: bold;">${i + 1}</span> 
                        contains Shape 
                        <span style="font-weight: bold;">${j + 1}</span>`);
                        contains = true;
                    }
                }
            }

            if (contains) {
                containingShapesCount++;
                // تحديد لون الشكل الخارجي بلون أزرق
                shape1.symbol = {
                    type: "simple-fill",
                    color: "blue",
                    outline: {
                        color: "white",
                        width: 1,
                    },
                };
            } else {
                nonContainingShapesCount++;
                // تحديد لون الشكل الخارجي بلون أحمر
                shape1.symbol = {
                    type: "simple-fill",
                    color: "red",
                    outline: {
                        color: "white",
                        width: 1,
                    },
                };
            }
        }

        // تحديد لون الشكل النقطي داخل الشكل الآخر بلون أصفر
        for (const point of points) {
            for (const outerShape of outerShapes) {
                if (geometryEngine.contains(outerShape.geometry, point.geometry)) {
                    point.symbol = {
                        type: "simple-marker",
                        color: "yellow",
                        size: 6,
                        outline: {
                            color: "white",
                            width: 1,
                        },
                    };
                }
            }
        }

        // عرض العدد الناتج
        result1.innerHTML = `
        <span style="text-decoration: underline; font-weight: bold;">Contains Analysis :</span> 
        <br>
        عدد الظاهرات التي <span style="color:blue; font-weight: bold">تحتوى</span> على ظاهرات أخرى بداخلها : <br> 
        <span style="font-weight: bold;">${containingShapesCount}</span>
        <br>
        عدد الظاهرات التي <span style="color:red; font-weight: bold">لا تحتوى</span> على ظاهرات أخرى بداخلها : <br> 
        <span style="font-weight: bold;">${nonContainingShapesCount}</span>`;

        return containsResults;
    }

    // Event listener for the Contains Analysis button
    const containsButton = document.getElementById("containsButton");
    containsButton.addEventListener("click", function () {
        const drawnShapes = graphicsLayer.graphics.toArray();
        const containsResults = performContainsAnalysis(drawnShapes);

        // Display the results
        if (containsResults.length > 0) {
            result3.innerHTML = `
            <span style="text-decoration: underline; font-weight: bold;">Contains Analysis Results : </span> 
            <br>
             ${containsResults.join("<br>")}`;
        } else {
            result3.innerHTML = "No shapes contain each other.";
        }
    });


    // ################################################ Overlap Analysis #####################################

    // Event listener for the Overlap Analysis button
    const overlapAnalysisButton = document.getElementById("overlapAnalysisButton");
    overlapAnalysisButton.addEventListener("click", function () {
        const drawnShapes = graphicsLayer.graphics.toArray();
        const overlapResults = performOverlapAnalysis(drawnShapes);

        // Display the results
        if (overlapResults.length > 0) {
            result3.innerHTML = `
        <span style="text-decoration: underline; font-weight: bold;">Overlap Analysis Results : </span> 
        <br>
         ${overlapResults.join("<br>")}`;
        } else {
            result3.innerHTML = "No shapes overlap each other.";
        }
    });

    // Function to perform Overlap analysis using drawn shapes
    function performOverlapAnalysis(drawnShapes) {
        const overlapResults = [];
        let overlappingShapesCount = 0; // عدد الأشكال التي تتداخل مع بعضها
        let nonOverlappingShapesCount = 0; // عدد الأشكال التي لا تتداخل مع بعضها

        // تجميع النقاط والأشكال الداخلية والخارجية
        const points = [];
        const innerShapes = [];
        const outerShapes = [];

        for (let i = 0; i < drawnShapes.length; i++) {
            const shape1 = drawnShapes[i];
            const geometry1 = shape1.geometry;
            const shapeType = shape1.geometry.type;

            if (shapeType === "point") {
                points.push(shape1);
            } else if (geometry1.type === "point") {
                points.push(shape1);
            } else if (geometry1.type === "polygon" || geometry1.type === "polyline") {
                outerShapes.push(shape1);
            }

            let overlaps = false;

            for (let j = 0; j < drawnShapes.length; j++) {
                if (i !== j) {
                    const shape2 = drawnShapes[j];
                    const geometry2 = shape2.geometry;

                    if (geometryEngine.overlaps(geometry1, geometry2)) {
                        overlapResults.push(`Shape 
                    <span style="font-weight: bold;">${i + 1}</span> 
                    overlaps with Shape 
                    <span style="font-weight: bold;">${j + 1}</span>`);
                        overlaps = true;
                    }
                }
            }

            if (overlaps) {
                overlappingShapesCount++;
                // تحديد لون الشكل الخارجي بلون أخضر
                shape1.symbol = {
                    type: "simple-fill",
                    color: "green",
                    outline: {
                        color: "white",
                        width: 1,
                    },
                };
            } else {
                nonOverlappingShapesCount++;
                // تحديد لون الشكل الخارجي بلون أحمر
                shape1.symbol = {
                    type: "simple-fill",
                    color: "red",
                    outline: {
                        color: "white",
                        width: 1,
                    },
                };
            }
        }

        // تحديد لون الشكل النقطي داخل الشكل الآخر بلون أصفر
        for (const point of points) {
            for (const outerShape of outerShapes) {
                if (geometryEngine.overlaps(outerShape.geometry, point.geometry)) {
                    point.symbol = {
                        type: "simple-marker",
                        color: "yellow",
                        size: 6,
                        outline: {
                            color: "white",
                            width: 1,
                        },
                    };
                }
            }
        }

        // عرض العدد الناتج
        result1.innerHTML = `
    <span style="text-decoration: underline; font-weight: bold;">Overlap Analysis :</span> 
    <br>
    عدد الأشكال التي <span style="color:green; font-weight: bold">تتداخل</span> مع بعضها : <br> 
    <span style="font-weight: bold;">${overlappingShapesCount}</span>
    <br>
    عدد الأشكال التي <span style="color:red; font-weight: bold">لا تتداخل</span> مع بعضها : <br> 
    <span style="font-weight: bold;">${nonOverlappingShapesCount}</span>`;

        return overlapResults;
    }

    // ################################################ Equals Analysis #####################################

    // Event listener for the Equals Analysis button
    const equalsAnalysisButton = document.getElementById("equalsAnalysisButton");
    equalsAnalysisButton.addEventListener("click", function () {
        const drawnShapes = graphicsLayer.graphics.toArray();
        const equalsResults = performEqualsAnalysis(drawnShapes);

        // Display the results
        if (equalsResults.length > 0) {
            result3.innerHTML = `
        <span style="text-decoration: underline; font-weight: bold;">Equals Analysis Results : </span> 
        <br>
         ${equalsResults.join("<br>")}`;
        } else {
            result3.innerHTML = "No shapes are equal to each other.";
        }
    });

    // Function to perform Equals analysis using drawn shapes
    function performEqualsAnalysis(drawnShapes) {
        const equalsResults = [];
        let equalShapesCount = 0; // عدد الأشكال التي تكون متساوية

        // تجميع النقاط والأشكال الداخلية والخارجية
        const points = [];
        const innerShapes = [];
        const outerShapes = [];

        for (let i = 0; i < drawnShapes.length; i++) {
            const shape1 = drawnShapes[i];
            const geometry1 = shape1.geometry;
            const shapeType = shape1.geometry.type;

            if (shapeType === "point") {
                points.push(shape1);
            } else if (geometry1.type === "point") {
                points.push(shape1);
            } else if (geometry1.type === "polygon" || geometry1.type === "polyline") {
                outerShapes.push(shape1);
            }

            let equals = false;

            for (let j = 0; j < drawnShapes.length; j++) {
                if (i !== j) {
                    const shape2 = drawnShapes[j];
                    const geometry2 = shape2.geometry;

                    if (geometryEngine.equals(geometry1, geometry2)) {
                        equalsResults.push(`Shape 
                    <span style="font-weight: bold;">${i + 1}</span> 
                    is equal to Shape 
                    <span style="font-weight: bold;">${j + 1}</span>`);
                        equals = true;
                    }
                }
            }

            if (equals) {
                equalShapesCount++;
                // تحديد لون الشكل بلون أصفر للتمييز
                shape1.symbol = {
                    type: "simple-fill",
                    color: "yellow",
                    outline: {
                        color: "white",
                        width: 1,
                    },
                };
            }
        }

        // تحديد لون الشكل النقطي داخل الشكل الآخر بلون أصفر
        for (const point of points) {
            for (const outerShape of outerShapes) {
                if (geometryEngine.equals(outerShape.geometry, point.geometry)) {
                    point.symbol = {
                        type: "simple-marker",
                        color: "yellow",
                        size: 6,
                        outline: {
                            color: "white",
                            width: 1,
                        },
                    };
                }
            }
        }

        // عرض العدد الناتج
        result1.innerHTML = `
    <span style="text-decoration: underline; font-weight: bold;">Equals Analysis :</span> 
    <br>
    عدد الأشكال التى تكون <span style="color:green; font-weight: bold"> متساوية</span> مع بعضها : <br> 
    <span style="font-weight: bold;">${equalShapesCount}</span>`;

        return equalsResults;
    }


});