declare enum Environment {
  development = "development",
  production = "production",
}

declare interface RoutersMeta {
  title: string; // 标题
  auth: boolean; // 跳转此页面是否需要权限
}