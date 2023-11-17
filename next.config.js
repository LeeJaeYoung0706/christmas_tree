/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // 엄격 검증 모드
    swcMinify: true,
    // swcMinifty이란 Terser와 비슷한 역할을 한다고 생각하면 된다. Terser의 역할은 필요없는 공백이나,
    // 주석을 삭제하여 용량을 줄이고, 해당 스크립트를 해석할 수 없도록 암호화 하는 역할을 한다고 할 수 있다.
    // Minification
    // minification이란 스크립트 파일과 웹 페이지에 대한 코드를 최소화하는 것이다. 이를 통해 웹페이지의 로딩 시간을 줄이고,
    // 속도와 접근성을 향상시키면서 더 나은 사용자 경험(UX)를 이끌어 낼 수 있다.
    // https://swc.rs/docs/configuration/minification#jscminifycompress
    webpack: (config) => {
        config.resolve.alias = {
                ...config.resolve.alias,
                '@mui/styled-engine': '@mui/styled-engine-sc',
        };
        return config;
    },
    // Style components 설정
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
    // 원하는 것만 가져오기 해서 최대한 모듈을 적게 가져오기 위함
    // 수천 개의 내보낸 모듈을 가져올 수 있고 이로 인해 컴파일 시간이 느려질 수 있으므로 이 동작은 바람직하지 않습니다. 
    // 목표는 이를 방지하고 패키지에서 원하는 양의 코드와 모듈을 정확하게 가져오는 것입니다.
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'source.unsplash.com',
    //             port: '',
    //             pathname: '/random',
    //         },
    //     ],
    // },
}
module.exports = nextConfig
