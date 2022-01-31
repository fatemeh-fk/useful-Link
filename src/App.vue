<template>
 <ul>
   </ul>
</template>

<script>


export default {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
