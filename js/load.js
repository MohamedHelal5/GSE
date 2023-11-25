require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/layers/MapImageLayer",
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
    MapImageLayer,
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

    // Home Widget
    const home = new Home({
        view: view,
    });
    view.ui.add(home, "top-left");

    // Fullscreen Widget
    const fullscreen = new Fullscreen({
        view: view,
    });
    view.ui.add(fullscreen, "top-left");

    // scaleBar Widget
    const scaleBar = new ScaleBar({
        view: view,
        unit: "dual",
    });
    view.ui.add(scaleBar, "bottom-left");

    const widgets = [
        {
            widget: new Search({ view: view }),
            position: 'top-right'
        },
        {
            widget: new Sketch({ view: view, layer: new GraphicsLayer() }),
            position: 'top-right'
        },
        {
            widget: new Legend({ view: view }),
            position: 'bottom-right'
        },
        {
            widget: new BasemapGallery({ view: view }),
            position: 'top-right'
        },
        {
            widget: new AreaMeasurement2D({ view: view }),
            position: 'top-left'
        },
        {
            widget: new LayerList({ view: view }),
            position: 'top-right'
        },
    ];

    // Add each widget to the view's UI
    widgets.forEach(({ widget, position }) => {
        view.ui.add(new Expand({ view, content: widget, expanded: false }), position);
    });

    // Event listener for the loadServerDataButton
    document.getElementById("loadServerDataButton").addEventListener("click", function () {
        // Get the service URL from the input
        const serviceUrl = document.getElementById("serviceUrl").value;

        // Create a MapImageLayer from the service URL
        const mapImageLayer = new MapImageLayer({
            url: serviceUrl
        });

        // Add an event listener for the 'load' event to handle errors
        mapImageLayer.on("layerview-create-error", function (error) {
            // Display a warning message in case of an error
            const errorArcServiceMessage = document.getElementById("alertArcServiceMessage");
            errorArcServiceMessage.textContent = "Error loading ArcServer data. Please check the URL or try again.";
            errorArcServiceMessage.classList.remove("success-message");
            errorArcServiceMessage.classList.add("error-message");
            console.error("LayerView creation failed:", error);
        });

        // Add the MapImageLayer to the map
        map.add(mapImageLayer);

        // Display success message
        const successArcServiceMessage = document.getElementById("alertArcServiceMessage");
        successArcServiceMessage.textContent = "ArcServer data loaded successfully!";
        successArcServiceMessage.classList.remove("error-message");
        successArcServiceMessage.classList.add("success-message");
    });

    // Event listener for the loadButton
    document.getElementById("loadButton").addEventListener("click", function () {
        // Get the GeoJSON URL from the input
        const geojsonUrl = document.getElementById("geojsonUrl").value;

        // Create a GeoJSONLayer from the GeoJSON URL
        const geojsonLayer = new GeoJSONLayer({
            url: geojsonUrl
        });

        // Add an event listener for the 'layerview-create-error' event to handle errors
        geojsonLayer.on("layerview-create-error", function (error) {
            // Display an error message in case of an error
            const errorMessage = document.getElementById("alertGeoJSONMessage");
            errorMessage.textContent = "Error loading GeoJSON data. Please check the URL or try again.";
            errorMessage.classList.remove("success-message");
            errorMessage.classList.add("error-message");
            console.error("LayerView creation failed:", error);
        });

        // Add the GeoJSONLayer to the map
        map.add(geojsonLayer);

        // Display success message
        const successMessage = document.getElementById("alertGeoJSONMessage");
        successMessage.textContent = "GeoJSON data loaded successfully!";
        successMessage.classList.remove("error-message"); // Remove error class
        successMessage.classList.add("success-message"); // Add success class
    });

    // Event listener for the clear button
    document.getElementById("clr-btn").addEventListener("click", function () {
        // Clear the input fields
        document.getElementById("geojsonUrl").value = "";
        document.getElementById("serviceUrl").value = "";

        // Clear success and error messages for GeoJSON
        const geoJsonMessage = document.getElementById("alertGeoJSONMessage");
        geoJsonMessage.textContent = "";
        geoJsonMessage.classList.remove("error-message", "success-message");

        // Clear success and error messages for ArcServer
        const ArcServerMessage = document.getElementById("alertArcServiceMessage");
        ArcServerMessage.textContent = "";
        ArcServerMessage.classList.remove("error-message", "success-message");
    });

});