// import React from "react"; no need for React 17

// nivo packages
import { ResponsivePie } from '@nivo/pie';

// styles -- todo: start using styled components or tailwind
import '../styles/app.css';

// Centered Metric
const CenteredMetric = ({ dataWithArc, centerX, centerY }) => {
  // todo: replace with a reduce
  let total = 0;
  dataWithArc.forEach((datum) => {
    total += datum.value;
  });

  console.log(dataWithArc instanceof Array); // true

  return (
    <text
      x={centerX}
      y={centerY}
      textAnchor="middle"
      dominantBaseline="central"
      class="asset-total"
    >
      {total}
    </text>
  );
};

const AssetCategoryPie = ({ data }) => {
  return (
    <div className="asset-cat-pie">
      <h3 className="panel-title">AIMM Asset Categories</h3>
      <ResponsivePie
        data={data}
        margin={{ top: 15, right: 80, bottom: 80, left: 80 }}
        sortByValue={true}
        innerRadius={0.5}
        padAngle={2}
        colors={['rgb(255, 220, 0)', 'rgb(255, 147, 49)', 'rgb(127, 208, 0)']}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsTextColor="#FFF"
        radialLabelsLinkOffset={1}
        radialLabelsLinkColor="#FFF"
        radialLabel="label"
        sliceLabel="value"
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#FFF"
        layers={['slices', 'sliceLabels', 'radialLabels', CenteredMetric]}
      />
    </div>
  );
};

export default AssetCategoryPie;
