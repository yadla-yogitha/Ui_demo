# -------------------------------
# CNAME Records for green environment
# Auto-generated from existing Route53 records
# Usage: tofu plan -var-file="examples/green.tfvars" -var-file="examples/green-cname.tfvars"
# -------------------------------

cname_records = {
  acm_validation_aa67b15d12 = {
    name  = "_aa67b15d123224645996cea07caf123d.blendologyapps.co.uk"
    value = "_d9dbaa115e5d898e884eea7d913c2d4a.xlfgrmvvlj.acm-validations.aws."
    ttl   = 60
  }
  www_aviva_development_admin = {
    name  = "www.aviva-development-admin.blendologyapps.co.uk"
    value = "aviva-development-admin.blendologyapps.co.uk"
    ttl   = 300
  }
  www_aviva_development_api = {
    name  = "www.aviva-development-api.blendologyapps.co.uk"
    value = "aviva-development-api.blendologyapps.co.uk"
    ttl   = 300
  }
  www_aviva_development_hq = {
    name  = "www.aviva-development-hq.blendologyapps.co.uk"
    value = "aviva-development-hq.blendologyapps.co.uk"
    ttl   = 300
  }
  www_aviva_development_repeater = {
    name  = "www.aviva-development-repeater.blendologyapps.co.uk"
    value = "aviva-development-repeater.blendologyapps.co.uk"
    ttl   = 300
  }
  www_avivabackup_admin = {
    name  = "www.avivabackup-admin.blendologyapps.co.uk"
    value = "avivabackup-admin.blendologyapps.co.uk"
    ttl   = 300
  }
  www_avivabackup_api = {
    name  = "www.avivabackup-api.blendologyapps.co.uk"
    value = "avivabackup-api.blendologyapps.co.uk"
    ttl   = 300
  }
  www_avivabackup_hq = {
    name  = "www.avivabackup-hq.blendologyapps.co.uk"
    value = "avivabackup-hq.blendologyapps.co.uk"
    ttl   = 300
  }
  www_avivabackup_repeater = {
    name  = "www.avivabackup-repeater.blendologyapps.co.uk"
    value = "avivabackup-repeater.blendologyapps.co.uk"
    ttl   = 300
  }
  avivablue_admin = {
    name  = "avivablue-admin.blendologyapps.co.uk"
    value = "d9inlfrmxp4n.cloudfront.net"
    ttl   = 300
  }
  acm_validation_894cfb2140 = {
    name  = "_894cfb21400739f0750414af2af5e4cc.avivablue-admin.blendologyapps.co.uk"
    value = "_6e3c1c9338971328a3a06de46bf1b114.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivablue_api = {
    name  = "avivablue-api.blendologyapps.co.uk"
    value = "d1crfkeizz6fzv.cloudfront.net"
    ttl   = 300
  }
  acm_validation_d67cb89db7 = {
    name  = "_d67cb89db7ed03ab75511314a3defe2b.avivablue-api.blendologyapps.co.uk"
    value = "_319d7e58ddf4f34d5d20522e16d9c4b9.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivablue_hq = {
    name  = "avivablue-hq.blendologyapps.co.uk"
    value = "d34my15132gorx.cloudfront.net"
    ttl   = 300
  }
  acm_validation_c7585d6ae5 = {
    name  = "_c7585d6ae5dbe6f83835c39f42d64f96.avivablue-hq.blendologyapps.co.uk"
    value = "_fb820642b14a074728b333562b87733b.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivablue_my = {
    name  = "avivablue-my.blendologyapps.co.uk"
    value = "d3knq188hi2u5g.cloudfront.net"
    ttl   = 300
  }
  acm_validation_786b34a481 = {
    name  = "_786b34a481fec29d0dc5ae619bd90041.avivablue-my.blendologyapps.co.uk"
    value = "_9911408b9cdd0e010d5a8cd86809fa19.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivablue_repeater = {
    name  = "avivablue-repeater.blendologyapps.co.uk"
    value = "d2lr1aodcplnre.cloudfront.net"
    ttl   = 300
  }
  acm_validation_3a6ac619e1 = {
    name  = "_3a6ac619e1a5164aa5f755f95308268e.avivablue-repeater.blendologyapps.co.uk"
    value = "_c35f9b7befb402a24196b70da09a80a0.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivagreen_admin = {
    name  = "avivagreen-admin.blendologyapps.co.uk"
    value = "d3t2dj7tj13wde.cloudfront.net"
    ttl   = 300
  }
  acm_validation_439b01b148 = {
    name  = "_439b01b148391e58419acc4f1fb798db.avivagreen-admin.blendologyapps.co.uk"
    value = "_9573856e9545792bb06839d9fcb27c46.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivagreen_api = {
    name  = "avivagreen-api.blendologyapps.co.uk"
    value = "d34ou4553biyl1.cloudfront.net"
    ttl   = 300
  }
  acm_validation_416965e110 = {
    name  = "_416965e110925f7a723b0fd646b2a7fb.avivagreen-api.blendologyapps.co.uk"
    value = "_d58215061017683f578022e3dea37dc0.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivagreen_hq = {
    name  = "avivagreen-hq.blendologyapps.co.uk"
    value = "d23jjoe4tr1udq.cloudfront.net"
    ttl   = 300
  }
  acm_validation_66610de13b = {
    name  = "_66610de13bf5c35733f36d5c080113f9.avivagreen-hq.blendologyapps.co.uk"
    value = "_e9ca9f36295e6be3f2af22c6a0c66a36.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivagreen_my = {
    name  = "avivagreen-my.blendologyapps.co.uk"
    value = "d1xi7h0n26s4w6.cloudfront.net"
    ttl   = 300
  }
  acm_validation_6f63576b0f = {
    name  = "_6f63576b0fc6dcdd87be0766b8c12bef.avivagreen-my.blendologyapps.co.uk"
    value = "_9b591e49b1b9601a307cf1b250632568.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  avivagreen_repeater = {
    name  = "avivagreen-repeater.blendologyapps.co.uk"
    value = "d3mj4foxuzirvy.cloudfront.net"
    ttl   = 300
  }
  acm_validation_f5dda7ddc2 = {
    name  = "_f5dda7ddc27e44959d87170f8f682dd1.avivagreen-repeater.blendologyapps.co.uk"
    value = "_7db63699a47cd5addd05a377e6894c09.jkddzztszm.acm-validations.aws."
    ttl   = 60
  }
  www_canary_admin = {
    name  = "www.canary-admin.blendologyapps.co.uk"
    value = "canary-admin.blendologyapps.co.uk"
    ttl   = 300
  }
  www_canary_api = {
    name  = "www.canary-api.blendologyapps.co.uk"
    value = "canary-api.blendologyapps.co.uk"
    ttl   = 300
  }
  www_canary_hq = {
    name  = "www.canary-hq.blendologyapps.co.uk"
    value = "canary-hq.blendologyapps.co.uk"
    ttl   = 300
  }
  www_canary_repeater = {
    name  = "www.canary-repeater.blendologyapps.co.uk"
    value = "canary-repeater.blendologyapps.co.uk"
    ttl   = 300
  }
  www_grafana = {
    name  = "www.grafana.blendologyapps.co.uk"
    value = "grafana.blendologyapps.co.uk"
    ttl   = 300
  }
  www_jenkins = {
    name  = "www.jenkins.blendologyapps.co.uk"
    value = "jenkins.blendologyapps.co.uk"
    ttl   = 300
  }
  acm_validation_56899d7706 = {
    name  = "_56899d77069ad40593fe443e1ba52bbe.monitoring.blendologyapps.co.uk"
    value = "_a32fbc0a3a4d27545b6ea0ee3f09f09a.xlfgrmvvlj.acm-validations.aws."
    ttl   = 60
  }
  www_next_admin = {
    name  = "www.next-admin.blendologyapps.co.uk"
    value = "next-admin.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_api = {
    name  = "www.next-api.blendologyapps.co.uk"
    value = "next-api.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_hq = {
    name  = "www.next-hq.blendologyapps.co.uk"
    value = "next-hq.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_mariadb_admin = {
    name  = "www.next-mariadb-admin.blendologyapps.co.uk"
    value = "next-mariadb-admin.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_mariadb_api = {
    name  = "www.next-mariadb-api.blendologyapps.co.uk"
    value = "next-mariadb-api.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_mariadb_hq = {
    name  = "www.next-mariadb-hq.blendologyapps.co.uk"
    value = "next-mariadb-hq.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_mariadb_repeater = {
    name  = "www.next-mariadb-repeater.blendologyapps.co.uk"
    value = "next-mariadb-repeater.blendologyapps.co.uk"
    ttl   = 300
  }
  www_next_repeater = {
    name  = "www.next-repeater.blendologyapps.co.uk"
    value = "next-repeater.blendologyapps.co.uk"
    ttl   = 300
  }
  mercedesavivagreen_admin = {
    name  = "mercedesavivagreen-admin.blendologyapps.co.uk"
    value = "dkch0o67c52k9.cloudfront.net"
    ttl   = 300
  }
}
