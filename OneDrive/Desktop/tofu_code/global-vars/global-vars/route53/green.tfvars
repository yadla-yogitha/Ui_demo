# ============================================================
# Route53 — Green Environment + Client Portal DNS Records
# ============================================================

environment      = "green"
aws_region       = "eu-west-2"
aws_profile      = "accountB"
hosted_zone_name = "blendologyapps.co.uk"

# ── DNS A records (origin servers) ──────────────────────────
dns_records = {
  admin = {
    subdomain  = "origin-avivagreen-admin"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
  api = {
    subdomain  = "origin-avivagreen-api"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
  hq = {
    subdomain  = "origin-avivagreen-hq"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
  mercedes_admin = {
    subdomain  = "origin-mercedesavivagreen-admin"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
  my = {
    subdomain  = "origin-avivagreen-my"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
  repeater = {
    subdomain  = "origin-avivagreen-repeater"
    ip_address = "57.128.191.227"
    ttl        = 300
  }
}

# ── Client Portal ALIAS record ─────────────────────────────
# Creates: clientportal.blendologyapps.co.uk → CloudFront ALIAS
create_clientportal_alias = true
clientportal_subdomain    = "clientportal"
