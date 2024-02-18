import { Content } from '@components/Content';
import { StepFour } from '@components/Steps/StepFour';
import { StepOne } from '@components/Steps/StepOne';
import { StepThree } from '@components/Steps/StepThree';
// import { StepTwo } from '@components/Steps/StepTwo';
import { withStores } from '@store';
import { DepStore } from '@store/deployment.store';
import { WithStores } from '@types';
import { observer } from 'mobx-react-lite';
import { Step, Stepper } from 'react-form-stepper';
import { useNavigate } from 'react-router-dom';

const stores = {
  dep: DepStore
};

const DeploymentView: WithStores<typeof stores> = ({ dep }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Content>
        <div className="multistep">
          <Stepper activeStep={dep.goSteps} stepClassName="multistep-step">
            <Step onClick={() => dep.setGoSteps(0)} label="select image" />
            <Step onClick={() => dep.setGoSteps(1)} label="set envs" />
            <Step onClick={() => dep.setGoSteps(2)} label="set config values" />
            <Step onClick={() => dep.setGoSteps(3)} label="preview" />
          </Stepper>
          {dep.goSteps === 0 && <StepOne next={() => dep.setGoSteps(2)} />}
          {/* {goSteps === 1 && <StepTwo next={() => dep.setGoSteps(2)} prev={() => dep.setGoSteps(0)} />} */}
          {dep.goSteps === 2 && (
            <StepThree next={() => dep.setGoSteps(3)} prev={() => dep.setGoSteps(0)} />
          )}
          {dep.goSteps === 3 && (
            <StepFour
              next={() => {
                navigate('/');
              }}
              prev={() => dep.setGoSteps(2)}
            />
          )}
        </div>
      </Content>
    </div>
  );
};

export const DeploymentPage = withStores(stores)(observer(DeploymentView));
