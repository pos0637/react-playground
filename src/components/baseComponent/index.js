
import { Component } from 'react';

/**
 * 基础组件类型
 */
export default class BaseComponent extends Component {
    constructor(props) {
        super(props);

        /**
         * 界面是否挂载
         */
        this.mIsMounted = false;

        /**
         * 延迟调用回调数组
         */
        this.mCallbacks = [];

        /**
         * 组件列表
         */
        this.mComponents = {};

        /**
         * 客户区宽度
         */
        this.mClientWidth = document.body.clientWidth;

        /**
         * 大小改变事件处理函数
         */
        this.mResizeHandler = () => {
            this.mClientWidth = document.body.clientWidth;
            this.setState({ clientWidth: document.body.clientWidth }); // TODO
        };
    }

    componentDidMount() {
        this.mIsMounted = true;
        window.addEventListener('resize', this.mResizeHandler);

        for (let cb of this.mCallbacks) {
            cb();
        }

        this.mCallbacks = [];
    }

    componentWillUnmount() {
        this.mIsMounted = false;
        window.removeEventListener('resize', this.mResizeHandler);
    }

    /**
     * 界面是否挂载
     *
     * @returns 界面是否挂载
     */
    isMounted() {
        return this.mIsMounted;
    }

    /**
     * 注册组件
     *
     * @param {string} key 组件唯一名称索引
     * @param {any} ref 组件对象
     */
    registerComponent(key, ref) {
        this.mComponents[key] = ref;
    }

    /**
     * 获取组件
     *
     * @param {string} key 组件唯一名称索引
     * @returns 组件对象,失败返回空
     */
    getComponent(key) {
        // 界面未挂载不允许获取组件
        if (!this.mIsMounted)
            return null;

        if ((typeof this.mComponents[key] === 'undefined') || (this.mComponents[key] === null))
            return null;

        return this.mComponents[key];
    }

    /**
     * 延迟至视图挂载后调用函数
     *
     * @param {func} cb 调用函数
     */
    delayToViewMounted(cb) {
        if (this.mIsMounted)
            cb();
        else
            this.mCallbacks.push(cb);
    }
}