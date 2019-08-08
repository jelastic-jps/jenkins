if ("${settings.nodes}" != 0) return {result: 0}

var version = jelastic.system.service.GetVersion().version;

if (version < "5.7") {
  return {
    result: 0,
    nodes: {
      cloudlets: 8,
      nodeType: "tomcat",
      displayName: "Master",
      tag: "${globals.tomcat}",
      env: {
        XMXDEF_PERCENT: "50"
      }
    }
  }
}

return {result: 0}
