/**
* 作者: jsz
* 日期: 2018-11-09
* 描述:
*/
<template>
    <div  style='text-align: left;margin: 20px;'>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">

        <el-tab-pane label="用户管理" name="first">
          <div style='margin-left: 20px;margin-bottom: 20px;'>
            <span>姓名：</span>
            <el-input></el-input>
            <span style='margin-left: 20px;'>电话：</span>
            <el-input></el-input>
            <el-button type='primary'>搜索</el-button>
          </div>
          <el-table
            :data="userData"
            style="width: 100%">
          <template v-for='item in userTableHeader'>
            <el-table-column
              :prop="item.prop"
              :label="item.label"
            >
            </el-table-column>
          </template>
          </el-table>
          <pageInfoTip :options='page1'></pageInfoTip>
        </el-tab-pane>
        <el-tab-pane label="贷款申请" name="second">
          <div style='margin-left: 20px;margin-bottom: 20px;'>
            <span>姓名：</span>
            <el-input></el-input>
            <span style='margin-left: 20px;'>电话：</span>
            <el-input></el-input>
            <el-button type='primary'>搜索</el-button>
          </div>
          <el-table
            :data="applicData"
            style="width: 100%">
            <template v-for='item in applicTableHeader'>
              <el-table-column
                :prop="item.prop"
                :label="item.label"
              >
              </el-table-column>
            </template>
            <el-table-column
              prop=""
              label="操作"
              width=""
            >
              <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type='primary'
                    @click.native='loanMoney(scope.$index,scope.row,$event)'>放款</el-button>
                  <el-button
                    size="mini"
                    type='danger'
                    @click.native='repayment(scope.$index,scope.row,$event)'>还款</el-button>
                  <el-button
                    size="mini"
                    type='info'
                    @click.native='deleteInfo(scope.$index,scope.row,$event)'>删除</el-button>
                </template>
            </el-table-column>
          </el-table>
          <pageInfoTip :options='page2'></pageInfoTip>
        </el-tab-pane>

      </el-tabs>
    </div>
</template>

<script>
  import pageInfoTip from "@/components/newPage"
    export default {
        name: "tablePage",
        components: {
          pageInfoTip
        },
        props: [],
        data() {
            return {
              activeName:"first",
              page1:{
                pageInfo:{
                  handleSizeChange(){},
                  handleCurrentChange(){},
                  pageSize:10,
                  currentPage:1,
                  total:0,
                }
              },
              page2:{
                pageInfo:{
                  handleSizeChange(){},
                  handleCurrentChange(){},
                  pageSize:10,
                  currentPage:1,
                  total:0,
                }
              },
              userTableHeader:[{
                prop:"name",
                label:"姓名",
              },{
                prop:"pe",
                label:"电话",
              },{
                prop:"fd",
                label:"密码",
              },{
                prop:"nafdme",
                label:"微信",
              },{
                prop:"namegf",
                label:"QQ",
              },{
                prop:"namefd",
                label:"身份证",
              },{
                prop:"fname",
                label:"学信网账号",
              },{
                prop:"ngfame",
                label:"学信网密码",
              },{
                prop:"namejhgj",
                label:"运营商密码",
              },{
                prop:"namehgh",
                label:"父亲姓名",
              },{
                prop:"namehgh",
                label:"父亲电话",
              },{
                prop:"namkjke",
                label:"母亲姓名",
              },{
                prop:"namekut",
                label:"母亲电话",
              },{
                prop:"nahhjume",
                label:"同学姓名",
              },{
                prop:"nameprp",
                label:"同学电话",
              },{
                prop:"nametyttyty",
                label:"通讯地址",
              },{
                prop:"namefdsfsdfsg",
                label:"银行账号",
              },{
                prop:"namefdsfgfgsdfsg",
                label:"分行信息",
              },],
              applicTableHeader:[{
                prop:"namegf",
                label:"姓名",
              },{
                prop:"namefdgf",
                label:"电话",
              },{
                prop:"namegf",
                label:"QQ",
              },{
                prop:"namegf",
                label:"申请金额",
              },{
                prop:"namegf",
                label:"申请周期",
              },{
                prop:"namegf",
                label:"银行卡号",
              },{
                prop:"namegf",
                label:"银行",
              },{
                prop:"namegf",
                label:"分行信息",
              },{
                prop:"namegf",
                label:"申请时间",
              },{
                prop:"namegf",
                label:"放款时间",
              },{
                prop:"",
                label:"操作",
              },],
              userData:[],
              applicData:[{
                namegf:1,
              }],
            }
        },
        mounted() {

        },
        methods: {
          handleClick(value){

          },
          loanMoney(){

          },
          repayment(){

          }
        }
    }
</script>

<style scoped lang='less'>
  .el-input{
    width: 200px;
  }
</style>
