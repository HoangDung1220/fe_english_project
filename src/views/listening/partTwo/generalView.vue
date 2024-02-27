<template>
    <div>
        <div class="nav">
        <el-row>
            <el-col :span="3"></el-col>
            <el-col :span="10" class="level">
                <el-button round color="#b9d7e3">Part 2: Question & Answer</el-button>
            </el-col>
        </el-row>
    </div>

    <div class="content-part-1">
        <el-row >
            <el-col :span="2"></el-col>
            <el-col :span="15" class="information-1">
                <el-card class="card" shadow="hover">Lesson 1: Answering direct questions</el-card>
                <el-card class="card" shadow="hover">Lesson 2: Time and location structures</el-card>
                <el-card class="card" shadow="hover">Lesson 3: Languages used in requests, offers and opinions</el-card>
                <el-card class="card" shadow="hover">Lesson 4: Dealing with factual questions</el-card>

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
    name : "GeneralViewListening1"
}
</script>

<style lang="scss" setup>
       @import "../../../assets/css/content_home.scss";
       @import "../../../assets/css/listening.scss";

</style>