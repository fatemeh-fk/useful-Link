<template>
   <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>

import storedResources from './components/learning-resource/StoreResource.vue';


export default {
  components:
  {
    storedResources
  },
  data(){

    return{
      storedResources :[
        {
          id :'official-guide',
          title:'Official Guid',
          description :'vue js',
          link :"https://vuejs.org"
        },
        {
          id :'google',
          title:'google',
          description :'google is your friend',
          link :"https://google.com"
        }
      ]
    }
  }
}
</script>


<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
