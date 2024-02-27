<template>
    <div>
        <div class="nav">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="10" class="level">
                <el-button round color="#b9d7e3">Part 4: Short talks</el-button>
            </el-col>
        </el-row>
    </div>

    <div class="content-part-1">
        <el-row >
            <el-col :span="2"></el-col>
            <el-col :span="15" class="information-1">

                <el-card class="card" shadow="hover">Lesson 1: Skimming to predict context before listening</el-card>
                <el-card class="card" shadow="hover">Lesson 2: "What" questions</el-card>
                <el-card class="card" shadow="hover">Lesson 3: Restatement/ Questions with numbers and quantities</el-card>
                <el-card class="card" shadow="hover">Lesson 4: Restatement involving "How" and "Why" questions</el-card>

                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 4</div>
                        </div>
                    </el-col>

                    
                </el-row>
                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">72 %</div>
                            <div class="content">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">60 %</div>
                            <div class="content">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 4</div>
                        </div>
                    </el-col>

                    
                </el-row>
                <el-row :gutter="20" class="course">
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 1</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 2</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 3</div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="item">
                            <div class="mark">0 %</div>
                            <div class="content">Test 4</div>
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
                                Part 1: Description picture
                            </div>
                        </a>
                        <a href="">
                            <div class="list-item">
                                Part 2: Question & Answer
                            </div>
                        </a>
                        <a href="" >
                            <div class="list-item">
                                Part 3: Conversations
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
    name : "GeneralViewListening1"
}
</script>

<style lang="scss" setup>
       @import "../../../assets/css/content_home.scss";
       @import "../../../assets/css/listening.scss";

</style>