<template>
    <div class="timeline">
        <div class="container right">
            <div class="content">
                <h2>2017</h2>
                <p>Lorem ipsum..</p>
            </div>
        </div>
        <div class="container right">
            <div class="content">
                <h2>2016</h2>
                <p>Lorem ipsum..</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return { flag: false }
    },
    methods: {
        timestampToTime(timestamp) {
            var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var dt = date.toDateString();
            return dt;
        }
    },
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)
                .sort((a, b) => b.lastUpdated - a.lastUpdated);
        }
    }
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



/* Set a background color */

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: red;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}


/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
/* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

/* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

/* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

/* Make sure all circles are at the same spot */
  .left::after, .right::after {
    left: 15px;
  }

/* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
</style>
