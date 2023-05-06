#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';
import { WorkshopPipelineClass } from '../lib/pipeline-stack';

const app = new cdk.App();
new WorkshopPipelineClass(app, 'CdkWrokshopPipelineStack');
