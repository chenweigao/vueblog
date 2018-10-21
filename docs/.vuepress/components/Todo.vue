<template>
<div>
   <label>Add:
        <input type="text" name="" id="" v-model="content" @keyup.enter="add">  
    </label>
    <input type="button" value="Add" @click="add">
    <ul v-for="item in todo">
        {{ item.content }}
    </ul>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      content: "",
      todo: [
        {
          content: "Add something todo!"
        }
      ]
    };
  },
  methods: {
    add() {
      var todo = {
        content: this.content
      };
      this.todo.push(todo);
      this.content = "";
    }
  },
  computed: {}
};
</script>

<style>
.thin {
  font-weight: 300;
}
.size {
  font-size: 0.83em;
}
.color {
  color: black;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
