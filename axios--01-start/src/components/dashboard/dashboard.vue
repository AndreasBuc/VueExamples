<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your Email Adress: {{email}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'dashboard',
  data() {
    return {
      email: '',
      response: {
        data: null,
      },
    }
  },
  created() {
    axios.get('https://vuejs-http-37f33.firebaseio.com/users.json')
      .then(response => {
        console.log('response.data:______________________');
        console.log(response.data);
        this.response.data = response.data;
        const data = response.data;
        const users = [];
        for ( let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user)
        }
      console.log('users:')
      console.log(users)
      this.email = users[0].email;
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
