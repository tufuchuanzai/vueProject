<template>
<div class ='tags'>
    <el-tag size="small" 
    v-for="(tag,index) in tags"
    :key="tag.name"
    :closable=" tag.name !== 'home'"
    :effect="$route.name === tag.name ? 'dark' : 'plain'"
    @click="changeMenu(tag)"
    @close="myClose(tag,index)"
    
    >{{tag.label}}</el-tag>

    <!-- 根据router.name和tag.name是否匹配确定高亮 同时根据组件名字是不是home来决定可不可以被点击 -->
</div>
  
</template>

<script>
import {mapState,mapMutations} from 'vuex';
export default {
    name: "CommonTag",
    data(){
        return{

        }
    },
    methods:{
        ...mapMutations({
            close:'closeTag'

        }),
        changeMenu(tag){
            this.$router.push({
                name:tag.name
            })


        },
        myClose(tag,index){
            const tagLength =this.tags.length;
            this.close(tag);
            
            if(tag.name !== this.$router.name){
                return;
            }
            if(index == tagLength-1){
                console.log('路由跳转1');
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }else{
                console.log('路由跳转2');
                this.$router.push({
                    name:this.tags[index].name
                })
            }


        }

    },
   
    computed: {
        ...mapState({
            tags:state=>state.tablist
        })
    }

}
</script>

<style lang ='less' scoped>

.tags {
    padding:20px;
    .el-tag {

        margin-right:20px;
        cursor: pointer;

    }
}

</style>