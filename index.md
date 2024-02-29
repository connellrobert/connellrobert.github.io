
## About Me
Hello! My name is Robert and I am a full stack, cloud native, engineer. I started as a Trainer at a 
coding bootcamp, teaching Java full stack with Angular. During my time, I developed in-house 
applications and taught a myriad of technologies for/to junior engineers that were typically fresh
out of college/university. As tech stacks varied, so did my exploration of technology. I have a love
for that exploration and have become so much more than just a full stack engineer.

**Table of Contents:**
- [About Me](#about-me)
    - [Full Stack Arc](#full-stack-arc)
    - [Cloud Engineering Arc](#cloud-engineering-arc)
- [Projects](#projects)
    - [Company Projects](#company-projects)
        - Revature
            - [DebugMe](#debugme-developer-assessment-program-revature)
            - [Developer Assessment Platform](#developer-assessment-platform-revature)
        - Deloitte
            - [Code Accelerator](#code-accelerator-deloitte)
            - [AI Marketplace](#ai-marketplace-deloitte)
            - [AWS Serverless Data Pipeline](#aws-serverless-data-pipeline-deloitte)
            - [Cybersecurity Automation Platform](#cybersecurity-automation-platform-deloitte)
    - [Personal Projects](#personal-projects)

## Full Stack Arc
I learned and used Java with Spring and Angular 8 for full stack applications. I would dabble in DevOps
and Cloud, but only slightly, as I learned my way around enterprise applications. I eventually migrated
to React with NodeJS and learned the intricacies around the runtimes and frameworks. I never stopped at 
just learning the high level basics and how to use them, but how they worked and why they would be used. 
I would often question what the reasons were on why they would be preferred and in what areas they would
outperform other options.

Overall, I dove into technologies and learned the ins and outs of their inner workings. I taught the 
technologies as a way to reinforce my own learnings. I loved learning more and being challenged in 
working with and understanding different languages and technologies. By the end of my tenure as a trainer
at the bootcamp, I learned, taught and used the following different languages, technologies, runtimes, 
and frameworks:
- Core Java
- Hibernate
- Java with Spring Framework (including, but not limited to, boot and data)
- Angular 2+
- React w/Typescript
- React Native
- NodeJS
- Express
- Oracle DB
- Postgres DB
- Linux computing
- Containerization
- Microservices Architecture and Design Patterns
- Messaging protocols Rest and Soap
- AWS DevOps, networking, EC2, RDS, and serverless services

Overall, I helped over 100 junior developers begin their career and taught myself an enormous amount
of in-depth knowledge and was tested on that knowledge by passing it on to all of them. I became 
exceptionally good at debugging applications and assisting junior developers with their projects and
career path.

## Cloud Engineering Arc
As coding began to become to stale, I journeyed deeper into cloud-native technologies, DevOps, and 
deployment environments such as Kubernetes and AWS Serverless. I changed companies and moved roles from
a full stack developer to a Cloud Engineer. Luckily, my role allowed for more diversity and I was able 
to work in AWS Serverless, DevOps, Cloud engineering, as well as architecting entire kubernetes based 
systems. During this time, I began working in an Openshift environment and orchestrating application
deployments with Gitlab CI. I worked several projects before promoting into a team lead role on a project
involving a custom kubernetes operator.

## Projects
### Company Projects
The following projects are closed source and owned by the company. I refer to them here to detail my time and 
contribution to the project to provide clarity on my experience and expertise.

#### DebugMe Developer Assessment Program (Revature)
A custom program designed to be a cli video game with numerous bugs for junior developers to fix. This was
intended to increase developer efficiency at problem solving a legacy codebase with visual feedback. I included
a codebase for other trainers to use as a reference point to assess whether the dev had completed the task at hand.

Tech Stack:
- Java

#### Developer Assessment Platform (Revature)
A multi tiered assessment system that tested junior developers' abilities in programming aptitude. We 
used Junit and the Reflections API to test how developers wrote the code and if they wrote it in a high
quality way. We created custom annotations that submitted work to a custom grading backend for
assessment.

Tech Stack:
- Java
- Hibernate
- Junit
- Spring
- NestJS (for custom grading backend)
- Angular (for displaying test scores to trainers)
- Postgres (for assessment data storage)
- git (for developer assessment code)

#### Code Accelerator (Deloitte)
We developed base applications for teams to accelerate client delivery. They exemplified best practices
and incorporated Gitlab CI DevOps as a baked-in CI/CD system. The project covered Java and Angular 
applications as well as platform tooling for Kubernetes and Openshift.

Tech Stack:
- Java with Spring
- Angular 2+
- Kong API Gateway
- Liquibase (for DB DevOps)
- Postgres
- Hashicorp Vault k8s agent
- Tekton
- Kubernetes
- Openshift
- Gitlab CI
- Helm

#### AI Marketplace (Deloitte)
I was presented an early-stage application that needed an architecture. It was meant to be a 
marketplace for AI training models where users could click a link and be brought to the model's
page. The original design was my first to be done. I presented a system that incorporated microservice
design patterns, Kubernetes based deployments, and usage of external web services. The design was later 
scaled down due to a reduced need for original features and developer budget. The new system brought
simplicity and less overhead for both infrastructure and development/maintenance labor.

Tech Stack:
- Kubernetes
- NestJS
- Angular
- GKE
- GCP Services
    - Cloud Build
    - Cloud Run

#### AWS Serverless Data Pipeline (Deloitte)
A code accelerator for creating secure, serverless, applications in AWS. It consisted of using
API Gateway to trigger AWS Step Functions that orchestrated AWS Lambdas for XML data ingestion
from legacy applications. It used Gitlab CI and AWS SAM framework to unit test lambdas and 
orchestrate deployments to multiple AWS Accounts. It consisted of a single Dev AWS Account and 
multiple other AWS Accounts for branch, staging and stable deployments. The lambdas used a NodeJS
runtime environment and the CI/CD pipeline consisted of bash scripts to ease deployments. 

The most notable solution (the most fun problem to solve) was where Cloudformation would error when
replacing resources which was a dependency of others. The solution involved creating a custom script
to detect the specific error, pull the existing template from Cloudformation, pull the existing 
references from Cloudformation, run a custom js script to replace the references with the existing 
resources, redeploy the Cloudformation template (which was just the hardcoded version of the existing
template), then redeploy then new Cloudformation template with references. This saved about an hour
of deployment time when compared to the manual solution when this error happened, which was decently 
frequent.

The project was based on my open source version I did prior to this (Gratitude Serverless API) with 
several additions. Namely the scripting mentioned above, custom e2e testing framework, and a few 
additional request-specific needs for the application.

Tech Stack:
- AWS SAM (for serverless deployments)
- RDS (Created through terraform)
- NodeJS (for Lambda Runtime environment)
- Gitlab CI
- Jest (for both unit testing and as a driver for the custom e2e framework)
- AWS Services
    - Lambda
    - Step Functions
    - RDS
    - API Gateway
    - S3
    - DynamoDB

#### Cybersecurity Automation Platform (Deloitte)
I was brought into a project that intended to solve the need for a hardened container registry and
a container hardening pipeline building secure custom applications. The original project used a single
JenkinsFile for teams to copy/paste a build script into and parameters to point to a git repository for
the team's application. The original platform had multiple flaws, including:
- Most teams were migrating to Gitlab CI and our solution was only for Jenkins
- Teams needed to manually paste build code into the file, prior to running it
- It was extremely manual, requiring teams to create multiple jenkins pipelines with no way for building on pushes
- It only ran on a single node system, not containerized. This led to slow adoption and difficult integration with other pipelines.

The project gradually moved to Gitlab CI, requiring a complete code migration. We redesigned the single
node system into a containerized one, built on Kubernetes. We added multiple new security scanning tools
into the pipeline and filled the hardened container registry with a multitude of new base images. 

Integrations were extremely painful and manual. Since it was a technically a CI/CD pipeline, it still 
required a complete source code transfer to supply teams with the functionality inside of secure 
environments. This combined to require over 20 git repositories to be transferred. Once inside the new
environments, it required several source code changes to accommodate for private CA's and custom certificates,
new domains, and anything else the environment required. Any updates came in the form of new git bundles to be
presented to all the integrated teams for manual merges and conflict resolution.

As a solution for this, we redesigned the system from the ground up. I designed a kubernetes operator that
automated the installation of new components, including the container hardening pipeline. It allowed for a 
central configuration to be generated based on the environment which automatically configured any component
during installation. I created Custom Resource Definitions to allow the operator to understand the details
of the newly installed component, the images it was dependent on, the helm charts it required, and the helm
chart values to use during installation. The values template used jinja to incorporate parts of the manifest
as well as the central configuration for the helm installation. We created a CLI to ease working with the 
platform and an API to expose specific endpoints for operating on the platform, such as triggering a pipeline
or installing a new component. Kubernetes would monitor the k8s native workloads such as deployments and services,
while the operator would monitor the manifests to ensure the parts of the component were still intact.

Tech Stack:
- Jenkins
- Gitlab CI
- Helm
- Tekton
- Python 3
- KOPF (Kubernetes Operator Pythonic Framework)
- Python Typer
- Python RapidAPI
- Jinja
- ElasticSearch/Kibana
- AWS Opensearch
- Kubernetes CRD
- Nexus
- DefectDojo
- Artifactory
- Docker
- Podman
- Docker in Docker
- Renovate
- Syft
- Grype
- OpenSCAP
- Checkov

### Personal Projects
Although I have worked on hundreds of personal projects, very little make it into VCS. Out of those, very little
are fully representative of my capabilities. The below are the best ones I've made. As opposed to creating projects
that are able to run locally, I create applications that are ready to be deployed and running in a real environment
at a moments notice. If, for whatever reason, you find an application that has an issue, bug, or is not deployable, 
then happily open an issue on the github repository so I am knowledgeable about it and can fix it. Unless someone is
using it, I won't typically know if something is wrong.

#### Gratitude Serverless API
This project was designed as a serverless backend for a mobile application. Users would subscribe to categories
of compliments and would get notifications with a compliment. Meant as a mental health application to support
users' well beings, it would randomly get a compliment, based on the category. It used AWS Cognito for 
authentication and user management. API Gateway used cognito to verify users, prior to forwarding the request
to step functions. The step functions would orchestrate lambdas to extract the username, look up the user's
information in a postgresql database, and it would perform the necessary function (update subscribed categories, 
get a random compliment, etc.). When a user signed up for cognito, it used a lambda trigger to take the user's 
information and place it inside the postgresql database. RDS was the only server-based part of the application, 
aside from a bastion EC2 that served as an entryway for users to seed the db. DB credentials were automatically
generated and stored inside AWS Secrets manager and mounted to the RDS for rolling credentials.

What was cool:
I hand wrote the OpenAPI yaml spec for API Gateway, using AWS OpenAPI extensions and variables to orchestrate 
responses and configurations. This was automatically imported through the SAM template for API Gateway. It featured
custom models and headers used for requests and responses, custom templating for response generation, and extensions
to integrate the step functions at the API definition level. It was unreasonably, and difficult to iterate on, when
I used a single template, so I broke the template up into several yaml files. I used exports and imports in 
Cloudformation to allow the resources to be used across stacks.

Tech Stack:
- AWS SAM
- AWS API Gateway
- AWS Lambda
- AWS Step Functions
- AWS Cognito
- AWS RDS
- AWS EC2
- AWS VPC
- AWS Security Groups
- AWS DynamoDB
- AWS Cloudwatch
- AWS Secrets Manager
- NodeJS (Lambda Runtime)
- Jest (Unit testing)
- Postman (Integration Testing)
- PostgresQL
- OpenAPI

Architecture:
![Gratitude Architecture](https://raw.githubusercontent.com/connellrobert/gratitude-serverless-api/main/design/architecture.png)

Github Link: [github link to repository](https://github.com/connellrobert/gratitude-serverless-api)

#### PixelArt Serverless API
When OpenAI opened their API to developers, I wanted to make an application that utilized what they made available.
This was an image generating application meant as a backend for a mobile application. It will collect a prompt and
generate an image, collect and image and a mask and use ai to edit an image, and use the api to generate an image
variant if given an image. I used go as the lambda runtime and terraform as the infrastructure as code to automate
the AWS infrastructure. Earthly was used as a monorepo manager and build tool to orchestrate testing, building, 
deploying, and destroying the infrastructure through containerized tools.

As opposed to using step functions to orchestrate the lambda functions, I used an event driven architecture with
SQS Queues to trigger the functions. Lambdas would collect the request from API Gateway, submit the processed 
request to SQS and DynamoDB, another lambda function would pick up the SQS message and connect with the OpenAI 
API. Once the image was generated and gathered, it saved the image to s3 and updated the DynamoDB entry with the
updated information. Errors would trigger another workflow for retries and update the DynamoDB entry also. Clients
would send the request for image generation and immediately receive a response stating that the request had been 
received and was processing. Successive requests could be sent to see the status of the request and would get a URL
for the image if it was ready.

What was cool:
Prior to using terraform, I was using AWS SAM again. However, after the limitations found in the project I made
at deloitte, I decided to use serverless framework. I found more limitations earlier in the project with this. I
forewent a infrastructure+project management framework and just decided to use terraform. This was a great decision,
since terraform was proven to do everything I needed, just with a little extra leg work. One of the biggest hurdles
I had to overcome was the automation of building and deploying the code for the lambdas. Earthly helped orchestrate
this. The terraform code would archive the lambda binary into a zip file and deploy it to a newly created s3 bucket.
Using Earthly, I made the build stage to the function code a dependency to the infrastructure deployment. It would
automate building the code, saving the binary to cache, and mounting the binary to the terraform container so it
could be gathered for archiving. The lambdas simply referenced the zipped file in the s3 bucket for deployment.

Tech Stack:
- AWS Lambda
- AWS SQS
- AWS DynamoDB
- AWS Cognito
- AWS Cloudwatch
- Go
- Terraform
- Earthly

Architecture:
![PixelArt Architecture](https://raw.githubusercontent.com/connellrobert/pixelart-serverless-api/main/design/architecture.png)

Github Link: [github link to repository](https://github.com/connellrobert/pixelart-serverless-api)