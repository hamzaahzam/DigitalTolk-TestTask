<template>
  <div class="Location">
    <div class="container-fluid">
      <div class="add-btn">
        <font-awesome-icon icon="fa-plus" />
        <span>Check In</span>
      </div>
      <div class="section">
        <span>Current Location</span>
        <div class="section-content d-flex">
          <font-awesome-icon icon="fa-map-pin" class="icon" />
          <div>
            <div>{{ locations[0].address }}</div>
            <span
              >{{ locations[0].latitude }},{{ locations[0].longitude }}</span
            >
          </div>
        </div>
      </div>
      <div class="section">
        <span>Previous Location</span>
        <div
          v-for="(p, i) in locations"
          :key="i"
          class="section-content d-flex"
        >
          <font-awesome-icon icon="fa-map-pin" class="icon" />
          <div>
            <div>{{ p.address }}</div>
            <span>{{ p.latitude }},{{ p.longitude }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiClient from "../../services/apiClient";
export default {
  name: "LocationPage",
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    async getCheckinsList() {
      const checkins = await apiClient.getCheckins();
      this.locations = checkins;
    },
  },
  created() {
    this.getCheckinsList();
  },
};
</script>
