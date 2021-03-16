import * as cdk from '@aws-cdk/core';
import { NetworkStack } from './Network-stack';
import { InstancesStack } from './Instances-Stack';

export class CdkCrossStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const network = new NetworkStack(this, "NetworkStack");

    new InstancesStack(this, "Instances", {
        network: network
    });
  }
}
