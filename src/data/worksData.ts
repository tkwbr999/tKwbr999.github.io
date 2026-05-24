import { WorkItem } from '../types';

export const worksData: WorkItem[] = [
  {
    id: 'project0',
    title: '$5 Short Text Summary',
    description:
      '短い文章や議事録を5ドルで要約する小さな実験サービス。依頼受付、スコープ確認、要約納品、請求までを最小構成で検証しています。',
    role: '企画 / 自動化設計 / Codex活用 / 小規模サービス運用',
    publications: ['Monthly $5 automation experiment'],
    link: 'https://tkwbr999.github.io/monthly5-offer/',
  },
  {
    id: 'project1',
    title: 'Goチートシート（日本語版）',
    description:
      'ぱっと見でわかるGo言語の文法ガイド。初学者から実務者まで活用できる実用的なチートシート。Go言語の基本構文から応用的なパターンまでをわかりやすく整理しています。',
    role: '企画 / 設計 / 開発 / コンテンツ作成',
    publications: ['Go言語学習者向けリソース'],
    link: 'https://tKwbr999.github.io/go-cheat-sheet-garden/',
  },
  {
    id: 'project2',
    title: 'tailwindcss テキスト',
    description:
      '学習用tailwindcssのテキスト。視認性と使いやすさにこだわった設計で、実務でも貢献できるクオリティを実現。実践的な例と解説で効率的な学習をサポートします。',
    role: '設計 / 開発 / コンテンツ作成 / 保守',
    link: 'https://tKwbr999.github.io/tailwindcss-text/',
  },
  {
    id: 'project3',
    title: '介護施設管理システム',
    description:
      '介護業界の法令に準じた処理をAIにより簡略化するプロジェクト。法令に関わる部分のデータモデル設計、実装、テストを担当。OpenAPIを用いたREST API実装のサポートおよびRowLevelSecurityを満たすためのミドルウェア仕様とデータ設計を担当。',
    role: 'バックエンド開発 / DB設計 / 開発環境構築 / 要件定義',
    link: '#',
  },
  {
    id: 'project4',
    title: '共通認証マイクロサービス',
    description:
      'B2B/B2Cのマッチングサービス向け共通認証マイクロサービス開発。シンプルなEmail+Pass認証に絞った設計と実装を担当。クリーンアーキテクチャとDDDを踏まえた標準的なGoプロジェクトレイアウトを採用。',
    role: 'バックエンド開発 / AWS Cognito設定 / 要件定義〜保守運用',
    publications: ['マイクロサービスアーキテクチャ採用事例'],
    link: '#',
  },
  {
    id: 'project5',
    title: '建築設計データ解析/API',
    description:
      'Autodesk Construction Cloudデータ解析用SDKを利用したデータ解析を行うREST APIのバックエンド開発。Cognitoによるユーザー認証API実装。TerraformによるIaCの導入支援も担当。',
    role: 'バックエンド開発 / AWS環境構築 / IaC導入サポート',
    link: '#',
  },
];
