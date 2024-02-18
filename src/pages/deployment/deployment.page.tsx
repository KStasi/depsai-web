import { useState } from 'react';

import { Content } from '@components/Content';
import { StepFour } from '@components/Steps/StepFour';
import { StepOne } from '@components/Steps/StepOne';
import { StepThree } from '@components/Steps/StepThree';
import { StepTwo } from '@components/Steps/StepTwo';
import { Step, Stepper } from 'react-form-stepper';

export const DeploymentPage = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <div className="container">
      <Content>
        <div className="multistep">
          <Stepper activeStep={goSteps} stepClassName="multistep-step">
            <Step onClick={() => setGoSteps(0)} label="select image" />
            <Step onClick={() => setGoSteps(1)} label="set envs" />
            <Step onClick={() => setGoSteps(2)} label="set config values" />
            <Step onClick={() => setGoSteps(3)} label="preview" />
          </Stepper>
          {goSteps === 0 && (
            <>
              <StepOne />
              <button onClick={() => setGoSteps(1)}>Next</button>
            </>
          )}
          {goSteps === 1 && (
            <>
              <StepTwo />
              <button onClick={() => setGoSteps(0)}>Next</button>
              <button onClick={() => setGoSteps(2)}>Next</button>
            </>
          )}
          {goSteps === 2 && (
            <>
              <StepThree />
              <button onClick={() => setGoSteps(1)}>prev</button>
              <button onClick={() => setGoSteps(3)}>Next</button>
            </>
          )}
          {goSteps === 3 && (
            <>
              <StepFour />
              <button onClick={() => setGoSteps(2)}>prev</button>
              <button onClick={() => setGoSteps(4)}>Finish</button>
            </>
          )}
        </div>
      </Content>
    </div>
  );
};
