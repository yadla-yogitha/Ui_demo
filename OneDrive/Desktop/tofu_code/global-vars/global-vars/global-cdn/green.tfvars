# -------------------------------
# Global CDN — Green Environment
# Usage: tofu plan -var-file="examples/green.tfvars"
#        tofu init -backend-config="key=global-cdn/green/terraform.tfstate"
# -------------------------------

environment = "green"
company     = "blend"
aws_region  = "eu-west-2"
aws_profile = "accountB"

# --- Remote State Configuration ---
backend_state_bucket_name = "blendology-terraform-state"

# Frontend Assets (S3 bucket for UI - shared for admin and hq)
frontend_assets_state_key = "frontend-assets-v2/green/terraform.tfstate"

# Event Assets
event_assets_state_key = "beta/eventassets-aviva"

# API Gateway
apigateway_state_key = "global-api-gateway/green/terraform.tfstate"

# Flagship multi-tenant resolver
flagship_state_key = "flagship/green/terraform.tfstate"

# WAF (conditionally loaded)
webacl_state_key = "beta/webacl-cloudfront"

# --- Domain Configuration ---
origin_subdomain_prefix = "origin-avivagreen-"
origin_domain_suffix    = "blendologyapps.co.uk"
public_subdomain_prefix = "avivagreen-"
public_domain           = "blendologyapps.co.uk"

# --- ACM Certificate (must be in us-east-1) ---
# Not used when enable_aliases = false
acm_certificate_arn = "arn:aws:acm:us-east-1:953948260185:certificate/361bf44e-0e57-44d6-8d10-6ab76cd6a57f" # *.blendologyapps.co.uk wildcard

# --- CloudFront Configuration ---
price_class              = "PriceClass_100"
enable_ipv6              = true
minimum_protocol_version = "TLSv1.2_2021"

# UI Assets Caching
static_assets_max_ttl = 31536000  # 1 year for /ui/* immutable assets with Lambda@Edge routing
enable_ui_compression = true      # Enable gzip/brotli compression

# --- Security & Domain Configuration ---
enable_aliases = true   # avivagreen-*.blendologyapps.co.uk aliases registered

# --- Tenant Distributions ---
enable_mercedes_admin_distribution = true
enable_waf     = false  # No WAF protection for now

# --- Feature Toggles ---
enable_admin_distribution    = true
enable_hq_distribution       = true
enable_my_distribution       = true
enable_api_distribution      = true
enable_repeater_distribution = true

# --- Tags ---
tags = {
  Project = "blendology"
  Service = "global-cdn"
}
