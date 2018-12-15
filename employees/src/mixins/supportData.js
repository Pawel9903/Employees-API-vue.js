import axios from 'axios';
import alerts from './alerts'


export default {
  mixins:[alerts],
   methods: {
    getData(url) {
       fetch(url)
         .then(response => {
           return response.json();
         }).then(result => {
         this.result = result;
       });
     },
     editData(url,form){
       axios.put(url,form).then(response => {
           this.response = response.data;
       })
     }

   }
 }
