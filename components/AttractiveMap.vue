<template>
  <div style="height: 720px">
    <div id="map-wrap" style="height: 470px">
      <client-only>
        <l-map :zoom="13" :center="[55.9464418, 8.1277591]">
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[55.9464418, 8.1277591]"></l-marker>
        </l-map>
      </client-only>
    </div>

    <div>
      <h5 class="ml-3">Details</h5>
      <ul>
        <li>Address: Siem Reap, Cambodia</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
