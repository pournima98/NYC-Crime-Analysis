// App.js
import React, { useState } from 'react';
import './App.css';
import icon from './img/icon.png';
import tile1 from './img/top_crimes_tile.PNG';
import tile2 from './img/hotspot_tile.PNG';
import tile3 from './img/Crime_By_Month_Tile.jpg';
import tile4 from './img/Crime_By_Year_Tile.jpg';
import tile5 from './img/Hourly_Crime_Reports_Tile.jpg';
import tile6 from './img/Victims_Age_Group_Tile.jpg';
import tile7 from './img/Victims_By_Gender_Tile.jpg';
import tile8 from './img/heatmap_tile.PNG';
import tile9 from './img/borough_tile.jpg';
import tile10 from './img/distribution_tile.jpg';
import tile1_Onclick from './img/top_crimes.jpg'
import tile3_Onclick from './img/CrimeByMonth.jpeg'
import tile4_Onclick from './img/TotalCrimeEventsByYear.PNG'
import tile5_Onclick from './img/HourlyCrimeReports1.png'
import tile6_Onclick from './img/SexCrimeVictimsbyAgeGroup.PNG'
import tile7_Onclick from './img/CrimesCountBySex.png'
import tile9_Onclick from './img/Crime_By_Borough1.png'
import tile10_Onclick from './img/CrimesDistributionBySex.png'


const Tile = ({ id, onClick }) => {
  const imageSources = {
    1: tile1,
    2: tile2,
    3: tile3,
    4: tile4,
    5: tile5,
    6: tile6,
    7: tile7,
    8: tile8,
    9: tile9,
    10: tile10,
  };

  return (
    <div className="tile" onClick={() => onClick(id)}>
      <img src={imageSources[id]} alt={`Tile ${id}`} />
    </div>
  );
};

const FullScreenDialog = ({ onClose, imageSource, altText }) => (
  <div className="full-screen-dialog" onClick={onClose}>
    <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {imageSource && <img src={imageSource} alt={altText} />}
    </div>
  </div>
);

const App = () => {
  const [isSideBarOpen, setSideBarOpen] = useState(true);
  const [selectedTile, setSelectedTile] = useState(null);

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  const handleTileClick = (id) => {
    let imageSource;
    setSelectedTile({ id, imageSource });
  };

  const handleCloseDialog = () => {
    setSelectedTile(null);
  };

  const getImageSource = (id) => {
    switch (id) {
      case 1:
        return tile1_Onclick;
      case 2:
        window.open('https://ucr.maps.arcgis.com/apps/dashboards/f56b8c05fb664c8b9bd10b2da60508c5', '_blank');
		return;
      case 3:
        return tile3_Onclick;
      case 4:
        return tile4_Onclick;
      case 5:
        return tile5_Onclick;
      case 6:
        return tile6_Onclick;
      case 7:
        return tile7_Onclick;
      case 8:
        window.open('https://ucr.maps.arcgis.com/apps/dashboards/b19f46a79daa49c092e878a1af144b75', '_blank');
		return;
      case 9:
        return tile9_Onclick;
      case 10:
        return tile10_Onclick;
      default:
        return null;
    }
  };

  const imgSrc = selectedTile !== null ? getImageSource(selectedTile.id) : null;

  return (
    <div>
      <div className="top-bar">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={icon} alt="icon" style={{ width: '30px', marginRight: '10px' }} />
            <h1>CrimeCalculus</h1>
          </div>
          <div>
            <h2>Crime Data Analysis</h2>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        {isSideBarOpen && (
          <div className="side-bar">
            {/* Blank Side Bar */}
          </div>
        )}
        <div className="main-area">
          <Tile id={1} onClick={handleTileClick} />
          <Tile id={2} onClick={handleTileClick} />
          <Tile id={3} onClick={handleTileClick} />
          <Tile id={4} onClick={handleTileClick} />
          <Tile id={5} onClick={handleTileClick} />
          <Tile id={6} onClick={handleTileClick} />
          <Tile id={7} onClick={handleTileClick} />
          <Tile id={8} onClick={handleTileClick} />
          <Tile id={9} onClick={handleTileClick} />
          <Tile id={10} onClick={handleTileClick} />
        </div>
        {selectedTile !== null && selectedTile.id!=2 && selectedTile.id!=8 && (
          <FullScreenDialog
            onClose={handleCloseDialog}
            imageSource={imgSrc}
            altText={`FullScreen Image ${selectedTile.id}`}
          />
        )}
        {!isSideBarOpen && (
          <button onClick={toggleSideBar}>&gt;&gt; Show Side Bar</button>
        )}
      </div>
    </div>
  );
};

export default App;