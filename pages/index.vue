<template>
  <div class="viewport-container">
    <section class="container">

      <div class="grid">
        <div class="hero">
          <h1>Salvando el semestre</h1>
        </div>
        <div class="img">
          <img src="~/assets/release.gif">
        </div>
        <div class="text-container">
          <div class="text">
            <p class="copy">Estamos preparando sorpresas para ti.</p>
            <div class="button-wrapper">
              <a
                class="button cta-button"
                href="https://www.facebook.com/SalvandoSemestre/"
                target="_blanck"
              >
                QUIERO SABER MÁS
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import fbCover from '~/assets/fb-cover.png'

export default {
  head() {
    return {
      title: 'SES',
      meta: [
        {
          property: 'og:url',
          content: 'https://salvandoelsemestre.com'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Salvando el semestre'
        },
        {
          property: 'og:description',
          content: 'Asesoría en trabajos académicos'
        },
        {
          property: 'og:image',
          content: `${process.env.hostName}${fbCover}`
        },
        {
          property: 'robots',
          content: 'index, follow'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://salvandoelsemestre.com' }
      ]
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
  max-width: 100%;

  @media (width >= 350px) {
    max-width: 80%;
  }

  @media (width >= 768px) {
    max-width: 100%;
  }
}

.hero {
  grid-area: hero;

  @media (width >= 768px) {
    align-self: flex-end;
  }
}

.img {
  grid-area: img;
  text-align: center;
}

.hero h1 {
  color: var(--color-green);
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 0;

  @media (width >= 768px) {
    font-size: 3em;
  }
}

.copy {
  text-align: center;
  font-size: 1.5em;
  color: var(--color-dark);
  margin: 0 0 1rem 0;

  @media (width >= 768px) {
    margin-top: .6rem;
    margin-bottom: 2rem;
    align-self: flex-start;
  }
}

.button-wrapper {
  display: block;
  text-align: center;
}

.button {
  border: none;
  border-radius: 3em;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  display: inline-block;
  font-size: 1em;
  padding: 1em 2em;
  width: auto;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.cta-button {
  background-color: var(--color-blue);
  text-decoration: none;
}

.cta-button:hover {
  background-color: var(--color-blue);
}
</style>
