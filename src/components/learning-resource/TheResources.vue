<template>
 <div>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')"> Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')"> Add Resources
        </base-button>
    </base-card>
   
    <component :is="selectedTab"></component>
    </div>
</template>


<script>
import storedResources from './StoreResource.vue'
import AddResource from './AddResources.vue'
export default {
    components:{
        storedResources, AddResource
    },
    data(){
        return{

            selectedTab:'stored-rresources',
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
        };
    },
           provide(){
               return{
                   resources : this.storedResources
               }
           },
           methods:{
            setSelectedTab(tab){
                this.selectedTab = tab;
            }
            }
}
</script>
