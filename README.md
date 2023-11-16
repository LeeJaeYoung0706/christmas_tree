
Dependency
---

## 1. ESLint & Prettier
```aidl
https://prettier.io/
```

```bash
npm install --save-dev --save-exact prettier
echo {}> .prettierrc.json
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
