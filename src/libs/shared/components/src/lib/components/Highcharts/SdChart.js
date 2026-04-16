import { useEffect } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "highcharts/modules/accessibility";
import "highcharts/modules/export-data";
import "highcharts/modules/exporting";
import "highcharts/modules/marker-clusters";

const defaultOptions = {
  exporting: {
    enabled: false
  },
  title: {
    text: ""
  },
  chart: {
    width: 0,
    backgroundColor: "transparent"
  },
  credits: {
    enabled: false
  }
};

const SdChart = ({ options = defaultOptions, chartRef, loading = false, containerProps = {}, constructorType, callback }) => {
  useEffect(() => {
    if (chartRef?.current?.chart) {
      if (loading) {
        chartRef?.current?.chart.showLoading(
          `<img src="/_assets/radware_loading_spinner.gif" alt="loading_spinner" height="50" width="50">`
        );
      } else {
        chartRef?.current?.chart.hideLoading();
      }
    }
  }, [loading, chartRef]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartRef}
      containerProps={{ ...(containerProps ? containerProps : {}) }}
      constructorType={constructorType}
      callback={callback}
    />
  );
};

export default SdChart;
