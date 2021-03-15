import Vue from 'vue'
import _ from 'lodash'
export default new Vue({
    data: {
        products:[
            {
                id:1,
                title: 'Product #1',
                price:50,
                qt:100
            } ,
            {
                id:2,
                title: 'Product #2',
                price:30,
                qt:10
            } ,
            {
                id:3,
                title: 'Product #3',
                price:80,
                qt:150
            } ,
            {
                id:4,
                title: 'Product #4',
                price:55,
                qt:80
            } ,
            {
                id:5,
                title: 'Product #5',
                price:15,
                qt:20
            } ,
        ]
    },
    methods: {
        viewDetails(id) {
            let productToView = _.find(this.products, {id:parseInt(id)});
            this.$emit("viewDetails", productToView)
        },
        addProduct(title,price,qt){
         var id =this.products[this.products.length-1].id+1;
         this.products.push({
             id,
             title,
             price,
             qt
         })
        }
    }
});