<template>
	<el-collapse accordion>
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="Information | 基本信息" name="first">
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>陈惟高 | Weigao Chen</span>
						<el-button type="primary" @click="toGithub" size="medium" plain style="float: right">GitHub</el-button>
					</div>
					<div class="text item">
						<ul>Master Student in Xidian University</ul>
						<ul>APPEARANCE: <el-rate v-model=4.99 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
						<ul>TALENT:<el-rate v-model=4.99 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
						<ul>Fortune:<el-rate v-model=0.1 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
					</div>
				</el-card>
			</el-tab-pane>
			<el-tab-pane label="Coding Ability | 编程能力" name="second">
				<el-collapse-item>
					<template slot="title">
						Web development <i class="header-icon el-icon-info"></i>
					</template>
					<div>
						<!-- <el-tag>Vue</el-tag> -->
						<ul>Vue</ul>
					</div>
				</el-collapse-item>

				<el-collapse-item title="Python">
					<div>
						<!-- <el-tag type="success">Python -->
						<!-- </el-tag> -->
						<ul>Flask<el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
						<ul>Deeplearning <el-rate v-model=3.0 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
					</div>
				</el-collapse-item>

				<el-collapse-item title="Linux">
					<div>
						<!-- <el-tag type="success">Python -->
						</el-tag>
						<ul>Bash<el-rate v-model=4.3 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
						<ul>OS Knowledge<el-rate v-model=4.1 disabled show-score text-color="#ff9900" score-template="{value}">
							</el-rate>
						</ul>
					</div>
				</el-collapse-item>
			</el-tab-pane>
			<el-tab-pane label="Paoject | 项目经历" name="third">To do</el-tab-pane>
			<el-tab-pane label="Contact | 与我联系" name="fourth">
				<el-card class="box-card">
					<div class="text item">
						<ul>Email:<a href="mailto: mail@weigao.cc"> mail@weigao.cc </a></ul>
						<ul>QQ: </ul>
						<ul>Wechat: </ul>
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
			},
			toGithub() {
				window.location.href = "https://github.com/chenweigao"
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
