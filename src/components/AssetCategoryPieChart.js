// import React from 'react'; no need in v17

// nivo components
import { ResponsivePie } from '@nivo/pie';

const AssetCategoryPieChart = ({ data }) => {
  return (
    <div className="chart-height-400">
      <h3 className="panel-title">AI Asset Categories</h3>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        sortByValue={true}
        innerRadius={0.5}
        padAngle={2}
        colors={{ scheme: 'category10' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', '0.3']] }}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={18}
        radialLabelsLinkHorizontalLength={20}
        radialLabelsLinkColor={{ from: 'color', modifiers: [] }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        legends={[]}
      />
    </div>
  );
};

export default AssetCategoryPieChart;
