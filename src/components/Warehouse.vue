<template>
   <div id="item">
     <div class="container">
        
         <div class="container">
            <span >Risultati </span>
            
            <b-alert v-if="warehouses && warehouses.length == 0" variant="warning" show>Nessun risultato</b-alert>
            <div class="box row " v-for="warehouse of warehouses">
              <div class="col d-flex h-100 align-self-center">
                {{warehouse.name}}
              </div>
              <div class="col">
              Distanza: <span class="distance"><strong>{{warehouse.distance}} KM</strong></span>
              </div>
              <div class="col  text-right">
                <button class="btn btn-success" @click="ctaCalculate(warehouse)"> Nome CTA </button>
              </div>
            </div>
        </div>
      </div>
      <b-modal v-model="modalShow" v-if="warehouseModel.items">
        <h1>Azione Confermata</h1>
        <strong>Prodotto:</strong> {{$route.params.itemName}}<br />
        <strong>Magazzino:</strong> {{warehouseModel.name}}  <br />
        <strong>Articoli inviati : </strong>{{warehouseModel.items[0].minQty - warehouseModel.items[0].qty}} <br />
      </b-modal>
       
   </div>
</template>

<script>
 import axios from 'axios';
  export default {
    name: 'Warehouse',
     mounted () {
      this.init()
    },
    data(){
      return {
        modalShow: false,
        warehouses: [],
        warehouseModel : {}
      }
    },
    created() {
      
      
    },
    methods: {
      init () {
        
        this.id = this.$route.params.itemId; 
        axios.get(`http://localhost/backend/index.php?id=`+this.id)
          .then(response => {
            this.warehouses = response.data;
            
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      ctaCalculate(_warehouse){
        this.modalShow = true;
        this.warehouseModel = Object.assign({},_warehouse); 
        this.warehouseModel.items = this.warehouseModel.items.filter((item)=> item.id == this.id );
      }
  }
    }
</script>
<style>
.box{
  border: 1px solid #7676;
  margin-top: 10px;
  padding: 15px;
}
.distance{
  font-size: 1.2rem;
}

</style>
