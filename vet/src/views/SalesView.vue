<template>
    <div class="md:px-16 px-5 pt-10">
        <!-- Top -->
        <div class="flex justify-between">
            <h1 class="font-semibold text-4xl">Sales</h1>
            <button class="bg-green-900 text-white p-4 text-center rounded-md h-10 flex items-center">+ Add Sales</button>
        </div>
        <div class="md:flex sm-flex-wrap md:justify-between gap-y-5 gap-4  pt-10">
            <div
                class="mb-3 sm-mb-0 rounded-lg bg-white text-gray-500 w-full h-32 flex items-center justify-start px-9 hover:bg-blue-900 hover:text-white">
                <div class="flex flex-col"> <span>Total Sales </span>
                    <h1 class="text-2xl"> &#8358; {{ totalAmount() }}</h1>
                </div>
            </div>

            <div
                class="mb-3 sm-mb-0 rounded-lg bg-white text-gray-500  w-full h-32 flex items-center justify-start px-9 hover:bg-blue-900 hover:text-white">
                <div class="flex flex-col"> 
                    <img src="@/assets/ICON/store.svg" class="w-5" />
                    <span>Total Amount Paid </span>
                    <h1 class="text-2xl"> &#8358; {{ totalAmountPaid() }}</h1>
                </div>
            </div>

            <div
                class="mb-3 sm-mb-0 rounded-lg bg-white text-gray-500  w-full h-32 flex items-center justify-start px-9 hover:bg-blue-900 hover:text-white">
                <div class="flex flex-col"> 
                    <img src="@/assets/ICON/bag.svg" class="w-5"/>
                    <span>Total Balance </span>
                    <h1 class="text-2xl"> &#8358; {{ totalAmountBalance() }}</h1>
                </div>
            </div>
        </div>

        <div class="mt-10 rounded-lg bg-white overflow-auto md:p-0 p-5">

            <table class="w-full" >
                <thead>
                    <tr class="text-gray-400 h-10 border-b">
                        <th class="text-left pl-3 border-r font-light">Date</th>
                        <th class="text-left pl-3 border-r font-light">Item sold</th>
                        <th class="text-left pl-3 border-r font-light">Quantity</th>
                        <th class="text-left pl-3 border-r font-light">Unit price</th>
                        <th class="text-left pl-3 font-light">Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(sale, index) in sales" :key="index" class="text-gray-700 h-10 border-b font-normal">
                        <td class="text-left pl-3 border-r w-40"><RouterLink to="/invoice">{{ new Date().toDateString() }}</RouterLink> </td>
                        <td class="text-left pl-3 border-r">{{ sale.item }}</td>
                        <td class="text-left pl-3 border-r">{{ sale.quantity }}</td>
                        <td class="text-left pl-3 border-r">{{ sale.balance }}</td>
                        <td class="text-left pl-3">{{ sale.total_amount }}</td>
                      
                    </tr>
                </tbody>
            </table>
            <button class="text-green-700 pl-10 py-5">+ Add Sales</button>
          
        </div>
    </div>
  <!-- <Footer /> -->

</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return { 
        }
    },
    computed: {
        ...mapState(['sales']),

    },
    methods: {
        // ...mapMutations(["addToCounter", "subtractCounter"]),
        ...mapActions(["allSales"]),

    totalAmount() {
        let total = 0;
        this.sales.forEach(sale => {
            total += sale.total_amount
        });
        return total
    },

    totalAmountPaid() {
        let total = 0;
        this.sales.forEach(sale => {
            total += sale.amount_paid
        });
        return total
    },


    totalAmountBalance() {
        let total = 0;
        this.sales.forEach(sale => {
            total += sale.balance
        });
        return total
    },


    },
    mounted() {
        this.allSales()
    }

    
}
</script>

<style lang="scss" scoped>

</style>