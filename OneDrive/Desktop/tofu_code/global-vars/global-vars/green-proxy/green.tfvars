# --------------------------------
# Green Proxy Lambda — green Environment
# Usage: tofu plan -var-file="green.tfvars"
#        tofu init -backend-config="key=green-proxy/green/terraform.tfstate"
# --------------------------------

environment = "green"
company     = "blend"
aws_region  = "eu-west-2"
aws_profile = "accountB"

# --- Remote State Configuration ---
api_gateway_state_bucket = "blendology-terraform-state"

# API Gateway (shared green environment)
api_gateway_state_key = "global-api-gateway/green/terraform.tfstate"

# --- Lambda Configuration ---
lambda_function_name = "green-blend-create-event-proxy"
lambda_handler       = "index.handler"
lambda_runtime       = "nodejs20.x"

# --- DynamoDB Configuration ---
dynamodb_table_name = "blendology-client-events"

# --- Route Keys ---
# Must match the incoming request paths to the API Gateway
route_key             = "POST /api/json/events/create"   # ← matches incoming POST path
events_json_route_key = "GET /api/events/json"           # ← for filtered event listing

# --- OVH Backend Configuration ---
# Points to the origin Laravel backend server
ovh_base_url = "https://origin-avivagreen-admin.blendologyapps.co.uk"

# --- Tags ---
tags = {
  Project = "blendology"
  Service = "green-proxy"
}
