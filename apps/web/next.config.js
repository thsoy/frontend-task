/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    // PNG 파일 처리
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      use: ["file-loader"],
    });

    // TypeScript 및 JSX/TSX 파일을 처리하는 로더 추가
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["next/babel", "@babel/preset-typescript"],
          },
        },
      ],
    });

    // styled-components 서버 사이드 렌더링을 위한 설정 (옵션)
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // "fs" 모듈을 브라우저에서 사용할 수 없도록 설정
      };
    }

    return config;
  },
};

export default nextConfig;
