<template>
  <header class="header-tradefull">
    <p>Main Header</p>
    <p class="temp-sb">Future Home of a Search Bar</p>
    <div class="widgets">
      <p>Login</p>
      <p>View Cart</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  font-family: sans-serif;
}

.header-tradefull {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 1em;
  padding: 0 1em;
  background-color: #56b6a9;
}

.temp-sb {
  place-self: center;
}

.widgets {
  display: flex;
  flex-direction: row;
  gap: 0.5em;
}
</style>
