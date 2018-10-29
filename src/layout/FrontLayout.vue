<template lang="pug">
    div
        div.menu
            router-link(to="/") Shop
            | !{'    '}
            router-link(to="card") Card
        slot
</template>

<script>
export default {
  name: 'FrontLayout'
}
</script>

<style lang="sass">
@font-face
    font-family: "Exo 2.0 - Thin"
    src: url('font/Exo2.0-Thin.otf')
    font-weight: thin
    font-style: normal

@font-face
    font-family: 'Trebuchet MS'
    src: url('font/Trebuchet-BoldItalic.eot')
    src: local("Trebuchet MS Bold Italic"), local("Trebuchet-BoldItalic"), url('font/Trebuchet-BoldItalic.eot?#iefix') format("embedded-opentype"), url('font/Trebuchet-BoldItalic.woff') format("woff"), url('font/Trebuchet-BoldItalic.ttf') format("truetype")
    font-weight: bold
    font-style: italic

@font-face
    font-family: 'Trebuchet MS'
    src: url('font/TrebuchetMS-Bold.eot')
    src: local("Trebuchet MS Bold"), local("TrebuchetMS-Bold"), url('font/TrebuchetMS-Bold.eot?#iefix') format("embedded-opentype"), url('font/TrebuchetMS-Bold.woff') format("woff"), url('font/TrebuchetMS-Bold.ttf') format("truetype")
    font-weight: bold
    font-style: normal

@font-face
    font-family: 'Trebuchet MS'
    src: url('font/TrebuchetMS-Italic.eot')
    src: local("Trebuchet MS Italic"), local("TrebuchetMS-Italic"), url('font/TrebuchetMS-Italic.eot?#iefix') format("embedded-opentype"), url('font/TrebuchetMS-Italic.woff') format("woff"), url('font/TrebuchetMS-Italic.ttf') format("truetype")
    font-weight: normal
    font-style: italic

@font-face
    font-family: 'Trebuchet MS'
    src: url('font/TrebuchetMS.eot')
    src: local("Trebuchet MS"), local("TrebuchetMS"), url('font/TrebuchetMS.eot?#iefix') format("embedded-opentype"), url('font/TrebuchetMS.woff') format("woff"), url('font/TrebuchetMS.ttf') format("truetype")
    font-weight: normal
    font-style: normal

*
    padding: 0
    margin: 0
    box-sizing: border-box
    &:focus
        outline: none;

body
    font-family: "Trebuchet MS", Arial, sans-serif;
    display: flex
    flex-direction: column
    min-height: 100vh
    height: 100%
    justify-content: space-between
    overflow-x: hidden

a
    text-decoration: none
    color: #3498db

.container
    margin-left: auto
    margin-right: auto

.menu
    display: flex
    flex-direction: row
    height: 20px
    align-items: center
    justify-content: center


@media screen and (max-width:767px)
    .container
        width: 100%

@media screen and (min-width:768px)  and (max-width:991px)
    .container
        width: 720px

@media screen and (min-width:992px)  and (max-width:1199px)
    .container
        width: 960px

@media screen and (min-width:1200px)
    .container
        width: 1184px
</style>
