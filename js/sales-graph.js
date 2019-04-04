function init() {
    'use strict';

    const GRAPH_WIDTH = 300;
    const GRAPH_HEIGHT = 300;

    var salesCanvas = document.getElementById("salesCanvas");
    salesCanvas.width = GRAPH_WIDTH;
    salesCanvas.height = GRAPH_HEIGHT;

    var ctx = salesCanvas.getContext("2d");
    ctx.width = GRAPH_WIDTH;
    ctx.height = GRAPH_HEIGHT;

    var regions = {
        "Northern": 40,
        "Eastern": 10,
        "Southern": 100,
        "Western": 65
    };

    var myBarchart = new Barchart(
        {
            canvas:salesCanvas,
            seriesName:"Sales (in millions)",
            padding:35,
            gridScale:10,
            gridColor:"black",
            data:regions,
            colors:["#a55ca5","#67b6c7", "#bccd7a","#eb9743"]
        }
    );
    myBarchart.draw();

    document.getElementById("reset").onclick = function () {
        regions.Northern = 0;
        regions.Eastern = 0;
        regions.Southern = 0;
        regions.Western = 0;

        myBarchart.update();
    }
}

function drawLine(ctx, startX, startY, endX, endY,color){
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
    ctx.restore();
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
    ctx.restore();
}

var Barchart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function(){
        var maxValue = 100;

        for (var categ in this.options.data){
            maxValue = Math.max(maxValue,this.options.data[categ]);
        }

        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;

        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue){
            var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;

            drawLine(this.ctx, 0, gridY, this.canvas.width, gridY, this.options.gridColor);

            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10,gridY - 2);
            this.ctx.restore();

            gridValue+=this.options.gridScale;
        }

        //drawing the bars
        var barIndex = 0;
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth)/numberOfBars;

        for (categ in this.options.data){
            var val = this.options.data[categ];

            var barHeight = Math.round( canvasActualHeight * val/maxValue);

            drawBar(this.ctx, this.options.padding + barIndex * barSize, this.canvas.height - barHeight - this.options.padding, barSize, barHeight, this.colors[barIndex%this.colors.length]);

            barIndex++;
        }

        //drawing series name
        this.ctx.save();
        this.ctx.textBaseline="bottom";
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 18px Arial";
        this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
        this.ctx.restore();

        //draw legend
        barIndex = 0;
        var legend = document.querySelector("legend[for='salesCanvas']");
        var ul = document.createElement("ul");
        legend.append(ul);
        for (categ in this.options.data){
            var li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "40px solid "+this.colors[barIndex%this.colors.length];
            li.style.font = "bold 18px Arial";
            li.style.padding = "10px";
            li.textContent = categ;
            ul.append(li);
            barIndex++;
        }

        this.update = function(){

            //clear canvas
            this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);

            var maxValue = 100;

            for (var categ in this.options.data){
                maxValue = Math.max(maxValue,this.options.data[categ]);
            }

            var canvasActualHeight = this.canvas.height - this.options.padding * 2;
            var canvasActualWidth = this.canvas.width - this.options.padding * 2;

            //drawing the grid lines
            var gridValue = 0;
            while (gridValue <= maxValue){
                var gridY = canvasActualHeight * (1 - gridValue/maxValue) + this.options.padding;

                drawLine(this.ctx, 0, gridY, this.canvas.width, gridY, this.options.gridColor);

                //writing grid markers
                this.ctx.save();
                this.ctx.fillStyle = this.options.gridColor;
                this.ctx.font = "bold 10px Arial";
                this.ctx.fillText(gridValue, 10,gridY - 2);
                this.ctx.restore();

                gridValue+=this.options.gridScale;
            }

            //drawing the bars
            var barIndex = 0;
            var numberOfBars = Object.keys(this.options.data).length;
            var barSize = (canvasActualWidth)/numberOfBars;

            for (categ in this.options.data){
                var val = this.options.data[categ];

                var barHeight = Math.round( canvasActualHeight * val/maxValue);

                drawBar(this.ctx, this.options.padding + barIndex * barSize, this.canvas.height - barHeight - this.options.padding, barSize, barHeight, this.colors[barIndex%this.colors.length]);

                barIndex++;
            }

            //drawing series name
            this.ctx.save();
            this.ctx.textBaseline="bottom";
            this.ctx.textAlign="center";
            this.ctx.fillStyle = "black";
            this.ctx.font = "bold 18px Arial";
            this.ctx.fillText(this.options.seriesName, this.canvas.width/2,this.canvas.height);
            this.ctx.restore();
       }
    }
}

/// Establish functionality on window load:
window.onload = init;
