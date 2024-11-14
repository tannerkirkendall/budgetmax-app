import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  
  //state
  const count = ref(0)
  const prices = ref([])

  //actions
  function increaseCount(){
    count.value++
  }
  
  function decreaseCount(){
    count.value--
  }

  function getData(a){
    axios
    .get('https://jsonplaceholder.typicode.com/posts/'+a)
    .then((response) => {
      console.log(response.data)
      prices.value = response.data
    })
  }

  function saveData(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'fodo',
        body: 'bar',
        userId: 100,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => prices.value = json)
      .then((json) => console.log(json))
  }

  //getters
  const oddOrEven = computed(()=> {
    if (count.value % 2 === 0) return 'Even'
    return 'Odd'
  })

  return {
    count, 
    prices,


    increaseCount, 
    decreaseCount,
    
   
    oddOrEven,
    getData,
    saveData
  }
})
