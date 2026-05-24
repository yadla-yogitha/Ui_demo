# Green environment — Badge List
# Usage: tofu plan -var-file="examples/green.tfvars"

environment  = "green"
company      = "blend"
aws_region   = "eu-west-2"
region_short = "euw2"
aws_profile  = "accountB"

# Remote state of the global-api-gateway (green deployment)
api_gateway_state_bucket = "blendology-terraform-state"
api_gateway_state_key    = "global-api-gateway/green/terraform.tfstate"

# Remote state of badge-upload (for archive bucket - bucket 2 reference)
badge_upload_state_bucket = "blendology-terraform-state"
badge_upload_state_key    = "badge-upload/green/terraform.tfstate"

# Lambda Configuration
lambda_function_name = "green-blend-badge-list-euw2"
lambda_handler       = "index.handler"
lambda_runtime       = "nodejs20.x"
lambda_timeout       = 30
lambda_memory_size   = 256
lambda_code_path     = "lambda/code.zip"

# Common Lambda deploy bucket & module name
lambda_deploy_bucket = "blendology-lambda-deploy"
module_name          = "badge-list"

# API Route
route_key = "GET /api/badge/list"
