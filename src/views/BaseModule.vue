<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="mt-5 mb-5">{{$router.app._route.name}}</h2>

        <table class="table table-hover">
          <thead class="bg-secondary text-white">
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Ventas (kg)</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in data" :key="index">
              <th>{{index + 1}}</th>
              <td>{{i.name}}</td>
              <td>{{i.quantity}}</td>
              <td>
                <button type="button" class="btn btn-danger btn-sm mr-2">
                  <i class="fas fa-file-pdf"></i>
                </button>
                <button type="button" class="btn btn-success btn-sm mr-2">
                  <i class="fas fa-file-excel"></i>
                </button>
                <button type="button" class="btn btn-secondary btn-sm">
                  <i class="fas fa-print"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  components: {
    highcharts: Chart
  },
  created() {
    this.$bus.on("data-lazy", this.getData);
  },
  data() {
    return {
      data: [],
      chartOptions: {}
    };
  },
  methods: {
    getData(module) {
      this.data = module.productos;
      this.chartOptions = module.chartOptions;
    }
  }
};
</script>

<style>
</style>