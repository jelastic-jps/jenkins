var MAX_CLOUDLET = "environment.maxcloudletsperrec",
    SAME_NODES = "environment.maxsamenodescount",
    MAX_NODES = "environment.maxnodescount",
    SSL = "environment.jelasticssl.enabled";

var cloudlets = 16;

var max = 10, min = 2, resp, name, value, ssl, markup = "", ssl_markup = "", q = jelastic.billing.account.GetQuotas(MAX_NODES + ";" + SAME_NODES + ";" + MAX_CLOUDLET + ";" + SSL).array || [];

for (var i = 0, n = q.length; i < n; i++) {
  name = q[i].quota.name;
  value = q[i].value;

  if (name == SSL) { 
    ssl = !!value;
    if (ssl == false){
      ssl_markup = "Environment will be created without Jelastic SSL due to the account limitations.";
    }
    continue;
  }
  
  if (name == MAX_CLOUDLET && value < cloudlets) {
    markup = "Quota limits: " + name + " = " + value + ".  Please upgrade your account.";
    continue;
  }
  if (max >= value) {
    if (name == MAX_NODES) max = value ? value - 1 : 1;
      else if (name == SAME_NODES) max = value;
  }

}

function getVersion() {
    var version = jelastic.system.service.GetVersion();
    return version;
}

function getPlatformVersion() {
    return getVersion().version.split("-").shift();
}

function compareVersions(a, b) {
    a = a.split("."); b = b.split(".");
    for (var i = 0, l = Math.max(a.length, b.length), x, y; i < l; i++) {x = parseInt(a[i], 10) || 0; y = parseInt(b[i], 10) || 0; if (x != y) return x > y ? 1 : -1 }
    return 0;
}

var platformVersion = getPlatformVersion();

if (compareVersions(platformVersion, '5.9') >= 0) {
    resp = {result: 0, settings: {fields: [{type: "spinner", name: "nodes", caption: "Workers", min: 1, max: max, "default": Math.min(min, max)}]}};
} else {
    resp = {result:0, settings: {fields:[]}};    
}

resp.ssl = ssl;

if (ssl_markup){
    resp.settings.fields.push(
        {"type": "displayfield", "cls": "warning", "height": 30, "hideLabel": true, "markup": ssl_markup}
    )
}

if (markup) {
    resp.settings.fields.push(
        {"type": "displayfield", "cls": "warning", "height": 30, "hideLabel": true, "markup": markup},
        {"type": "compositefield","height": 0,"hideLabel": true,"width": 0,"items": [{"height": 0,"type": "string","required": true}]}
    );
}

return resp;
