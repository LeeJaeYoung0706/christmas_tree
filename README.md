
# 목표

크리스마스 타겟으로 학원 사람들 끼리 메세지 주고 받기 위한 목적입니다.
mui 및 scss , css 사용 역량 증가 목표로 하고 있습니다.
따라서, 기본 틀 제작부터 디자인 작업까지 혼자서 해보려고 합니다.


Dependency
---


## 1. ESLint & Prettier
```
https://prettier.io/
```

```bash
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
npm install --save-dev eslint-config-prettier
```

## 2. Mui

```
https://mui.com/material-ui/getting-started/installation/
```

```bash
npm install @mui/material  
npm install @emotion/react @emotion/styled 
npm i sass
npm install @mui/icons-material
npm install @mui/styled-engine-sc

```

```
{
  "trailingComma": "es5", => 후행 쉼표 여부 
  "tabWidth": 2, => 탭 간격
  "semi":true, => 새미콜론
  "singleQuote":true. => 인용 부호 큰따옴표 , 작은따옴표
  "bracketSameLine": false => 브래킷라인
}

```




```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
