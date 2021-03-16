* This is based on https://github.com/aws/aws-cdk/issues/4474 
* It shows how to organize application when one stack needs to be referenced in another stack.
* In CloudFormation world cross stacks do this but here simply create stack and pass it to other stack which needs it as props.
* To deploy it do `cdk deploy --all` because all stacks need to be deployed.
* Amazing to see how many resources are created by such few lines of code.
* VPC with public and private subnets is created first then passed to Another stack as prop where Internet facing ELB is created in the same VPC.
# To Do
* Change this to CDK https://github.com/aqilzeeshan/CloudFormation-Deep-Dive/tree/master/Labs/CrossStack
* To organize https://github.com/aqilzeeshan/cdk-ec2-vpc-subnet in the same way.
