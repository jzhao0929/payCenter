<template>
    <div class="app-container">
        <el-form size="mini" ref="form" :model="form"  label-width="90px">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="用户名">
                        <el-input v-model="form.UserName" placeholder="用户名" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="手机号">
                        <el-input v-model="form.PhoneNumber" placeholder="手机号" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="密码">
                        <el-input v-model="form.PassWord" placeholder="密码" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="费率">
                        <el-input v-model="form.Rate" placeholder="费率" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="可开代理">
                        <el-input v-model="form.OpenNumber" placeholder="可开代理" />
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="用户类型" prop="userType">
                        <el-select style="width:274px;!important;" v-model="form.userType" placeholder="请选择">
                            <el-option
                                    v-for="item in userTypeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item style="text-align:center;margin-left:-80px;">
                <el-button type="primary" >保存</el-button>
                <el-button @click="close()">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'UserEdit',
    data () {
        return {
            form: {
                UserName: '',
                PhoneNumber: '',
            },
            userTypeOptions:[{
                value: '2001',
                label: '商户一级代理'
            }, {
                value: '4001',
                label: '码商一级代理'
            }],
        }
    },methods: {
        close() {
            var _this = this;
            _this.$emit('winClose')
        }
    }
}
</script>

<style>

</style>
