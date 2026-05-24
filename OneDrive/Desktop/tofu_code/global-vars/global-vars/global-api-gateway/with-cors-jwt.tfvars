# Example 2: API with CORS and JWT Authorization
# Public API with authentication

environment  = "prod"
company      = "blend"
api_name     = "public-api"
region_short = "euw2"
description  = "Public API with CORS and JWT auth"

# CORS configuration
cors_configuration = {
  allow_credentials = true
  allow_headers     = ["content-type", "authorization", "x-api-key", "x-request-id"]
  allow_methods     = ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
  allow_origins     = ["https://app.example.com", "https://admin.example.com"]
  expose_headers    = ["x-request-id", "x-amzn-requestid"]
  max_age           = 3600
}

# JWT Authorization (e.g., Cognito)
jwt_authorizer = {
  identity_sources = ["$request.header.Authorization"]
  audience         = ["api.example.com", "app.example.com"]
  issuer           = "https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_ABC123XYZ"
}

# Throttling
default_route_settings = {
  throttling_burst_limit = 5000
  throttling_rate_limit  = 10000
}

# Logging
enable_access_logs = true
log_retention_days = 30
