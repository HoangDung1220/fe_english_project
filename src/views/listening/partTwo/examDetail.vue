<template>

    <div class="content-exam">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="5">
            <el-row class="title">Part 2: QUESTION- RESPONSE</el-row>
            
            <el-row>
                <div id="question-palette-panel">
                    <div class="current-topic-label">
                        Test 2
                    </div>
                    <div class="question-palette-main">
                        <div class="question-palette-header">
                            Question Palette
                        </div>

                        <div class="question-list-1">
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">1</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">2</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">3</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">4</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">5</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">6</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">7</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">8</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">9</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">10</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">11</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">12</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">13</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">14</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">15</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">16</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">17</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">18</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">19</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">20</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">21</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">22</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">23</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">24</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row class="quantity-answer">
                                <el-col :span="12"><div class="incorrect"><el-icon color="red" style="vertical-align: middle;"><MostlyCloudy /></el-icon> 0/24 Incorrect</div></el-col>
                                <el-col :span="12"><div class="correct"><el-icon color="green" style="vertical-align: middle;"><MostlyCloudy /></el-icon> 0/24 Correct</div></el-col>
                            </el-row>

                            <el-row class="restart">
                                <el-col :span="16"></el-col>
                                <el-col :span="8"><el-button round type="danger" plain ><el-icon><Refresh /></el-icon> Restart</el-button></el-col>
                            </el-row>
                            
                        </div>
                    </div>
                </div>
            </el-row>

             <el-row>
                <el-card style="width:100%">
                    <el-row class="title1">Practices</el-row>
                    <el-row :gutter="20" style="margin-bottom:5px">
                        <el-col :span="8">
                            <div class="test-1">
                                Test 1
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="test-1">
                                Test 2
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="test-1">
                                Test 3
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="margin-bottom:5px">
                        <el-col :span="8">
                            <div class="test-1">
                                Test 4
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="test-1">
                                Test 5
                            </div>
                        </el-col>
                        <el-col :span="8">
                            <div class="test-1">
                                Test 6
                            </div>
                        </el-col>
                    </el-row>
                    
                   
                </el-card>

            </el-row>
   
            </el-col>
            <el-col :span="13" class="content-question">
                <el-card v-if="!is_last">
                    <el-row>
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-row><el-icon :size="40"><VideoPlay /></el-icon></el-row></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
                   

                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="8">
                            <el-radio-group v-model="answer" style=" color:red;display:flex; flex-direction: column; float:left" @change="choice()">
                                <el-row>
                                    <el-radio label="1" size="large" v-if="right_answer!='1' && is_choice.a" style="color:red">(A)</el-radio>
                                    <el-radio label="1" size="large" v-if="right_answer=='1'&& is_choice.choice" style="color:#228B22">(A)</el-radio>
                                    <el-radio label="1" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.a && right_answer!='1')">(A)</el-radio>
                                </el-row>
                                <el-row>
                                    <el-radio label="2" size="large" v-if="right_answer!='2' && is_choice.b" style="color:red">(B)</el-radio>
                                    <el-radio label="2" size="large" v-if="right_answer=='2'&& is_choice.choice" style="color:#228B22">(B)</el-radio>
                                    <el-radio label="2" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.b && right_answer!='2')">(B)</el-radio>
                                </el-row>
                                <el-row>
                                    <el-radio label="3" size="large" v-if="right_answer!='3' && is_choice.c" style="color:red">(C)</el-radio>
                                    <el-radio label="3" size="large" v-if="right_answer=='3'&& is_choice.choice" style="color:#00FF7F; font-weight:700">(C)</el-radio>
                                    <el-radio label="3" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.c && right_answer!='3')">(C)</el-radio>
                                </el-row>
                               
                            </el-radio-group>
                        </el-col>
                        <el-col :span="8"></el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="15" class="transcript">
                            <el-row><strong>{{scripts.title}}</strong></el-row>
                            <el-row>
                                <strong v-if="right_answer=='1'">{{scripts.a}}</strong>
                                <p v-else>{{scripts.a}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='2'">{{scripts.b}}</strong>
                                <p v-else>{{scripts.b}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='3'">{{scripts.c}}</strong>
                                <p v-else>{{scripts.c}}</p>
                            </el-row>
                            
                            <el-row></el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </el-row>
                    <el-row v-if="is_choice.choice">
                        <el-col :span="22"></el-col>
                        <el-col :span="2"><el-button type="primary">Next</el-button></el-col>
                    </el-row>

                </el-card>

                <el-card v-if="is_last">
                    <el-row>
                        <el-col :span="9"></el-col>
                        <el-col :span="6" class="title-3">Congratulations</el-col>
                        <el-col :span="9"></el-col>
                    </el-row>
                    
                    <el-row style="margin-top:20px">
                        <el-col :span="6"></el-col>
                        <el-col :span="12"><img src="https://toeic-testpro.com/images/practice-done.svg" style="width:100%"/></el-col>
                        <el-col :span="6"></el-col>
                    </el-row>

                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="4"><el-button type="primary" round>TRY AGAIN</el-button></el-col>
                        <el-col :span="4" ><el-button  round>REVIEW</el-button></el-col>
                        <el-col :span="8"></el-col>
                    </el-row>
                </el-card>
                <el-card v-if="is_last" style="margin-top:15px">
                    <div class="review-part">
                    <el-row>
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-row><el-icon :size="40"><VideoPlay /></el-icon></el-row></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
                  
                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="15" class="transcript">
                            <el-row>
                                <strong v-if="right_answer=='1'">{{list[0].a}}</strong>
                                <p v-else>{{list[0].a}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='2'">{{list[0].b}}</strong>
                                <p v-else>{{list[0].b}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='3'">{{list[0].c}}</strong>
                                <p v-else>{{list[0].c}}</p>
                            </el-row>
                           
                            <el-row></el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </el-row>
                    </div>
                    <div class="review-part">
                    <el-row>
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-row><el-icon :size="40"><VideoPlay /></el-icon></el-row></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
                   
                    <el-row>
                        <el-col :span="8"></el-col>
                        <el-col :span="15" class="transcript">
                            <el-row>
                                <strong v-if="right_answer=='1'">{{list[0].a}}</strong>
                                <p v-else>{{list[0].a}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='2'">{{list[0].b}}</strong>
                                <p v-else>{{list[0].b}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='3'">{{list[0].c}}</strong>
                                <p v-else>{{list[0].c}}</p>
                            </el-row>
                           
                            <el-row></el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </el-row>
                    </div>
                    <div class="review-part">
                    <el-row>
                        <el-col :span="10"></el-col>
                        <el-col :span="4"><el-row><el-icon :size="40"><VideoPlay /></el-icon></el-row></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>
                    
                    <el-row style="margin-top:20px">
                        <el-col :span="8"></el-col>
                        <el-col :span="15" class="transcript">
                            <el-row>
                                <strong v-if="right_answer=='1'">{{list[0].a}}</strong>
                                <p v-else>{{list[0].a}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='2'">{{list[0].b}}</strong>
                                <p v-else>{{list[0].b}}</p>
                            </el-row>
                            <el-row>
                                <strong v-if="right_answer=='3'">{{list[0].c}}</strong>
                                <p v-else>{{list[0].c}}</p>
                            </el-row>
                           
                            <el-row></el-row>
                        </el-col>
                        <el-col :span="1"></el-col>
                    </el-row>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
    
</template>

<script>
export default {
    name:"ExamDetailPartTwo",
    data(){
        return{
            answer:"",
            right_answer:"3",
            is_last:false,
            is_display:{
                a : false,
                b : false,
                c: false,
                
            },
            is_choice:{
                choice:false,
                a : false,
                b : false,
                c: false,
                
            },
            scripts:{
                title:"",
                a:"",
                b:"",
                c:"",
                

            },
            list:[
                {
                    a:"(A) The woman is talking on the phone.",
                    b :"(B) The woman is using her cell phone.",
                    c:"(C) The woman is typing on the laptop.",
                    
                }
            ]
        }
    },
    methods:{
        choice(){
            this.is_choice.choice = true
            switch(this.answer) {
                case "1": 
                    this.is_choice.a = true
                    break
                case "2":   
                    this.is_choice.b = true
                    break;
                case "3":
                    this.is_choice.c = true 
                    break;
                case "4":   
                    this.is_choice.d = true
                    break;
                }

                this.scripts.title="Transcript:"
                this.scripts.a="(A) The woman is talking on the phone."
                this.scripts.b ="(B) The woman is using her cell phone."
                this.scripts.c="(C) The woman is typing on the laptop."
                
    }
}
    
}
</script>

<style lang="scss" setup>
       @import "../../../assets/css/content_home.scss";
       @import "../../../assets/css/listening.scss";

</style>