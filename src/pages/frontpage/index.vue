<template lang="pug">
  front-layout
    main.section
      .container.cat-food
          h1 Ты сегодня покормил кота?
          .card-set
            card(v-for="card in cards"
            :heading="card.heading"
            :content="card.content"
            :portions="card.portions"
            :gift="card.gift"
            :weight="card.weight"
            :description="card.description"
            :additional="card.additional"
            :initActive="card.isActive"
            :initDisabled="card.isDisabled"
            :key="card.id")
</template>

<script>
import FrontLayout from '@/layout/FrontLayout'
import Card from '@/components/card/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      cards: [
        {id: 1, heading: "Нямушка", content: "с фуа-гра", portions: "<b>10</b> порций", gift:"мышь в подарок", weight: "0.5", description: "Печень утки разварная с артишоками."},
        {id: 2, heading: "Хрямушка", content: "с рыбой", portions: "<b>40</b> порций", gift:"<b>2</b> мыши в подарок", weight: "2", description: "Головы щучьи с чесноком да свежайшая сёмгушка.", isActive: true},
        {id: 3, heading: "Жрямушка", content: "с курой", portions: "<b>100</b> порций", gift:"<b>5</b> мышей в подарок", additional: "заказчик доволен", weight: "5", description: "Филе из цыплят с трюфелями в бульоне.", isDisabled: true},
      ]
    }
  },
  components: {
    FrontLayout,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
.section
    width: 100vw
    min-height: calc(100vh - 20px)
    background-color: #ecf0f1
    display: flex
    justify-content: center
    align-items: center

.cat-food
    background: url("./img/bg.png") center center
    color: #ffffff
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    h1
        font-size: 36px
        font-family: "Exo 2.0 - Thin"
        margin: 47px 0 23px
    .card-set
        width: 100%
        padding: 20px 0
        display: flex
        flex-direction: row
        flex-wrap: wrap
        justify-content: space-around
        align-content: center
</style>
