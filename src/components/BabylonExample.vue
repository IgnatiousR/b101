<script setup lang="ts">
import { onMounted, ref } from "vue";
import { CustomLoading } from "../BabylonExamples/CustomLoading";
// import { BasicScene } from "../BabylonExamples/BasicScene";
// import { StandardMaterials } from "../BabylonExamples/StandardMaterials";
// import { CustomModels } from "../BabylonExamples/CustomModels";

// defineProps<{ msg: string }>()

const canvasRef = ref<HTMLCanvasElement | null>(null);
const loadingBarRef = ref<HTMLElement | null>(null);
const percentLoadedRef = ref<HTMLElement | null>(null);
const loaderRef = ref<HTMLElement | null>(null);
const isLoaded = ref(false);

onMounted(() => {
  // const canvas = document.querySelector("canvas") as HTMLCanvasElement;
  // // const canvas = document.querySelector("canvas")!;
  // const loadingBar = document.getElementById("loadingBar") as HTMLElement;
  // const percentLoaded = document.getElementById("percentLoaded") as HTMLElement;
  // const loader = document.getElementById("loader") as HTMLElement;

  if (canvasRef.value) {
    new CustomLoading(
      canvasRef.value,
      () => {
        isLoaded.value = true;
      },
      loadingBarRef.value || undefined,
      percentLoadedRef.value || undefined,
      loaderRef.value || undefined
    );
  }
});
</script>

<template>
  <main>
    <div id="loader" ref="loaderRef">
      <p>Loading</p>

      <div id="loadingContainer">
        <div id="loadingBar" ref="loadingBarRef"></div>
      </div>

      <p id="percentLoaded" ref="percentLoadedRef">0%</p>
    </div>

    <p class="title-text">Custom Loading Screen</p>

    <canvas ref="canvasRef"></canvas>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@100;700&display=swap");

main {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

#loader {
  width: 100%;
  height: 100%;
  background: slategrey;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#loaded {
  width: 100%;
  height: 100%;
  background: slategrey;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 1s ease;
}

#loadingContainer {
  width: 30%;
  height: 2rem;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 6px;
  margin: 0.5rem;
}

#loadingBar {
  height: 100%;
  background: green;
  border-radius: 6px;
}

p {
  color: white;
  background: none;
  margin-bottom: 1rem;
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 2rem;
}

canvas {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  box-shadow: 8px 8px 10px -6px #000000;
}
</style>
