#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git config --local user.name "walkerxin" &&
git config --local user.email "1464193658@qq.com" &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://gitee.com/walkerxin/account-book-website.git &&
git push -u origin master -f
cd ..