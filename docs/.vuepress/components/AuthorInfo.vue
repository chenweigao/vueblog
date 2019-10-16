<template>
  <div class="button"><span>{{ author }}</span></div>
</template>

<script>
// document.querySelector('.button').addEventListener('mousemove', function (e) {
//     const x = e.pageX - this.offsetLeft
//     const y = e.pageY - this.offsetTop

//     this.style.setProperty('--x', `${x}px`)
//     this.style.setProperty('--y', `${y}px`)
// })
export default {
  props: {
    author: { // 组件显示的文字 （可选）
      type: String,
      default: () => {
        return 'Weigao Chen';
      }
    }
  }
}
</script>
<style scoped>
.button {
  margin: 40px auto;
  width: 200px;
  height: 60px;
  padding: 0 30px;
  line-height: 60px;
  text-align: center;
  position: relative;
  appearance: none;
  background: #f72359;
  border: none;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 100px;
}

.button span {
  position: relative;
}

.button::before {
  --size: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #4405f7, transparent);
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.button:hover::before {
  --size: 400px;
}
</style>
