const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/chat": [
      "./node_modules/onnxruntime-node/bin/napi-v3/**/*",
      "./node_modules/@xenova/transformers/**/*",
    ],
  },
};
