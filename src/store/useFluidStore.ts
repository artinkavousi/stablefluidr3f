import { create } from 'zustand';

interface FluidState {
  resolution: number;
  dt: number;
  isBFECC: boolean;
  mouseForce: number;
  cursorSize: number;
  viscosity: number;
  poissonIterations: number;
  viscousIterations: number;
  isBounce: boolean;
  setResolution: (resolution: number) => void;
  setDt: (dt: number) => void;
  setIsBFECC: (isBFECC: boolean) => void;
  setMouseForce: (force: number) => void;
  setCursorSize: (size: number) => void;
  setViscosity: (viscosity: number) => void;
  setPoissonIterations: (iterations: number) => void;
  setViscousIterations: (iterations: number) => void;
  setIsBounce: (isBounce: boolean) => void;
}

export const useFluidStore = create<FluidState>((set) => ({
  resolution: 0.4,
  dt: 0.014,
  isBFECC: true,
  mouseForce: 20,
  cursorSize: 100,
  viscosity: 30,
  poissonIterations: 32,
  viscousIterations: 32,
  isBounce: true,
  setResolution: (resolution) => set({ resolution }),
  setDt: (dt) => set({ dt }),
  setIsBFECC: (isBFECC) => set({ isBFECC }),
  setMouseForce: (mouseForce) => set({ mouseForce }),
  setCursorSize: (cursorSize) => set({ cursorSize }),
  setViscosity: (viscosity) => set({ viscosity }),
  setPoissonIterations: (poissonIterations) => set({ poissonIterations }),
  setViscousIterations: (viscousIterations) => set({ viscousIterations }),
  setIsBounce: (isBounce) => set({ isBounce }),
})); 