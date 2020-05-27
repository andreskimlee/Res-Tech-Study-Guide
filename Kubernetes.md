# What is Kubernetes?

Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management.
What does orchestration mean? Imagine Docker which creates instances of lets say a node application. When you face more users
and scalability issues arise, you need to create more instances of your application. You also need to monitor health of your 
apps. (Recall in system design, having multiple servers and a load balancer that does a health check will relay the request to a working server). You can build your own scripts and tackle these issues.

Container orchestration aims to solve this issue. 

Typically a container orchestration solution consists of multiple docker hosts.

If one fails others are still accessible. 

Kubernetes is an auto scaling solution. Has high customizability.

## Things Kubernetes can do

- Can help you test new features by only upgrading certain percentage of instances through AB testing methods. (AB Testing is version testing essentially at the same time)

(Segway => AB Testing is called AB testing because in its simplest form you test version A and verrsion B)

- Auto scaling (Create more instances depending on traffc)


## Cluster

- A cluster is a collection of nodes. Nodes in this context can be viewed as the machine that is hosting the kubernetes software and container. 

- Clusters are important because it provides accessiblity in case of a failure of a single node, redirect the request. 
How does kubernetes control when a node fails and needs to redirect traffic?

## Master

- Master node watches over all the other nodes in the cluster. And is responsible for the actual orchestration of the system. 


# Components 

    1. API Server - Behaves as the front end for kubernetes. (All CLI talk to the API SERVER) to interact with kubernetes
    2. etcd - distributed key-value store that stores all data that is used to manage the cluster. 
    3. kubelet - the agent that makes sures containers are running on the nodes as expected.
    4. container runtime - underlying software for containers (usually docker) 
    5. controller - noticing and responding when nodes, containers or endpoints go down and then redirect.
    6. scheduler - distributing work for container across multiple nodes. 

## kubectl (kube cut - el)

command line utility, CLI that is used to deploy or manage cluster of nodes. status of nodes etc. 

"kubectl run hello-minicube" will run an application on the cluster. 
kubectl get nodes 
kubectl cluster-info

(Single line to run your application onto kubernetes) 
kubectl run my-web-app --image=my-web-app --replicas

