import ProductsList from './ProductsList.vue'
import ProductDetails from './ProductDetails.vue'
import ProductAdd from './ProductAdd.vue'
import RandomChart from './RandomChart.vue';


export const
    routes = [
        {
            path: '/',
            component: ProductsList,
            name: 'home'
        },
        {
            path: '/add',
            component: ProductAdd
        },
        {
            path: '/detail/:id',
            component: ProductDetails
        },
        {
            path: '*',
            component: ProductsList
        },
        {
            path:'/static',
            component: RandomChart
        }

    ]
