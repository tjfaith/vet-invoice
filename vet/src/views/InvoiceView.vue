<template>
  <div class="h-screen px-16">

    <!-- TOP BAR -->
    <div class="flex justify-between pt-10">
      <h2 class="font-bold text-4xl">Overview</h2>
      <div class="flex gap-5">
        <img src="@/assets/ICON/pen.svg" class="w-5" />
        <img src="@/assets/ICON/printer.svg" class="w-5" />
        <img src="@/assets/ICON/trash.svg" class="w-5" />
        <button class="border rounded-md px-5 border-green-900 text-green-900 hover:bg-green-100"> Save and Send
        </button>
        <button class="bg-green-900 text-white rounded-md px-5 hover:bg-green-700"> Record Payment </button>
      </div>
    </div>

    <!-- INVOICE SECTION -->
    <div class="mt-10">

      <!-- top section -->
      <div class="flex justify-between bg-green-100 px-5 py-8 items-center">
        <h2 class="text-2xl">INVOICE</h2>
        <div class="flex flex-col pr-10">
          <small>Amount Due</small>
          <span class="text-xl font-light">&#8358;2,000,000.00</span>
        </div>
      </div>


      <!-- Main invoice -->
      <div class="bg-white p-5">

        <div class="flex justify-between items-center">
          <!-- Right side -->
          <div class="flex flex-col gap-1 text-sm w-full">
            <small>Bill To</small>
            <span class="text-xl font-semibold">{{ invoiceData.billTo.name }}</span>
            <span class="text-normal font-thin">{{ invoiceData.billTo.phone }}</span>
            <span class="text-normal font-thin">{{ invoiceData.billTo.email }}</span>
            <span class="text-normal font-thin">{{ invoiceData.billTo.address }}</span>
          </div>

          <!-- Left Side -->
          <div class="flex flex-col gap-1 text-sm w-80">
            <div class="flex gap-5">
              <span class="font-semibold text-right w-full">Invoice Number</span>
              <span class="text-left w-full">{{ invoiceData.invoiceNumber }}</span>
            </div>

            <div class="flex gap-5">
              <span class="font-semibold text-right w-full">Invoice Date</span>
              <span class="text-left w-full">{{ invoiceData.invoiceDate }}</span>
            </div>

            <div class="flex gap-5">
              <span class="font-semibold text-right w-full">Due Date</span>
              <span class="text-left w-full">{{ invoiceData.dueDate }}</span>
            </div>


          </div>
        </div>

        <!-- Table -->
        <table class="w-full mt-10 mb-16">
          <thead>
            <tr class="text-gray-400 h-10 ">
              <th class="text-left pl-3 font-light">Items</th>
              <th class="text-left pl-3 font-light">Quantity</th>
              <th class="text-left pl-3 font-light">Price</th>
              <th class="text-left pl-3  font-light">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in invoiceData.items" :key="index" class="text-gray-700 h-10 font-normal">
              <td class="text-left pl-3 ">{{ item.name }}</td>
              <td class="text-left pl-3 ">{{ item.quantity }}</td>
              <td class="text-left pl-3 ">{{ item.price }}</td>
              <td class="text-left pl-3">&#8358; {{ item.amount }}</td>

            </tr>
          </tbody>
        </table>
        <hr>
        <div class="mr-10">
          <div class="flex justify-end mr-10 w-full mt-10 mb-6">
            <div class="border-b flex gap-32 w-80">
              <div>Total</div>
              <div class="text-right w-full">&#8358; 2,000,000.00</div>
            </div>
          </div>

          <div class="flex justify-end mr-10 w-full  mb-6">
            <div class="flex gap-32 w-80">
              <div>Tax</div>
              <div class="text-right w-full">&#8358; 0.00</div>
            </div>
          </div>

          <div class="flex justify-end mr-10 w-full">
            <div class="flex gap-32 w-96">
              <div class="w-full">Amount Due</div>
              <div class="text-right w-full">&#8358; 2,000,000.00</div>
            </div>
          </div>

        </div>


<!-- FOOTER -->
<!-- <Footer /> -->

      </div>
    </div>
  </div>
</template>

<script setup>
// import Footer from ''
import { ref } from 'vue'

const invoiceData = ref({
  invoiceNumber: 1001,
  invoiceDate: '2022-10-28',
  dueDate: '2022-10-30',
  billTo: {
    name: 'Farm Name',
    phone: '08077777777',
    email: 'farmname@farmdomain.com',
    address: '244/246, Oshodi-Apapa Expressway (by AGS Barma Ltd)',
  },
  items: [
    {
      name: 'Cat',
      quantity: 150,
      price: '10,000.00',
      amount: '1,500,000.00',
    },
    {
      name: 'Titus',
      quantity: 100,
      price: '5,000.00',
      amount: '500,000.00',
    },
  ],
})


</script>
