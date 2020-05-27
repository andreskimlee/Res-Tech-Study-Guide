# What is Helm?

Helm is a package manager for kubernetes. (NPM, homebrew equivalent)

## Helm Charts

Extremely useful if there exists a configuration already for your application, lets say you use MongoDB as a database, then the integration and configuartion are generally wideley available in public repos. Your company can potentially have private repos as well shared within the organization   

## Feature 1 :

Widely available deployment configurations that are YAML packaged together.

## Feature 2: Templating Engine

Each of your nodes in your cluster will have different YAML configs and helm will create a template config YAML file that can place dynamic placeholders (values.YAML controls the dynamic settings)

## Helm Chart Structure

mychart/
    Charts.yaml --> Metadata 
    values.yaml --> values for template
    charts/  --> Contains dependencies
    templates/--> Actual template files are stored here
    ...

## Feature 3: Release management

