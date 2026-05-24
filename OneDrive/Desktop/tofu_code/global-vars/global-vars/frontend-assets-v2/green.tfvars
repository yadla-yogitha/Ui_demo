# -------------------------------------------------------
# frontend-assets-v2 — Green Admin
# Deploy: tofu apply -var-file=examples/green.tfvars
# -------------------------------------------------------

# Required
environment      = "green"
subdomain_suffix = "admin"

# Optional overrides
company     = "blend"
aws_region  = "eu-west-2"
main_domain = "blendology.com"

# S3 Configuration
enable_versioning = true
enable_encryption = true

# Lambda@Edge Dynamic Routing
enable_dynamic_routing = true
default_timestamp      = "2026-03-01-1200"
lambda_runtime         = "nodejs20.x"
lambda_memory_size     = 128
lambda_timeout         = 5

# Tags
tags = {
  Team    = "platform"
  Product = "blendology-admin"
}
