<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2 class="mt-5 mb-5">{{$router.app._route.name}}</h2>

        <div class="row">
          <div class="col">
            <img
              class="card-img-top"
              :style="!responsive ? 'width:240px' : 'width:360px'"
              src="../assets/avatar.png"
              alt="Card image"
            />
          </div>
          <div class="col-12">
            <div class="card-body">
              <h4 class="card-title">{{userData.email}}</h4>
              <form>
                <div class="row">
                  <div class="input-group mb-3 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-address-card"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Nombres" v-model="userData.name"/>
                  </div>
                  <div class="input-group mb-3 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-address-card"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Apellidos" v-model="userData.lastName"/>
                  </div>
                  <div class="input-group mb-3 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Correo" v-model="userData.email"/>
                  </div>
                  <div class="input-group mb-3 col-sm-12 col-md-6 col-lg-6">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-phone"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Telefono" v-model="userData.phone"/>
                  </div>
                  <div class="input-group mb-3 col-12">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="fas fa-map-marker"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control" placeholder="Direccion" v-model="userData.address"/>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-12 justify-content-end">
            <button type="button" class="btn btn-secondary btn-outline" style="float: left;">Cancelar</button>
            <button type="button" class="btn btn-primary" style="float: right;">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from './../mixin'
import { Chart } from "highcharts-vue";

export default {
  mixins: [
    mixin
  ],
  components: {
    highcharts: Chart
  },
  data() {
    return {
      userData: {
        name: 'Eduardo Manuel',
        lastName: 'Mendoza Meneses',
        email: 'e.mendoza@gmail.com',
        phone: '+58 424 123 4567',
        address: 'Caracas, Av. Bolivar, Edif. Linda, P-1'        
      }
    };
  }
};
</script>

<style>
</style>