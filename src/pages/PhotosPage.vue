<template>
   <v-container>
      <PhotoForm v-if="photos.length < 11" @addPhoto='addPhoto' />
      <div v-else>
         Ви не можете добавити фото
      </div>
      <v-row>
         <PhotoElem v-for="photo in $store.getters.getAllPhotos" :photo="photo" />
      </v-row>
      <PhotoDialog />
      <!-- :photo="currentPhoto" v-model="dialogVisible" -->
   </v-container>

</template>

<script>
import PhotoElem from "@/components/photo/PhotoElem";
import PhotoForm from "@/components/photo/PhotoForm";
import PhotoDialog from "../components/photo/PhotoDialog.vue";
import { mapActions } from "vuex";

export default {

   components: { PhotoElem, PhotoForm, PhotoDialog },
   data: () => ({
      photos: [
      ],
      // currentPhoto: {},
      // dialogVisible: false
   }),
   mounted() {
      // this.fetchTodo()
      this.$store.dispatch('fetchPhotos')
   },
   methods: {
      ...mapActions(['fetchPhotos']),
      // fetchTodo() {
      //    this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      //       .then(res => this.photos = res.data)
      // }
      addPhoto(photo) {
         console.log(photo, 'photo');
         this.photos.push(photo)
      },
      openPhoto(photo) {
         this.currentPhoto = photo;
         this.dialogVisible = true;
      }
   }
}


</script>
