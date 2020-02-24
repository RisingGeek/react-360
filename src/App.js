import React from 'react';

import I360Viewer from './components/I360Viewer'

function App() {
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 m-4 card p-0">
          <div className="v360-header text-light bg-dark">
              <span className="v360-header-title">36 Images - Autoplay (1 loop) - Reverse Spin</span>
              <span className="v360-header-description"></span>
          </div>
          <I360Viewer
            amount={36}
            imagePath="https://scaleflex.cloudimg.io/crop/1920x700/n/https://scaleflex.airstore.io/demo/360-car"
            fileName="iris-{index}.jpeg"
            spinReverse
            autoplay
            buttonClass="dark"
          />
        </div>
      </div>
      <div className="col-12 mb-4 text-center card">
        <h4>More Examples</h4>
        <p>A simple, interactive resource that can be used to provide a virtual tour of your product.</p>
        <p>100% Mobile Responsive with Touch Actions</p>
        <p>Features include Zoom, Pan, Autoplay, Loop, Crop, Reverse Spin, Show/Hide Header, and more. <a href="https://github.com/rajeevgade/vue-360-viewer">Click here for more information.</a> </p>
      </div>
    </div>
  );
}

export default App;