<template>
  <div class="cars-page container-fluid">
    <div class="row">
      <!-- <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />ars</h1>
      </div> -->
    </div>
    <div class="row">
      <div class="col-2">
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#new-car-modal">
          Add a Car
        </button>
        <div class="modal fade"
             id="new-car-modal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="modelTitleId"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  List your Car
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="container-fluid" @submit.prevent="createCar">
                  <!-- <div class="form-group"> -->
                  <label for="make"></label>
                  <input type="text"
                         name="make"
                         id="make"
                         v-model="state.newCar.make"
                         class="form-control"
                         placeholder="Enter Make here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="model"></label>
                  <input type="text"
                         name="model"
                         id="model"
                         v-model="state.newCar.model"
                         class="form-control"
                         placeholder="Enter Model here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="year"></label>
                  <input type="number"
                         min="1945"
                         max="2021"
                         name="year"
                         id="year"
                         v-model="state.newCar.year"
                         class="form-control"
                         placeholder="Enter Year here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="price"></label>
                  <input type="number"
                         min="0"
                         name="price"
                         id="price"
                         v-model="state.newCar.price"
                         class="form-control"
                         placeholder="Enter Price here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="description"></label>
                  <textarea placeholder="Enter description here..."
                            name="description"
                            id="description"
                            v-model="state.newCar.description"
                            cols="58"
                            rows="3"
                            maxlength="200"
                  ></textarea>
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="imgUrl"></label>
                  <input type="text"
                         name="imgUrl"
                         id="imgUrl"
                         v-model="state.newCar.imgUrl"
                         class="form-control"
                         placeholder="Enter Image Url here..."
                         required
                  >
                  <!-- </div> -->
                  <button class="btn btn-secondary btn-block mt-2" type="submit">
                    List Car
                  </button>
                </form>
              </div>
              <div class="modal-footer">
                <h5>Thanks</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import Car from '../components/Car.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'CarsPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newCar: {}
    })

    // NOTE on mounted gets called when the page is first mounted to the dom (similar to constructors)
    onMounted(() => {
      try {
        carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      // if data changes dynimcally in the appstate use a computed
      cars: computed(() => AppState.cars),

      async createCar() {
        try {
          const id = await carsService.create(state.newCar)
          state.newCar = {}
          // change route in javascript using router.push()
          router.push({ name: 'CarDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }

    }
  },
  components: {
    Car
  }
}
</script>

<style lang="scss">
  .logo {
   transform: rotateZ(90deg);
   height: 1em
  }
</style>
