<template>
 <div>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode"> Stored Resources
        </base-button>
        <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"> Add Resources
        </base-button>
    </base-card>
   <keep-alive>

    <component :is="selectedTab"></component>
   </keep-alive>
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
                            id :'google',
                            title:'google',
                            description :'google is your friend',
                            link :"https://google.com"
                            },
                             {
                            id :'DSW',
                            title:'DSW',
                            description :'DSW Designer Shoe Warehouse',
                            link :"https://www.dsw.ca/en/ca/"
                            },
                             {
                            id :'Davison',
                            title:'Davison',
                            description :'A better way to invent',
                            link :"https://idea.davison.com/?source_id=1569&campaign_name=make%20your%20idea&gclid=EAIaIQobChMI28yvgvbe9QIVhSCtBh1xxAojEAAYAiAAEgLzTfD_BwE"
                            },
                             ]
        };
    },
           provide(){
               return{
                   resources : this.storedResources,
                   addResource: this.addResource,
                   deletResource :this.removeResource

               }
           },
           computed:{

               storedResButtonMode(){
                  return this.selectedTab === 'stored-resources' ?null : 'flat';
               },
               addResButtonMode(){
                  return this.selectedTab === 'add-resource' ?null : 'flat';
               }
           },
           methods:{
            setSelectedTab(tab){
                this.selectedTab = tab;
            },
            addResource(title ,description ,url){
                const newResource ={

                    id:new Date().toString(),
                    title:title,
                    description :description,
                    Linke : url
                };
                this.storedResources.unshift(newResource);
                this.selectedTab ='stored-resources';
            },
            removeResource(resId){
                 const resIndex= this.storedResources.findIndex(res => res.id === resId);
                 this.storedResources.splice(resIndex,1);
            }
            }
}
</script>
