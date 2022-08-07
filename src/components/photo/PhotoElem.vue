
<template>
    <v-col cols="4">
        <v-card @click="openPhoto">
            <v-card-title>
                {{ photo.title }}
            </v-card-title>
            <v-card-text>
                <v-img :src="photo.url" width="200" height="200" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

 <script>
 import { mapMutations } from 'vuex'
 export default {
 
     props: {
         photo: {
             type: Object,
             required: true
         }
     },
     methods: {
         ...mapMutations(['setCurrentPhoto', 'showDialog', 'hideDialog']),
 
         openPhoto() {
             //  this.$emit('openPhoto', this.photo)
             this.setCurrnetPhoto(this.photo)
             this.showDialog(this.photo)
         }
     }
 }
 
 </script>