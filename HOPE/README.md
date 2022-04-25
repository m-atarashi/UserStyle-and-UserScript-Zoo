# Styles and Scripts for HOPE

## glassy-hope.css
![glassy_hope01](https://user-images.githubusercontent.com/67362239/163711199-e1fe2d6c-2cea-45bf-ad39-c5a032b59453.png)
![glassy_hope02](https://user-images.githubusercontent.com/67362239/163711209-d5ad2145-b28b-4a2d-a45b-5258cb9e8f68.png)
![glassy_hope03](https://user-images.githubusercontent.com/67362239/163711212-e0989458-80ed-490e-9390-d613f2b23fa1.png)
[Stylus](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=ja "Stylus")にUserCSSとして導入することで、HOPEのUIが透明感のある美しい外観に変わります。

`--custom-bg-img`カスタムプロパティをWeb上の任意の画像URLに変更することで、背景をお好きな画像に設定することができます。
背景画像の変更によってデフォルトの文字色（#24140e）の可読性が損なわれる場合があります。その際、`--custom-primary-color`カスタムプロパティおよび`--custom-secondary-color`カスタムプロパティを白系統色に変更することを推奨します。

## add-class-to-timetable.js
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja "Tampermonkey")に導入することで、未来大の時間割に含まれない任意の授業を[TimeTable for HOPE](https://github.com/Better-HOPE/timetable-for-hope "TimeTable for HOPE")の時間割テーブルに追加することができます。
例えば、上の画像における月曜2限「ラボミーティング」、火曜6限「GCI 2022 Summer」が追加された授業に相当します。

## auto-login-to-hope.js
[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja "Tampermonkey")に導入することで、[HOPE](https://hope.fun.ac.jp/ "HOPE")に自動でログインできるようになります。

1. HOPEのホームページ(hope.fun.ac.jp)にログアウトした状態でアクセスすると、自動的にログイン画面（sso.fun.ac.jp）に遷移します。
2. その後、Chromeに保存されたユーザー名とパスワードが自動入力され、自動的にHOPEにログインします。
3. ログインに成功するとHOPEのマイページ（hope.fun.ac.jp/my）に遷移します。

## Acknowledgement
Stylus 提供元の [stylus.openstyles](https://add0n.com/stylus.html "stylus.openstyles") 様、Tampermonkey 開発者の [Jan Biniok](https://github.com/derjanb "Jan Biniok") 氏、[TimeTable for HOPE](https://github.com/Better-HOPE/timetable-for-hope "TimeTable for HOPE") 開発者の [cathiecode](https://github.com/cathiecode "cathiecode") 氏に感謝申し上げます。

最後に、いつも私を支えてくださっているラプラス・ダークネス氏ことラプ様にも感謝申し上げますW

- ラプ様の公式サイト：[ラプラス・ダークネス | 所属タレント一覧 | hololive（ホロライブ）公式サイト](https://hololive.hololivepro.com/talents/la-darknesss "ラプラス・ダークネス | 所属タレント一覧 | hololive（ホロライブ）公式サイト")
- ラプ様のYouTubeチャンネル：[Laplus ch. ラプラス・ダークネス - holoX -](https://www.youtube.com/channel/UCENwRMx5Yh42zWpzURebzTw "Laplus ch. ラプラス・ダークネス - holoX -")
- ラプ様のTwitter：[@LaplusDarknesss](https://twitter.com/LaplusDarknesss "@LaplusDarknesss")
- 記念すべきラプ様の初配神（2021/11/26）

    [![thumbnail](https://img.youtube.com/vi/2MfvZP7FNtw/maxresdefault.jpg)](https://www.youtube.com/watch?v=2MfvZP7FNtw)
