<template>
  <div>
    <div class="demo-gallery">
      <div class="demo-gallery__wrapper">
        <h1 class="demo-gallery__title">More Polina's photos</h1>
        <ul class="demo-gallery__list" id="lightgallery">
          <li
            class="lightgallery-item demo-gallery__item"
            v-for="(item, index) in userInfo"
            :key="index"
            :data-src="item.origin"
          >
            <gallery-item
              class="img-responsive"
              :is-private="item.is_private"
              :url="item.origin"
              :preview="item.preview"
              :index="index"
            ></gallery-item>
          </li>
        </ul>
      </div>
      <transition name="fade">
        <PrivateModal v-show="isPrivateModal"></PrivateModal>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Masonry from "masonry-layout/masonry.js";
import PrivateModal from "@/components/PrivateModal";

export default {
  name: "App",

  data() {
    return {
      activeSlide: null,
    };
  },

  components: {
    PrivateModal,
  },

  async mounted() {
    let LocalThumbWidth;
    let localThumbContHeight;
    if (document.documentElement.clientWidth > 760) {
      LocalThumbWidth = 150;
      localThumbContHeight = 176;
    } else {
      localThumbContHeight = 124;
      LocalThumbWidth = 100;
    }
    const el = document.getElementById("lightgallery");

    this.getData()
      .then(() => {
        window.lightGallery(el, {
          autoplay: true,
          pager: true,
          galleryId: "nature",
          thumbWidth: LocalThumbWidth,
          thumbContHeight: localThumbContHeight,
          thumbMargin: 20,
          mobileSettings: {
            controls: false,
            showCloseIcon: false,
            download: false,
            rotate: false,
          },
        });
        el.addEventListener("onBeforeSlide", (e) => {
          this.setActiveSlide(e.detail.index);
        });

        el.addEventListener("onBeforeClose", () => {
          this.resetActiveSlide();
        });
      })
      .then(() => {
        new Masonry(el, {
          itemSelector: ".lightgallery-item",
          gutter: 30,
          horizontalOrder: true,
          fitWidth: true,
        });
      });
  },

  computed: {
    ...mapGetters(["userData", "isPrivateModal"]),

    userInfo() {
      return this.userData;
    },
  },

  methods: {
    ...mapActions(["getData"]),
    ...mapMutations(["setActiveSlide", "resetActiveSlide"]),
  },
};
</script>

<style lang="scss">
.demo-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #caf0f8;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    padding: 64px 0;
  }

  &__title {
    margin-bottom: 30px;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
  }

  &__list {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  &__item {
    list-style: none;
    margin-bottom: 12px;
    transition: transform 0.2s ease-out;

    &:hover {
      transform: scale(1.1);
    }

    @media (min-width: 730px) {
      margin-bottom: 30px;
    }
  }
}

//transition
.fade-enter-active {
  transition: opacity 1s;
  transition-delay: 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

//lightgallery

.lightgallery-item {
  width: 288px;
  height: auto;
  @media (min-width: 730px) {
    width: 350px;
  }
}

div.lg-outer .lg-thumb-outer {
  background: linear-gradient(
    0deg,
    rgba(3, 4, 94, 0.8) 64.68%,
    rgba(3, 4, 94, 0) 100%
  );
  position: relative;
  padding: 24px;
  box-sizing: unset;

  @media (min-width: 760px) {
    padding: 30px;
  }
}

div.lg-outer .lg-inner {
  position: relative;
}

div.lg {
  display: flex;
  flex-direction: column;
}

div.lg-thumb.group {
  padding: 0;
}

button.lg-toggle-thumb.lg-icon {
  display: none;
}

button.lg-close.lg-icon,
button.lg-prev.lg-icon,
button.lg-next.lg-icon {
  margin: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: 1px solid transparent;
  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover {
    background-color: black;
    border-color: white;
  }

  @media (min-width: 730px) {
    margin: 30px;
  }
}

button.lg-next.lg-icon,
button.lg-prev.lg-icon {
  margin: 8px;
  top: calc(50% - 62px);
  transform: translate(0, -50%);

  @media (min-width: 760px) {
    top: calc(50% - 88px);
    margin: 30px;
  }
}

button.lg-next.lg-icon {
  right: 0;
}

button.lg-prev.lg-icon {
  left: 0;
}

button.lg-close.lg-icon:after {
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lg-toolbar.lg-group {
  background-color: transparent;
}

div.lg-outer .lg-img-wrap {
  padding: 36px 12px 0 12px;

  @media (min-width: 730px) {
    padding: 30px 80px 0 80px;
  }
}

div.lg-outer .lg-thumb-item {
  border: 1px solid transparent;
  transition: border-color 0.2s ease-out;
  border-radius: 0;
  box-sizing: border-box;
  &.active {
    border-color: white;
  }
}

.lg-on {
  overflow: hidden;
}

#lg-actual-size,
#lg-zoom-in,
#lg-download,
#lg-counter,
#lg-zoom-out,
div#lg-counter,
.lg-fullscreen.lg-icon {
  display: none;
}
</style>
