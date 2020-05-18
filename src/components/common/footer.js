/*
 * @Author: 托尼
 * @Date: 2020-05-14 16:11:22
 * @LastEditors: 托尼
 * @LastEditTime: 2020-05-18 12:30:21
 */ 
/**
 * Created by scriptchao on 2017/10/30.
 */

import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {enquireScreen} from 'enquire-js'
import './footer.sass';
import beian from '../../img/beian.png'


@observer
export default class Footer extends React.Component {

    @observable isMobile;


    componentDidMount() {
        enquireScreen((mobile) => {
            this.isMobile = mobile
        });
    }


    render() {
        return (
            <footer className="footer">
                {
                    !this.isMobile ?
                        <p className="copyright">© 2017-2018 scriptchao.com 版权所有 ICP证 : 浙ICP备17059730号-1</p> : null
                }
                <span>
                    <img src={beian} />
                    <a
                        href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=5176.8142029.631162.98.22449968rWQgOr&recordcode=33010602008935"
                        rel="noopener noreferrer"
                        target="_blank">浙公网安备 33010602008935号</a>
                </span>
            </footer>
        );
    }
}
