
<template>

    <v-dialog v-model="$store.getters.getDialogVisible" max-width="600" @click:outside="$store.commit('hideDialog')">
        <v-card>
            <v-card-title>
                {{ full_title }}
            </v-card-title>
            <v-card-text>
                <v-img :src="$store.getters.getCurrentPhoto.url" />
            </v-card-text>
        </v-card>

    </v-dialog>

</template>

 <script>
 
 
 export default {
     //  props: {
     //  photo: {
     //      type: Object,
     //      required: true
     //  },
     //  value: {
     //      type: Boolean,
     //      default: false
     //  }
     //  },
     created() {
         //  console.log($store, '$store.getters.getCurrentPhoto.url');
         //  console.log($store.getters.getCurrentPhoto.url, '$store.getters.getCurrentPhoto.url"');
         //  this.dialogVisible = this.value
     },
     data: () => ({
         //  dialogVisible: false
     }),
     //  watch: {
     //      value(newValue) {
     //          this.dialogVisible = newValue
     //      },
     //      dialogVisible(newValue) {
     //          this.$emit('input', newValue)
     //      }
     //  },
     computed: {
         full_title() {
             //  console.log($store.getters.getCurrentPhoto, '$store.getters.getCurrentPhoto.url')
 
             return `Назва фото - ${this.$store.getters.getCurrentPhoto.title}`
         }
     }
 }
 
 </script>
  