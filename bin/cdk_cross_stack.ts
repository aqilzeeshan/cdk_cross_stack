#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkCrossStackStack } from '../lib/cdk_cross_stack-stack';

const app = new cdk.App();
new CdkCrossStackStack(app, 'CdkCrossStackStack');
