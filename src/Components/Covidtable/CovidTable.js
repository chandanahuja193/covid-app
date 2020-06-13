import React from 'react';
import { Table } from "antd";
import 'antd/dist/antd.css';
import './CovidTable.css'


const CovidTable = ({covidData }) => {

  const { countries_stat } =  covidData
  
  const columns = [
    {
      title : 'Country Name',
      dataIndex: 'country_name',
      key : 'country_name',

      render: text => <div>{text}</div>,   
    },
    {
      title : 'Cases',
      dataIndex: 'cases',
      key : 'cases',
      render: text => <div>{text}</div>,   
    },
    {
      title : 'Deaths',
      dataIndex: 'deaths',
      key : 'deaths',
      render: text => <div>{text}</div>,   
    },
    {
      title : 'Total Recovered',
      dataIndex: 'total_recovered',
      key : 'total_recovered',
      render: text => <div>{text}</div>,   
    },
    {
      title : 'Active Cases',
      dataIndex: 'active_cases',
      key : 'active_cases',
      render: text => <div>{text}</div>,   
    },
    
  
  ]

  return (
    <Table 
    columns={columns}
    dataSource={countries_stat}
    bordered
    title={() => <div>Covid-19 Data</div> }
    />
  );
};

export default CovidTable;