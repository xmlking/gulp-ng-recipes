declare module 'http-proxy-middleware' {

  interface ProxyMiddlewareOptions {
    target: string;
    forward?: string;
  }

  function proxyMiddleware(context: string, options?: ProxyMiddlewareOptions)
  module proxyMiddleware {
  }
  export = proxyMiddleware;
}

