# Green environment — QR Code API
# Usage: tofu plan -var-file="examples/green.tfvars"

environment = "green"
company     = "blend"
aws_region  = "eu-west-2"
aws_profile = "accountB"

# Remote state of the global-api-gateway (green deployment)
api_gateway_state_bucket = "blendology-terraform-state"
api_gateway_state_key    = "global-api-gateway/green/terraform.tfstate"

# Lambda
lambda_function_name = "green-blend-qrcode-generator"
lambda_handler       = "main.lambda_handler"
lambda_runtime       = "python3.12"
lambda_timeout       = 10
lambda_memory_size   = 128
lambda_code_path     = "lambda/code.zip"

# API Route
route_key = "GET /api/generate-qr"

# Tags
tags = {
  Project = "blendology"
  Service = "qrcode-api"
}
