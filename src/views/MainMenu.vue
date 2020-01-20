<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="mt-5 mb-5">{{$router.app._route.name}}</h2>

        <div class="card-columns">
          <div
            v-for="i in 6"
            :key="i"
            class="card bg-primary text-white"
            @click="viewModule(i)"
            id="card-module"
          >
            <div class="card-body text-center mt-5">
              <h4 class="card-text">Modulo {{i}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datos: [
        {
          productos: [
            { name: "Papa", quantity: "19" },
            { name: "Cebolla", quantity: "23" },
            { name: "Zanahoria", quantity: "23" },
            { name: "Tomate", quantity: "21" },
            { name: "Repollo", quantity: "25" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "Papa", data: [19] },
              { name: "Cebolla", data: [23] },
              { name: "Zanahoria", data: [23] },
              { name: "Tomate", data: [21] },
              { name: "Repollo", data: [25] }
            ]
          }
        },
        {
          productos: [
            { name: "manzana", quantity: "67" },
            { name: "uva", quantity: "61" },
            { name: "sandia", quantity: "49" },
            { name: "naranja", quantity: "48" },
            { name: "pera", quantity: "63" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "manzana", data: [67] },
              { name: "uva", data: [61] },
              { name: "sandia", data: [49] },
              { name: "naranja", data: [48] },
              { name: "pera", data: [63] }
            ]
          }
        },
        {
          productos: [
            { name: "pollo", quantity: "34" },
            { name: "queso", quantity: "31" },
            { name: "huevos", quantity: "36" },
            { name: "camarones", quantity: "21" },
            { name: "pescado", quantity: "25" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "pollo", data: [34] },
              { name: "queso", data: [31] },
              { name: "huevos", data: [36] },
              { name: "camarones", data: [21] },
              { name: "pescado", data: [25] }
            ]
          }
        },
        {
          productos: [
            { name: "jugo", quantity: "48" },
            { name: "soda", quantity: "48" },
            { name: "agua", quantity: "51" },
            { name: "leche", quantity: "42" },
            { name: "vino", quantity: "46" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "jugo", data: [48] },
              { name: "soda", data: [48] },
              { name: "agua", data: [51] },
              { name: "leche", data: [42] },
              { name: "vino", data: [46] }
            ]
          }
        },
        {
          productos: [
            { name: "arroz", quantity: "134" },
            { name: "pasta", quantity: "138" },
            { name: "harina", quantity: "131" },
            { name: "azucar", quantity: "130" },
            { name: "fideos", quantity: "122" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "arroz", data: [134] },
              { name: "pasta", data: [138] },
              { name: "harina", data: [131] },
              { name: "azucar", data: [130] },
              { name: "fideos", data: [122] }
            ]
          }
        },
        {
          productos: [
            { name: "mayonesa", quantity: "34" },
            { name: "mostaza", quantity: "33" },
            { name: "pasta de tomate", quantity: "31" },
            { name: "salsa de soja", quantity: "31" },
            { name: "salsa de ajo", quantity: "39" }
          ],
          chartOptions: {
            chart: {
              type: "bar"
            },
            title: {
              text: "Productos Ventidos - Enero"
            },
            xAxis: {
              categories: ["Producto"]
            },
            yAxis: {
              title: {
                text: "Unidades"
              }
            },
            series: [
              { name: "mayonesa", data: [34] },
              { name: "mostaza", data: [33] },
              { name: "pasta de tomate", data: [31] },
              { name: "salsa de soja", data: [31] },
              { name: "salsa de ajo", data: [39] }
            ]
          }
        }
      ],
      module: null
    };
  },
  beforeDestroy() {
    this.$bus.emit("data-lazy", this.datos[this.module - 1]);
  },
  methods: {
    viewModule(module) {
      this.module = module;
      this.$router.replace(`/base-module/${this.module}`);
    }
  }
};
</script>

<style>
#card-module {
  cursor: pointer;
  height: 240px;
}
</style>