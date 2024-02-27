<template>
    <div>
        <div class="nav">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="10" class="level">
                <el-button round color="#b9d7e3">Part 1: Description Picture</el-button>
            </el-col>
        </el-row>
    </div>

    <div class="content-part-1">
        <el-row >
            <el-col :span="2"></el-col>
            <el-col :span="15" class="information-1">
                <el-card class="card" shadow="hover">Lesson 1: Predict what you we hear</el-card>
                <el-card class="card" shadow="hover">Lesson 2: Listen for correct verb</el-card>
                <el-card class="card" shadow="hover">Lesson 3: Listen for details</el-card>
                <el-card class="card" shadow="hover">Lesson 4: Listen for prepositions and similar sounds</el-card>

                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item-1" @click="goToExam()">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 4</div>
                        </div>
                    </el-col>

                    
                </el-row>
                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">72 %</div>
                            <div class="content-1">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">60 %</div>
                            <div class="content-1">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 4</div>
                        </div>
                    </el-col>

                    
                </el-row>
                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item-1">
                            <div class="mark-1">0 %</div>
                            <div class="content-1">Test 4</div>
                        </div>
                    </el-col>

                    
                </el-row>
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="4">
                <div class="other-list">
                    <div class="list">
                        <a href="" style="margin-bottom: 20px;">
                            <div class="list-item">
                                Part 2: Answer & Question
                            </div>
                        </a>
                        <a href="">
                            <div class="list-item">
                                Part 3: Conversation
                            </div>
                        </a>
                        <a href="" >
                            <div class="list-item">
                                Part 4: Short Dialog
                            </div>
                        </a>
                        <a href="" >
                            <div class="list-item">
                                Vocabulary course
                            </div>
                        </a>
                    </div>
                   
                    
                </div>
            </el-col>
            <el-col :span="2"></el-col>
        </el-row>
    </div>
    </div>
    
</template>

<script>
export default {
    name : "GeneralViewListening1",
    methods:{
        goToExam(){
            this.$router.push(`/listening/part1/exam`)
        }
    }
}
</script>

<style lang="scss" setup>
       @import "../../../assets/css/content_home.scss";
       @import "../../../assets/css/listening.scss";

</style>