// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([{
  "vue/first-attribute-linebreak": ["error", {
    "singleline": "ignore",
    "multiline": "below"
  }]
}]);
