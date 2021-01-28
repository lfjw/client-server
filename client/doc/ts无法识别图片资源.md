# ts 无法识别图片资源

## 1. typescript 无法识别非代码资源，所以图片无法识别

## 2. 需要新建一个 ts 声明文件：images.d.ts

```typescript
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
```

## 3. 然后将 images.d.ts 配置到 tsconfig.json 中

```json
"include": [
    "./typings/images.d.ts" //文件路径
],
```

## 4. 页面引入 import logo from './logo.svg';即可
