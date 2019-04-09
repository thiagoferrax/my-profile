<template>
  <v-card height="350px">
    <v-navigation-drawer v-model="drawer" permanent absolute>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://pt.gravatar.com/userimage/153860017/d0fe188ed42d6045d6e45dee885c8bc0.jpeg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Thiago Ferraz</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" },
        { title: "Professional Experiences", icon: "rowing" },
        { title: "Portifolio", icon: "work_outline" },
        { title: "About", icon: "question_answer" }
      ],
      right: null
    };
  }
};
</script>