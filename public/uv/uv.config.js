self.__uv$config = {
  prefix: "/uv/service/",
  bare: "https://bare.benrogo.net/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@2.0.0/dist/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
