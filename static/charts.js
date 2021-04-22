d3.json("/api/v1.0/Correlation").then(function(CorrData){
  console.log(CorrData);

  var data = [
  {
    z: [[1.0, 0.7996180164900025, 0.7653012432368554, 0.7923204043338905, 0.619505363689766, 0.010428804598273883, 0.43135766390674996, 0.5157218545878531], [0.7996180164900025, 1.0, 0.7886483373402697, 0.8599051155145977, 0.44798084580856573, -0.20152141797322556, 0.33571146668763807, 0.0010642490735393395], [0.7653012432368554, 0.7886483373402697, 1.0, 0.7250848832510157, 0.4840563830848691, -0.11685618533243557, 0.20357508902618351, 0.046582772501521326], [0.7923204043338905, 0.8599051155145977, 0.7250848832510157, 1.0, 0.4842452406705684, -0.16494401477549728, 0.3542014055879155, 0.05018184731307821], [0.619505363689766, 0.44798084580856573, 0.4840563830848691, 0.4842452406705684, 1.0, 0.16158820078847036, 0.41287654956551023, 0.12472330436630259], [0.010428804598273883, -0.20152141797322556, -0.11685618533243557, -0.16494401477549728, 0.16158820078847036, 1.0, 0.15946097751780483, 0.0402504169799939], [0.43135766390674996, 0.33571146668763807, 0.20357508902618351, 0.3542014055879155, 0.41287654956551023, 0.15946097751780483, 1.0, 0.037517270856322296], [0.5157218545878531, 0.0010642490735393395, 0.046582772501521326, 0.05018184731307821, 0.12472330436630259, 0.0402504169799939, 0.037517270856322296, 1.0]],
    // z: [[CorrData]],
    x: ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"],
    y: ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"],
    type: 'heatmap',
    colorscale: 'Blackbody'
  }
];
var layout = {
  title : "WHR Correlation Matrix",
  autosize: false,
  width: 800,
  height: 600,
  yaxis: {
    tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
    tickmode: 'array',
    automargin: true,
    titlefont: { size:20 },
  },
  xaxis: {
    tickvals: [0, 1, 2, 3, 4, 5, 6, 7],
    tickmode: 'array',
    automargin: true,
    titlefont: { size:20 },
  },
  paper_bgcolor: '#ffffff',
  plot_bgcolor: '#ffffff'
};
Plotly.newPlot('myDiv', data, layout);



// var xValues = ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"];

// var yValues = ["Happiness Score",	"GDP per Capita",	"Social Support",	"Healthy Life Expectancy",	"Freedom to make life choices",	"Generosity",	"Perception of Corruption",	"Dystopia + Residual Score"];

// var zValues = [
//   [[1.0, 0.7996180164900025, 0.7653012432368554, 0.7923204043338905, 0.619505363689766, 0.010428804598273883, 0.43135766390674996, 0.5157218545878531], [0.7996180164900025, 1.0, 0.7886483373402697, 0.8599051155145977, 0.44798084580856573, -0.20152141797322556, 0.33571146668763807, 0.0010642490735393395],
//    [0.7653012432368554, 0.7886483373402697, 1.0, 0.7250848832510157, 0.4840563830848691, -0.11685618533243557, 0.20357508902618351, 0.046582772501521326], [0.7923204043338905, 0.8599051155145977, 0.7250848832510157, 1.0, 0.4842452406705684, -0.16494401477549728, 0.3542014055879155, 0.05018184731307821], [0.619505363689766, 0.44798084580856573, 0.4840563830848691, 0.4842452406705684, 1.0, 0.16158820078847036, 0.41287654956551023, 0.12472330436630259],
//    [0.010428804598273883, -0.20152141797322556, -0.11685618533243557, -0.16494401477549728, 0.16158820078847036, 1.0, 0.15946097751780483, 0.0402504169799939], [0.43135766390674996, 0.33571146668763807, 0.20357508902618351, 0.3542014055879155, 0.41287654956551023, 0.15946097751780483, 1.0, 0.037517270856322296],
//    [0.5157218545878531, 0.0010642490735393395, 0.046582772501521326, 0.05018184731307821, 0.12472330436630259, 0.0402504169799939, 0.037517270856322296, 1.0]],
// ];

// var colorscaleValue = [
//   [0, '#3D9970'],
//   [1, '#001f3f']
// ];

// var data = [{
//   x: xValues,
//   y: yValues,
//   z: zValues,
//   type: 'heatmap',
//   colorscale: colorscaleValue,
//   showscale: false
// }];

// var layout = {
//   title: 'Happiness Score Correlation Matrix',
//   annotations: [],
//   xaxis: {
//     ticks: '',
//     side: 'top'
//   },
//   yaxis: {
//     ticks: '',
//     ticksuffix: ' ',
//     width: 700,
//     height: 700,
//     autosize: false
//   }
// };

// for ( var i = 0; i < yValues.length; i++ ) {
//   for ( var j = 0; j < xValues.length; j++ ) {
//     var currentValue = zValues[i][j];
//     if (currentValue != 0.0) {
//       var textColor = 'white';
//     }else{
//       var textColor = 'black';
//     }
//     var result = {
//       xref: 'x1',
//       yref: 'y1',
//       x: xValues[j],
//       y: yValues[i],
//       text: zValues[i][j],
//       font: {
//         family: 'Arial',
//         size: 12,
//         color: 'rgb(50, 171, 96)'
//       },
//       showarrow: false,
//       font: {
//         color: textColor
//       }
//     };
//     layout.annotations.push(result);
//   }
// }

// Plotly.newPlot('myDiv', data, layout);


});




d3.json("/api/v1.0/WHR2021").then(function(WHRData) {
    
  console.log(WHRData);
  
  Ladder_score = WHRData.map(h => h.Ladder_score)
  Country_name = WHRData.map(h => h.Country_name)
  Explained_by_Log_GDP_per_capita = WHRData.map(h => h.Explained_by_Log_GDP_per_capita)
  Explained_by_Social_support = WHRData.map(h => h.Explained_by_Social_support)
  Explained_by_Healthy_life_expectancy = WHRData.map(h => h.Explained_by_Healthy_life_expectancy)
  Explained_by_Freedom_to_make_life_choices= WHRData.map(h => h.Explained_by_Freedom_to_make_life_choices)
  Explained_by_Generosity = WHRData.map(h => h.Explained_by_Generosity)
  Explained_by_Perceptions_of_corruption = WHRData.map(h => h.Explained_by_Perceptions_of_corruption)
  Dystopia_residual = WHRData.map(h => h.Dystopia_residual)
  Residual_X = WHRData.map(h => h.Residual_X)


  combinedArray = [Ladder_score,Country_name,Explained_by_Log_GDP_per_capita,Explained_by_Social_support,Explained_by_Healthy_life_expectancy,Explained_by_Freedom_to_make_life_choices,Explained_by_Generosity,Explained_by_Perceptions_of_corruption,Dystopia_residual,Residual_X]

            combinedArray = WHRData.map(Object.values)
              console.log(combinedArray);
                $(document).ready(function() {
                  $('#example').DataTable( {
                     data: combinedArray,
                      columns: [
                          { title: "Country" },
                          { title: "Dystopia + Residual Score" },
                          { title: "Freedom to make life choices" },
                          { title: "Generosity" },
                          { title: "Healthy Life Expectancy" },
                          { title: "GDP per Capita" },
                          { title: "Perception of Corruption" },
                          { title: "Social Support" },
                          { title: "Actual Life Expectancy Age" },
                          { title: "Happiness Score" },
                          { title: "Region" }
                        ]
                    } );
                  });
                });
















d3.json("/api/v1.0/WHR2021").then(function(WHRData) {
  
    console.log(WHRData);
  
    Ladder_score = WHRData.map(h => h.Ladder_score)
    Country_name = WHRData.map(h => h.Country_name)
    Explained_by_Log_GDP_per_capita = WHRData.map(h => h.Explained_by_Log_GDP_per_capita)
    Explained_by_Social_support = WHRData.map(h => h.Explained_by_Social_support)
    Explained_by_Healthy_life_expectancy = WHRData.map(h => h.Explained_by_Healthy_life_expectancy)
    Explained_by_Freedom_to_make_life_choices= WHRData.map(h => h.Explained_by_Freedom_to_make_life_choices)
    Explained_by_Generosity = WHRData.map(h => h.Explained_by_Generosity)
    Explained_by_Perceptions_of_corruption = WHRData.map(h => h.Explained_by_Perceptions_of_corruption)
    Dystopia_residual = WHRData.map(h => h.Dystopia_residual)
    Residual_X = WHRData.map(h => h.Residual_X)
  
  
    combinedArray = [Ladder_score,Country_name,Explained_by_Log_GDP_per_capita,Explained_by_Social_support,Explained_by_Healthy_life_expectancy,Explained_by_Freedom_to_make_life_choices,Explained_by_Generosity,Explained_by_Perceptions_of_corruption,Dystopia_residual,Residual_X]
  
    // label = WHRData.map(h.)
  
    console.log(Ladder_score);
    console.log(Country_name);
    console.log(Explained_by_Log_GDP_per_capita);
    console.log(Explained_by_Social_support);
    console.log(Explained_by_Healthy_life_expectancy);
    console.log(Explained_by_Freedom_to_make_life_choices);
    console.log(Explained_by_Generosity);
    console.log(Explained_by_Perceptions_of_corruption);
    console.log(Dystopia_residual);
    console.log(Residual_X);
    console.log(combinedArray);




    var trace1 = {
      y: [Ladder_score[0],Ladder_score[1],Ladder_score[2],Ladder_score[3],Ladder_score[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'Happiness Score',
      // type:'scatter',
      // color:'rgb(255, 255, 255)',
      mode: 'lines+markers',
      line: {
      color: 'rgb(0, 0, 0)',
      width: 5
      },
      marker: {
        color: 'rgb(255, 0, 0)',
        size: 10
      },
    };
  
    var trace2 = {
      y: [Explained_by_Log_GDP_per_capita[0],Explained_by_Log_GDP_per_capita[1],Explained_by_Log_GDP_per_capita[2],Explained_by_Log_GDP_per_capita[3],Explained_by_Log_GDP_per_capita[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'LOG GDP per Capita',
      type: 'bar',
    
    };
    var trace3 = {
        y: [Dystopia_residual[0],Dystopia_residual[1],Dystopia_residual[2],Dystopia_residual[3],Dystopia_residual[4]],
        x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
        name: 'Dystopia Residual',
        type: 'bar',
  
    
    };
    var trace4 = {
      y: [Explained_by_Social_support[0],Explained_by_Social_support[1],Explained_by_Social_support[2],Explained_by_Social_support[3],Explained_by_Social_support[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'Social Support',
      type: 'bar',
  
  
  };
  var trace5 = {
    y: [Explained_by_Healthy_life_expectancy[0],Explained_by_Healthy_life_expectancy[1],Explained_by_Healthy_life_expectancy[2],Explained_by_Healthy_life_expectancy[3],Explained_by_Healthy_life_expectancy[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Healthy Life Expectancy',
    type: 'bar',
  
  
  };
  var trace6 = {
    y: [Explained_by_Freedom_to_make_life_choices[0],Explained_by_Freedom_to_make_life_choices[1],Explained_by_Freedom_to_make_life_choices[2],Explained_by_Freedom_to_make_life_choices[3],Explained_by_Freedom_to_make_life_choices[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Freedom To Make Life Choices',
    type: 'bar',
  
  
  };
  var trace7 = {
    y: [Explained_by_Generosity[0],Explained_by_Generosity[1],Explained_by_Generosity[2],Explained_by_Generosity[3],Explained_by_Generosity[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Generosity',
    orientation: 'v',
    type: 'bar',
  
  
  
  };
  var trace8 = {
    y: [Explained_by_Perceptions_of_corruption[0],Explained_by_Perceptions_of_corruption[1],Explained_by_Perceptions_of_corruption[2],Explained_by_Perceptions_of_corruption[3],Explained_by_Perceptions_of_corruption[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Perceptions of Corruption',
    type: 'bar',
  
  
  
  };
  // var trace9 = {
  //   x: [Residual_X [0],Residual_X [1],Residual_X [2],Residual_X [3],Residual_X [4]],
  //   y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  //   name: 'Residual_X ',
  //   orientation: 'h',
  //   type: 'bar',
  //   marker: {
  //     color: 'rgba(60, 250, 250,0.6)',
  //     width: 1
  //   }
  
  
    var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8];
  
    var layout = {
      title: 'Top 5 Happiest Country ',
      barmode: 'stack',
      xaxis: {
        tickangle: -90
      },
      yaxis: {
        title: 'Happiness Score'
      },
      plot_bgcolor: 'rgba(245,246,249,1)',
      // paper_bgcolor: 'rgba(245,246,249,1)',
      width: 1200,
      height: 600,
    
    };
  
  
    Plotly.newPlot('top5', data, layout);
  
      var trace1 = {
      y: [Ladder_score[0],Ladder_score[1],Ladder_score[2],Ladder_score[3],Ladder_score[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'Happiness Score',
      // type:'scatter',
      // color:'rgb(255, 255, 255)',
      mode: 'lines+markers',
      line: {
      color: 'rgb(0, 0, 0)',
      width: 5
      },
      marker: {
        color: 'rgb(255, 0, 0)',
        size: 10
      },
    };
  
    var trace2 = {
      y: [Explained_by_Log_GDP_per_capita[0],Explained_by_Log_GDP_per_capita[1],Explained_by_Log_GDP_per_capita[2],Explained_by_Log_GDP_per_capita[3],Explained_by_Log_GDP_per_capita[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'LOG GDP per Capita',
      type: 'bar',
    
    };
    var trace3 = {
        y: [Dystopia_residual[0],Dystopia_residual[1],Dystopia_residual[2],Dystopia_residual[3],Dystopia_residual[4]],
        x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
        name: 'Dystopia Residual',
        type: 'bar',
  
    
    };
    var trace4 = {
      y: [Explained_by_Social_support[0],Explained_by_Social_support[1],Explained_by_Social_support[2],Explained_by_Social_support[3],Explained_by_Social_support[4]],
      x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
      name: 'Social Support',
      type: 'bar',
  
  
  };
  var trace5 = {
    y: [Explained_by_Healthy_life_expectancy[0],Explained_by_Healthy_life_expectancy[1],Explained_by_Healthy_life_expectancy[2],Explained_by_Healthy_life_expectancy[3],Explained_by_Healthy_life_expectancy[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Healthy Life Expectancy',
    type: 'bar',
  
  
  };
  var trace6 = {
    y: [Explained_by_Freedom_to_make_life_choices[0],Explained_by_Freedom_to_make_life_choices[1],Explained_by_Freedom_to_make_life_choices[2],Explained_by_Freedom_to_make_life_choices[3],Explained_by_Freedom_to_make_life_choices[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Freedom To Make Life Choices',
    type: 'bar',
  
  
  };
  var trace7 = {
    y: [Explained_by_Generosity[0],Explained_by_Generosity[1],Explained_by_Generosity[2],Explained_by_Generosity[3],Explained_by_Generosity[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Generosity',
    orientation: 'v',
    type: 'bar',
  
  
  
  };
  var trace8 = {
    y: [Explained_by_Perceptions_of_corruption[0],Explained_by_Perceptions_of_corruption[1],Explained_by_Perceptions_of_corruption[2],Explained_by_Perceptions_of_corruption[3],Explained_by_Perceptions_of_corruption[4]],
    x: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
    name: 'Perceptions of Corruption',
    type: 'bar',
  
  
  
  };
  // var trace9 = {
  //   x: [Residual_X [0],Residual_X [1],Residual_X [2],Residual_X [3],Residual_X [4]],
  //   y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  //   name: 'Residual_X ',
  //   orientation: 'h',
  //   type: 'bar',
  //   marker: {
  //     color: 'rgba(60, 250, 250,0.6)',
  //     width: 1
  //   }

    var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8];
  
    var layout = {
      title: 'World Happiest Nations ',
      barmode: 'stack',
      xaxis: {
        tickangle: -90
      },
      yaxis: {
        title: 'Happiness Score'
      },
      plot_bgcolor: 'rgba(245,246,249,1)',
      // paper_bgcolor: 'rgba(245,246,249,1)',
      width: 1300,
      height: 650,
      
    };


    Plotly.newPlot('top5', data, layout);

  var trace1 = {
    y: [Ladder_score[141],Ladder_score[140],Ladder_score[139],Ladder_score[138],Ladder_score[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Happiness Score',
    // type:'scatter',
    // color:'rgb(255, 255, 255)',
    mode: 'lines+markers',
    line: {
    color: 'rgb(0, 0, 0)',
    width: 5
    },
    marker: {
      color: 'rgb(255, 0, 0)',
      size: 10
    },
  };

  var trace2 = {
    y: [Explained_by_Log_GDP_per_capita[141],Explained_by_Log_GDP_per_capita[140],Explained_by_Log_GDP_per_capita[139],Explained_by_Log_GDP_per_capita[138],Explained_by_Log_GDP_per_capita[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'LOG GDP per Capita',
    type: 'bar',
  };
  var trace3 = {
    y: [Dystopia_residual[141],Dystopia_residual[140],Dystopia_residual[139],Dystopia_residual[138],Dystopia_residual[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Dystopia Residual',
    type: 'bar'  
  };
  var trace4 = {
    y: [Explained_by_Social_support[141],Explained_by_Social_support[140],Explained_by_Social_support[139],Explained_by_Social_support[138],Explained_by_Social_support[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Social Support',
    type: 'bar' 
  };
  var trace5 = {
    y: [Explained_by_Healthy_life_expectancy[141],Explained_by_Healthy_life_expectancy[140],Explained_by_Healthy_life_expectancy[139],Explained_by_Healthy_life_expectancy[138],Explained_by_Healthy_life_expectancy[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Healthy Life Expectancy',
    type: 'bar'
  };
  var trace6 = {
    y: [Explained_by_Freedom_to_make_life_choices[141],Explained_by_Freedom_to_make_life_choices[140],Explained_by_Freedom_to_make_life_choices[139],Explained_by_Freedom_to_make_life_choices[138],Explained_by_Freedom_to_make_life_choices[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Freedom To Make Life Choices',
    type: 'bar'
  };
  var trace7 = {
    y: [Explained_by_Generosity[141],Explained_by_Generosity[140],Explained_by_Generosity[139],Explained_by_Generosity[138],Explained_by_Generosity[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Generosity',
    orientation: 'v',
    type: 'bar'
  };
  var trace8 = {
    y: [Explained_by_Perceptions_of_corruption[141],Explained_by_Perceptions_of_corruption[140],Explained_by_Perceptions_of_corruption[139],Explained_by_Perceptions_of_corruption[138],Explained_by_Perceptions_of_corruption[137]],
    x: [Country_name[141],Country_name[140],Country_name[139],Country_name[138],Country_name[137]],
    name: 'Perceptions of Corruption',
    type: 'bar'
  };
  // var trace9 = {
  //   x: [Residual_X [0],Residual_X [1],Residual_X [2],Residual_X [3],Residual_X [4]],
  //   y: [Country_name[0],Country_name[1],Country_name[2],Country_name[3],Country_name[4]],
  //   name: 'Residual_X ',
  //   orientation: 'h',
  //   type: 'bar',
  //   marker: {
  //     color: 'rgba(60, 250, 250,0.6)',
  //     width: 1
  //   }
  
  
    var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8];
  
    var layout = {
      title: 'World Saddest Nations ',
      barmode: 'stack',
      xaxis: {
        tickangle: -90
      },
      yaxis: {
        title: 'Happiness Score'
      },
      plot_bgcolor: 'rgba(245,246,249,1)',
      // paper_bgcolor: 'rgba(245,246,249,1)',
      width: 1300,
      height: 650,
    
    };
  

    Plotly.newPlot('bottom5', data, layout);
  });
// })
