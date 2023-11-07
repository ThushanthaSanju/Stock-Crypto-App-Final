import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ ticker }) => {
  const [data, setData] = useState([]);
  const [companyName, setCompanyName] = useState('');

  useEffect(() => {
    const apiKey = '5KKCJZX2GPD46CG6';
    const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${apiKey}`;

    axios.get(apiUrl)
      .then(response => {
        const metaData = response.data['Meta Data'];
        const timeSeriesData = response.data['Time Series (5min)'];
        const chartData = [];
        setCompanyName(metaData['2. Symbol']); // Get company name

        Object.keys(timeSeriesData).forEach(time => {
          chartData.push({
            time,
            price: parseFloat(timeSeriesData[time]['1. open']),
          });
        });

        setData(chartData);
      })
      .catch(error => {
        console.error('Error fetching stock data:', error);
      });
  }, [ticker]);

  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={data}>
        <XAxis dataKey="time" name="Time" />{/* Add the name for the X axis */}
        <YAxis dataKey="price" name="Price" />{/* Add the name for the Y axis */}
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#ff0000" activeDot={{ r: 12 }} name={companyName} />{/* Use company name for the legend */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
