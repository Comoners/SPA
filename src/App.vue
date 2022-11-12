<template>
  <header>
      <h1 @click="changeContent">{{content}}</h1>
  </header>
  <main>
  
  </main>
  </template>
  
  <script lang="js">
  export default
  {
      data()
      {
          return 
          { content: 'WEB'}
      }
  }
  
  methods: {
      changeContent()
      {this.content='Strona'}
  }
  </script>
  
  <style>
  
  </style>