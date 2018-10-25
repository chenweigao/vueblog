<template>

    <el-collapse accordion>

        <!-- <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>陈惟高 | Weigao Chen</span>
                <el-button type="primary" size="medium" plain style="float: right">GitHub</el-button>
            </div>
            <div class="text item">
                <ul>Master Student in Xidian University</ul>
            </div>
        </el-card> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Information | 基本信息" name="first">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>陈惟高 | Weigao Chen</span>
                        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
                        <el-button type="primary" size="medium" plain style="float: right">GitHub</el-button>

                    </div>
                    <div class="text item">
                        <ul>Master Student in Xidian University</ul>
                    </div>
                </el-card>
            </el-tab-pane>
            <el-tab-pane label="Coding Ability | 编程能力" name="second">
                <el-collapse-item>
                    <template slot="title">
                        Web development <i class="header-icon el-icon-info"></i>
                    </template>
                    <div>
                        <el-tag>Vue</el-tag>
                        <ul>Vue</ul>
                    </div>

                </el-collapse-item>
                <el-collapse-item title="Language">
                    <div>
                        <el-tag type="success">Python
                        </el-tag>
                        <ul>Flask<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                            </el-rate>
                        </ul>
                        <ul>Deeplearning</ul>
                    </div>

                    <!-- <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div> -->
                </el-collapse-item>
            </el-tab-pane>
            <el-tab-pane label="Paoject | 项目经历" name="third">To do</el-tab-pane>
            <el-tab-pane label="Contact | 与我联系" name="fourth">
                <el-card class="box-card">
                    <div class="text item">
                        <ul>Email:<a href="mailto: mail@weigao.cc"> mail@weigao.cc </a></ul>
                        <ul>QQ: 297859260 </ul>
                        <ul>Wechat: 297859260 </ul>
                        <ul>Github: <a href="https://github.com/chenweigao">chenweigao</a> </ul>
                    </div>
                </el-card>
            </el-tab-pane>
        </el-tabs>

    </el-collapse>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            value5: 4
        };
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        }
    }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>