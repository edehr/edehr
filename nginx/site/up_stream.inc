upstream upstream-api {
  server _PROXY_PASS_HOST:_SERVER_PORT;
}

upstream upstream-webhook {
  server host.docker.internal:9111;
}

