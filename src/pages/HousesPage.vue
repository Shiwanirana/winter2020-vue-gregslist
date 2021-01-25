<template>
  <div class="houses-page container-fluid">
    <div class="row">
      <div class="col-2">
        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="#new-home-modal">
          List a Home
        </button>
        <div class="modal fade"
             id="new-home-modal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="modelTitleId"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  List your Home
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="container-fluid" @submit.prevent="createHouse">
                  <!-- <div class="form-group"> -->
                  <label for="bedrooms"></label>
                  <input type="number"
                         min="0"
                         max="20"
                         name="bedrooms"
                         id="bedrooms"
                         v-model="state.newHouse.bedrooms"
                         class="form-control"
                         placeholder="Enter # of Bedrooms here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="bathrooms"></label>
                  <input type="number"
                         min="0"
                         max="20"
                         name="bathrooms"
                         id="bathrooms"
                         v-model="state.newHouse.bathrooms"
                         class="form-control"
                         placeholder="Enter # of Bathrooms here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="levels"></label>
                  <input type="number"
                         min="0"
                         max="20000"
                         name="levels"
                         id="levels"
                         v-model="state.newHouse.levels"
                         class="form-control"
                         placeholder="Enter levels here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="year"></label>
                  <input type="number"
                         min="2000"
                         max="2020"
                         name="year"
                         id="year"
                         v-model="state.newHouse.year"
                         class="form-control"
                         placeholder="Enter year here"
                         required
                  >
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="price"></label>
                  <input type="number"
                         min="0"
                         max="25000000"
                         name="price"
                         id="price"
                         v-model="state.newHouse.price"
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
                            v-model="state.newHouse.description"
                            cols="58"
                            rows="3"
                            maxlength="250"
                  ></textarea>
                  <!-- </div> -->

                  <!-- <div class="form-group"> -->
                  <label for="imgUrl"></label>
                  <input type="text"
                         name="imgUrl"
                         id="imgUrl"
                         v-model="state.newHouse.imgUrl"
                         class="form-control"
                         placeholder="Enter Image Url here..."
                         required
                  >
                  <!-- </div> -->

                  <button class="btn btn-secondary btn-block mt-2" type="submit">
                    List Home
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
  </div>
  <!-- <div class="row">
    <Home  -->
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
import House from '../components/House'
import { useRouter } from 'vue-router'
export default {
  name: 'HousesPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      houses: computed(() => AppState.houses),
      async createHouse() {
        try {
          const id = await housesService.create(state.newHouse)
          state.newHouse = {}
          router.push({ name: 'HouseDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    House
  }
}
</script>
<style lang="scss">

</style>
