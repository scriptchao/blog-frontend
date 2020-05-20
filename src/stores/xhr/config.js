/*
 * @Author: 托尼
 * @Date: 2020-05-14 16:11:22
 * @LastEditors: 托尼
 * @LastEditTime: 2020-05-20 19:08:04
 */ 
/**
 * Created by scriptchao on 2017/11/2.
 */

const origin = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7070' : 'http://121.43.224.240:7070'

const expiredTime = 1000 * 60 * 125;

export {
    origin,
    expiredTime,
};