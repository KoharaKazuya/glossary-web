## 構築の記録

- GCP で新しいプロジェクトを作成 → プロジェクト名: [`glossary-web`](https://console.cloud.google.com/?project=glossary-web)
- Cloud Run のページで `サービスの作成` を選択 (= Cloud Run Admin API が有効になる)
  - `ソース リポジトリから新しいリビジョンを継続的にデプロイする` > `CLOUD BUILD の設定` を選択 (= Cloud Build API と Container Analysis API が有効になる)
    - `リポジトリプロバイダ` として `GitHub` を選択
      - `認証` を選択し、GitHub と連携する
      - `GOOGLE CLOUD BUILD のインストール` を選択し、`All repositories` に Google Cloud Build をインストールする
    - `リポジトリ` として `glossary-web` を選択
    - `ブランチ` を `^main$` にする (= デフォルト状態のまま)
    - `Build Type` を `Dockerfile`, `ソースの場所` を `/app/Dockerfile` にする
    - `サービス名` を `glossary-web` にする
  - `リージョン` を `asia-northeast1` にする
  - `すべてのトラフィックを許可` を選択
  - `未認証の呼び出しを許可` を選択
  - `作成` を選択 → [サービス](https://console.cloud.google.com/run/detail/asia-northeast1/glossary-web/revisions?project=glossary-web), [Web サイト](https://glossary-web-3r4hyx5lea-an.a.run.app/)
