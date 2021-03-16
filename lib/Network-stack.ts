import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2');

export class NetworkStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;

    constructor(scope: cdk.Stack, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.vpc = new ec2.Vpc(this, "vpc", {
            cidr: "10.0.0.0/16",
            maxAzs: 3,
            subnetConfiguration: [
                {
                    cidrMask: 20,
                    subnetType: ec2.SubnetType.PRIVATE,
                    name: "subnet-private"
                },
                {
                    cidrMask: 20,
                    subnetType: ec2.SubnetType.PUBLIC,
                    name: "subnet-public"
                }
            ],
            natGateways: 2
        });
    }
}