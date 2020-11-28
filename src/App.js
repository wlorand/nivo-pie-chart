// import React from 'react'; // not needed for react 17

// mock data
import progLangData from './mock-data/progLangData';

// child components
import AssetCategoryPieChart from './components/AssetCategoryPieChart';

// styles
import './styles/app.css';

function App() {
  return (
    <>
      <header className="app-header">
        <h1>Nivo Pie Chart Proto: AIMM Asset Categories</h1>
      </header>
      <AssetCategoryPieChart data={progLangData} />
    </>
  );
}

export default App;
