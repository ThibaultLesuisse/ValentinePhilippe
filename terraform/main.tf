terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "4.2.0"
    }
  }
  backend "azurerm" {
    storage_account_name = "terraformstatethibault"
    container_name = "valentine-philippe"
    subscription_id = "3a178ef5-5e43-4941-9f09-558102d7875a"
    tenant_id = "7f484261-aa92-4e35-8e51-d881f5d830b5"
    resource_group_name = "common"
    key = "valentine-philippe.tfstate"
  }
}

provider "azurerm" {
  {}
}

resource "azurerm_resource_group" "rg_valentine_philippe" {
  name     = "valentine-philippe"
  location = "West Europe"
}

resource "azurerm_dns_zone" "example" {
  name                = "contoso.com"
  resource_group_name = azurerm_resource_group.example.name
}

resource "azurerm_dns_txt_record" "example" {
  name                = "asuid.example"
  resource_group_name = azurerm_dns_zone.example.resource_group_name
  zone_name           = azurerm_dns_zone.example.name
  ttl                 = 300

  record {
    value = azurerm_container_app.example.custom_domain_verification_id
  }
}

resource "azurerm_log_analytics_workspace" "example" {
  name                = "la-valentine-philippe-we"
  location            = azurerm_resource_group.rg_valentine_philippe.location
  resource_group_name = azurerm_resource_group.rg_valentine_philippe.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_container_app_environment" "example" {
  name                       = "cae-valentine-philippe-we"
  location            = azurerm_resource_group.rg_valentine_philippe.location
  resource_group_name = azurerm_resource_group.rg_valentine_philippe.name
  log_analytics_workspace_id = azurerm_log_analytics_workspace.example.id
}


resource "azurerm_container_app" "example" {
  name                         = "example-app"
  container_app_environment_id = azurerm_container_app_environment.example.id
  resource_group_name          = azurerm_resource_group.rg_valentine_philippe.name
  revision_mode                = "Single"



  template {
    container {
      name   = "examplecontainerapp"
      image  = "mcr.microsoft.com/k8se/quickstart:latest"
      cpu    = 0.25
      memory = "0.5Gi"
    }
  }
  ingress {
    allow_insecure_connections = false
    external_enabled           = true
    target_port                = 5000
    transport                  = "http"
    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }
}

resource "azurerm_container_app_custom_domain" "example" {
  name                                     = trimprefix(azurerm_dns_txt_record.example.fqdn, "asuid.")
  container_app_id                         = azurerm_container_app.example.id
  container_app_environment_certificate_id = azurerm_container_app_environment_certificate.example.id
  certificate_binding_type                 = "SniEnabled"
}