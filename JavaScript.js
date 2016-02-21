(function () {
   
    var team_data = [54, 90, 12, 35, 81];
    var new_data = [];
    for (var i = 0; i < team_data.length; i++) {
        if (team_data[i] <= 30) {
            
            new_data.push(1);
        }
        else if (team_data[i] <= 80 && team_data[i] >= 31) {
            
            new_data.push(2);
        }
        else if (team_data[i] <= 100 && team_data[i] >= 81) {
            
            new_data.push(3);
        }

    }

    var barChartData = {
        labels: ["Team1", "Team2", "Team3","Team4","Team5"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.5)",
                strokeColor: "rgba(220,220,220,0.8)",
                highlightFill: "rgba(220,220,220,0.75)",
                highlightStroke: "rgba(220,220,220,1)",
                data: new_data
            }
        ]
    };

    window.onload = function () {
        var ctx = document.getElementById("income").getContext("2d");
        window.myObjBar = new Chart(ctx).Bar(barChartData, {
            responsive: true
        });
        
        var colors = [];
        
        //nuevos colores
        for (var i = 0; i < team_data.length; i++) {
            if (team_data[i] <= 30) {
                colors.push("red");
            }
            else if (team_data[i] <= 80 && team_data[i] >= 31) {
                colors.push("orange");
            }
            else if (team_data[i] <= 100 && team_data[i] >= 81) {
                colors.push("green");
            }

        }
        alert(colors);
        for (var i = 0; i < team_data.length; i++) {
            myObjBar.datasets[0].bars[i].fillColor = colors[i];
        }
        //myObjBar.datasets[0].bars[0].fillColor = "green"; //bar 1
        //myObjBar.datasets[0].bars[1].fillColor = "orange"; //bar 2
        //myObjBar.datasets[0].bars[2].fillColor = "red"; //bar 3
        myObjBar.update();
    }





}());