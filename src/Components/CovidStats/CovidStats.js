import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import axios from "axios";
import * as d3  from "d3";
import './CovidStats.css'  ;
import CovidTable  from "../Covidtable/CovidTable";

class CovidStats extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      covidStats : {}
    }
    
    this.drawStats = this.drawStats.bind(this)
  }
  
 
  
  componentDidMount(){
    
    axios.get('https://corona-virus-world-and-india-data.p.rapidapi.com/api',
    {
      "headers": {
        "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key": "e636271222mshfa09fbf3b678f09p1a3847jsnfdd985c1a38a"
        }
    })
    .then(res => 
      this.setState({
        ...this.state,
        covidStats : res.data
      },
        () =>{
        this.drawStats(this.state.covidStats)
        }
        )
    )
    .catch(err => console.log(err) )
  }
  
  drawStats(data){
        
      const countryStat = data.countries_stat;
      const  width = 700;
      const height = 400;
      
      const margin = { left : 90 , right : 20 , top : 40 , bottom : 30 }
        
      const xValue = countryStat.slice(0,9).map(d => d.country_name)
      const yValue = countryStat.slice(0,9).map(d => parseFloat(d.cases.replace(/,/g,'')) ) 
      
      const xScale = d3.scaleBand().domain(xValue).range([margin.left,width + margin.left])
                     .padding(0.1)
      
      const yScale = d3.scaleLinear().domain([0 , d3.max(yValue)]).range([height,0])
      
      const svg = d3.select('#box').append('svg')
                  .attr("width", width + margin.left + margin.right )
                 .attr("height", height + margin.top + margin.bottom )
                 .style('background-color','lightBlue')
                 
      const xAxis =  d3.axisBottom(xScale)  
      const yAxis =  d3.axisLeft(yScale)
      
      svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height + margin.top } )`)
      .attr('class','xAxisStyle')
      
      svg.append('g')
      .call(yAxis)
      .attr('transform', `translate( ${margin.left } , ${margin.top}  )`)
      .attr('class','yAxisStyle')
      
      
      const linearScale = d3.scaleLinear()
                          .domain([0 , d3.max(yValue) ])
                          .range([0, height])
       
      
      const yData = yValue.map( val => linearScale(val) )
      
      
      svg.selectAll('rect')
      .data(yData)
      .enter()
      .append('rect')
      .attr('width', xScale.bandwidth() )
      .attr('height', d => d )
      .attr('x', (d, i) =>  xScale(xValue[i])  )
      .attr('y', d => margin.top + height - d  )
      .attr('fill','dodgerblue') 
      .attr('stroke', 'black')
      
      svg.append('text')
      .text('Covid-19 Cases')
      .attr('x', (margin.left + width + margin.right ) / 2 )
      .attr('y', (margin.top + margin.bottom)  / 2   )
      .attr('stroke', '#33658A')
      .style('font-size', '2em' )
      
  }
  
  
  render() {
  
    return (
      <main>
        <Grid container style={{ padding : '10px' }} alignItems="center">
        {
          this.props.value === 'barChart'  ? 
            <Grid item sm className="barChart" >
              <Typography component="div" id="box">
              </Typography>
            </Grid>
          :
          <Grid item container justify="center" style={{ marginTop : '1em' }} >
            <CovidTable 
            covidData={this.state.covidStats} 
            />
          </Grid>
        }
        </Grid>
      </main>
    );
  }
}

export default CovidStats;