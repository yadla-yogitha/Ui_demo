# Example 3: API with Multiple Stages
# Versioned API with v1 and v2 stages

environment          = "prod"
company              = "blend"
api_name             = "versioned-api"
region_short         = "euw2"
description          = "API with version-based stages"
create_default_stage = false

# Multiple named stages
named_stages = {
  v1 = {
    auto_deploy = true
    description = "Version 1 API - Legacy"
    route_settings = {
      throttling_burst_limit = 2000
      throttling_rate_limit  = 5000
    }
  }
  v2 = {
    auto_deploy = true
    description = "Version 2 API - Current"
    route_settings = {
      throttling_burst_limit = 5000
      throttling_rate_limit  = 10000
    }
  }
  beta = {
    auto_deploy = true
    description = "Beta testing stage"
  }
}

# CORS for all versions
cors_configuration = {
  allow_headers = ["*"]
  allow_methods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  allow_origins = ["*"]
}

# Logging
enable_access_logs = true
log_retention_days = 14
