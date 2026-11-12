# VALNEX 公式サイト

大学生の学びを支えるサービス「VALNEX」の公式サイトです。React + Vite で構成し、共通部品、ページ、レイアウト、スタイルを役割別に分けています。

## 起動方法

```bash
npm install
npm run dev
```

表示されたローカル URL をブラウザで開いてください。ビルド確認は次のコマンドです。

```bash
npm run build
```

## 構成

- `src/components/common/`: Header / Footer / Navigation
- `src/components/ui/`: 再利用可能な Button / Modal
- `src/layouts/`: ページ共通の MainLayout
- `src/pages/`: Home / Service / About / Partners / Contact
- `src/styles/`: 色・書体の変数と共通スタイル

ルーティングは依存を増やさないハッシュベースの方式です。`#/home`、`#/service`、`#/about`、`#/partners`、`#/contact` に直接移動できます。
