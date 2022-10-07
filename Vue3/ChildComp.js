export default {
    template: `
    <button @click="handlerSonClick">{{content}}</button>
    `,
    emits: ['click'],
    created() {
        console.log('子组件实例', this);// 查看 $linstner 
    },
    data() {
        return {
            content: '我是红字子组件'
        };
    },
    methods: {
        handlerSonClick() {
            this.$emit('click', '子组件被点击了');
        }
    },
};

//<div v-bind="$attrs">子组件可以有多个根节点</div>
