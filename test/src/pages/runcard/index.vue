<template>
    <div class="runcard-tag">
        <div class="crumb">
            <span class="crumb-item">打印Runcard标签</span>
        </div>
        <div class="runcard">
            <div class="facMaintenance">
                <div class="runcLabel">Runcard标签</div>
                <div class="inner">
                    <div class="work-menu">工单</div>
                    <form  class="form">
                        <div class="form-item-top">
                            <input type="text" placeholder="请选择" class="input-select" readonly autocomplete="off">
                        </div>
                    </form>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <el-button type="primary" >打印</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" >
    .runcard-tag {
        >.crumb {
            margin: 0 -20px 12px;
            line-height: 50px;
            height: 50px;
            color: #333;
            padding-left: 25px;
            font-size: 18px;
            background: #fff;
            >.crumb-item {
            color: #606266;
            cursor: text;    
            }
        }
        >.runcard {
           >.facMaintenance {
              background: #fff;
              padding: 15px 20px;
              border-radius: 4px;
              margin-bottom: 10px;
              border: 1px solid #f1f6f8;
              font-family: SourceHanSansCN-Regular; 
              >.runcLabel {
                font-size: 16px;
                color: #333;
                font-weight: 500;
              }
              >.inner {
                margin-left: 7%;
                height: 500px;
                .work-menu {
                    float: left;
                    margin-top:61px;
                    margin-left: 126px;
                }
                .form {
                   width: 633px;
                   height: 270px;
                   margin-top: 35px;
                   margin-bottom: 30px;
                   margin-left: 188px;
                   background: #ecf5f9; 
                   >.form-item-top {
                    //    position: relative;
                       margin-top: 10px;
                       margin-bottom: 22px;
                       >.input-select {
                           width:500px;
                           height: 36px;
                           line-height: 36px;
                           outline: none;
                           cursor: pointer;
                            border-radius: 4px;
                            border: 1px solid #dcdfe6;
                            box-sizing: border-box;
                            color: #606266;
                            display: inline-block;
                            margin-top:10px;
                            margin-left: 10px;
                            padding-left: 20px;

                       }
                       .input-select:focus {
                           border-color: #409eff;
                       }
                        .input-select::after {
                            content:'';
                            
                        }
                   }
                }
              }
           } 
        }
    }
</style>
