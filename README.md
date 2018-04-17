# angular-material auto toggle sidenav example

[https://material.angular.io/](angular-material)

With sidenav module of angular-material, it is the sample which changes the mode of the sidenavi from 'side' to 'over' automatically when screen size is changed.

I manage the opening and shutting status of the sidenavi in store using @ngrx/store. Similarly, I manage the title on appbar in store. I can confirm the state of the store by Redux DevTools addon of Google Chrome.

angular-materialのappbarとsidenavモジュールを使い、スクリーンサイズが変更されると自動的にサイドナビのモードをoverに変更するサンプルです。

サイドナビの開閉ステータスは@ngrx/storeを使い、storeで管理しています。同様にappbar上のタイトルもstoreで管理しています。ストアの状態はGoogle ChromeのRedux DevToolsアドオンで確認する事ができます。

## Features

- yarn v1.3
- angular v5.2.9
- angular-material v5.2.4
- @ngrx/store v5.2.0
- @ngrx/store-devtools v5.2.0

## Requirement

- yarn or npm

## Screenshot

<img width="905" alt="angular-material-appbar-sidenav-ngrx-example" src="https://user-images.githubusercontent.com/12574048/38794574-853274d6-4190-11e8-8cd3-6d47c689720c.gif">

## Usage

```bash
# browse and install Google chrome addon
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja
# git clone
git clone https://github.com/treetips/angular-material-appbar-sidenav-ngrx-example.git
cd angular-material-appbar-sidenav-ngrx-example
# install node_modules
yarn install
# start
yarn start
# open dev tools and select redux tab
# browse
http://localhost:4200/
```

## License

[MIT](http://b4b4r07.mit-license.org)