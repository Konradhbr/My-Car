<template>
  <div id="chart">
    <apexchart
      type="pie"
      width="700"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import apexchart from "vue-apexcharts";
export default {
  components: {
    apexchart
  },
  props: {
    city: {
      type: Number,
      required: false
    },
    road: {
      type: Number,
      required: false
    },
    mixed: {
      type: Number,
      required: false
    }
  },
  data: function() {
    return {
      series: [this.road, this.city, this.mixed],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie"
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "18px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold"
          }
        },
        legend: {
          fontSize: "20px",
          position: "bottom"
        },
        labels: [
          "Trasy w trybie poza miejskim",
          "Trasy w trybie miejskim",
          "Trasy w trybie mieszanym"
        ],
        responsive: [
          {
            breakpoint: 800,
            options: {
              chart: {
                width: 450
              },
              legend: {
                position: "bottom"
              },
              dataLabels: {
                style: {
                  fontSize: "12px"
                }
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style></style>
