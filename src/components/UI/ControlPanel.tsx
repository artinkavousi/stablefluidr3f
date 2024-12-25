import { useControls } from 'leva';
import { useFluidStore } from '@/store/useFluidStore';

export const ControlPanel = () => {
  const {
    resolution,
    dt,
    isBFECC,
    mouseForce,
    cursorSize,
    viscosity,
    poissonIterations,
    viscousIterations,
    isBounce,
    setResolution,
    setDt,
    setIsBFECC,
    setMouseForce,
    setCursorSize,
    setViscosity,
    setPoissonIterations,
    setViscousIterations,
    setIsBounce,
  } = useFluidStore();

  useControls({
    resolution: {
      value: resolution,
      min: 0.1,
      max: 1.0,
      step: 0.1,
      onChange: value => setResolution(value),
    },
    dt: {
      value: dt,
      min: 0.001,
      max: 0.1,
      step: 0.001,
      onChange: value => setDt(value),
    },
    isBFECC: {
      value: isBFECC,
      onChange: value => setIsBFECC(value),
    },
    mouseForce: {
      value: mouseForce,
      min: 0,
      max: 100,
      step: 1,
      onChange: value => setMouseForce(value),
    },
    cursorSize: {
      value: cursorSize,
      min: 10,
      max: 500,
      step: 10,
      onChange: value => setCursorSize(value),
    },
    viscosity: {
      value: viscosity,
      min: 0,
      max: 100,
      step: 1,
      onChange: value => setViscosity(value),
    },
    poissonIterations: {
      value: poissonIterations,
      min: 1,
      max: 100,
      step: 1,
      onChange: value => setPoissonIterations(value),
    },
    viscousIterations: {
      value: viscousIterations,
      min: 1,
      max: 100,
      step: 1,
      onChange: value => setViscousIterations(value),
    },
    isBounce: {
      value: isBounce,
      onChange: value => setIsBounce(value),
    },
  });

  return null;
}; 