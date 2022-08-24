const { createApp } = Vue
import env from 'env.config.js'

createApp({
  data() {
    return {
      data: undefined,
      env
    }
  },
  async mounted() {
    const course = (new URL(document.location)).searchParams.get('course')
    const data = await (await fetch(`https://syllabus-ad63c-default-rtdb.firebaseio.com/${course}.json`)).json()

    if (data) {
      this.data = data
    }
  }
}).mount('#app')