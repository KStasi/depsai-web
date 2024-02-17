import { Content } from '@components/Content';
import { StepFour } from '@components/Steps/StepFour';
import { StepOne } from '@components/Steps/StepOne';
import { StepThree } from '@components/Steps/StepThree';
import { StepTwo } from '@components/Steps/StepTwo';
import MultiStep from 'react-multistep';

export const DeploymentPage = () => {
  const steps = [
    { name: 'Select image', component: <StepOne /> },
    { name: 'Set envs', component: <StepTwo /> },
    { name: 'Set config values', component: <StepThree /> },
    { name: 'Preview', component: <StepFour /> }
  ];

  return (
    <div className="container">
      <Content>
        <div className="multistep">
          <MultiStep steps={steps} />
        </div>
      </Content>
    </div>
  );
};
