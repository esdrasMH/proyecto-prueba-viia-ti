export default {
    mounted() {
      this.onResponsiveInverted();
      window.addEventListener("resize", this.onResponsiveInverted);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.onResponsiveInverted);
    },
    data() {
      return {
        responsive: false,
      }
    },
    methods: {
      onResponsiveInverted() {
        if (window.innerWidth < 991) {
          this.responsive = true;
        } else {
          this.responsive = false;
        }
      },
    }
}