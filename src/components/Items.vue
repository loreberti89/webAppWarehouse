<template>
	<div id="items">
		<div class="container">
	      
	      <div class="input-group mb-5  ">
	        <div class="input-group-prepend ">
	          <span class="input-group-text" id="basic-addon1"> <font-awesome-icon icon="search" /></span>
	        </div>
	          <input type="text" id="search" v-model="search_text" class="form-control shadow-sm p-3" placeholder="Di cosa hai bisogno oggi?" />
	        </div> 
	       </div> 
	       <div class="container">
	          <h3 v-if="search_text.length">Risultati per: <i>"{{search_text}}"</i></h3>
	          <h3 v-else>Tutti i risultati</h3>

	          <div class="box row" v-for="item of itemsfiltered">
	            <div class="col-10 ">
	              <span>{{item.name}}</span><br />
	              <span class="description">{{item.description}}</span>
	            </div>
	            <div class="col-2 d-flex h-100 justify-content-center align-self-center">
	              <router-link class="btn btn-success btn-block" :to="{path:`/warehouse/${item.id}`,name: 'warehouse' , params: { itemId: item.id, itemName: item.name} }">CTA</router-link>
	            </div>
	          </div>
	      </div>
	    </div>
	</div>    
</template>
<script>
import json from '../resources/items.json';
export default {
  name: 'items',
  data (){
    return {
      search_text:"",
      items: json
    }
  },
  computed:{
    itemsfiltered(){ 
      let list = [];
      if(this.search_text != ""){
        list = this.items.filter(item => {
           return (item.name.toLowerCase().indexOf(this.search_text.toLowerCase()) > -1) || (item.description.toLowerCase().indexOf(this.search_text.toLowerCase()) > -1)
        });
      }else{
        list = this.items;
      }
      return _.orderBy(list, 'name');
      
    }
  }
}
</script>
<style>

#basic-addon1{
  border-right: none;
  background: transparent;
}
#search{
  border-left: none;
}
.box{
  padding: 10px;
  border: 1px solid #7676;
  margin-top: 10px;
  margin-bottom: 10px;
}
.description{
  color: grey;
  font-size: 12px;
}

</style>