# Stable Fluid Simulation with React Three Fiber

A real-time fluid simulation implementation using React Three Fiber, based on Jos Stam's "Stable Fluids" paper. This project combines modern web technologies with GPU-accelerated fluid dynamics to create an interactive fluid simulation.

## Features

- Real-time fluid simulation using WebGL shaders
- Interactive mouse-based fluid manipulation
- Configurable simulation parameters through Leva UI
- Modern, responsive UI with Blueprint.js
- State management with Zustand
- Built with Next.js 14 and TypeScript

## Technical Stack

- **Framework**: Next.js 14
- **3D Rendering**: Three.js with React Three Fiber
- **Shader Programming**: GLSL
- **State Management**: Zustand
- **UI Components**: Blueprint.js + Leva
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Core Components

### 1. Fluid Simulation (`Effect.tsx`)

The core fluid simulation is implemented using multiple shader passes:
- Advection Solver
- Divergence Solver
- Poisson Solver
- Pressure Solver
- Viscous Solver
- External Force Program
- Color Program

### 2. State Management (`useFluidStore.ts`)

Manages simulation parameters:
- Resolution
- Time step (dt)
- BFECC toggle
- Mouse force
- Cursor size
- Viscosity
- Poisson iterations
- Viscous iterations
- Boundary conditions

### 3. UI Controls (`ControlPanel.tsx`)

Interactive controls using Leva for adjusting simulation parameters in real-time.

## Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
cd stable-fluid-r3f
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Simulation Parameters

- **resolution**: Controls the simulation grid resolution (0.1 to 1.0)
- **dt**: Time step for the simulation (0.001 to 0.1)
- **isBFECC**: Back and Forth Error Compensation and Correction
- **mouseForce**: Strength of mouse interaction (0 to 100)
- **cursorSize**: Size of mouse influence (10 to 500)
- **viscosity**: Fluid viscosity (0 to 100)
- **poissonIterations**: Pressure solver iterations (1 to 100)
- **viscousIterations**: Viscosity solver iterations (1 to 100)
- **isBounce**: Toggle boundary conditions

## Implementation Details

### Fluid Simulation Algorithm

Based on Jos Stam's "Stable Fluids" paper, the simulation follows these steps:

1. **Advection**: Transport velocity using semi-Lagrangian method
2. **Force Application**: Add external forces (mouse interaction)
3. **Diffusion**: Apply viscosity using Jacobi iteration
4. **Projection**: Ensure incompressibility through pressure solving
5. **Visualization**: Render the fluid state

### Shader Programs

1. **Advection Solver**:
   - Semi-Lagrangian backtracing
   - BFECC for reduced numerical diffusion

2. **Divergence Solver**:
   - Computes velocity field divergence
   - Uses central differences

3. **Poisson Solver**:
   - Iterative pressure solving
   - Jacobi iteration method

4. **Pressure Solver**:
   - Applies pressure gradients
   - Ensures incompressibility

5. **External Force**:
   - Handles mouse interaction
   - Force field computation

## Performance Optimization

- GPU-accelerated computation using WebGL shaders
- Efficient state management with Zustand
- Optimized render cycles with React Three Fiber
- Resolution scaling for performance tuning

## Browser Support

Requires WebGL 2.0 support. Tested on:
- Chrome 90+
- Firefox 88+
- Safari 15+
- Edge 90+

## Development

### Project Structure
\`\`\`
src/
├── components/
│   ├── UI/
│   │   └── ControlPanel.tsx
│   └── ErrorBoundary/
│       └── ErrorBoundary.tsx
├── effects/
│   └── Effect.tsx
├── store/
│   └── useFluidStore.ts
├── styles/
│   └── globals.css
└── pages/
    └── index.tsx
\`\`\`

### Adding New Features

1. **Shader Modifications**:
   - Add new shader programs in `Effect.tsx`
   - Follow the existing pattern for uniform handling

2. **State Management**:
   - Extend `useFluidStore.ts` for new parameters
   - Update UI controls accordingly

3. **UI Components**:
   - Add new controls to `ControlPanel.tsx`
   - Use Blueprint.js for consistent styling

## References

1. Jos Stam, "Stable Fluids", SIGGRAPH 1999
2. GPU Gems Chapter 38: Fast Fluid Dynamics
3. React Three Fiber Documentation
4. Next.js Documentation

## License

MIT License - See LICENSE file for details 