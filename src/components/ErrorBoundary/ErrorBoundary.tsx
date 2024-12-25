import React from 'react';
import { Card, Elevation, Button, NonIdealState } from '@blueprintjs/core';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
          <Card elevation={Elevation.TWO} className="w-96">
            <NonIdealState
              icon="error"
              title="Something went wrong"
              description={this.state.error?.message || 'An error occurred in the fluid simulation.'}
              action={
                <Button
                  intent="primary"
                  onClick={() => window.location.reload()}
                  text="Reload Page"
                />
              }
            />
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
} 