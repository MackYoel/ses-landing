<template>
  <div class="container">
    <div class="hero">
      <h1>
        SES
      </h1>
    </div>
    <p class="copy">
      ¡Bienvenido! el blog de SES nace para informarte con breves explicaciones a cerca de temas que siempre tuviste curiosidad, como quien diría, <strong>#infoDeBolsillo</strong>
    </p>

    <h2>¿Por qué nos besamos?</h2>
    <p>
      El beso es frecuentemente percibido como símbolo de un amor romántico. Una dulce manera de expresar el afecto, pero surge la pregunta ¿por qué una boca atrae a la otra?
    </p>
    <p>
      El primer objetivo del beso en la boca es el de elegir la pareja apropiada.
      <span v-if="sources.s0" class="source">
        La Dra. Helen Fisher antropóloga de la Universidad Rutgers de New Jersey.
      </span>
      <a href="javascript:void(0)" @click="toggleSource(0)">{{ sources.s0 ? 'Okay' : '¿Quién dice?'}}</a><br>
      En una entrevista a más de un millar de personas, se obtuvo tres hipotesis:

      <ul>
        <li>
          Besar a la pareja en la boca, sentir su aliento y saliva, recoge informaciones (químicas y biológicas) sobre él o ella.
        </li>
        <li>
          El beso en la boca permite establecer un lazo sólido.
        </li>
        <li>
          Besarse en la boca tiene por función lograr el estado de excitación que precede a una relación sexual.
        </li>
      </ul>

      <p>Podemos pensar que todo se reduce a un tema meramente reproductivo, pero los chimpasés nos muestran que no siempre es así, ellos se besan entre machos y como un método de reconciliación después de resolver conflictos.</p>

      <h4>¿Y que hay de la química?</h4>
      <p>Al besarnos liberamos oxitocina y sus receptores se encuentran también en el corazón, esta hormona puede jugar un papel importante en el desarrollo del sentimiento del amor y sus síntomas, como las palpitaciones, la alegría, el sudor, bueno tu ya sabes cuales, ¿verdad?</p>
    </p>

    <div>Si llegaste hasta aquí, cuéntanos ¿que te pareció? Tus repuestas son completamente anónimas. Pronto tendremos más sorpresas para ustedes.</div>

    <footer>
      Del equipo de Salvando el semestre para el mundo - 2019
    </footer>
  </div>
</template>

<script>
export default {

  async asyncData() {
    return {
      sources: {
        s0: false,
        s1: false,
        s2: false,
        s3: false
      }
    }
  },
  methods: {
    toggleSource(index) {
      this.sources[`s${index}`] = !this.sources[`s${index}`]
    }
  },

  components: {
  }
}
</script>

<style scoped>
a {
  color: #4CB5F5;
  text-decoration: none;
}
.hero h1 {
  color: var(--color-green);
  font-size: 2.5em;
  margin: 0;
}
.container {
  padding-bottom: 0;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.76);
}
.source {
  font-style: italic;
  font-size: 90%;
  color: rgba(0, 0, 0, 0.56);
}
footer {
  /*background-color: #34675C;*/
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  color: #b3b3b3;
  text-align: center;
  padding: 1rem 0;
  font-size: 80%;
}
</style>
