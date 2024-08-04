<script setup>
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

const drawer = ref(false);
const { smAndDown } = useDisplay();

const isMobile = computed(() => smAndDown.value);
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-if="!isMobile"
      app
      permanent
      clipped
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar for Mobile -->
    <v-app-bar
      v-if="isMobile"
      app
      bottom
    >
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Bottom Navigation Drawer for Mobile -->
    <v-navigation-drawer
      v-if="isMobile"
      v-model="drawer"
      app
      bottom
      temporary
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- Add more list items here -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view class="height-100-percent" />
    </v-main>
  </v-app>
</template>
