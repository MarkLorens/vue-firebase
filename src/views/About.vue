<template>
    <Navbar />
    <template v-if="notChosen"> 
        <div>
            <p>
                Hey there, my name is Mark. Thank you for visiting one of my projects.
                <br>
                Choose your class [Please don't lie :(]
            </p>
            <span class="friend" @click="ChosenClass('Friendly')">I'm a friendly neighbour</span>
            <span class="hr" @click="ChosenClass('HR')">I'm an employer</span>
        </div>
    </template>
    <template v-if="isFriendly">
        <div>
            <p><i class="arrow left" @click="Reset"></i>  Wait, no take me back</p>
        </div>
        <div>
            <p style="color:crimson" class="modal">
                Hello, I am a 23 y/o (and counting!) and I like computers. <br>
                Apologies that this is just a wall of text, I am not sure what to write.
                But do drop by the github repo and suggest things as I have yet to become a Vue expert <br><br>
                I also play video games
            </p>
        </div>
    </template>
    <template v-if="isHR">
        <div>
            <p><i class="arrow left" @click="Reset"></i>  Wait, no take me back</p>
            <p style="color:crimson" class="modal">
                An IT graduate from Singapore. An aspiring Web-Dev looking for his first working experience.
                I have knowledge in the following languages:
                <ul>
                    <li>C#</li>
                    <li>.NET</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>HTML & CSS</li>
                </ul>
                My resume <a href="shorturl.at/dgiHX" style="color:black">here</a>
            </p>

        </div>
    </template>
    <Footer />
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            notChosen: true,
            isFriendly: false,
            isHR: false
        }
    },
    methods: {
        ChosenClass(chosenclass) {
            this.notChosen = false
            if (chosenclass == 'Friendly') {
                this.isFriendly = true
            }
            if (chosenclass == 'HR') {
                this.isHR = true
            }
        },
        Reset() {
            this.notChosen = true
            this.isFriendly = false
            this.isHR = false
        }
    }
}
</script>

<style scoped>
ul {
    text-align: left;
}
span:hover {
    cursor: pointer;
}
.friend {
    background-color: violet;
    color: white;
    padding: 3px;
}
.hr {
    background-color: green;
    color: white;
    padding: 3px;
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
</style>