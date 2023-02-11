<template>
  <div style="height: 2000px">
    <navbar />
    <div id="main" class="inner">
      <div id="container" class="resume-container">
        <!-- 侧边栏 -->
        <div id="sidebar" class="resume-catalogue">
          <div class="resume-catalogue-group">
            <h2>简历目录</h2>
            <ul>
              <a
                v-for="item in sidebarData"
                :key="item.label"
                style="color: #5f687c; display: block"
                :href="'#' + item.label"
                >{{ item.label }}</a
              >
            </ul>
          </div>
        </div>
        <div id="sidebar-fixed" class="resume-catalogue" style="display: none">
          <div class="resume-catalogue-group">
            <h2>简历目录</h2>
            <ul>
              <a
                v-for="item in sidebarData"
                :key="item.label"
                style="color: #5f687c; display: block"
                :href="'#' + item.label"
                >{{ item.label }}</a
              >
            </ul>
          </div>
        </div>
        <!-- 主体部分 -->
        <div id="resume-content" class="resume-content">
          <div class="resume-content-box">
            <div class="resume-box-header">
              <h2>我的在线简历</h2>
            </div>
            <div class="resume-box">
              <!-- 个人信息 -->
              <div
                id="个人信息"
                class="resume-item resume-userInfo resume-baseInfo"
                @mouseenter="edit = true"
                @mouseleave="edit = false"
              >
                <div class="item-primary baseInfo-container">
                  <div class="user-info">
                    <div
                      class="info-flex"
                      @click="editingData(0)"
                      v-show="sidebarData[0].editing != true"
                    >
                      <p>xxx同学</p>
                      <div style="margin: 8px 0">
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-experience.8262af56.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxx
                        </span>
                        <el-divider direction="vertical" />
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-degree.ca98e361.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxx
                        </span>
                        <el-divider direction="vertical" />
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-status.cf25203e.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxxxx
                        </span>
                      </div>
                      <div>
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-tel.2f39343a.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxxssssss
                        </span>
                        <el-divider direction="vertical" />
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-weixin.fc965705.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxx
                        </span>
                        <el-divider direction="vertical" />
                        <span>
                          <i
                            class="fz-resume"
                            style="
                              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/fz-mail.744784db.png)
                                no-repeat 50%;
                              background-size: 14px 14px;
                            "
                          />
                          xxxxxxx
                        </span>
                        <span
                          v-show="edit"
                          style="
                            float: right;
                            color: #6adbcf;
                            margin-right: 50px;
                            cursor: pointer;
                          "
                          ><i class="el-icon-edit"></i>编辑</span
                        >
                      </div>
                    </div>
                  </div>
                  <div v-show="sidebarData[0].editing">
                    <div
                      style="
                        font-size: 16px;
                        font-weight: 500;
                        margin-bottom: 10px;
                      "
                    >
                      编辑个人信息
                    </div>
                    <el-form
                      :inline="true"
                      ref="form"
                      :model="sizeForm"
                      label-width="80px"
                      size="mini"
                    >
                      <el-form-item label="姓名">
                        <el-input v-model="sizeForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="当前求职状态" label-width="120px">
                        <el-select
                          v-model="sizeForm.region"
                          placeholder="请选择活动区域"
                        >
                          <el-option
                            label="月内到岗"
                            value="shanghai"
                          ></el-option>
                          <el-option label="可协商" value="beijing"></el-option>
                        </el-select>
                      </el-form-item>
                      <el-form-item label="性别">
                        <el-radio-group v-model="sizeForm.sex" size="mini">
                          <el-radio-button
                            label="男"
                            value="1"
                          ></el-radio-button>
                          <el-radio-button
                            label="女"
                            value="0"
                          ></el-radio-button>
                        </el-radio-group>
                      </el-form-item>
                      <el-form-item label="生日">
                        <el-date-picker
                          v-model="sizeForm.birthday"
                          type="date"
                          placeholder="选择日期"
                        >
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="电话">
                        <el-input v-model="sizeForm.phone"></el-input>
                      </el-form-item>
                      <el-form-item label="微信号（选填）" label-width="120px">
                        <el-input v-model="sizeForm.weChat"></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱（选填）" label-width="120px">
                        <el-input v-model="sizeForm.email"></el-input>
                      </el-form-item>
                      <el-form-item size="mini">
                        <el-button type="primary" @click="oneSubmit(0)"
                          >保存</el-button
                        >
                        <el-button @click="oneCancel(0)">取消</el-button>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </div>
              <div class="resume-item resume-summary resume-userDesc">
                <!-- 个人优势 -->
                <div id="个人优势" class="item-primary">
                  <h3 class="title">个人优势</h3>
                  <div
                    id="data"
                    class="data"
                    @click="editingData(1)"
                    @mouseenter="editInformation(1)"
                    @mouseleave="leaveInformation(1)"
                    v-show="sidebarData[1].editing != true"
                  >
                    {{ personalInformation }}
                    <i v-show="sidebarData[1].choose" class="el-icon-edit edit"
                      >编辑</i
                    >
                  </div>
                  <!-- 个人优势编辑 -->
                  <div v-show="sidebarData[1].editing">
                    <el-input
                      type="textarea"
                      :rows="4"
                      placeholder="请输入内容"
                      v-model="personalInformation"
                    />
                    <span style="display: block; margin: 10px 0 0 85%">
                      <el-button size="mini" @click="oneCancel(1)"
                        >取消</el-button
                      >
                      <el-button
                        size="mini"
                        type="primary"
                        @click="oneSubmit(1)"
                        >确定</el-button
                      >
                    </span>
                  </div>
                </div>
                <!-- 希望职位 -->
                <div id="希望职位" class="item-primary">
                  <h3 class="title">希望职位</h3>
                  <div
                    id="data"
                    class="data"
                    @click="editingData(2)"
                    @mouseenter="editInformation(2)"
                    @mouseleave="leaveInformation(2)"
                    v-show="sidebarData[2].editing != true"
                  >
                    <span style="line-height: 40px">
                      <i class="el-icon-s-flag">{{ form.name }}</i>
                      <el-divider direction="vertical" />
                      <i style="margin: 0 10px" class="el-icon-money"
                        >{{ form.start
                        }}<span
                          v-show="form.start != '' && form.start != '面谈'"
                          >k--</span
                        >{{ form.end }}<span v-show="form.end != ''">k</span></i
                      >
                      <el-divider direction="vertical" />
                      <i style="margin: 0 10px" class="el-icon-data-line">{{
                        form.industry.toString()
                      }}</i>
                      <el-divider direction="vertical" />
                      <i
                        style="margin: 0 0 0 10px"
                        class="el-icon-location-information"
                        >{{ form.workCity }}</i
                      >
                    </span>
                    <i v-show="sidebarData[2].choose" class="el-icon-edit edit"
                      >编辑</i
                    >
                  </div>
                  <!-- 希望职位编辑 -->
                  <div v-show="sidebarData[2].editing">
                    <el-form
                      :inline="true"
                      size="mini"
                      ref="form"
                      :model="form"
                      label-width="80px"
                    >
                      <el-form-item label="期望职位">
                        <el-input
                          style="width: 150px"
                          v-model="form.name"
                          @focus="selectPositionDia"
                        ></el-input>
                      </el-form-item>
                      <el-form-item label="工作城市">
                        <el-cascader
                          v-model="form.region"
                          ref="getCity"
                          placeholder=""
                          :props="props"
                          :options="regions"
                          filterable
                          clearable
                          @change="selectCity"
                          :show-all-levels="false"
                        >
                        </el-cascader>
                      </el-form-item>
                      <el-form-item label="期望行业">
                        <el-input
                          ref="formIndustry"
                          v-model="form.industry"
                          placeholder="请选择活动区域"
                          @focus="selectIndustryCategories('expect')"
                        >
                        </el-input>
                      </el-form-item>
                      <el-form-item label="期望薪资">
                        <el-select
                          @change="selectStartMoney"
                          style="width: 150px"
                          v-model="form.start"
                        >
                          <el-option label="面谈" value="面谈"></el-option>
                          <el-option
                            v-for="(item, index) in startingSalary"
                            :key="index"
                            :label="item + 'k'"
                            :value="item"
                          >
                          </el-option>
                        </el-select>
                        <span v-show="form.start != '面谈'">
                          ----
                          <el-select style="width: 150px" v-model="form.end">
                            <el-option
                              v-for="(item, index) in endSalary"
                              :key="index"
                              :label="item + 'k'"
                              :value="item"
                            >
                            </el-option>
                          </el-select>
                        </span>
                      </el-form-item>
                      <el-form-item>
                        <span>
                          <el-button
                            style="margin-right: 8px"
                            @click="oneCancel(2)"
                            >取消</el-button
                          >
                        </span>
                        <el-button type="primary" @click="oneSubmit(2)"
                          >立即创建</el-button
                        >
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
                <!-- 实习经历 -->
                <div id="实习经历" class="item-primary">
                  <h3 class="title">
                    实习经历
                    <span v-show="!sidebarData[3].editing"
                      ><i class="el-icon-circle-plus" @click="addCard"
                        >添加</i
                      ></span
                    >
                  </h3>
                  <div
                    id="data"
                    class="data"
                    v-for="(val, index) in cardData"
                    :key="index"
                    @click="editingData(3, index)"
                    @mouseenter="editInformation(3)"
                    @mouseleave="leaveInformation(3)"
                    v-show="sidebarData[3].editing != true"
                  >
                    <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <span>湖北省武汉市******有限公司</span>
                        <span class="time">2021.11-2022.3</span>
                        <i
                          v-show="sidebarData[3].choose"
                          style="float: right"
                          class="el-icon-edit edit"
                          >编辑</i
                        >
                        <i
                          @click.stop="deleteCard(index)"
                          v-show="sidebarData[3].choose"
                          style="float: right"
                          class="el-icon-delete-solid edit"
                          >删除</i
                        >
                      </div>
                      <h4>
                        <span>前端开发</span>
                        <span class="two">开发人员</span>
                      </h4>
                      <div class="info-text">
                        <span class="text-type">内容：</span>
                        1.负责公司部分PC端、移动端项目前端开发。
                        2.使用vue配合相关ui框架进行开发，以及微信小程序制作的一些小项目。
                        3.与后端开发人员配合，实现前后端数据交互，完成相关业务逻辑功能。
                        4.协同其他技术部门，做前端开发技术的支持及后目维护工作。
                      </div>
                    </el-card>
                  </div>
                  <!-- 实习经历编辑 -->
                  <div v-show="sidebarData[3].editing">
                    <el-form
                      :inline="true"
                      size="mini"
                      ref="form"
                      :model="internshipExperience"
                      label-width="80px"
                    >
                      <el-form-item label="公司名称">
                        <el-input
                          style="width: 150px"
                          v-model="internshipExperience.name"
                        />
                      </el-form-item>
                      <el-form-item label="所属行业">
                        <el-input
                          ref="internshipExperienceIndustry"
                          @focus="selectIndustryCategories('internship')"
                          style="width: 150px"
                          v-model="internshipExperience.industry"
                        />
                      </el-form-item>
                      <el-form-item
                        label-width="130px"
                        label="所属部门（选填）"
                      >
                        <el-input
                          v-model="internshipExperience.department"
                          placeholder=""
                        />
                      </el-form-item>
                      <el-form-item label="职位名称">
                        <el-input
                          @focus="selectJobTitle"
                          v-model="internshipExperience.position"
                          placeholder=""
                        />
                      </el-form-item>

                      <el-form-item label="在职时间">
                        <el-date-picker
                          v-model="workingTime"
                          type="monthrange"
                          range-separator="至"
                          @change="selectWorkingTime"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          format="yyyy 年 MM 月 "
                          value-format="yyyy-MM"
                        >
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="工作内容">
                        <el-input
                          :autosize="{ minRows: 4, maxRows: 8 }"
                          style="width: 100vh"
                          type="textarea"
                          placeholder="请输入内容"
                          v-model="internshipExperience.textarea"
                          maxlength="1600"
                          show-word-limit
                        />
                      </el-form-item>
                      <br />
                      <el-form-item style="margin: 0 0 0 70%">
                        <span>
                          <el-button
                            style="margin-right: 8px"
                            @click="oneCancel(3)"
                            >取消</el-button
                          >
                          <el-button type="primary" @click="oneSubmit(3)"
                            >立即创建</el-button
                          >
                        </span>
                      </el-form-item>
                    </el-form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 希望职位--》行业类别 -->
    <el-dialog
      title="请选择行业类别"
      :visible.sync="dialogVisibleIndustryCategories"
      width="70%"
    >
      <div style="border-top: 1px solid #f5f6f9">
        <span>
          <el-tag
            size="medium"
            closable
            style="margin: 5px; color: #37e2da; border-radius: 20px"
            v-for="(item, index) in form.industry"
            :key="item"
            effect="plain"
            @close="clearTag(index)"
          >
            {{ item }}
          </el-tag>
        </span>
        <span
          style="
            margin-left: 10px;
            color: #d1d4db;
            font-size: 14px;
            line-height: 48px;
          "
          >最多可选3个行业</span
        >
      </div>
      <div class="industry-panel">
        <div
          v-for="(item, index) in industryCategories"
          :key="index"
          class="industry-item"
        >
          <div class="left">
            {{ item.name }}
          </div>
          <div class="right">
            <div
              class="item"
              v-for="(val, inde) in item.subLevelModelList"
              :key="inde"
              @click="addIndustry(val.name, 'expect')"
            >
              {{ val.name }}
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
    <!-- 实习经历--》所属行业 -->
    <el-dialog
      title="请选择行业类别"
      :visible.sync="dialogVisibleIndustryCategoriesShiXi"
      width="70%"
    >
      <div class="industry-panel">
        <div
          v-for="(item, index) in industryCategories"
          :key="index"
          class="industry-item"
        >
          <div class="left">
            {{ item.name }}
          </div>
          <div class="right">
            <div
              class="item"
              v-for="(val, inde) in item.subLevelModelList"
              :key="inde"
              @click="addIndustry(val.name, 'internship')"
            >
              {{ val.name }}
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleIndustryCategoriesShiXi = false"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="dialogVisibleIndustryCategoriesShiXi = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 希望职位--》期望职位  -->
    <el-dialog
      title="请选择职类"
      :visible.sync="dialogVisiblePosition"
      width="60%"
    >
      <div class="diaPosition">
        <div class="left">
          <ul>
            <li
              v-for="(item, index) in position"
              :key="index"
              :class="{ active: positionActive == index }"
              @click="selectPositionLeft(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item, index) in positionRightData"
              @click="selectPosition(item.name)"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <span style="margin-top: 10px" slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePosition = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisiblePosition = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 实习经历--》职位名称  -->
    <el-dialog
      title="请选择职位名称"
      :visible.sync="dialogVisibleExpectPosition"
      width="60%"
    >
      <div class="diaPosition">
        <div class="left">
          <ul>
            <li
              v-for="(item, index) in expectposition"
              :key="index"
              :class="{ active: expectpositionActive == index }"
              @click="selectExpectPositionLeft(index)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li
              v-for="(item, index) in expectpositionRightData"
              @click="selectExpectPosition(item.name)"
              :key="index"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleExpectPosition = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogVisibleExpectPosition = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import diqu from './diqu.json'
import industryCategories from './industryCategories.json'
import position from './expectposition.json'
import expectposition from './position.json'
import navbar from '@/components/navbar.vue'
export default {
  data() {
    return {
      cardData: [1],
      workingTime: [],
      props: { label: 'label', value: 'value', children: 'children' },
      edit: false,
      positionActive: 0, //选择职类弹窗选中
      positionRightData: [], //选择职类弹窗右侧数据
      sidebarData: [
        { label: '个人信息', choose: false, editing: false },
        { label: '个人优势', choose: false, editing: false },
        { label: '希望职位', choose: false, editing: false },
        { label: '实习经历', choose: false, editing: false },
        { label: '项目经验', choose: false, editing: false },
        { label: '教育经历', choose: false, editing: false },
      ],
      personalInformation: '', //个人信息
      form: {
        name: '',
        region: [],
        workCity: '',
        industry: [],
        start: '',
        end: '',
      },
      internshipExperience: {
        name: '',
        industry: '',
        department: '',
        position: '',
        startTime: '',
        endTime: '',
      },
      // 个人信息表单
      sizeForm: {
        name: '',
        region: '',
        sex: '',
        birthday: '',
        phone: '',
        weChat: '',
        email: '',
      },
      diaIndustry: [], //行业类别
      regions: [], //地区
      position: [], //职位类别
      expectposition: [], //职位名称数据源
      expectpositionRightData: [], // 选择职位名称弹窗右侧数据
      expectpositionActive: 0, //选择职位名称弹窗选中
      industryCategories: [],
      dialogVisibleIndustryCategories: false, //选择行业类别弹窗
      dialogVisibleIndustryCategoriesShiXi: false, //实习经历---选择行业类别弹窗
      dialogVisiblePosition: false, //选择职位类别
      dialogVisibleExpectPosition: false, //实习经历--》职位名称弹窗
      startingSalary: [], //起始薪资
      endSalary: [], //结束薪资
    }
  },
  components: { navbar },
  created() {
    this.listenerFunction()
    this.getCity()
    this.generateSalaryRange()
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.listenerFunction)
  },
  watch: {},
  methods: {
    createJson() {},
    // 实习经历--》职位名称选择
    selectJobTitle() {
      this.expectpositionRightData = this.expectposition[0].subLevelModelList
      this.dialogVisibleExpectPosition = true
    },
    // 选择职位名称左侧栏
    selectExpectPositionLeft(index) {
      this.expectpositionActive = index
      this.expectpositionRightData =
        this.expectposition[index].subLevelModelList
    },
    //
    selectExpectPosition(name) {
      this.internshipExperience.position = name
      this.dialogVisibleExpectPosition = false
    },
    // 生成薪资区间
    generateSalaryRange() {
      for (let i = 0; i <= 50; i++) {
        this.startingSalary.push(this.startingSalary.length + 1)
        this.endSalary.push(this.startingSalary.length + 1)
      }
    },
    // 判断薪资是否为面谈
    selectStartMoney() {
      if (this.form.start == '面谈') {
        this.form.start = '面谈'
        this.form.end = ''
      } else {
        this.form.end = this.form.start + 1
      }
    },
    // 选择城市
    selectCity() {
      if (this.form.region.length != 0) {
        if (
          this.$refs['getCity'].getCheckedNodes()[0].pathLabels[
            this.form.region.length - 1
          ] ==
          this.$refs['getCity'].getCheckedNodes()[0].pathLabels[
            this.form.region.length - 2
          ]
        ) {
          this.form.workCity = this.$refs['getCity'].getCheckedNodes()[0].label
        } else {
          this.form.workCity =
            this.$refs['getCity'].getCheckedNodes()[0].pathLabels[
              this.form.region.length - 1
            ]
        }
      }
    },
    // 行业类别选择
    selectIndustryCategories(val) {
      if (val == 'expect') {
        // this.form.industry = []
        if (this.form.industry.length != 0) {
          // this.$refs.formIndustry.blur()
          // debugger
          this.form.industry = this.form.industry
        }
        this.dialogVisibleIndustryCategories = true
        // this.$refs.input.blur()
      } else if (val == 'internship') {
        this.dialogVisibleIndustryCategoriesShiXi = true
        // this.$refs.input.blur()
      }
    },
    // 行业添加、修改
    addIndustry(val, name) {
      let that = this
      if (name == 'expect') {
        if (this.form.industry.length < 3) {
          if (this.form.industry.length == 0) {
            this.form.industry.push(val)
          } else {
            for (let i of this.form.industry) {
              if (i != val) {
                this.form.industry
                this.form.industry.push(val)
                return
              } else {
                this.$message.error('已选择该行业！')
                return
              }
            }
          }
        } else {
          this.$message.error('最多可选择3个行业')
          return
        }
      } else if (name == 'internship') {
        this.internshipExperience.industry = val
        this.dialogVisibleIndustryCategoriesShiXi = false
      }
    },
    // 删除行业标签
    clearTag(index) {
      // this.form.industry
      this.form.industry.splice(index, 1)
    },
    // 职位类别弹窗
    selectPositionDia() {
      this.dialogVisiblePosition = true
      this.positionRightData = this.position[0].subLevelModelList
    },
    // 选择职位左侧栏
    selectPositionLeft(index) {
      this.positionActive = index
      this.positionRightData = this.position[index].subLevelModelList
    },
    // 选择职位
    selectPosition(name) {
      this.form.name = name
      this.dialogVisiblePosition = false
    },
    // 实习经历修改
    editCard(val) {},
    selectWorkingTime(val) {
      this.internshipExperience.startTime = val[0]
      this.internshipExperience.endTime = val[1]
    },
    // 实习经历卡片删除
    deleteCard(val) {
      this.cardData.splice(val, 1)
    },
    // 实习经历卡片添加
    addCard() {
      this.cardData.push(this.cardData.length)
    },
    // 获取数据源
    getCity() {
      this.regions = diqu.zpData.cityList
      this.industryCategories = industryCategories.zpData
      this.position = position.zpData.config.slice(1)
      this.expectposition = expectposition.zpData
    },
    //个人信息修改，确定
    oneCancel(index) {
      if (index == 1 && this.personalInformation == '') {
        this.personalInformation = ''
      }
      if (index == 2 && this.form == {}) {
        this.form = {
          name: '',
          region: [],
          workCity: '',
          industry: [],
          start: '',
          end: '',
        }
      }
      this.sidebarData[index].editing = false
    },
    oneSubmit(index) {
      this.form
      debugger
      // this.sidebarData[index].editing = false
    },
    editingData(index, val) {
      if (index == 0) {
        this.sidebarData[index].editing = true
      } else if (index == 1) {
        this.sidebarData[index].editing = true
      } else if (index == 2) {
        this.sidebarData[index].editing = true
      } else if (index == 3) {
        this.editCard(val)
        this.sidebarData[index].editing = true
      }
    },
    editInformation(index) {
      this.sidebarData[index].choose = true
    },
    leaveInformation(index) {
      this.sidebarData[index].choose = false
    },
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll() {
      if (window.pageYOffset >= 40) {
        document.getElementById('sidebar').style.display = 'none'
        document.getElementById('resume-content').style.marginLeft = 180 + 'px'
        document.getElementById('sidebar-fixed').style.display = 'block'
        document.getElementById('sidebar-fixed').style.position = 'fixed'
        document.getElementById('sidebar-fixed').style.top = 40 + 'px'
        document.getElementById('sidebar-fixed').style.zIndex = 999
      }
      if (window.pageYOffset <= 40) {
        document.getElementById('sidebar').style.display = 'block'
        document.getElementById('sidebar-fixed').style.display = 'none'
        document.getElementById('sidebar-fixed').style.zIndex = 999
        document.getElementById('resume-content').style.marginLeft = 20 + 'px'
      }
    },
  },
}
</script>

<style lang="less" scoped>
ul {
  list-style: none;
}
#main {
  min-height: calc(100vh - 300px);
}
.inner {
  width: 1184px;
  margin: 0 auto;
}
#container {
  position: relative;
}
.resume-container-fixed {
  position: fixed;
  top: 30px;
  z-index: 9999;
}
.resume-container {
  display: flex;
  padding-top: 20px;
  .resume-catalogue {
    // display: inline-block;
    width: 160px;
    .resume-catalogue-group {
      background-color: #fff;
      h2 {
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #24272e;
        display: block;
        align-items: center;
        padding: 0 20px;
        font-weight: 500;
      }
      ul a {
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        transition: all 0.15s linear;
        color: #61687c;
      }
      ul a:hover {
        background-color: #f1f5f9;
      }
    }
  }
  .resume-content {
    flex: 1;
    // width: 50%;
    margin-right: 20px;
    margin-left: 20px;
    background-color: #f6f6f8;
    .resume-content-box {
      background: #fff;
      box-shadow: 0 -1px 8px rgb(0 0 0 / 3%);
      .resume-box-header {
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #f3f3f3;
        padding: 0 30px;
        h2 {
          font-size: 14px;
        }
      }
      .resume-box .item-primary {
        position: relative;
        padding: 15px 30px;
        box-sizing: content-box;
        transition: all 0.15s linear;

        // border: 1px solid transparent;
        .user-info {
          .info-flex {
            .fz-resume {
              position: relative;
              top: -1px;
              width: 14px;
              height: 14px;
              background: url(https://static.zhipin.com/zhipin-geek/chat/v101/static/images/icons-resume.f44cb025.png)
                no-repeat;
              display: inline-block;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
          p {
            color: #24272e;
            height: 33px;
            line-height: 33px;
            font-size: 24px;
          }
        }
        .title {
          position: relative;
          padding-left: 10px;
          font-size: 18px;
          height: 25px;
          line-height: 25px;
          font-weight: 400;
          margin-bottom: 10px;
          span {
            float: right;
            color: #00c2b3;
            margin-right: 15px;
            cursor: pointer;
          }
        }
        .title:before {
          content: '';
          position: absolute;
          width: 3px;
          height: 15px;
          border-radius: 2px;
          background-color: #53cac3;
          left: 0;
          top: 5px;
        }
        .data {
          min-height: 40px;
          padding: 5px 11px;
          cursor: pointer;
          .edit {
            margin: 10px 10px 5px 0;
            float: right;
            color: #00d0dd;
          }
        }
        .data:hover {
          background-color: #fff;
          box-shadow: 0 0 8px -5px;
        }
        .box-card {
          margin: 10px 0;
          .clearfix {
            .time {
              font-size: 12px;
              padding-left: 30px;
              color: #9fa3b0;
            }
          }
          h4 {
            font-size: 15px;
            font-weight: 700;
            span {
              display: inline-block;
              vertical-align: middle;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              min-width: 80px;
              max-width: 280px;
            }
            .two:before {
              content: '';
              display: inline-block;
              vertical-align: middle;
              margin: 0 15px;
              width: 1px;
              height: 12px;
              background-color: #e0e0e0;
            }
          }
          .info-text {
            font-size: 14px;
            padding: 7px 0;
            color: #61687c;
            white-space: pre-wrap;
            overflow: hidden;
            word-break: break-all;
            .text-type {
              font-weight: 700;
            }
          }
        }
      }
      .resume-box .resume-item .item-primary {
      }
      .resume-box .resume-item .item-primary:hover {
        background-color: #f8f9fb;
        // box-shadow: 0 0 20px -5px;
      }
    }
  }
}
.industry-panel {
  max-height: 442px;
  overflow-y: auto;
  .industry-item {
    min-height: 50px;
    display: flex;
    .left {
      display: inline-block;
      width: 30%;
      // height: 200px;
      margin: auto 0;
      text-align: center;
    }
    .right {
      overflow: auto;
      border-left: 1px solid #c4c4c5;
      width: 70%;
      padding: 10px 0;
      .item {
        display: inline-block;
        width: 30%;
        text-align: center;
        margin: 5px;
      }
      .item:hover {
        cursor: pointer;
        color: #55e2dc;
      }
    }
  }
  .industry-item:nth-child(2n + 1) {
    background-color: #f9fafb;
  }
}
.diaPosition {
  display: flex;
  max-height: 290px;
  .left {
    width: 20%;
    // max-height: 320px;
    overflow: auto;

    background-color: #f9fafb;
    ul li {
      display: block;
      height: 28px;
      line-height: 28px;
      padding: 5px;
      cursor: pointer;
    }
  }
  .right {
    overflow: auto;
    margin-left: 5px;
    width: 80%;
    ul li {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      width: 25%;
      // text-align: center;
      cursor: pointer;
    }
    ul li:hover {
      color: #3bd6cb;
    }
  }
}
.active {
  background-color: #fff;
  border-left: 5px solid #5dd5c8;
}
</style>
