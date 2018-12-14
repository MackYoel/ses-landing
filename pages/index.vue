<template>
  <div class="viewport-container">
    <section class="container">

      <div class="grid">
        <div class="hero">
          <h1>Salvando el semestre</h1>
        </div>
        <div class="img">
          <img src="~/assets/ses-gif.gif">
        </div>
        <div class="text-container">
          <div class="text">
            <p class="copy">Estamos preparando sorpresas para ti.</p>
            <!-- <button>
              Quiero saber más
            </button> -->
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
// import SesIcon from '~/assets/ses-icon'

export default {
  async asyncData() {
    return {
      // SesIcon
    }
  },
  head() {
    return {
      title: 'SES'
    }
  }
}
</script>

<style scoped>
:root {
  --spacing: 1.618rem;
  --main-width: 1020px;
  --color-blue: #4CB5F5;
  --color-gray: #B7B8B6;
  --color-dark: #34675C;
  --color-green: #B3C100;
  --color-border: #e8e8e8;
}

.viewport-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.container {
  padding: calc(var(--spacing) * 1.5) var(--spacing);
  max-width: var(--main-width);
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & .grid {
    display: grid;
    grid-template-areas: 
      "hero"
      "img"
      "text-container";

    @media (width >= 768px) {
      grid-template-areas: 
      "hero img"
      "text-container img";
    }
  }
}

.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: text-container;

  @media (width >= 768px) {
    align-items: initial;
  }
}

img {
  width: 100%;
}

.hero {
  grid-area: hero;

  @media (width >= 768px) {
    align-self: flex-end;
  }
}

.img {
  grid-area: img;
}

.hero h1 {
  color: var(--color-green);
  font-size: 3em;
  text-align: center;
}

.copy {
  text-align: center;
  font-size: 1.5em;
  color: var(--color-dark);
  margin-bottom: 1.5em;

  @media (width >= 768px) {
    margin: 0;
    align-self: flex-start;
  }
}

</style>
