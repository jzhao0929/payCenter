<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-button  type="primary" icon="el-icon-plus" circle @click="addUser"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="id" label="ID" align="center" width="176"></el-table-column>
      <el-table-column prop="userName" label="用户名" align="center" width="176"></el-table-column>
      <el-table-column prop="status" label="状态" align="center" width="60"></el-table-column>
      <el-table-column prop="phoneNumber" label="手机号" align="center" width="96"></el-table-column>
      <el-table-column prop="typeName" label="类型" align="center" width="60"></el-table-column>
      <el-table-column prop="gold" label="余额" align="center" width="60"></el-table-column>
      <el-table-column prop="rate" label="费率" align="center" width="80"></el-table-column>
      <el-table-column prop="openNumber" label="能开代理数量" align="center"></el-table-column>
      <el-table-column prop="isOpenNumber" label="已开代理数量" align="center"></el-table-column>
      <el-table-column prop="addDateTime" label="加入时间" align="center"></el-table-column>
      <el-table-column prop="upDateTime" label="最后更新时间" align="center"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPageNum" :page-sizes="[10, 20, 30, 40]"
                     layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
      </el-pagination>
    </div>
    <el-dialog  v-if="face.showUserInfoAdd"  title="新增用户" :visible.sync="face.showUserInfoAdd" :close-on-click-modal = 'false'>
      <UserEdit @winClose="close()"/>
    </el-dialog>
  </div>
</template>

<script>
import UserEdit from './userEdit'
export default {
    name: 'userlist',
    components: {
        UserEdit
    },
    data () {
        return {
            face: {
                showUserInfoAdd: false
            },
            tableData: [{
                id: '5e1bb157aad1cb6b7cbf2954',
                userName: 'admin',
                status: '1',
                phoneNumber: '13881089201',
                typeName: '商户',
                gold: '1000',
                rate: '0.1',
                openNumber: '10',
                isOpenNumber: '2',
                addDateTime: '2016-05-02',
                upDateTime: '2016-05-02'
            }, {
                id: '2',
                userName: 'admin',
                status: '1',
                phoneNumber: '13881089201',
                typeName: '商户',
                gold: '1000',
                rate: '0.1',
                openNumber: '10',
                isOpenNumber: '2',
                addDateTime: '2016-05-02',
                upDateTime: '2016-05-02'
            }, {
                id: '3',
                userName: 'admin',
                status: '1',
                phoneNumber: '13881089201',
                typeName: '商户',
                gold: '1000',
                rate: '0.1',
                openNumber: '10',
                isOpenNumber: '2',
                addDateTime: '2016-05-02',
                upDateTime: '2016-05-02'
            }, {
                id: '4',
                userName: 'admin',
                status: '1',
                phoneNumber: '13881089201',
                typeName: '商户',
                gold: '1000',
                rate: '0.1',
                openNumber: '10',
                isOpenNumber: '2',
                addDateTime: '2016-05-02',
                upDateTime: '2016-05-02'
            }],
            currentPageNum:1,
            pageSize:10,
            totalPage:4,
        }
    },
    methods: {
        addUser () {
            this.face.showUserInfoAdd = true
        },
        handleSizeChange(val) {
            this.pageSize = val;
            this.getUserInfoByPage(this.query.searchWord,this.pageNum,this.pageSize);
        },
        handleCurrentChange(val) {
            var _this = this;
            _this.getUserInfoByPage(val);
        },
        getUserInfoByPage(pageNum) {
            var _this = this;
            /*getList(_this.query.searchWord,pageNum,this.pageSize).then(function (data) {
                if (data.success) {
                    _this.userInfoList = data.data.page.list;
                    _this.totalPage = data.data.page.total;
                } else {
                    _this.error(data.msg)
                }
            });*/
        },
        close(){
            var _this=this;
            _this.face.showUserInfoAdd=false
        },
    }
}
</script>

<style>

</style>