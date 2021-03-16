import cdk = require('@aws-cdk/core'); 
import loadbalancer = require('@aws-cdk/aws-elasticloadbalancingv2');
import { NetworkStack } from './Network-stack';
 
export interface theseProps extends cdk.StackProps { 
    network: NetworkStack
} 
 
export class InstancesStack extends cdk.Stack {
 
    constructor(scope: cdk.Stack, id: string, props: theseProps) { 
        super(scope, id, props);
        
        const lbalancer = new loadbalancer.ApplicationLoadBalancer(this, "testLB", {
            vpc: props.network.vpc,
            internetFacing: true
        });
    } 
}