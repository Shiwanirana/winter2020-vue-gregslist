<template>
  <div class="house col-4">
    <router-link :to="{ name: 'HouseDetails', params: { id: house.id} }"
                 <div
                 class="card"
                 style="width: 18rem;"
    >
      <img class="card-img-top" :src="house.imgUrl" alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
          {{ house.bedrooms}} | {{house.bathrooms}}
        </p>
      </div>
    </router-link>
  </div>
  </div>
</template>
