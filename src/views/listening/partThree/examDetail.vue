<template>

    <div class="content-exam">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="5">
            <el-row class="title">PART 3: CONVERSATIONS</el-row>
            
            <el-row>
                <div id="question-palette-panel">
                    <div class="current-topic-label">
                        Test 2
                    </div>
                    <div class="question-palette-main">
                        <div class="question-palette-header">
                            Question Palette
                        </div>
                        <div class="question-list-2">
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
                                <el-col :span="4"><el-button style="width:100%">25</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">26</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">27</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">28</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">29</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">30</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">31</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">32</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">33</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">34</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">35</el-button></el-col>
                                <el-col :span="2"></el-col>
                            </el-row>
                            <el-row :gutter="5" class="question-button">
                                <el-col :span="2"></el-col>
                                <el-col :span="4"><el-button style="width:100%">36</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">37</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">38</el-button></el-col>
                                <el-col :span="4"><el-button style="width:100%">39</el-button></el-col>
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
                        <el-col :span="4"><el-row style="cursor: pointer;"><el-icon :size="40"><VideoPlay /></el-icon></el-row></el-col>
                        <el-col :span="10"></el-col>
                    </el-row>

                  <el-row>
                    <el-col :span = "2">
                    </el-col>
                    <el-col :span="22" class= "question">
                        01. What are the speakers mainly discussing?
                    </el-col>
                   </el-row>

                   <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="21">
                        
                        <el-radio-group v-model="answer" style=" display:flex; flex-direction: column; float:left" @change="choice()">
                            <div style="width: 100%;">
                                    <el-radio label="1" size="large" v-if="right_answer!='1' && is_choice.a" style="color:red">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="right_answer=='1'&& is_choice.choice" style="color:#228B22">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.a && right_answer!='1')">(A) An interior renovation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="2" size="large" v-if="right_answer!='2' && is_choice.b" style="color:red">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="right_answer=='2'&& is_choice.choice" style="color:#228B22">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.b && right_answer!='2') ">(B) A product launch</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="3" size="large" v-if="right_answer!='3' && is_choice.c" style="color:red">(C) A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="right_answer=='3'&& is_choice.choice" style="color:#00FF7F; font-weight:700">(C)  A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.c && right_answer!='3')">(C)  A luncheon reservation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="4" size="large" v-if="right_answer!='4' && is_choice.d" style="color:red">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="right_answer=='4' && is_choice.choice" style="color:#228B22;">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.d && right_answer!='4')">(D) A budget proposal</el-radio>
                            </div>
                         </el-radio-group>
                    </el-col>
                   </el-row>
                   <div style="width: 100%; height: 0.5px; line-height: 1.5; background-color: #666; margin-top: 5px; margin-bottom: 5px;"></div>

                   <el-row>
                    <el-col :span = "2">
                    </el-col>
                    <el-col :span="22" class= "question">
                        02 .What does the man say about the dining room?
                    </el-col>
                   </el-row>

                   <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="21">
                        
                        <el-radio-group v-model="answer" style=" display:flex; flex-direction: column; float:left" @change="choice()">
                            <div style="width: 100%;">
                                    <el-radio label="1" size="large" v-if="right_answer!='1' && is_choice.a" style="color:red">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="right_answer=='1'&& is_choice.choice" style="color:#228B22">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.a && right_answer!='1')">(A) An interior renovation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="2" size="large" v-if="right_answer!='2' && is_choice.b" style="color:red">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="right_answer=='2'&& is_choice.choice" style="color:#228B22">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.b && right_answer!='2') ">(B) A product launch</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="3" size="large" v-if="right_answer!='3' && is_choice.c" style="color:red">(C) A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="right_answer=='3'&& is_choice.choice" style="color:#00FF7F; font-weight:700">(C)  A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.c && right_answer!='3')">(C)  A luncheon reservation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="4" size="large" v-if="right_answer!='4' && is_choice.d" style="color:red">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="right_answer=='4' && is_choice.choice" style="color:#228B22;">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.d && right_answer!='4')">(D) A budget proposal</el-radio>
                            </div>
                         </el-radio-group>
                    </el-col>
                   </el-row>
                   <div style="width: 100%; height: 0.5px; line-height: 1.5; background-color: #666; margin-top: 5px; margin-bottom: 5px;"></div>
                   <el-row>
                    <el-col :span = "2">
                    </el-col>
                    <el-col :span="22" class= "question">
                        03. What does the man suggest the woman do?
                    </el-col>
                   </el-row>

                   <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="21">
                        
                        <el-radio-group v-model="answer" style=" display:flex; flex-direction: column; float:left" @change="choice()">
                            <div style="width: 100%;">
                                    <el-radio label="1" size="large" v-if="right_answer!='1' && is_choice.a" style="color:red">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="right_answer=='1'&& is_choice.choice" style="color:#228B22">(A) An interior renovation</el-radio>
                                    <el-radio label="1" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.a && right_answer!='1')">(A) An interior renovation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="2" size="large" v-if="right_answer!='2' && is_choice.b" style="color:red">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="right_answer=='2'&& is_choice.choice" style="color:#228B22">(B) A product launch</el-radio>
                                    <el-radio label="2" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.b && right_answer!='2') ">(B) A product launch</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="3" size="large" v-if="right_answer!='3' && is_choice.c" style="color:red">(C) A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="right_answer=='3'&& is_choice.choice" style="color:#00FF7F; font-weight:700">(C)  A luncheon reservation</el-radio>
                                    <el-radio label="3" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.c && right_answer!='3')">(C)  A luncheon reservation</el-radio>
                            </div>
                            <div style="width: 100%;">
                                    <el-radio label="4" size="large" v-if="right_answer!='4' && is_choice.d" style="color:red">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="right_answer=='4' && is_choice.choice" style="color:#228B22;">(D) A budget proposal</el-radio>
                                    <el-radio label="4" size="large" v-if="is_choice.choice== false || (is_choice.choice && !is_choice.d && right_answer!='4')">(D) A budget proposal</el-radio>
                            </div>
                         </el-radio-group>
                    </el-col>
                   </el-row>

 
                </el-card>
                <el-card v-if="!is_last" style="margin-top: 30px;">
                    <el-row class="title-4"><b>Explanation:</b></el-row>
                    <el-row style="margin-top: 20px;" class="title-4"><b>Transcript:</b></el-row>

                    <el-row>
                        M: Hi, Linda. I’m responsible for putting together a slide show for Greg’s going-away party this Friday. Q1 However, I can’t find many pictures. Do you happen to have any photos of Greg that you could send to me?
                        <br>W: What? Greg is leaving the company? I had no idea.
                        <br>M: Yeah, he is taking a job at a design company. Q2 He said the job is more suited to his skills.
                        <br>W: Oh, I’m happy for him. I have a few photos from last year’s Christmas party. Q3 I’ll find the ones with Greg in them and e-mail them to you.
                    </el-row>
                </el-card>

                <div v-if="is_last">
                <el-card>
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

                <el-card style="margin-top:15px">
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
                </div>


            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
    
</template>

<script>
export default {
    name:"ExamDetailPartThree",
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