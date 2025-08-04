import React from "react";

const ModelViewerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl w-full">
        {/* Left Side: Model Viewer */}
        <div className="flex justify-center">
          <model-viewer
            src="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
            alt="3D car"
            auto-rotate
            rotation-per-second="90deg"
            camera-controls
            ar
            style={{ width: "100%", height: "400px" }}
          ></model-viewer>
        </div>

        {/* Right Side: Car Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">ToyCar 3D Model</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong>Type:</strong> Compact Toy Car</li>
            <li><strong>Color:</strong> Red with black wheels</li>
            <li><strong>Material:</strong> Plastic shell, rubber tires</li>
            <li><strong>Wheels:</strong> 4 functional rotating wheels</li>
            <li><strong>Model Source:</strong> KhronosGroup glTF Sample Models</li>
            <li><strong>Rotation:</strong> Enabled (auto-rotate at 90°/sec)</li>
            <li><strong>AR Support:</strong> Yes (if supported by device)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModelViewerPage;
