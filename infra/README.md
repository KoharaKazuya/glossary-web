## 構築の記録

- GCP で新しいプロジェクトを作成 → プロジェクト名: [`glossary-web`](https://console.cloud.google.com/?project=glossary-web)
- Cloud Run のページで `サービスの作成` を選択 (= Cloud Run Admin API が有効になる)
- `ソース リポジトリから新しいリビジョンを継続的にデプロイする` > `CLOUD BUILD の設定` を選択 (= Cloud Build API と Container Analysis API が有効になる)
- `リポジトリプロバイダ` として `GitHub` を選択
  - `認証` を選択し、GitHub と連携する
  - `GOOGLE CLOUD BUILD のインストール` を選択し、`All repositories` に Google Cloud Build をインストールする
- `リポジトリ` として `glossary-web` を選択
- `ブランチ` の `^main$` にする (= デフォルト状態のまま)
