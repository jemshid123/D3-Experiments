setTimeout(function(){

    data =  [
      {name:0, value: 0},
        {name:1, value: 2},
        {name: 2, value: 4},
        {name: 3, value: 6},
        {name: 4, value: 8},
        {name: 5, value:10},
        {name: 6, value: 12},
        {name: 7, value: 14},
        {name: 8, value: 16},
        {name: 9, value: 18},
        {name: 10, value: 20}      
      ];

      var height = 500, width = 500;

     

    var svg = d3.select("body")
        .append("svg")
        .attr("width", width+50)
        .attr("height", height+50);

    // var xScale = d3.scaleLinear()
    //             .domain(d3.min(data,d => d.name),d3.max(data,d => d.name))
    //             .range(10,width);
    var xScale = d3.scaleLinear()
                .domain([d3.min(data,d => d.name),d3.max(data,d => d.name)])
                .range([30,width]);

    var yScale = d3.scaleLinear()
                .domain([d3.max(data,d => d.value),d3.min(data,d => d.value)])
                .range([30,height]);   
    
    

    var g= svg.append("g");

      g.selectAll("line")
       .data(data)
      .join("line")
      .attr("x1",function(d,i){
      
        return width - xScale(d.name) + 30;
      })
      .attr("y1",function(d,i){
        return height - yScale(d.value) + 30;
      })
      .attr("x2",function(d,i){
        if(data[i+1]){
          return width - xScale(data[i+1].name) + 30;
        }else{
          return width - xScale(d.name) + 30;
        }
      })
      .attr("y2",function(d,i){
        if(data[i+1]){
          return height - yScale(data[i+1].value) + 30 ;
        }else{
          return height - yScale(d.value) + 30;
        }
      })
      .attr("stroke","red");


      g.selectAll("circle")
       .data(data)
       .enter()
      .append("circle")
      .attr("cx",function(d,i){      
        return width - xScale(d.name) + 30;
      })
      .attr("cy",function(d,i){
        return height - yScale(d.value) + 30;
      })
      .attr("r","5")
      .attr("stroke","blue");

   var xAxis = d3.axisBottom()
   .scale(xScale);
   var yAxis = d3.axisLeft()
   .scale(yScale);

  
   svg.append("g")
  .attr("transform","translate(0,500)")
   .call(xAxis);

   svg.append("g")
   .attr("transform","translate(30,0)")
   .call(yAxis);

  
},3000);

