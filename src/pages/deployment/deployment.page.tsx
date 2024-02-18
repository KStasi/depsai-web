import { useState } from 'react';

import { Content } from '@components/Content';
import { StepFour } from '@components/Steps/StepFour';
import { StepOne } from '@components/Steps/StepOne';
import { StepThree } from '@components/Steps/StepThree';
import { StepTwo } from '@components/Steps/StepTwo';
import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';
import { Step, Stepper } from 'react-form-stepper';

const stores = {
  dep: DepStore
};

const DeploymenView: WithStores<typeof stores> = () => {
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
          {goSteps === 0 && <StepOne next={() => setGoSteps(1)} />}
          {goSteps === 1 && <StepTwo next={() => setGoSteps(2)} prev={() => setGoSteps(0)} />}
          {goSteps === 2 && <StepThree next={() => setGoSteps(3)} prev={() => setGoSteps(1)} />}
          {goSteps === 3 && <StepFour next={() => setGoSteps(4)} prev={() => setGoSteps(2)} />}
        </div>
      </Content>
    </div>
  );
};

export const DeploymentPage = withStores(stores)(observer(DeploymenView));
