import * as cdk from 'aws-cdk-lib'
import * as codecommit from 'aws-cdk-lib/aws-codecommit'
import { Construct } from 'constructs'

export class WorkshopPipelineClass extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    
    super(scope, id, props)

    new codecommit.Repository(this, 'WorkshopRepo', {
      repositoryName: "WorkshopRepo"
    })
  }
}