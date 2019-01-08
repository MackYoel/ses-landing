<template>
  <div class="container">
    <div class="hero">
      <h1>
        SES
      </h1>
    </div>
    <p class="copy">
      ¡Bienvenido! el blog de SES nace para informarte con breves explicaciones acerca de temas que siempre tuviste curiosidad, como quien diría, <strong class="gray">#infoDeBolsillo</strong>
    </p>

    <h2 class="dark">¿Por qué nos besamos?</h2>
    <p>
      El beso es frecuentemente percibido como símbolo de un amor romántico. Una dulce manera de expresar el afecto, pero surge la pregunta ¿por qué una boca atrae a la otra?
    </p>
    <p>
      El primer objetivo del beso en la boca es el de elegir la pareja apropiada.
      <span v-if="sources.s0" class="source">
        La Dra. Helen Fisher antropóloga de la Universidad Rutgers de New Jersey.
      </span>
      <a href="javascript:void(0)" @click="toggleSource(0)">{{ sources.s0 ? 'Okay' : '¿Quién dice?'}}</a><br>
      En una entrevista a más de un millar de personas, se obtuvo tres hipótesis:

    </p>
    <ul>
      <li>
        Besar a la pareja en la boca, sentir su aliento y saliva, recoge informaciones químicas y biológicas sobre él o ella.
      </li>
      <li>
        El beso en la boca permite establecer un lazo sólido.
      </li>
      <li>
        Besarse en la boca tiene por función lograr el estado de excitación que precede a una relación sexual.
      </li>
    </ul>
    <p>Podemos pensar que todo se reduce a un tema meramente reproductivo, pero los chimpancés nos muestran que no siempre es así, ellos se besan entre machos y como método de reconciliación después de resolver conflictos.</p>

    <h4 class="dark">¿Y qué hay de la química?</h4>
    <p>Al besarnos liberamos oxitocina y sus receptores se encuentran también en el corazón, esta hormona puede jugar un papel importante en el desarrollo del sentimiento del amor y sus síntomas, como las palpitaciones, la alegría, el sudor, bueno tu ya sabes cuales, ¿verdad?</p>

    <p>Si llegaste hasta aquí, cuéntanos ¿qué te pareció? Tus repuestas son completamente anónimas. Pronto tendremos más sorpresas para ustedes.</p>

    <div class="feedback-form">
      <template v-for="option in options">
        <input type="checkbox" class="cb" :id="`option${option.id}`" :value="option.id" v-model="answers">
        <label :for="`option${option.id}`">{{ option.description }}</label>
        <br>
      </template>
      <br>
      <div class="button-container">
        <button class="button cta-button" @click="send">Enviar</button>
      </div>
    </div>

    <footer>
      El equipo de Salvando el semestre - 2019
    </footer>
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '748805002144099');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=748805002144099&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {

  async asyncData() {
    return {
      sources: {
        s0: false
      },
      answers: [],
      options: [
        {
          id: 1,
          description: 'Me pareció interesante'
        },
        {
          id: 2,
          description: 'Es muy corto'
        },
        {
          id: 3,
          description: 'Deseo ver mas fuentes de información'
        },
        {
          id: 4,
          description: 'Ya sabía sobre el tema, pero me gusta el formato'
        }
      ]
    }
  },
  methods: {
    toggleSource(index) {
      this.sources[`s${index}`] = !this.sources[`s${index}`]
    },

    send() {

    }
  },

  components: {
  }
}
</script>

<style scoped>
.cb {
  display: none;
}
label {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  font-size: 16px;
  line-height: 20px;
  margin: 5px;
}
label:before {
  line-height: 20px;
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0;
  background-color: #ffffff;
  border: 1px solid #666666;
}
input[type=checkbox]:checked + label:before {
  content: "\2713";
  color: #4CB5F5;
  font-weight: bold;
  text-align: center;
  line-height: 16px;
}
.gray {
  color: rgba(0,0,0,.54);
}
.dark {
  color: #34675C;
}
a {
  color: #4CB5F5;
  text-decoration: none;
}
.hero h1 {
  color: var(--color-green);
  font-size: 2.5em;
}
.container {
  padding-bottom: 0;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.76);
  line-height: 23px;
}
.source {
  font-style: italic;
  font-size: 90%;
  color: rgba(0, 0, 0, 0.56);
}
footer {
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  color: #b3b3b3;
  text-align: center;
  padding: 1rem 0;
  font-size: 80%;
}
.feedback-form {
  min-width: 300px;
  margin: 0 auto;
}
.button-container {
  text-align: center;
}

</style>
