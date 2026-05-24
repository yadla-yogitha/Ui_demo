# =============================================================
# flagship/flagship.tfvars
#
# This file is git-ignored (see root .gitignore: **/*.tfvars).
# Fill in your real values below before running tofu apply.
#
# Usage:
#   tofu init -backend-config="key=flagship/green/terraform.tfstate"
#   tofu apply -var-file="flagship.tfvars"
# =============================================================

# ------------------------------------------------------------
# Environment / Identity
# ------------------------------------------------------------
environment  = "green"           # deployment environment: green | blue | prod
company      = "blend"           # matches repo-wide default
region_short = "euw2"            # eu-west-2 short code

# ------------------------------------------------------------
# AWS Provider
# ------------------------------------------------------------
aws_region  = "eu-west-2"        # matches every other module in this repo
aws_profile = "accountB"         # AWS CLI profile — matches repo-wide default

# ------------------------------------------------------------
# DynamoDB
# ------------------------------------------------------------
dynamodb_table_name = "tenant_config"   # spec-defined name — change only if needed
dynamodb_stream_enabled   = true
dynamodb_stream_view_type = "NEW_IMAGE"

# ------------------------------------------------------------
# S3 — Global CDN Frontend Assets Bucket
# ------------------------------------------------------------
frontend_assets_bucket_name = "green-blend-admin-euw2-frontend-assets"
ssm_parameter_name          = "/cloudfront/admin/active-timestamp"

# S3 — Theme Assets Bucket (per-tenant CSS + logo files served at /theme/*)
theme_assets_bucket_name    = "green-blend-flagship-euw2-theme-assets"

# ------------------------------------------------------------
# S3 — Lambda Deploy Bucket
# The existing shared bucket used across all modules in this repo.
# Check html-to-pdf/variables.tf: default = "blendology-lambda-deploy"
# ------------------------------------------------------------
lambda_deploy_bucket = "blendology-lambda-deploy"        # ← confirm this bucket exists

# ------------------------------------------------------------
# Lambda
# ------------------------------------------------------------
lambda_function_name = "client-portal-basic-tenant-resolver"        # ← your preferred function name
lambda_timeout       = 10                                 # seconds — spec requirement
lambda_memory        = 256                                # MB — spec requirement

# Dedicated DNS provisioner Lambda is configured in Domain Process block below.

# ------------------------------------------------------------
# API Gateway
# ------------------------------------------------------------
api_name        = "client-portal-basic-api"
api_description = "Client Portal Basic multi-tenant HTML resolver API"
api_cors_allow_origins = [
	"http://localhost:5173",
	"https://clientportal.blendologyapps.co.uk",
]
api_cors_allow_headers = [
	"authorization",
	"content-type",
]
api_cors_allow_methods = [
	"DELETE",
	"GET",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
]
api_cors_max_age             = 300
api_route_authorization_type = "JWT"

# Cognito JWT Authorizer — created by Terraform (no hardcoded authorizer ID needed)
cognito_user_pool_id = "eu-west-2_wfLXZPXQO"
cognito_client_id    = "11t7obe6i6fnmnvi5q6rtntv3n"

platform_domain = "blendologyapps.co.uk"

# ------------------------------------------------------------
# Domain Process (Stream Triggered Provisioning)
# ------------------------------------------------------------
domain_process_environment       = "dns-mapping"
route53_hosted_zone_id           = "Z10004971HXW8DPBG1EKY"
shared_cloudfront_domain_name    = "d3t2dj7tj13wde.cloudfront.net"
shared_hq_cloudfront_domain_name = "d23jjoe4tr1udq.cloudfront.net"
hq_cloudfront_distribution_id    = "E1AO930TV386O6"
provisioning_lambda_function_name = "client-portal-basic-domain-provisioner"
provisioning_lambda_handler       = "index.handler"
provisioning_lambda_runtime       = "nodejs20.x"
provisioning_lambda_timeout       = 30
provisioning_lambda_memory        = 256
provisioning_lambda_code_path     = "./lambda/domain-provisioner/domain-provisioner.zip"
