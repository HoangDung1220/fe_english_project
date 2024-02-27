<template>
    <div>
        <div class="is-loading-bar has-text-centered" :class="{'is-loading': $store.state.isLoading}">
                     <div class="lds-dual-ring"></div>
       </div>
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <el-row class="demo-progress-1">
                    <el-col :span="18"> <el-progress :text-inside="true" :stroke-width="26" :percentage="scale" status="warning"/></el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="4">
                        <div class="mark">
                            {{ this.score }}
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <el-row v-if="type==0">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <el-row class="title-vocabulary">
                    WORD                
                </el-row>
                <el-row class="content-word">
                    <el-col :span="18"> {{ vocabulary.vocabulary }}</el-col>
                    <el-col :span="6">
                        <el-button id="button-next" @click="next()">NEXT</el-button>
                    </el-col>
                </el-row>

                <el-row class="title-vocabulary">
                    Image
                </el-row>
                <el-row class="image-2">
                    <img class="image-course" v-bind:src="vocabulary.image" >
                </el-row>

                <el-row class="title-vocabulary">
                    Mean
                </el-row>
                <el-row class="text-1">
                    {{ vocabulary.mean }}
                </el-row>

                <el-row class="title-vocabulary">
                    Example
                </el-row>
                <el-row class="text-1">
                    {{ vocabulary.sample }}
                </el-row>

                <el-row class="title-vocabulary">
                    Description
                </el-row>
                <el-row class="text-1">
                    {{ vocabulary.description }}                
                </el-row>

                <el-row class="title-vocabulary">
                    Audio
                </el-row>
                <el-row class="text" @click="playAudio()">
                    <img src="../../assets/img/audio.png" style="height: 100px; width: 100px;"/>
                </el-row>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <el-row v-if="type==1">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <el-row class="demo-progress-1">
                    <el-col :span="8">
                    <el-row>
                        <el-col :span="2"></el-col>
                        <el-col :span="19">
                            <img class="image-course" v-bind:src="vocabulary.image" style="height: 100%; width: 100%;" >
                        </el-col>
                        <el-col :span="3"></el-col>
                    </el-row>
                    </el-col>
                    <el-col :span="10">
                        <div>

                        <el-button class="button-answer demo-progress-1" :type="type_button.A" style="height: 70px;" @click="choiceAnswer1(this.answer_type_1.A,1)">
                            <div class="number-answer">01</div>
                            <div class="content-answer">{{ this.answer_type_1.A }}</div>
                        </el-button>

                        </div>
                        <div>
                        <el-button class="button-answer demo-progress-1" :type="type_button.B"  style="height: 70px;" @click="choiceAnswer1(this.answer_type_1.B,2)" >
                            <div class="number-answer">02</div>
                            <div class="content-answer">{{ this.answer_type_1.B }}</div>
                        </el-button>
                        </div>
                        <div>
                        <el-button class="button-answer demo-progress-1" :type="type_button.C" style="height: 70px;" @click="choiceAnswer1(this.answer_type_1.C,3)">
                            <div class="number-answer">03</div>
                            <div class="content-answer">{{ this.answer_type_1.C }}</div>
                        </el-button>
                        </div>
                        <div>
                        <el-button class="button-answer demo-progress-1" :type="type_button.D" style="height: 70px;" @click="choiceAnswer1(this.answer_type_1.D,4)">
                            <div class="number-answer">04</div>
                            <div class="content-answer">{{ this.answer_type_1.D }}</div>
                        </el-button>
                        </div>
                       
                    </el-col>
                </el-row>
                
               
            </el-col>
            <el-col :span="2"> 
                    <el-row :span="6">
                        <el-button id="button-donot-know" type="danger" style="margin-bottom: 5px;" @click="DontKnow2()">
                            <el-row>
                                <el-icon :size="30"><CloseBold /></el-icon>
                            </el-row>
                            <br>
                            <el-row>
                                {{text_button_1}}
                            </el-row>
                        </el-button>
                    </el-row>
                    <el-row style="margin-top: 10px;">
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-icon :size="20"><Star /></el-icon></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
            </el-col>
            <el-col :span="1"> 
            </el-col>
        </el-row >
        <el-row v-if="type==2">
            <el-col :span="3"></el-col>
            <el-col :span="18">
               <el-row class="require-question">Pick the correct answer</el-row>
               <el-row class="vocabulary">
                    <el-col :span="10"></el-col>
                    <el-col :span="4">{{ vocabulary.vocabulary }}</el-col>
                    <el-col :span="10"></el-col>
               </el-row>

               <el-row :gutter="20" style="margin-top: 15px; ">
                <el-col :span="3"></el-col>
                    <el-col :span="9" @click="choiceAnswer2(this.answer_type_2.A,1)">
                        <el-button :type="type_button_2.A" class="button-answer-image" style="height: 210px; width: 100%;">
                            <div class="number-answer">01</div>
                            <img v-bind:src="answer_type_2.A" style="height: 150px; width: 200px;" />
                        </el-button>
                    </el-col>
                    <el-col :span="9" @click="choiceAnswer2(this.answer_type_2.B,2)">
                        <el-button :type="type_button_2.B" class="button-answer-image" style="height: 210px; width: 100%;">
                            <div class="number-answer">02</div>
                            <img v-bind:src="answer_type_2.B" style="height: 150px; width: 200px;" />
                        </el-button>
                    </el-col>
                    <el-col :span="3"></el-col>
               </el-row>

               <el-row :gutter="20" style="margin-top: 15px; ">
                <el-col :span="3"></el-col>
                    <el-col :span="9" @click="choiceAnswer2(this.answer_type_2.C,3)">
                        <el-button :type="type_button_2.C" class="button-answer-image" style="height: 210px; width: 100%;">
                            <div class="number-answer">01</div>
                            <img v-bind:src="answer_type_2.C" style="height: 150px; width: 200px;" />
                        </el-button>
                    </el-col>
                    <el-col :span="9" @click="choiceAnswer2(this.answer_type_2.D,4)">
                        <el-button :type="type_button_2.D" class="button-answer-image" style="height: 210px; width: 100%;">
                            <div class="number-answer">02</div>
                            <img v-bind:src="answer_type_2.D" style="height: 150px; width: 200px;" />
                        </el-button>
                    </el-col>
                    <el-col :span="3"></el-col>
               </el-row>

               <div style="height: 100px;"></div>
               
            </el-col>
            <el-col :span="2"> 
                <el-row :span="6">
                        <el-button id="button-donot-know" type="danger" style="margin-bottom: 5px;" @click="DontKnow3()">
                            <el-row>
                                <el-icon :size="30"><CloseBold /></el-icon>
                            </el-row>
                            <br>
                            <el-row>
                                {{text_button_1}}
                            </el-row>
                        </el-button>
                    </el-row>
                    <el-row style="margin-top: 10px;">
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-icon :size="20"><Star /></el-icon></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
            </el-col>
            <el-col :span="1"> 
            </el-col>
        </el-row >

        <el-row v-if="type==3">
            <el-col :span="3"></el-col>
            <el-col :span="18">

                <el-row>
                    <el-col :span="9">
                            <img class="image-course" v-bind:src="vocabulary.image" style="height:200px; width: 200px;" >
                    </el-col>

                    <el-col :span="15">
                        <el-row>ENGLISH</el-row>
                        <el-row>
                            <input id="value" class="input-1" v-model="value" @input="changeValue()" @change="changeValue()" />
                        </el-row>
                        <div v-for="(item, index) in alphabet_predict" :key="index">
                        <el-row style="margin-top: 10px;" v-if="index % 6 == 0">
                            <el-col :span="2"><button class="character" v-if="index<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index])">{{ alphabet_predict[index] }}</button></el-col>
                            <el-col :span="2"><button class="character" v-if="index+1<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index+1])">{{ alphabet_predict[index+1] }}</button></el-col>
                            <el-col :span="2"><button class="character" v-if="index+2<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index+2])">{{ alphabet_predict[index+2] }}</button></el-col>
                            <el-col :span="2"><button class="character" v-if="index+3<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index+3])">{{ alphabet_predict[index+3] }}</button></el-col>
                            <el-col :span="2"><button class="character" v-if="index+4<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index+4])">{{ alphabet_predict[index+4] }}</button></el-col>
                            <el-col :span="2"><button class="character" v-if="index+5<alphabet_predict.length" @click="choiceAlphabet(alphabet_predict[index+5])">{{ alphabet_predict[index+5] }}</button></el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span="5"><button class="character" style="width: 100%;" v-if="index== 0" @click="hint()">Hint</button></el-col>
                        </el-row>
                        
                        </div>
                    </el-col>
                </el-row>
              
               
            </el-col>
            <el-col :span="2"> 
                    <el-button id="button-next" @click="next3()" v-if="value.length>0">Check<el-icon size="30"><DArrowRight /></el-icon></el-button>

                    <el-button id="button-donot-know" type="danger" style="margin-bottom: 5px;" @click="DontKnow4()"  v-if="value.length==0">
                            <el-row>
                                <el-icon :size="30"><CloseBold /></el-icon>
                            </el-row>
                            <br>
                            <el-row>
                                {{text_button_1}}
                            </el-row>
                        </el-button>
                    <el-row style="margin-top: 10px;">
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-icon :size="20"><Star /></el-icon></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
            </el-col>
            <el-col :span="1"> 
            </el-col>
        </el-row >

        <el-row v-if="type==4">
            <el-col :span="3"></el-col>
            <el-col :span="18">
                <div class="table_learned">
                    <div class="header_table">
                        <div class="text_header">
                            Score you obtained
                        </div>
                    </div>
                    <div class="content_table">
                        <el-row>
                            <el-col :span="2"></el-col>
                            <el-col :span="5">
                                <el-row class="point_complete">Point earned</el-row>
                                <el-row class="score_complete">{{ score }}</el-row>
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =5>
                                <el-row class="point_complete">Number vocabulary learned</el-row>
                                <el-row class="score_complete">{{ vocabularies.length }}</el-row>
                                
                            </el-col>
                            <el-col :span="2"></el-col>
                            <el-col :span =5>
                                <el-row class="point_complete">You wrong </el-row>
                                <el-row class="score_complete">{{ number_error }}</el-row>
                                
                            </el-col>
                            <el-col :span =3>
                                <el-button class="button-1" color="#ffc000" style="width: 100px;" @click="clickOk()"><span>OK</span></el-button>                               
                            </el-col>
                        </el-row>

                        
                    </div>
                </div>
                </el-col>
                <el-col :span="3"></el-col>

        </el-row>
        </div>
    
</template>

<script>
import axios from "axios";
import { toast } from "bulma-toast";

export default{
    name : "DetailCourse",
    data(){
        return{
            typeDontknow2:"",
            text_button_1:"I don't know",
            total_vocabulary_score:1,
            number_vocabulary_learned : 0,
            number_game_learned : 0,
            score:0,
            index : 0,
            type : "0",
            vocabularies : [],
            vocabulary : "",
            means : [],
            answer_type_1:{
                "A" : "",
                "B" : "",
                "C" : "",
                "D" : ""
            }, 
            answer_type_2:{
                "A" : "",
                "B" : "",
                "C" : "",
                "D" : ""
            }, 
            is_right : false,
            is_wrong : false,
            type_button : {
                "A":"",
                "B":"",
                "C":"",
                "D":""
            },
            type_button_2 : {
                "A":"",
                "B":"",
                "C":"",
                "D":""
            },
            type_error : 1,
            num_alphabet : 0 ,
            alphabet_predict : [],
            value : "",
            scale : 0,
            current_vocabulary:0,
            number_error:0,
            id_course:"",
            id_level:"",

        }
    },
    async mounted(){
        
        this.$store.commit('setIsLoading',true)
        const nav = {
                "is_home" : false,
                "is_course": true
        }

        this.$store.commit('setNav',nav)
        this.id_course = this.$route.params.id_course
        this.id_level = this.$route.params.id_level
        const id_user = this.$store.state.user.id

        await axios
                    .get(`http://127.0.0.1:8000/api/v1/course/learn?level=${this.id_level}&user=${id_user}&course=${this.id_course}`)
                    .then((response) => {
                        this.vocabularies = response.data.data
                        this.vocabulary = this.vocabularies[this.current_vocabulary]
                        this.total_vocabulary_score = this.vocabularies.length * 3;
                    })
                    .catch((error) => console.log(error));

        await axios
                    .get(`http://127.0.0.1:8000/api/v1/course/vocabulary/${this.id_course}`)
                    .then((response) => {
                        this.means = response.data
                    })
                    .catch((error) => console.log(error));


        this.$store.commit('setIsLoading',false)

    },
    methods:{
        next(){
                this.clearValueButton1()
                this.value = ""
                this.alphabet_predict = []
                if (this.type_error=="1"){
                    this.clearValueButton()
                    var index_answer = Math.floor((Math.random() * 4) + 1);
                    switch(index_answer) {
                        case 1:
                            this.answer_type_1.A = this.vocabulary.vocabulary
                            break;
                        case 2:
                            this.answer_type_1.B = this.vocabulary.vocabulary
                            break;
                        case 3:
                            this.answer_type_1.C = this.vocabulary.vocabulary
                            break;
                        case 4:
                            this.answer_type_1.D = this.vocabulary.vocabulary
                            break;
                        }
                    var randoms = []
                    var amount = 0;
                    while (randoms.length<4){
                        var i = Math.floor((Math.random() * this.means.length) + 1);
                        if (i<this.means.length && randoms.indexOf(i)==-1 && this.means[i].vocabulary!=this.vocabulary.vocabulary){
                            randoms.push(i);
                            amount = amount +1;
                        }
                    }

                    for (var j = 0 ; j<4 ; j++){                    
                        if ((j+1)!=index_answer){
                            switch(j) {
                                case 0:
                                    this.answer_type_1.A = this.means[randoms[j]].vocabulary
                                    break;
                                case 1:
                                    this.answer_type_1.B = this.means[randoms[j]].vocabulary
                                    break;
                                case 2:
                                    this.answer_type_1.C = this.means[randoms[j]].vocabulary
                                    break;
                                case 3:
                                    this.answer_type_1.D = this.means[randoms[j]].vocabulary
                                    break;
                            }
                        }
                    }
                        
            } else if (this.type_error=="2"){
                this.clearValueButton1()
                this.createAnswerForType2();
            }
                this.type = this.type_error
        },

        createAnswerForType2(){
            var index_answer = Math.floor((Math.random() * 4) + 1);
                switch(index_answer) {
                    case 1:
                        this.answer_type_2.A = this.vocabulary.image
                        break;
                    case 2:
                        this.answer_type_2.B = this.vocabulary.image
                        break;
                    case 3:
                        this.answer_type_2.C = this.vocabulary.image
                        break;
                    case 4:
                        this.answer_type_2.D = this.vocabulary.image
                        break;
                    }
                var randoms = []
                var amount = 0;
                while (randoms.length<4){
                    var i = Math.floor((Math.random() * this.means.length) + 1);
                    if (i<this.means.length && randoms.indexOf(i)==-1 && this.means[i].image!=this.vocabulary.image){
                        randoms.push(i);
                        amount = amount +1;
                    }
                }

                for (var j = 0 ; j<4 ; j++){                    
                    if ((j+1)!=index_answer){
                        switch(j) {
                            case 0:
                                this.answer_type_2.A = this.means[randoms[j]].image
                                break;
                            case 1:
                                this.answer_type_2.B = this.means[randoms[j]].image
                                break;
                            case 2:
                                this.answer_type_2.C = this.means[randoms[j]].image
                                break;
                            case 3:
                                this.answer_type_2.D = this.means[randoms[j]].image
                                break;
                        }
                    }
                }
        },
        async choiceAnswer1(value,index){
            this.clearValueButton()
            if (value==this.vocabulary.vocabulary){
                switch (index){
                    case 1:
                        this.type_button.A = "success"
                        break
                    case 2:
                        this.type_button.B = "success"
                        break
                    case 3:
                        this.type_button.C = "success"
                        break
                    case 4:
                        this.type_button.D = "success"
                        break
                }
               
                toast({
                message: "Answer exactly",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
              this.number_game_learned = this.number_game_learned +1;
              this.scale = (Math.round((this.number_game_learned/this.total_vocabulary_score + Number.EPSILON) * 100) / 100)*100
              this.score = this.score +5  
              this.playAudio();
              this.createAnswerForType2();
              setTimeout(()  =>
              this.type = this.type + 1
              ,2000);
            } else {
                switch (index){
                    case 1:
                        this.type_button.A = "danger"
                        break
                    case 2:
                        this.type_button.B = "danger"
                        break
                    case 3:
                        this.type_button.C = "danger"
                        break
                    case 4:
                        this.type_button.D = "danger"
                        break
                }
                toast({
                    message: "Answer wrong",
                    type: "is-danger",
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: "top-right",
                });
                this.number_error = this.number_error +1
                setTimeout(()  => {this.type = 0
                this.type_error = 1},2000);
            }

        },

        DontKnow2(){
            this.clearValueButton()
            switch (this.vocabulary.vocabulary){
                case this.answer_type_1.A:
                        this.type_button.A = "success"
                        break
                case this.answer_type_1.B:
                        this.type_button.B = "success"
                        break
                case this.answer_type_1.C:
                        this.type_button.C = "success"
                        break
                case this.answer_type_1.D:
                        this.type_button.D = "success"
                        break
            }
            this.number_error = this.number_error +1

            setTimeout(()  => 
                {
                    this.type = 0
                    this.type_error = 1
                }
                ,500);
        },

        async choiceAnswer2(value,index){
            this.clearValueButton()
            if (value==this.vocabulary.image){
                switch (index){
                    case 1:
                        this.type_button_2.A = "success"
                        break
                    case 2:
                        this.type_button_2.B = "success"
                        break
                    case 3:
                        this.type_button_2.C = "success"
                        break
                    case 4:
                        this.type_button_2.D = "success"
                        break
                }
               
                toast({
                message: "Answer exactly",
                type: "is-success",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "top-right",
              })
              this.playAudio();
              this.number_game_learned = this.number_game_learned +1;
              this.scale = (Math.round((this.number_game_learned/this.total_vocabulary_score + Number.EPSILON) * 100) / 100)*100
              this.score = this.score +5  
              this.createRandomAlphabet()
              setTimeout(()  =>
              this.type = this.type + 1
              ,2000);
            } else {
                switch (index){
                    case 1:
                        this.type_button_2.A = "danger"
                        break
                    case 2:
                        this.type_button_2.B = "danger"
                        break
                    case 3:
                        this.type_button_2.C = "danger"
                        break
                    case 4:
                        this.type_button_2.D = "danger"
                        break
                }
                toast({
                    message: "Answer wrong",
                    type: "is-danger",
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: "top-right",
                });
                this.number_error = this.number_error +1
                setTimeout(()  => {this.type = 0
                this.type_error = 2},2000);
            }
        },
        playAudio(){
            var audio = new Audio(this.vocabulary.audio)
            console.log(audio)
            audio.play()
        },

        DontKnow3(){
            this.clearValueButton1()
            switch (this.vocabulary.image){
                case this.answer_type_2.A:
                        this.type_button_2.A = "success"
                        break
                case this.answer_type_2.B:
                        this.type_button_2.B = "success"
                        break
                case this.answer_type_2.C:
                        this.type_button_2.C = "success"
                        break
                case this.answer_type_2.D:
                        this.type_button_2.D = "success"
                        break
            }
            this.number_error = this.number_error +1
            setTimeout(()  => 
                {
                    this.type = 0
                    this.type_error = 2
                }
                ,500);
        },

        clearValueButton(){
            this.type_button.A = ""
            this.type_button.B = ""
            this.type_button.C = ""
            this.type_button.D = ""

        },

        clearValueButton1(){
            this.type_button_2.A = ""
            this.type_button_2.B = ""
            this.type_button_2.C = ""
            this.type_button_2.D = ""

        },
        createRandomAlphabet(){
            var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","S","T","U","V","W","X","Y","Z"]
            var word = this.vocabulary.vocabulary.split("")
            var randoms = []
            this.num_alphabet = word.length + 4

            while (randoms.length<this.num_alphabet){
                var j = Math.floor((Math.random() * this.num_alphabet) + 1);
                if (j<=this.num_alphabet && randoms.indexOf(j)==-1) randoms.push(j)
            }   

            while (word.length<this.num_alphabet){
                var j = Math.floor((Math.random() * alphabet.length) + 1);
                if (j<alphabet.length && word.indexOf(alphabet[j])==-1) word.push(alphabet[j])
            }   

            for (var i = 0 ; i<this.num_alphabet ; i++){
                for (var j = 0; j<this.num_alphabet;j++){
                    if (randoms[j]==i+1){
                        this.alphabet_predict.push(word[j])
                    }
                }
            }

        },
        choiceAlphabet(val){
            if (val.length>0){
                this.value = this.value + val
                this.changeValue()
            }
        },
        hint(){
            if (this.value.length>0){
                var amount = 0
                for (var i =0; i<this.value.length; i++){
                    if (this.value.charAt(i)==this.vocabulary.vocabulary.charAt(i)) amount = amount + 1
                    else {
                        this.value = this.value.substring(0,i) + this.vocabulary.vocabulary.charAt(i)
                        break;
                    }
                }
                if (amount==this.value.length) this.value = this.value + this.vocabulary.vocabulary.charAt(this.value.length)

            } else{
                this.value = this.value + this.vocabulary.vocabulary.charAt(0);
            }
            this.changeValue()

        },
        async changeValue(){
            if (this.value.toUpperCase() === this.vocabulary.vocabulary.toUpperCase()){
                this.number_game_learned = this.number_game_learned +1
                this.score = this.score +5;
                this.scale = (Math.round((this.number_game_learned/this.total_vocabulary_score + Number.EPSILON) * 100) / 100)*100
                document.getElementById("value").style.borderColor = "green";
                toast({
                    message: "Answer exactly",
                    type: "is-success",
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 2000,
                    position: "top-right",
                })
                this.playAudio()
                if (this.vocabulary.id != this.vocabularies[this.vocabularies.length-1].id){
                setTimeout(()  =>{
                    this.current_vocabulary = this.current_vocabulary +1
                    this.type = 0
                    this.type_error = 1
                    this.vocabulary = this.vocabularies[this.current_vocabulary]   
                }
                ,2000);
                } 
                else {
                    this.type="4"
                    this.score = this.score + (this.total_vocabulary_score - this.number_error)*5
                }}
            
        },
        clickOk(){
                    this.$store.commit('setIsLoading',true)
                    this.$router.push(`/learning/exam/complete/${this.id_course}/${this.id_level}/${this.vocabulary.id}/${this.score}`)
                    this.$store.commit('setIsLoading',false)
            }

    }
    
}
</script>

<style lang = "scss">
    @import "../../assets/css/vocabulary.scss";
.lds-dual-ring{
  display: inline-block;
  width : 80px;
  height : 80px
}

.lds-dual-ring:after{
  content : '';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #ccc;
  border-color: #ccc transparent #ccc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.is-loading-bar {
    height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    
    &.is-loading {
        height: 80px;
    }
}

.is_right{
    background-color: green;
}

.is_wrong{
    background: red;
}

</style>