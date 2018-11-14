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
            <el-input v-model='realName'></el-input>
            <span style='margin-left: 20px;'>电话：</span>
            <el-input v-model='tel'></el-input>
            <el-button type='primary' @click='searchFun'>搜索</el-button>
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
              realName:"1",
              tel:"1",
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
                prop:"realName",
                label:"姓名",
              },{
                prop:"tel",
                label:"电话",
              },{
                prop:"yysmm",
                label:"密码",
              },{
                prop:"wechat",
                label:"微信",
              },{
                prop:"qq",
                label:"QQ",
              },{
                prop:"idCart",
                label:"身份证",
              },{
                prop:"xxwzh",
                label:"学信网账号",
              },{
                prop:"xxwmm",
                label:"学信网密码",
              },{
                prop:"fqxm",
                label:"父亲姓名",
              },{
                prop:"fqdh",
                label:"父亲电话",
              },{
                prop:"mqxm",
                label:"母亲姓名",
              },{
                prop:"mqdh",
                label:"母亲电话",
              },{
                prop:"txxm",
                label:"同学姓名",
              },{
                prop:"txdh",
                label:"同学电话",
              },{
                prop:"familyAddress",
                label:"通讯地址",
              },{
                prop:"bankAccount",
                label:"银行账号",
              },{
                prop:"fhxx",
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
          let vm=this;
          vm.initTable1(1,10)
        },
        methods: {
          handleClick(value){

          },
          loanMoney(){

          },
          repayment(){

          },
          initTable1(page,size){
            let vm=this;
            let obj={
              "realName.in":vm.realName,
              "tel.in":vm.tel,
              page:page-1,
              size:size
            };
            if(vm.realName==""){
              delete obj["realName.in"]
            }
            if(vm.tel==""){
              delete obj["tel.in"]
            }
            vm.$api.get("api/user/list",obj,function ({data}) {
              vm.userData=data.data.list;
              vm.page1.pageInfo={
                pageSize:size,
                currentPage:page,
                total:data.data.total,
                handleSizeChange:vm.handleSizeChange,
                handleCurrentChange:vm.handleCurrentChange,

              };
            })
          },
          searchFun(){
            let vm=this;
            this.initTable1(1,vm.page1.pageInfo.pageSize);
          },
          handleSizeChange(value){
            this.initTable1(1,value)
          },
          handleCurrentChange(value){
            let vm=this;
            this.initTable1(value,vm.page1.pageInfo.pageSize)
          }
        }
    }
</script>

<style scoped lang='less'>
  .el-input{
    width: 200px;
  }
</style>
